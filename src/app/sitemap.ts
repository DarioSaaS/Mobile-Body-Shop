import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-posts";
import { serviceAreaCities } from "@/lib/service-areas";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/service-area`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = serviceAreaCities.map((city) => ({
    url: `${base}/service-area/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...cityRoutes, ...blogRoutes];
}
