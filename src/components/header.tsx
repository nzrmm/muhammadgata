"use client";

import { NavbarItem, ThemeSelector } from "@/components";

import { NAVBAR_ROUTES } from "@/constants/route";
import { cn } from "@/utils";

const Header = () => {
  return (
    <header
      className={cn(
        "fixed w-full bottom-0 border-t border-t-neutral-200 bg-white/60 backdrop-blur-xl z-50",
        "dark:bg-neutral-900/80 dark:border-t-neutral-800",
        "lg:top-auto lg:bottom-auto lg:border-b lg:border-b-neutral-200 lg:border-t-0",
        "lg:dark:border-b-neutral-800"
      )}
    >
      <nav className={cn("flex justify-between items-center h-16 px-6")}>
        <div className={cn("flex items-center gap-4 lg:gap-1")}>
          {NAVBAR_ROUTES.map((navbarRoute, index) => (
            <NavbarItem key={index} {...navbarRoute} />
          ))}
        </div>

        <ThemeSelector />
      </nav>
    </header>
  );
};

export default Header;
