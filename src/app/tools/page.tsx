import { Metadata } from "next";

import { TechStactList, AppAndServiceList } from "@/containers/tools-page";

import { cn } from "@/utils";
import { SITE_OWNER } from "@/constants/env";

export const metadata: Metadata = {
  title: `Tools - ${SITE_OWNER}`,
  description: "a collection of tools that i use",
};

const ToolsPage = () => {
  return (
    <div className={cn("mb-20")}>
      <div className={cn("mb-12", "lg:mb-14")}>
        <h1 className={cn("mb-4", "lg:mb-4")}>Tools</h1>
        <h6>
          The tech stacks, apps, and services that i used in my daily work.
        </h6>
      </div>

      <div className={cn("mb-12", "lg:mb-14")}>
        <div>
          <h3 className={cn("mb-4", "lg:mb-4")}>Tech Stack</h3>
          <p className={cn("mb-4", "lg:mb-4")}>
            The technologies I use for developing software projects, especially
            in the field of frontend and mobile development.
          </p>
        </div>

        <TechStactList />
      </div>

      <div>
        <div>
          <h3 className={cn("mb-4", "lg:mb-4")}>Apps & Services</h3>
          <p className={cn("mb-4", "lg:mb-4")}>
            Some apps and services that support my productivity in the
            development process.
          </p>
        </div>

        <AppAndServiceList />
      </div>
    </div>
  );
};

export default ToolsPage;
