import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  // Allow a second dev server (the aiads port) to use its own build dir so two
  // `next dev` instances can run on one project without sharing .next locks.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Pin the file-tracing root to this app so standalone output is computed from
  // the app dir, not an inferred monorepo root.
  outputFileTracingRoot: __dirname,
  skipTrailingSlashRedirect: false,
  skipProxyUrlNormalize: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
    ],
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // max-age 1y, no preload: preload is near-irreversible, enable only after a clean month
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Clean CSP: self + Google Fonts only (GTM / Facebook origins removed with the analytics strip).
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self'; media-src 'self' https:; object-src 'none'; base-uri 'self'",
          },
        ],
      },
      {
        // Edge-cacheable HTML for anonymous traffic. Note: dynamically rendered routes
        // may still override this with their own Cache-Control at runtime.
        source: "/((?!api|_next).*)",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=300, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
