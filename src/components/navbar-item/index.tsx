import React from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";
import { INavbarLink } from "@/types";

type INavbarItemProps = LinkProps & INavbarLink;

const NavbarItem = ({ href, name, ...props }: INavbarItemProps) => {
  const pathname = usePathname();

  const isActive = () => {
    if (href === "/" && pathname === href) return true;
    if (href !== "/" && pathname.includes(href)) return true;

    return false;
  };

  return (
    <Link
      href={href}
      className={cn(
        "px-6 py-1.5 rounded-md",
        "text-neutral-700 hover:bg-neutral-100",
        "dark:text-neutral-300 hover:dark:bg-neutral-800 ",
        {
          "font-semibold bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white":
            isActive(),
        }
      )}
      {...props}
    >
      {name}
    </Link>
  );
};

export default NavbarItem;
