"use client";

import { BlogCard } from "@/components/blogs";

import { Blog } from "contentlayer/generated";

type Props = {
  data: Blog[];
};

const BlogList = ({ data }: Props) => {
  return (
    <div>
      {data.map((blog, index) => (
        <BlogCard key={index} isLinkedHeading isWithDescription {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
