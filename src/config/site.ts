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
  brandHex: "#ff365f",

  /** Three hexes the hero grainient shader interpolates: soft, brand, accent. */
  shader: ["#ffd7e0", "#ff365f", "#ff7894"] as [string, string, string],

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
    description: "aiNOW reviews AI-built apps for security and production readiness.",
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
      "A security and production-readiness review for applications built with AI coding tools such as Lovable, Bolt, Replit Agent, v0, Base44 and Cursor. It reviews and helps scope repairs for existing applications. It does not sell vibe coding and it is not affiliated with any of those tools.",
    serviceType: "Security and production-readiness review for AI-built applications",
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
      "A public-file scan that checks only what a normal visitor can download",
      "Visible findings grouped by severity with secret-looking values redacted",
      "A deeper review only after access and test boundaries are agreed",
      "A prioritised report with business risk, evidence, repair and verification steps",
      "A rescan and handover that records open items and ownership decisions",
    ],
    boundary:
      "vibecoding.ge reviews what already exists and helps scope repairs. Building something new from the start is aiapp.ge.",
    limits: [
      "aiNOW does not describe an app as hack-proof. The report states which vulnerability classes and surfaces were checked.",
      "aiNOW scopes any repair only after reviewing confirmed evidence.",
      "vibecoding.ge is not affiliated with or endorsed by Lovable, Replit, Bolt, Base44, Cursor or Anthropic.",
      "aiNOW claims no compliance certification for vibecoding.ge.",
      "The public scan does not store the submitted URL or finding in an application database.",
    ],
    commitment:
      "The public scan checks only public files. A deeper review starts only after aiNOW and the owner agree the access and test boundary.",
    summary:
      "vibecoding.ge is aiNOW's security and production-readiness review for applications built with AI coding tools. The public scan checks files a normal visitor can download, groups visible issues by severity and redacts secret-looking values. Private sign-in rules, database permissions, payments, uploads and service limits require agreed access and a clear test boundary. Each confirmed issue is explained as a business risk with evidence, a repair step and a verification step. The owner chooses whether its own developer or aiNOW scopes the repair.",
  },
} as const;

export type SiteConfig = typeof SITE;
