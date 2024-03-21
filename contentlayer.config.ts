import { defineDocumentType, makeSource } from "contentlayer/source-files";

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
  computedFields: {
    slug: {
      type: "string",
      resolve: (project) => project._raw.sourceFileName.replace(/\.mdx/, ""),
    },
  },
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
  computedFields: {
    slug: {
      type: "string",
      resolve: (project) => project._raw.sourceFileName.replace(/\.mdx/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Project, Tool],
});
