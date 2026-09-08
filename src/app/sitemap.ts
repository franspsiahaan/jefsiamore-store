import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Situs satu halaman. Section (#koleksi, #souvenir, dst.) tidak dimasukkan
// karena bukan URL terpisah bagi crawler.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
