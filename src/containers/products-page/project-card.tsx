"use client";

import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { RxArrowTopRight } from "react-icons/rx";

import { Button } from "@/components";
import { Project } from "contentlayer/generated";
import { cn } from "@/utils";

type IProjectCardProps = {
  isReverse?: boolean;
} & Project;

const ProjectCard = ({ title, description, ...props }: IProjectCardProps) => {
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
          src={props.imageUrl}
          className={cn("object-cover object-top")}
          alt={`${props.slug}-image`}
        />
      </div>

      <div className={cn("w-full py-4", "lg:w-1/2 ")}>
        <h3 className={cn("mb-4", "lg:mb-4")}>{title}</h3>
        <p className={cn("mb-8", "lg:mb-8")}>{description}</p>

        <div className={cn("flex items-center gap-4")}>
          <a href={props.githubUrl} target="_blank">
            <Button
              id={`github-sc-${props.slug}-button`}
              size="sm"
              variant="primary"
              className={cn("flex items-center gap-2")}
            >
              SC
              <BsGithub />
            </Button>
          </a>

          <a href={props.liveSiteUrl} target="_blank">
            <Button
              id={`go-to-live-site-${props.slug}-button`}
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
