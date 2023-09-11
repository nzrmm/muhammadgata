import { Typography } from "@/components";
import { cn } from "@/utils";
import { IToolType } from "@/types/tool";

type IToolsCardProps = IToolType;

const ToolCard = ({ name, description }: IToolsCardProps) => {
  return (
    <div
      className={cn(
        "w-full h-80 bg-white border border-neutral-900/10 rounded-lg overflow-hidden",
        "dark:bg-neutral-900 dark:border-white/10"
      )}
    >
      <div
        className={cn("w-full h-40 bg-neutral-100", "dark:bg-neutral-800")}
      ></div>
      <div className={cn("p-5")}>
        <Typography
          variant="textBase"
          className={cn("mb-2 font-bold", "lg:mb-2")}
        >
          {name}
        </Typography>
        <Typography variant="textSm">{description}</Typography>
      </div>
    </div>
  );
};

export default ToolCard;
