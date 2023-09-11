import React from "react";

import { Header } from "@/layouts";
import { cn } from "@/utils";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={cn("antialiased")}>
      <Header />
      <main className={cn("mx-auto w-[88%] py-14", "lg:max-w-4xl lg:py-40")}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
