import { Metadata } from "next";
import { notFound } from "next/navigation";

import { MDXComponent } from "@/components";
import { BlogCard } from "@/components/blogs";

import { allBlogs } from "contentlayer/generated";
import { cn } from "@/utils";
import {
  SITE_URL,
  SITE_OWNER,
  TWITTER_ID,
  TWITTER_USERNAME,
} from "@/constants/env";

const getBlogBySlug = (slug: string) => {
  const blog = allBlogs.find((item) => item.slug === slug);
  if (!blog) notFound();

  return blog;
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  return {
    title: `${blog.title} - ${SITE_OWNER}`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: SITE_URL,
      type: "article",
      images: [
        {
          url: `${SITE_URL}/api/og?title=${blog.title}&subTitle=Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      creator: TWITTER_USERNAME,
      creatorId: TWITTER_ID,
      images: [`${SITE_URL}/api/og?title=${blog.title}&subTitle=Blog`],
    },
  };
}

export async function generateStaticParams() {
  const blogs = allBlogs;

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export const BlogPage = ({ params }: Props) => {
  const blog = getBlogBySlug(params.slug);

  return (
    <div className={cn("mb-20")}>
      <BlogCard classname={cn("mb-12")} {...blog} />
      <MDXComponent code={blog.body.code} />
    </div>
  );
};

export default BlogPage;
