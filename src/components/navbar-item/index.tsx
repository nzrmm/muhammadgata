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
        "text-neutral-700",
        "dark:text-neutral-300",
        "lg:px-6 lg:py-1.5 lg:rounded-md lg:hover:bg-neutral-100",
        "lg:hover:dark:bg-neutral-800",
        {
          "font-semibold text-neutral-900 dark:text-white lg:bg-neutral-100 lg:dark:bg-neutral-800":
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
