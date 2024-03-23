import {
  makeSource,
  ComputedFields,
  defineDocumentType,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { Options } from "rehype-pretty-code";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    imageUrl: { type: "string", required: true },
    liveSiteUrl: { type: "string", required: true },
    githubUrl: { type: "string", required: true },
  },
  computedFields,
}));

export const Tool = defineDocumentType(() => ({
  name: "Tool",
  filePathPattern: "tools/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    icon: { type: "string", required: true },
    toolType: {
      type: "enum",
      options: ["tech-stack", "app-and-service"],
      required: true,
    },
  },
  computedFields,
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blogs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    publishedAt: { type: "date", required: true },
    isPublised: { type: "boolean", required: true },
  },
  computedFields,
}));

const options: Options = {
  theme: "andromeeda",
};

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Project, Tool, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypePrettyCode, options],
    ],
  },
});
