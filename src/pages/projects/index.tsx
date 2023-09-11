import Head from "next/head";

import { Typography, ProjectCard } from "@/components";
import { useScreenDetector } from "@/hooks";
import { cn } from "@/utils";
import { projects } from "@/data/projects";

const Projects = () => {
  const { isMobile, isTablet } = useScreenDetector();

  return (
    <>
      <Head>
        <title>Projects - Muhammad Gata</title>
        <meta
          name="description"
          content="a collection of projects that i worked on"
        />
      </Head>

      <div className={cn("mb-20")}>
        <div className={cn("mb-12", "lg:mb-14")}>
          <Typography
            variant={isMobile || isTablet ? "text4Xl" : "text5Xl"}
            className={cn("mb-4", "lg:mb-4")}
          >
            Projects
          </Typography>

          <Typography variant={isMobile || isTablet ? "textBase" : "textLg"}>
            Welcome to my creative web corner. Here, you will discover various
            web development projects that I have built. Every website I produce
            combines modern aesthetics with strong functionality.
          </Typography>
        </div>

        <div className={cn("grid gap-8", "lg:gap-16")}>
          {projects.map((project, index) => (
            <ProjectCard key={index} isReverse={index % 2 !== 0} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
