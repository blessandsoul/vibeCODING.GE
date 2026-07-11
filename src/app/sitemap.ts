import type { MetadataRoute } from "next";
import { INDEXED_LOCALES, localeUrl } from "@/i18n/seo-locales";

// Static routes exposed to search. The noindex /aicontent QR demo is omitted on
// purpose. buildAlternates/localeUrl already own the per-locale URL shape.
const PATHS = ["", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const path of PATHS) {
    for (const locale of INDEXED_LOCALES) {
      entries.push({
        url: localeUrl(locale, path),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
