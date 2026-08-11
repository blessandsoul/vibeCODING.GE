import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import {
  AI_CRAWLERS,
  MACHINE_DISALLOW,
} from "@/features/product-pages/ai-access";

// Named AI crawlers are allowed on purpose: being quotable by an assistant is a
// distribution channel, not a leak. robots.txt and /.well-known/ai.txt import
// the same crawler and private-path lists.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: [...MACHINE_DISALLOW] },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: [...MACHINE_DISALLOW],
      })),
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    // No `host:` line. MetadataRoute.Robots.host emits a non-standard `Host:` directive
    // (Yandex-only, dropped 2018) that Semrush flags as malformed. Host canonicalization
    // is handled at the edge (Cloudflare), not in robots.txt.
  };
}
