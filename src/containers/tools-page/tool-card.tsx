"use client";

import Image from "next/image";

import { cn } from "@/utils";
import { useScreenDetector } from "@/hooks";
import { Tool } from "contentlayer/generated";

type Props = Tool;

const ToolCard = ({ title, description, icon, ...props }: Props) => {
  const { isDesktop } = useScreenDetector();

  return (
    <div
      className={cn(
        "flex w-full bg-white border border-neutral-900/10 rounded-lg overflow-hidden",
        "dark:bg-neutral-900 dark:border-white/10",
        "lg:block lg:h-80"
      )}
    >
      <div
        className={cn(
          "w-28 bg-neutral-100 flex items-center justify-center",
          "dark:bg-neutral-800",
          "lg:w-full lg:h-1/2"
        )}
      >
        <Image
          src={icon}
          alt={`${props.slug}-image`}
          width={isDesktop ? 70 : 32}
          height={isDesktop ? 70 : 32}
        />
      </div>

      <div className={cn("flex-1 p-4", "lg:h-1/2 lg:p-5")}>
        <p className={cn("mb-2 font-bold", "lg:mb-2")}>{title}</p>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ToolCard;
