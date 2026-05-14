import type { MetadataRoute } from "next";
import { projects } from "@/lib/work";
import { posts } from "@/lib/writing";

const siteUrl = "https://princemahmud.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/writing`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/uses`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  const workRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const writingRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}/writing/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...writingRoutes];
}
