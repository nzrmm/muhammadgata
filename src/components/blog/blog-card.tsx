"use client";

import { format, parseISO } from "date-fns";

import { Badge } from "@/components";

import { Blog } from "contentlayer/generated";
import { cn } from "@/utils";

type Props = Blog;

const BlogCard = ({ title, description, publishedAt, tags }: Props) => {
  return (
    <div className={cn("cursor-pointer")}>
      <div className={cn("mb-4")}>
        <h3 className={cn("mb-2")}>{title}</h3>
        <p>{description}</p>
      </div>

      <div>
        <time dateTime={publishedAt} className="text-sm px-2">
          Posted on {format(parseISO(publishedAt), "LLLL d, yyyy")}
        </time>
        <div className={cn("flex items-center gap-2")}>
          {tags.map((tag, index) => (
            <Badge key={index}>#{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
