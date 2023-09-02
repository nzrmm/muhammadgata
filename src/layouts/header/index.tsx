import cx from "classnames";

import { NavbarItem, ThemeSelector } from "@/components";
import { ROUTES } from "@/constants";

const Header = () => {
  return (
    <div
      className={cx(
        "fixed top-0 w-full bg-white border-b border-b-neutral-200 z-50",
        "dark:bg-neutral-900 dark:border-b-neutral-800"
      )}
    >
      <nav className={cx("flex justify-between items-center h-16 px-6")}>
        <div></div>

        <div className={cx("flex items-center gap-10")}>
          <div className={cx("flex items-center gap-1")}>
            {ROUTES.map((item, index) => {
              return (
                <NavbarItem key={index} href={item.href} name={item.name} />
              );
            })}
          </div>

          <ThemeSelector />
        </div>
      </nav>
    </div>
  );
};

export default Header;
