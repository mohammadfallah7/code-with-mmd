import { auth } from "@/auth";
import prisma from "./prisma";

export async function getCurrentUser() {
  const session = await auth();
  if (!session?.user?.email) return null;

  return await prisma.user.findUnique({ where: { email: session.user.email } });
}
