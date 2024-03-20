import { Metadata } from "next";

import { cn } from "@/utils";
import { SITE_OWNER } from "@/constants/env";

export const metadata: Metadata = {
  title: `Blogs - ${SITE_OWNER}`,
  description: "a collection of blogs that i write",
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
