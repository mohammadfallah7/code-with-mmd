import Navbar from "@/app/_components/navbar";
import Container from "@/components/container";
import ThemeProvider from "@/components/theme-provider";
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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
            <Navbar />
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
