import { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogList } from "@/components/blogs";

import { allBlogs } from "contentlayer/generated";
import { cn } from "@/utils";
import {
  SITE_URL,
  SITE_OWNER,
  TWITTER_ID,
  TWITTER_USERNAME,
} from "@/constants/env";
import { DESCRIPTION } from "@/constants/seo";

const getBlogsByTag = (tag: string) => {
  const blogs = allBlogs.filter(
    (item) => item.isPublised && item.tags.includes(tag)
  );
  if (!blogs.length) notFound();

  return blogs;
};

type Props = {
  searchParams: { tag: string };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const tag = searchParams.tag;

  return {
    title: `Blogs by Tag: ${tag} - ${SITE_OWNER}`,
    description: `${DESCRIPTION.tag}: ${tag}`,
    openGraph: {
      title: SITE_OWNER,
      description: `${DESCRIPTION.tag}: ${tag}`,
      url: SITE_URL,
      type: "article",
      images: [
        {
          url: `${SITE_URL}/api/og?title=${SITE_OWNER}&subTitle=Blogs by Tag: ${tag}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_OWNER,
      description: `${DESCRIPTION.tag}: ${tag}`,
      creator: TWITTER_USERNAME,
      creatorId: TWITTER_ID,
      images: [
        `${SITE_URL}/api/og?title=${SITE_OWNER}&subTitle=Blogs by Tag: ${tag}`,
      ],
    },
  };
}

const TagPage = ({ searchParams }: Props) => {
  const tag = searchParams.tag;

  const blogs = getBlogsByTag(searchParams.tag);

  return (
    <div className={cn("mb-20")}>
      <div className={cn("mb-12", "lg:mb-14")}>
        <h1 className={cn("mb-4", "lg:mb-4")}>
          Blogs by Tag: <em>{tag}</em>
        </h1>
        <h6>
          Collection of posts by tag: <em>{tag}</em>
        </h6>
      </div>

      <BlogList data={blogs} />
    </div>
  );
};

export default TagPage;
