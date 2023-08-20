import cx from "classnames";

import { NavbarItem } from "@/components";
import { ROUTES } from "@/constant";

const Header = () => {
  return (
    <div
      className={cx(
        "fixed top-0 w-full border-b border-b-neutral-200 z-50",
        "bg-white"
      )}
    >
      <nav className={cx("flex justify-between items-center h-16 px-6")}>
        <div></div>

        <div className={cx("flex items-center gap-1")}>
          {ROUTES.map((item, index) => {
            return <NavbarItem key={index} href={item.href} name={item.name} />;
          })}
        </div>
      </nav>
    </div>
  );
};

export default Header;
