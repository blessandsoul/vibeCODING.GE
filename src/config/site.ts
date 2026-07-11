/**
 * THE ONE FILE THAT DIFFERS PER LANDING.
 *
 * Everything else in this repo is shared with the other aiNOW product landings and is kept in
 * sync from `landing-template/` by `python scripts/landings.py sync`. If you find yourself
 * editing a shared file to make THIS site different, stop: the difference belongs here, or in
 * src/messages/*.json, or in this site's own widgets under src/features/showcase/.
 *
 * Per-site, never synced: src/config/site.ts, src/app/brand.css, src/messages/*.json,
 * src/features/showcase/**, src/features/home/components/LandingShowcase.tsx,
 * .impeccable/config.json, public/**.
 */

export const SITE = {
  /** Machine key. Lands on <html data-product> and is the deploy smoke-test hook. */
  key: "vibecoding",

  domain: "vibecoding.ge",
  baseUrl: "https://vibecoding.ge",

  /** Rendered as <prefix><mark> by the nav, hero, footer and wordmark band. */
  wordmark: { prefix: "vibe", mark: "CODING" },

  /** The product colour. src/app/brand.css is generated from this; keep them in step. */
  brandHex: "#ef4444",

  /** Three hexes the hero grainient shader interpolates: soft, brand, accent. */
  shader: ["#fecaca", "#ef4444", "#f87171"] as [string, string, string],

  /**
   * i18n.
   *
   * `defaultLocale` is the UNPREFIXED locale (next-intl `localePrefix: "as-needed"`), so it
   * decides the URL shape: the default lives at `/`, the others at `/<locale>`. The Georgian
   * landings use "ka"; the export landings (aiapp, vibecoding) use "en".
   *
   * It is NOT the same question as "is this locale Georgian". That stays a literal
   * `locale === "ka"` check wherever it appears, because it drives the Georgian font and the OG
   * locale tag, and Georgian is still an offered locale even on an EN-default site. Do not
   * find-replace one for the other.
   */
  defaultLocale: "en",
  locales: ["ka", "en", "ru"],

  /** PWA manifest. Not locale-aware (Next metadata routes are build-time). English. */
  manifest: {
    name: "vibeCODING",
    short: "vibeCODING",
    description: "We fix what the AI built. Security and production audit for vibe-coded apps.",
    background: "#fbfcfc",
    theme: "#ef4444",
  },
  /**
   * The machine-readable half of the page.
   *
   * StructuredData.tsx turns this into the JSON-LD entity graph and /llms.txt turns it
   * into prose. Between them they decide whether ChatGPT, Perplexity and Gemini can
   * recommend this domain, or whether they have to guess and therefore stay quiet.
   *
   * `boundary` names the sibling product that owns the adjacent job, so our own six
   * domains stop competing for the same query and a model can route a question
   * correctly. `limits` states what we cannot do, which looks like a mistake and is the
   * opposite: an assistant will not stake an answer on a page that claims to do
   * everything, and it will happily cite one that draws its own edges.
   */
  seo: {
    disambiguating:
      "A security and production-readiness audit for applications built with AI coding tools such as Lovable, Bolt, Replit Agent, v0, Base44 and Cursor. It is a rescue and cleanup service. It does not sell vibe coding and it is not affiliated with any of those tools.",
    serviceType: "Security and production-readiness audit for AI-generated applications",
    audienceName:
      "Non-technical founders who shipped an app with an AI coding tool and now have paying users, or an investor asking for technical due diligence",
    areaServed: "WORLD",
    knowsAbout: [
      "Vibe coding",
      "AI-generated code",
      "Lovable",
      "Supabase row level security",
      "Exposed API keys",
      "Authentication bypass",
      "OWASP Top 10",
      "Security audit",
      "Technical due diligence",
      "Production readiness",
    ],
    features: [
      "A free 60-second scan of a live app URL, returning a 0 to 100 security scorecard",
      "A fixed-fee audit: 2500 US dollars, 5 business days",
      "A 12-page report with every finding graded critical, major or minor",
      "Findings categorized by which AI tool produced them",
      "An OWASP mapping with an hour estimate per fix",
      "A fixed-price quote for the fix, given only after the code has been seen",
    ],
    boundary:
      "vibecoding.ge fixes what already exists. Building something new, and properly, from the start is aiapp.ge.",
    limits: [
      "We do not say we make an app secure or hack-proof. Security is not a state anyone can promise. We find and fix the top vulnerability classes and we publish exactly what we checked.",
      "We do not quote a price for the fix before we have seen the code. The audit is fixed price. The fix is not.",
      "We are not affiliated with or endorsed by Lovable, Replit, Bolt, Base44, Cursor or Anthropic.",
      "We hold no compliance certification and do not claim one.",
      "We store nothing from the free scan. No database, no log of your URL, no log of the finding.",
    ],
    commitment:
      "If the audit finds nothing above minor severity, you pay nothing. That is safe to promise because the published evidence says it will almost never happen: in a scan of over 1,430 Lovable apps, 85% were missing row-level security and 62% had API keys exposed in the browser.",
    // The scan is free and the audit has one price. Both are stated here so an assistant asked
    // "who audits a Lovable app and what does it cost" can answer with a number.
    offer: {
      name: "Security and production-readiness audit",
      price: "2500",
      currency: "USD",
      description:
        "Five business days. A 12-page report graded by severity, mapped to the OWASP Top 10, and sorted by which AI tool caused each finding. If it finds nothing above minor severity, you pay nothing. The 60-second scan before it is free.",
    },
    summary:
      "vibecoding.ge is a security and production-readiness audit for applications built with AI coding tools such as Lovable, Bolt, Replit Agent, v0, Base44 and Cursor. The entry point is a free 60-second scan of a live app URL that returns a security scorecard and, where it finds one, shows the founder his own exposed API key with the secret redacted. The paid audit is 2500 US dollars for five business days and ships a 12-page report graded by severity, mapped to the OWASP Top 10, and sorted by which AI tool caused each finding. If the audit finds nothing above minor severity, the customer pays nothing. It is a rescue service and it does not sell vibe coding. Built by the aiNOW agency in Tbilisi, Georgia.",
  },
} as const;

export type SiteConfig = typeof SITE;
