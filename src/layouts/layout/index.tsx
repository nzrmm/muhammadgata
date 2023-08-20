import React from "react";
import cx from "classnames";
import { Space_Grotesk, Inter } from "next/font/google";

import { Header } from "@/layouts";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-inter",
});

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className={cx(
        spaceGrotesk.variable,
        inter.variable,
        "font-primary antialiased"
      )}
    >
      <Header />
      <main className={cx("mx-auto lg:max-w-5xl")}>{children}</main>
    </div>
  );
};

export default Layout;
