"use client";

import { ToolCard } from "@/components/tools";

import { Tool } from "contentlayer/generated";
import { cn } from "@/utils";

type Props = {
  data: Tool[];
};

const TechStactList = ({ data }: Props) => {
  return (
    <div className={cn("grid gap-5", "lg:grid-cols-3")}>
      {data.map((item, index) => (
        <ToolCard key={index} {...item} />
      ))}
    </div>
  );
};

export default TechStactList;
