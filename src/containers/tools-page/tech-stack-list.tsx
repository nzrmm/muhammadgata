"use client";

import { ToolCard } from "@/containers/tools-page";
import { techStacks } from "@/data/tools";
import { cn } from "@/utils";

const TechStactList = () => {
  return (
    <div className={cn("grid gap-5", "lg:grid-cols-3")}>
      {techStacks.map((item, index) => (
        <ToolCard key={index} {...item} />
      ))}
    </div>
  );
};

export default TechStactList;
