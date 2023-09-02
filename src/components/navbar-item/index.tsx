import React from "react";
import cx from "classnames";
import { useRouter } from "next/router";

import { CustomLink } from "@/components";
import { INavbarLink } from "@/types";

const NavbarItem = ({ href, name }: INavbarLink) => {
  const { asPath } = useRouter();

  return (
    <CustomLink
      href={href}
      customClassName={cx(
        "px-6 py-1.5 rounded-md hover:bg-neutral-100 hover:dark:bg-neutral-800",
        {
          "font-semibold bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white":
            asPath === href,
          "text-neutral-700 dark:text-neutral-300": asPath !== href,
        }
      )}
    >
      {name}
    </CustomLink>
  );
};

export default NavbarItem;
