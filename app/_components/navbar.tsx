"use client";

import Container from "@/components/container";
import MenuToggle from "@/components/menu-toggle";
import ModeToggle from "@/components/mode-toggle";
import { navItems } from "@/lib/utils";
import { LucideCode2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/60 py-4 backdrop-blur-md">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.75 } }}
          className="flex items-center justify-between"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center gap-2">
              <LucideCode2 className="size-7 text-primary" />
              <h2 className="text-lg font-bold">CodeWithMMD</h2>
            </Link>
          </motion.div>

          <div className="flex items-center gap-8">
            <DesktopNavbar />

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
              <MobileNavbar />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

const DesktopNavbar = () => {
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
    </nav>
  );
};

const MobileNavbar = () => {
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
    </nav>
  );
};

export default Navbar;
