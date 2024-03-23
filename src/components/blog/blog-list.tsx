"use client";

import Link from "next/link";

import { BlogCard } from "@/components/blog";

import { Blog } from "contentlayer/generated";

type Props = {
  data: Blog[];
};

const BlogList = ({ data }: Props) => {
  return (
    <div>
      {data.map((blog, index) => (
        <Link key={index} href={`/blogs/${blog.slug}`}>
          <BlogCard {...blog} />
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
