import { MetadataRoute } from "next";

import { ROUTES } from "@/constants/route";
import { SITE_URL } from "@/constants/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ROUTES.map((route) => {
    return {
      url: new URL(route.href, SITE_URL).href,
      lastModified: new Date(),
    };
  });

  return routes;
}
