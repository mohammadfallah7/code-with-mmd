"use client";

import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button onClick={handleClick} variant="ghost" size="icon">
      <LucideSun className="size-4 scale-100 transition-all dark:scale-0" />
      <LucideMoon className="absolute size-4 scale-0 transition-all dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
