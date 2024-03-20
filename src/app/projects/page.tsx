import { Metadata } from "next";

import { ProjectList } from "@/containers/products-page";

import { cn } from "@/utils";
import { SITE_OWNER } from "@/constants/env";

export const metadata: Metadata = {
  title: `Project - ${SITE_OWNER}`,
  description: "a collection of projects that i worked on",
};

const ProjectsPage = () => {
  return (
    <div className={cn("mb-20")}>
      <div className={cn("mb-12", "lg:mb-14")}>
        <h1 className={cn("mb-4", "lg:mb-4")}>Projects</h1>
        <h6>
          Welcome to my creative web corner. Here, you will discover various web
          development projects that I have built. Every website I produce
          combines modern aesthetics with strong functionality.
        </h6>
      </div>

      <ProjectList />
    </div>
  );
};

export default ProjectsPage;
