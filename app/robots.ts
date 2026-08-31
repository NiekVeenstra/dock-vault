import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dockvault.nl/sitemap.xml",
    host: "https://dockvault.nl",
  };
}
