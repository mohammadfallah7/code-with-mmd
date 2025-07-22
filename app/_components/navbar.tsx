"use client";

import Container from "@/components/container";
import MenuToggle from "@/components/menu-toggle";
import ModeToggle from "@/components/mode-toggle";
import SignIn from "@/components/sign-in";
import { navItems, scrollToSection } from "@/lib/utils";
import { LucideCode2, LucideLogOut, LucideUser } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  const { data: session } = useSession();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.75 } }}
          className="flex items-center justify-between"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center gap-2">
              <LucideCode2 className="size-7 text-blue-500" />
              <h2 className="text-lg font-bold">CodeWithMMD</h2>
            </Link>
          </motion.div>

          <div className="flex items-center gap-8">
            <DesktopNavbar />

            <div className="relative">
              {session?.user ? (
                <motion.div whileHover={{ y: -2 }}>
                  <img
                    src={session.user.image ?? "/avatar.png"}
                    alt={session.user.name ?? "User Profile"}
                    className="size-8 rounded-full border-2 object-cover"
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                  />
                </motion.div>
              ) : (
                <motion.div whileHover={{ y: -2 }}>
                  <SignIn />
                </motion.div>
              )}

              <AnimatePresence>
                {session?.user && showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-14 right-3 flex gap-5 rounded-xl bg-accent/95 px-5 py-5 backdrop-blur-md supports-[backdrop-filter]:bg-accent/60"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={isAdmin ? "/dashboard" : "/profile"}>
                        <LucideUser className="size-4" />
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LucideLogOut
                        onClick={() => signOut()}
                        className="size-4 cursor-pointer"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ModeToggle />
            </motion.div>

            <motion.div
              className="md:hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MenuToggle
                showMobileMenu={showMobileMenu}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 rounded-lg bg-accent p-4 md:hidden"
            >
              <MobileNavbar
                onClose={() => setShowMobileMenu(!showMobileMenu)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

const DesktopNavbar = () => {
  const pathName = usePathname();

  return (
    <nav className="hidden items-center gap-10 md:flex">
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -2 }}
          className="text-sm tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <Link href={item.href}>{item.label}</Link>
        </motion.div>
      ))}
      {pathName === "/" && (
        <motion.div
          whileHover={{ y: -2 }}
          className="text-sm tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <motion.span
            className="cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </motion.span>
        </motion.div>
      )}
    </nav>
  );
};

const MobileNavbar = ({ onClose }: { onClose?: () => void }) => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col items-start gap-5">
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ x: 5 }}
          className="text-sm tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <Link href={item.href}>{item.label}</Link>
        </motion.div>
      ))}
      {pathName === "/" && (
        <motion.div
          whileHover={{ x: 5 }}
          className="text-sm tracking-wider text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <motion.span
            className="cursor-pointer"
            onClick={() => scrollToSection("contact", onClose)}
          >
            Contact
          </motion.span>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
