import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://forgeup.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://forgeup.app/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://forgeup.app/blog/milo-adaptive-programs",
      lastModified: "2026-04-18",
      changeFrequency: "never",
      priority: 0.7,
    },
    {
      url: "https://forgeup.app/blog/ai-coach-vs-trainer",
      lastModified: "2026-04-16",
      changeFrequency: "never",
      priority: 0.7,
    },
    {
      url: "https://forgeup.app/blog/consistency-beats-perfection",
      lastModified: "2026-04-12",
      changeFrequency: "never",
      priority: 0.7,
    },
    {
      url: "https://forgeup.app/waitlist",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.9,
    },
    {
      url: "https://forgeup.app/partners",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://forgeup.app/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://forgeup.app/terms",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
