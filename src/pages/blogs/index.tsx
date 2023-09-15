import Head from "next/head";

import { Typography } from "@/components";
import { useScreenDetector } from "@/hooks";
import { cn } from "@/utils";

const Blogs = () => {
  const { isMobile, isTablet } = useScreenDetector();

  return (
    <>
      <Head>
        <title>Blogs - Muhammad Gata</title>
        <meta name="description" content="" />
      </Head>

      <div className={cn("mb-20")}>
        <div className={cn("mb-12", "lg:mb-14")}>
          <Typography
            variant={isMobile || isTablet ? "text4Xl" : "text5Xl"}
            className={cn("mb-4", "lg:mb-4")}
          >
            Blogs
          </Typography>

          <Typography variant={isMobile || isTablet ? "textBase" : "textLg"}>
            Collection of posts about frontend and mobile technology, career
            journey, and the latest and interesting topics that I have written.
            Feel free to reads.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Blogs;
