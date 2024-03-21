"use client";

import { ProjectCard } from "@/containers/products-page";
import { allProjects } from "contentlayer/generated";
import { cn } from "@/utils";

const ProjectList = () => {
  return (
    <div className={cn("grid gap-8", "lg:gap-16")}>
      {allProjects.map((item, index) => (
        <ProjectCard key={index} isReverse={index % 2 !== 0} {...item} />
      ))}
    </div>
  );
};

export default ProjectList;
