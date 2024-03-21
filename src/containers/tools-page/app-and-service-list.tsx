"use client";

import { ToolCard } from "@/containers/tools-page";
import { Tool } from "contentlayer/generated";
import { cn } from "@/utils";

type Props = {
  data: Tool[];
};

const AppAndServiceList = ({ data }: Props) => {
  return (
    <div className={cn("grid gap-5", "lg:grid-cols-3")}>
      {data.map((item, index) => (
        <ToolCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AppAndServiceList;
