import { MetadataRoute } from "next";

import { allBlogs as blogs } from "contentlayer/generated";

import { ROUTES } from "@/constants/route";
import { SITE_URL } from "@/constants/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ROUTES.map((route) => {
    return {
      url: new URL(route.href, SITE_URL).href,
      lastModified: new Date(),
    };
  });

  const blogRoutes = blogs.map((blog) => {
    return {
      url: new URL(`/blogs/${blog.slug}`, SITE_URL).href,
      lastModified: new Date(blog.publishedAt).toISOString(),
    };
  });

  return [...routes, ...blogRoutes];
}
