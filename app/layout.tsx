import Navbar from "@/app/_components/navbar";
import Container from "@/components/container";
import ThemeProvider from "@/components/theme-provider";
import { getCurrentUser } from "@/lib/get-current-user";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Urbanist } from "next/font/google";
import Footer from "./_components/footer";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Code With MMD",
  description: "A portfolio app powered by Next.js",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await getCurrentUser();

  return (
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${urbanist.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar isAdmin={user?.role === "ADMIN"} />
            <main className="py-4">
              <Container>{children}</Container>
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
