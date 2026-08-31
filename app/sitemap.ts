import type { MetadataRoute } from "next";

const baseUrl = "https://dockvault.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/lighthouse/preservation",
    "/lighthouse/grading",
    "/lighthouse/collecting",
    "/lighthouse/begin-the-journey",
    "/logbook",
    "/logbook/the-lighthouse-has-been-lit",
    "/logbook/dock-vault-alpha-begins",
    "/vault",
    "/privacy",
    "/terms",
  ];

  return routes.map<MetadataRoute.Sitemap[number]>((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/logbook" || route === "/vault" ? 0.8 : 0.7,
  }));
}
