"use client";

import { ToolCard } from "@/containers/tools-page";
import { appsAndServices } from "@/data/tools";
import { cn } from "@/utils";

const AppAndServiceList = () => {
  return (
    <div className={cn("grid gap-5", "lg:grid-cols-3")}>
      {appsAndServices.map((item, index) => (
        <ToolCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AppAndServiceList;
