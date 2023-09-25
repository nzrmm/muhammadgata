import Head from "next/head";

import { cn } from "@/utils";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs - Muhammad Gata</title>
        <meta name="description" content="" />
      </Head>

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
    </>
  );
};

export default Blogs;
