import { Metadata } from "next";

import { cn } from "@/utils";
import {
  SITE_URL,
  SITE_OWNER,
  TWITTER_ID,
  TWITTER_USERNAME,
} from "@/constants/env";
import { DESCRIPTION } from "@/constants/seo";

export const metadata: Metadata = {
  title: `Blogs - ${SITE_OWNER}`,
  description: DESCRIPTION.blog,
  openGraph: {
    title: SITE_OWNER,
    description: DESCRIPTION.blog,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=${SITE_OWNER}&subTitle=Blogs`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_OWNER,
    description: DESCRIPTION.blog,
    creator: TWITTER_USERNAME,
    creatorId: TWITTER_ID,
    images: [`${SITE_URL}/api/og?title=${SITE_OWNER}&subTitle=Blogs`],
  },
};

const BlogsPage = () => {
  return (
    <div className={cn("mb-20")}>
      <div className={cn("mb-12", "lg:mb-14")}>
        <h1 className={cn("mb-4", "lg:mb-4")}>Blogs</h1>
        <h6>
          Collection of posts about frontend and mobile technology, career
          journey, and the latest and interesting topics that I have written.
          Feel free to reads.
        </h6>
      </div>
    </div>
  );
};

export default BlogsPage;
