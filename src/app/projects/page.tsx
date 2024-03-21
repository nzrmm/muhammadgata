import { Metadata } from "next";

import { ProjectList } from "@/containers/products-page";

import { cn } from "@/utils";
import { allProjects } from "contentlayer/generated";
import {
  SITE_URL,
  SITE_OWNER,
  TWITTER_ID,
  TWITTER_USERNAME,
} from "@/constants/env";
import { DESCRIPTION } from "@/constants/seo";

export const metadata: Metadata = {
  title: `Project - ${SITE_OWNER}`,
  description: DESCRIPTION.project,
  openGraph: {
    title: SITE_OWNER,
    description: DESCRIPTION.project,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=${SITE_OWNER}&subTitle=Projects`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_OWNER,
    description: DESCRIPTION.project,
    creator: TWITTER_USERNAME,
    creatorId: TWITTER_ID,
    images: [`${SITE_URL}/api/og?title=${SITE_OWNER}&subTitle=Projects`],
  },
};

const ProjectsPage = () => {
  return (
    <div className={cn("mb-20")}>
      <div className={cn("mb-12", "lg:mb-14")}>
        <h1 className={cn("mb-4", "lg:mb-4")}>Projects</h1>
        <h6>
          Welcome to my creative web corner. Here, you will discover various web
          development projects that I have built. Every website I produce
          combines modern aesthetics with strong functionality.
        </h6>
      </div>

      <ProjectList data={allProjects} />
    </div>
  );
};

export default ProjectsPage;
