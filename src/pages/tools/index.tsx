import Head from "next/head";

import { ToolCard } from "@/components";
import { cn } from "@/utils";
import { techStacks, appsAndServices } from "@/data/tools";

const Tools = () => {
  return (
    <>
      <Head>
        <title>Tools - Muhammad Gata</title>
        <meta name="description" content="a collection of tools that i use" />
      </Head>

      <div className={cn("mb-20")}>
        <div className={cn("mb-12", "lg:mb-14")}>
          <h1 className={cn("mb-4", "lg:mb-4")}>Tools</h1>
          <h6>
            The tech stacks, apps, and services that i used in my daily work.
          </h6>
        </div>

        <div className={cn("mb-12", "lg:mb-14")}>
          <div>
            <h3 className={cn("mb-4", "lg:mb-4")}>Tech Stack</h3>
            <p className={cn("mb-4", "lg:mb-4")}>
              The technologies I use for developing software projects,
              especially in the field of frontend and mobile development.
            </p>
          </div>

          <div className={cn("grid gap-5", "lg:grid-cols-3")}>
            {techStacks.map((techStack, index) => (
              <ToolCard key={index} {...techStack} />
            ))}
          </div>
        </div>

        <div>
          <div>
            <h3 className={cn("mb-4", "lg:mb-4")}>Apps & Services</h3>
            <p className={cn("mb-4", "lg:mb-4")}>
              Some apps and services that support my productivity in the
              development process.
            </p>
          </div>

          <div className={cn("grid gap-5", "lg:grid-cols-3")}>
            {appsAndServices.map((appAndService, index) => (
              <ToolCard key={index} {...appAndService} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
