import type { MetadataRoute } from "next";
import { getAvailableLocales, getDefaultAvailableLocale, getPost, getPostSlugs } from "@/features/blog/lib/blog";
import { INDEXED_LOCALES, buildAlternates, localeUrl } from "@/i18n/seo-locales";

// Static routes exposed to search. The noindex /aicontent QR demo is omitted on
// purpose. buildAlternates/localeUrl already own the per-locale URL shape.
const PATHS = ["", "/contact", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const path of PATHS) {
    for (const locale of INDEXED_LOCALES) {
      entries.push({
        url: localeUrl(locale, path),
        changeFrequency: path === "" ? "weekly" : path === "/blog" ? "daily" : "monthly",
        priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.7,
        alternates: { languages: buildAlternates(path, locale).languages },
      });
    }
  }

  for (const slug of getPostSlugs()) {
    const path = `/blog/${slug}`;
    const available = getAvailableLocales(slug);
    const languages: Record<string, string> = {};
    for (const locale of available) languages[locale] = localeUrl(locale, path);
    const defaultAvailable = getDefaultAvailableLocale(slug);
    if (defaultAvailable) languages["x-default"] = localeUrl(defaultAvailable, path);

    for (const locale of available) {
      const post = getPost(slug, locale);
      if (!post?.indexable) continue;
      entries.push({
        url: localeUrl(locale, path),
        lastModified: post.updated ? new Date(`${post.updated}T12:00:00Z`) : undefined,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages },
      });
    }
  }
  return entries;
}
