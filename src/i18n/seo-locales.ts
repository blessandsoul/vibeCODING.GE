// Supported site languages are distinct from the translations authored for a
// particular page. Sitemap and page metadata share the route-level availability
// below; blog articles derive it from their released locale files.
import { APP_DOMAIN } from "@/lib/constants/app.constants";

export const INDEXED_LOCALES = ["ka", "en", "ru"] as const;

const BASE_URL = `https://${APP_DOMAIN}`;
const PUBLIC_FALLBACK_LOCALE = "ka" as const;
function filterIndexedLocales(locales: readonly string[]): string[] {
  return locales.filter((locale) => (INDEXED_LOCALES as readonly string[]).includes(locale));
}
function safeIndexedLocales(locales: readonly string[]): readonly string[] {
  const filtered = filterIndexedLocales(locales);
  return filtered.length ? filtered : [PUBLIC_FALLBACK_LOCALE];
}
const FOUR_LANGUAGE_PAGES = new Set<string>();
const THREE_LANGUAGE_PAGES = new Set([
  "/about", "/privacy", "/terms", "/refund", "/personalized-birthday-video",
]);

/** Advertise translations that have actual page content, not routing fallbacks. */
export function getPageLocales(path: string): readonly string[] {
  if (FOUR_LANGUAGE_PAGES.has(path)) return INDEXED_LOCALES;
  if (THREE_LANGUAGE_PAGES.has(path)) return ["ka", "en", "ru"];
  return INDEXED_LOCALES;
}

export function getPageContentLocale(path: string, locale: string, availableLocales = getPageLocales(path)): string {
  const normalizedLocales = safeIndexedLocales(availableLocales);
  return normalizedLocales.includes(locale) ? locale : path === "/about" || path.startsWith("/projects/") ? "en" : "ka";
}

export function pageRobots(path: string, locale: string, availableLocales = getPageLocales(path)) {
  const index = filterIndexedLocales(availableLocales).includes(locale);
  return { index, follow: true, googleBot: { index, follow: true } };
}

export function getProjectLocales(project: { slogan: object; description: object }): readonly string[] {
  return INDEXED_LOCALES.filter(locale =>
    Boolean((project.slogan as Record<string, unknown>)[locale]) &&
    Boolean((project.description as Record<string, unknown>)[locale]),
  );
}

export function isIndexedLocale(locale: string): boolean {
  return (INDEXED_LOCALES as readonly string[]).includes(locale);
}

// Absolute URL for a locale + path. Georgian (default locale) is unprefixed to match
// next-intl localePrefix "as-needed".
export function localeUrl(locale: string, path = ""): string {
  return locale === "ka" ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
}


// Relative route for locale switchers. The default locale is unprefixed.
export function localePath(locale: string, path = ""): string {
  const normalizedPath = path === "/" ? "" : path;
  if (locale === "ka") return normalizedPath || "/";
  return "/" + locale + normalizedPath;
}
// hreflang + canonical block for a static page at `path` (no locale prefix, e.g. "/services/seo").
// languages = indexed locales + x-default (ka). canonical = the page's own URL for an indexed
// locale, or the Georgian equivalent for a non-indexed locale (consolidates the fallback render
// onto the original instead of self-canonicalizing a noindex page).
export function buildAlternates(path: string, locale: string, availableLocales = getPageLocales(path)) {
  const normalizedLocales = safeIndexedLocales(availableLocales);
  const languages: Record<string, string> = {};
  for (const loc of normalizedLocales) {
    languages[loc] = localeUrl(loc, path);
  }
  languages["x-default"] = localeUrl("ka", path);

  return {
    canonical: localeUrl(getPageContentLocale(path, locale, normalizedLocales), path),
    languages,
  };
}

