import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
const isLandingClonePreview = !(
  process.env.LANDING_CLONE_PREVIEW === "0" &&
  process.env.NEXT_PUBLIC_LANDING_CLONE_PREVIEW === "0"
);

const nextConfig: NextConfig = {
  output: "standalone",
  skipTrailingSlashRedirect: false,
  poweredByHeader: false,
  devIndicators: false,

  // Evaluated once at `next build` and baked into the standalone server, so
  // sitemap lastModified and case-study dateModified track the deploy date.
  // A CI-provided BUILD_DATE (git commit timestamp) still wins when set.
  env: {
    BUILD_DATE: process.env.BUILD_DATE ?? new Date().toISOString().slice(0, 10),
  },

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
        pathname: "/blog/*/opengraph-image",
        search: "",
      },
      {
        pathname: "/ka/blog/*/opengraph-image",
        search: "",
      },
      {
        pathname: "/en/blog/*/opengraph-image",
        search: "",
      },
      {
        pathname: "/ru/blog/*/opengraph-image",
        search: "",
      },
      {
        pathname: "/de/blog/*/opengraph-image",
        search: "",
      },
      {
        pathname: "/tr/blog/*/opengraph-image",
        search: "",
      },
      {
        pathname: "/fa/blog/*/opengraph-image",
        search: "",
      },
      {
        pathname: "/zh/blog/*/opengraph-image",
        search: "",
      },
      {
        // NO `search` key on purpose. Next matches localPatterns.search by EXACT string
        // (matchLocalPattern: `if (pattern.search !== undefined && pattern.search !== url.search) return false`),
        // there is no glob for it. The previous `search: "*"` therefore demanded a query string
        // that is literally "*" and never matched anything, which silently disabled this rule.
        // Omitting `search` is the documented way to allow any query string.
        // Impact: /api/og is the generated fallback cover (api.ts::ensureCoverImage) used by every
        // post with no photo in covers.json. On 2026-07-11 that was 87 of 433 ka posts, and each one
        // threw "Invalid src prop ... does not match images.localPatterns" the moment next/image
        // rendered it, in the hero or inside RelatedPosts.
        pathname: "/api/og",
      },
      {
        pathname: "/images/**",
        search: "",
      },
      {
        pathname: "/team/**",
        search: "",
      },
      {
        pathname: "/projects/**",
        search: "",
      },
      {
        // Product artwork is served from public/graphics-3d and rendered through next/image.
        // Keep optimization enabled while explicitly allowing this local asset family.
        pathname: "/graphics-3d/**",
        search: "",
      },
    ],
  },

  async redirects() {
    const shortSlugs: Array<{ from: string; to: string }> = [
      { from: 'chatboti', to: 'ai-chatboti' },
      { from: 'chatbot', to: 'ai-chatboti' },
      { from: 'agenti', to: 'ai-agenti' },
      { from: 'agent', to: 'ai-agenti' },
      { from: 'konteni', to: 'ai-konteni' },
      { from: 'kontent', to: 'ai-konteni' },
      { from: 'content', to: 'ai-konteni' },
    ];

    const shortSlugRedirects = shortSlugs.flatMap(({ from, to }) => [
      { source: `/${from}`, destination: `/${to}`, permanent: true },
      { source: `/:locale(en|ru|de)/${from}`, destination: '/:locale/' + to, permanent: true },
    ]);

    return [
      // The unified legal text is maintained and reviewed in Georgian, English,
      // and Russian. Other marketing locales use the reviewed English version
      // instead of exposing stale machine-translated legal promises.
      {
        source: '/:locale(de|tr|fa|zh)/privacy',
        destination: '/en/privacy',
        permanent: true,
      },
      {
        source: '/:locale(de|tr|fa|zh)/terms',
        destination: '/en/terms',
        permanent: true,
      },
      {
        source: '/:locale(de|tr|fa|zh)/refund',
        destination: '/en/refund',
        permanent: true,
      },
      // Canonical host: www → apex. Middleware was soft-rewriting www to /ka (duplicate host for SEO).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.vibecoding.ge' }],
        destination: 'https://vibecoding.ge/:path*',
        permanent: true,
      },
      {
        source: '/:locale/services/ai-influencer',
        destination: '/:locale/services/ai-characters',
        permanent: true,
      },
      {
        source: '/services/ai-influencer',
        destination: '/services/ai-characters',
        permanent: true,
      },
      // Agreements print views were removed, GSC still has the old URLs as 404s.
      {
        source: '/agreements/:slug/print',
        destination: '/agreements/:slug',
        permanent: true,
      },
      {
        source: '/:locale(en|ru|de)/agreements/:slug/print',
        destination: '/:locale/agreements/:slug',
        permanent: true,
      },
      // Removed project: retired atlascaucasus portfolio page.
      {
        source: '/projects/atlascaucasus',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/:locale(en|ru|de)/projects/atlascaucasus',
        destination: '/:locale/projects',
        permanent: true,
      },
      // old marketing landing slug renamed to /ai-marketing (positioning)
      {
        source: '/vibe-marketing',
        destination: '/ai-marketing',
        permanent: true,
      },
      {
        source: '/:locale(en|ru|de|tr|fa|zh)/vibe-marketing',
        destination: '/:locale/ai-marketing',
        permanent: true,
      },
      ...shortSlugRedirects,
    ];
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
          // Report-only first: watch DevTools console for violations ~2 weeks, then enforce.
          //
          // aistaff.ge added to script-src + frame-src + connect-src on 2026-07-11. The report-only
          // phase did exactly its job and caught this: the site-wide aiSTAFF chat bubble
          // (components/layout/AistaffWidget.tsx) loads https://aistaff.ge/widget.js and the widget
          // frames https://aistaff.ge, and the policy allowed neither. The browser was logging
          // "Framing 'https://aistaff.ge/' violates ... frame-src" on every page. Flipping this
          // header to enforcing without these three entries would have silently killed the chat
          // widget site-wide, which is the lead-capture surface. connect-src is included because the
          // widget has to reach its own backend to hold a conversation.
          {
            key: "Content-Security-Policy-Report-Only",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://aistaff.ge https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.facebook.com https://stats.g.doubleclick.net https://aistaff.ge https://challenges.cloudflare.com; frame-src https://www.googletagmanager.com https://*.facebook.com https://aistaff.ge https://challenges.cloudflare.com; media-src 'self' https:; object-src 'none'; base-uri 'self'",
          },
        ],
      },
      {
        // Edge-cacheable HTML for anonymous traffic. Note: dynamically rendered routes
        // may still override this with their own Cache-Control at runtime.
        source: "/((?!api|admin|_next).*)",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=300, stale-while-revalidate=86400" },
        ],
      },
      ...(isLandingClonePreview
        ? [{
            source: "/:path*",
            headers: [
              { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
              { key: "Cache-Control", value: "private, no-store" },
            ],
          }]
        : []),
    ];
  },
};

export default withNextIntl(nextConfig);
