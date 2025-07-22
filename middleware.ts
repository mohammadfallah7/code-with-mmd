import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await auth();
  const url = new URL(req.url);

  if (url.pathname.startsWith("/dashboard")) {
    const email = session?.user?.email;
    if (!email) return NextResponse.redirect(new URL("/", req.url));

    const user = await prisma.user.findUnique({ where: { email } });
    if (user?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
