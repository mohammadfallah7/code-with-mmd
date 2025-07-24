"use client";

import { Button } from "@/components/ui/button";
import { dashboardMenuItems } from "@/lib/utils";
import { LucideMenu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const DashboardMenu = () => {
  const [showDashboardMenu, setShowDashboardMenu] = useState(true);

  return (
    <aside className="flex items-center gap-3 md:flex-col md:items-start">
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setShowDashboardMenu(!showDashboardMenu)}
      >
        <LucideMenu className="size-4" />
      </Button>
      <AnimatePresence>
        {showDashboardMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="flex items-start gap-3 rounded-lg bg-accent p-3 md:flex-col"
          >
            {dashboardMenuItems.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-lg px-2 py-1 text-sm tracking-wider text-muted-foreground uppercase transition-colors duration-300 hover:bg-gray-200/50 hover:text-foreground dark:hover:bg-gray-700/50"
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default DashboardMenu;
