"use client";

import { ProjectCard } from "@/containers/products-page";
import { projects } from "@/data/projects";
import { cn } from "@/utils";

const ProjectList = () => {
  return (
    <div className={cn("grid gap-8", "lg:gap-16")}>
      {projects.map((item, index) => (
        <ProjectCard key={index} isReverse={index % 2 !== 0} {...item} />
      ))}
    </div>
  );
};

export default ProjectList;
