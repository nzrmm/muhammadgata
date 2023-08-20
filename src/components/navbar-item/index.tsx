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
      customClassName={cx("px-6 py-1.5 rounded-md hover:bg-neutral-100", {
        "font-semibold bg-neutral-100 text-neutral-900": asPath === href,
        "text-neutral-700": asPath !== href,
      })}
    >
      {name}
    </CustomLink>
  );
};

export default NavbarItem;
