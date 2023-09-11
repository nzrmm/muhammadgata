import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { RxArrowTopRight } from "react-icons/rx";

import { Button, Typography } from "@/components";
import { useScreenDetector } from "@/hooks";
import { cn } from "@/utils";
import { IProjectType } from "@/types/project";

type IProjectCardProps = {
  isReverse?: boolean;
} & IProjectType;

const ProjectCard = ({ name, description, ...props }: IProjectCardProps) => {
  const { isMobile, isTablet } = useScreenDetector();

  return (
    <div
      className={cn("flex flex-col gap-2", "lg:flex-row lg:gap-10", {
        "lg:flex-row-reverse": props.isReverse,
      })}
    >
      <div
        className={cn(
          "relative w-full aspect-[1.48/1] rounded-lg overflow-hidden border-2 border-neutral-900/10",
          "dark:border-white/10",
          "lg:w-1/2"
        )}
      >
        <Image
          fill
          priority
          quality={80}
          src={props.image_url}
          className={cn("object-cover object-top")}
          alt={`${name}-image`}
        />
      </div>

      <div className={cn("w-full py-4", "lg:w-1/2 ")}>
        <Typography
          variant={isMobile || isTablet ? "textXl" : "text3Xl"}
          className={cn("mb-4", "lg:mb-4")}
        >
          {name}
        </Typography>
        <Typography variant="textBase" className={cn("mb-8", "lg:mb-8")}>
          {description}
        </Typography>

        <div className={cn("flex items-center gap-4")}>
          <a href={props.github_url} target="_blank">
            <Button
              id={`github-sc-${name}-button`}
              size="sm"
              variant="primary"
              className={cn("flex items-center gap-2")}
            >
              SC
              <BsGithub />
            </Button>
          </a>

          <a href={props.live_site_url} target="_blank">
            <Button
              id={`go-to-live-site-${name}-button`}
              size="sm"
              variant="primary"
              className={cn("flex items-center gap-2")}
            >
              Go to live site
              <RxArrowTopRight />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
