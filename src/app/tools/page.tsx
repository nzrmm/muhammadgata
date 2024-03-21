import { Metadata } from "next";

import { TechStactList, AppAndServiceList } from "@/containers/tools-page";

import { cn } from "@/utils";
import { allTools } from "contentlayer/generated";
import {
  SITE_URL,
  SITE_OWNER,
  TWITTER_ID,
  TWITTER_USERNAME,
} from "@/constants/env";
import { DESCRIPTION } from "@/constants/seo";

export const metadata: Metadata = {
  title: `Tools - ${SITE_OWNER}`,
  description: DESCRIPTION.tool,
  openGraph: {
    title: SITE_OWNER,
    description: DESCRIPTION.tool,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=${SITE_OWNER}&subTitle=Tools`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_OWNER,
    description: DESCRIPTION.tool,
    creator: TWITTER_USERNAME,
    creatorId: TWITTER_ID,
    images: [`${SITE_URL}/api/og?title=${SITE_OWNER}&subTitle=Tools`],
  },
};

const ToolsPage = () => {
  const allTechStacks = allTools.filter(
    (item) => item.toolType === "tech-stack"
  );

  const allAppAndServices = allTools.filter(
    (item) => item.toolType === "app-and-service"
  );

  return (
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
            The technologies I use for developing software projects, especially
            in the field of frontend and mobile development.
          </p>
        </div>

        <TechStactList data={allTechStacks} />
      </div>

      <div>
        <div>
          <h3 className={cn("mb-4", "lg:mb-4")}>Apps & Services</h3>
          <p className={cn("mb-4", "lg:mb-4")}>
            Some apps and services that support my productivity in the
            development process.
          </p>
        </div>

        <AppAndServiceList data={allAppAndServices} />
      </div>
    </div>
  );
};

export default ToolsPage;
