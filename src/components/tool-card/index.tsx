"use client";

import { cn } from "@/utils";
import { useScreenDetector } from "@/hooks";
import { IToolType } from "@/types/tool";

type IToolsCardProps = IToolType;

const ToolCard = ({ name, description, icon, icon_color }: IToolsCardProps) => {
  const { isDesktop } = useScreenDetector();

  const Icon = icon;

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
        <Icon color={icon_color} size={isDesktop ? 70 : 32} />
      </div>

      <div className={cn("flex-1 p-4", "lg:h-1/2 lg:p-5")}>
        <p className={cn("mb-2 font-bold", "lg:mb-2")}>{name}</p>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ToolCard;
