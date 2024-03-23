"use client";

import { ProjectCard } from "@/components/projects";

import { Project } from "contentlayer/generated";
import { cn } from "@/utils";

type Props = {
  data: Project[];
};

const ProjectList = ({ data }: Props) => {
  return (
    <div className={cn("grid gap-8", "lg:gap-16")}>
      {data.map((item, index) => (
        <ProjectCard key={index} isReverse={index % 2 !== 0} {...item} />
      ))}
    </div>
  );
};

export default ProjectList;
