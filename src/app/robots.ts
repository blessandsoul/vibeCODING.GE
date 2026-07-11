import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

// Named AI crawlers are allowed on purpose: being quotable by an assistant is a
// distribution channel, not a leak. Keep this list in step with public/.well-known/ai.txt.
const AI_CRAWLERS = [
  "GPTBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "OAI-SearchBot",
  "ChatGPT-User",
  "cohere-ai",
  "Applebot-Extended",
  "Bytespider",
  "meta-externalagent",
];

const DISALLOW = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    ],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
    // No `host:` line. MetadataRoute.Robots.host emits a non-standard `Host:` directive
    // (Yandex-only, dropped 2018) that Semrush flags as malformed. Host canonicalization
    // is handled at the edge (Cloudflare), not in robots.txt.
  };
}
