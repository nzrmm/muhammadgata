import React from "react";
import cx from "classnames";

import { Header } from "@/layouts";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={cx("antialiased")}>
      <Header />
      <main className={cx("mx-auto lg:max-w-5xl")}>{children}</main>
    </div>
  );
};

export default Layout;
