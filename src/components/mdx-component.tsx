"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/utils";

const components = { Image };

type Props = {
  code: string;
};

const MDXComponent = ({ code }: Props) => {
  const MdxContent = useMDXComponent(code);

  return (
    <article
      className={cn(
        "prose lg:prose-lg min-w-full",
        "prose-strong:text-neutral-900 dark:prose-strong:text-neutral-200"
      )}
    >
      <MdxContent components={components} />
    </article>
  );
};

export default MDXComponent;
