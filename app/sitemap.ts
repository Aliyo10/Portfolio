import type { MetadataRoute } from "next";

import { SITE_URL } from "./data/profile";
import { projects } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/progression`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projets/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
