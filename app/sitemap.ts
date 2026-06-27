import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = getAllProductSlugs().map((slug) => ({
    url: `${SITE_CONFIG.url}/produtos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticPages = [
    { url: SITE_CONFIG.url, priority: 1 },
    { url: `${SITE_CONFIG.url}/produtos`, priority: 0.9 },
    { url: `${SITE_CONFIG.url}/categorias`, priority: 0.8 },
    { url: `${SITE_CONFIG.url}/sobre`, priority: 0.7 },
    { url: `${SITE_CONFIG.url}/contato`, priority: 0.7 },
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  return [...staticPages, ...productPages];
}
