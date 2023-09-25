import Head from "next/head";

import { ProjectCard } from "@/components";
import { cn } from "@/utils";
import { projects } from "@/data/projects";

const Projects = () => {
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
          <h1 className={cn("mb-4", "lg:mb-4")}>Projects</h1>
          <h6>
            Welcome to my creative web corner. Here, you will discover various
            web development projects that I have built. Every website I produce
            combines modern aesthetics with strong functionality.
          </h6>
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
