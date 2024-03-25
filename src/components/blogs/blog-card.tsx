"use client";

import Link from "next/link";
import { ClassValue } from "clsx";
import { format, parseISO } from "date-fns";

import { Badge } from "@/components";

import { Blog } from "contentlayer/generated";
import { cn } from "@/utils";

type Props = {
  isLinkedHeading: boolean;
  isWithDescription: boolean;
  classname?: ClassValue;
} & Blog;

const BlogCard = ({
  title,
  description,
  isLinkedHeading = false,
  isWithDescription = false,
  ...props
}: Props) => {
  return (
    <div className={cn(props.classname)}>
      <div className={cn("mb-4")}>
        {isLinkedHeading ? (
          <Link href={`/blogs/${props.slug}`}>
            <h3 className={cn("mb-2")}>{title}</h3>
          </Link>
        ) : (
          <h1 className={cn("mb-2")}>{title}</h1>
        )}

        {isWithDescription && <p>{description}</p>}
      </div>

      <div>
        <time dateTime={props.publishedAt} className="text-sm px-2">
          Posted on {format(parseISO(props.publishedAt), "LLLL d, yyyy")}
        </time>
        <div className={cn("flex items-center gap-2")}>
          {props.tags.map((tag, index) => (
            <Link key={index} href={`/tag?tag=${tag}`}>
              <Badge>#{tag}</Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
