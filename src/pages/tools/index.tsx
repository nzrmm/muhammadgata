import Head from "next/head";

import { Typography, ToolCard } from "@/components";
import { useScreenDetector } from "@/hooks";
import { cn } from "@/utils";
import { techStacks } from "@/data/tools";

const Tools = () => {
  const { isMobile, isTablet } = useScreenDetector();

  return (
    <div>
      <Head>
        <title>Tools - Muhammad Gata</title>
        <meta name="description" content="a collection of tools that i use" />
      </Head>

      <div className={cn("mb-20")}>
        <div className={cn("mb-16", "lg:mb-20")}>
          <Typography
            variant={isMobile || isTablet ? "text4Xl" : "text6Xl"}
            className={cn("mb-4", "lg:mb-4")}
          >
            Tools
          </Typography>

          <Typography variant={isMobile || isTablet ? "textBase" : "textLg"}>
            The tools that i used in everyday.
          </Typography>
        </div>

        <div>
          <div>
            <Typography
              variant={isMobile || isTablet ? "textXl" : "text3Xl"}
              className={cn("mb-2", "lg:mb-2")}
            >
              Tech Stack
            </Typography>
            <Typography variant="textBase" className={cn("mb-4", "lg:mb-4")}>
              The technologies I use for developing software projects,
              especially in the field of frontend and mobile development.
            </Typography>
          </div>
        </div>

        <div className={cn("grid grid-cols-3 gap-5")}>
          {techStacks.map((techStack, index) => (
            <ToolCard key={index} {...techStack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
