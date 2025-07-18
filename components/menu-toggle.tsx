"use client";

import { LucideMenu, LucideX } from "lucide-react";
import { Button } from "./ui/button";

const MenuToggle = ({
  showMobileMenu,
  onClick,
}: {
  showMobileMenu: boolean;
  onClick: () => void;
}) => {
  return (
    <Button onClick={onClick} variant="ghost" size="icon">
      {showMobileMenu ? (
        <LucideX className="size-4" />
      ) : (
        <LucideMenu className="size-4" />
      )}
    </Button>
  );
};

export default MenuToggle;
