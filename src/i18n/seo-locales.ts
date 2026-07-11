import { SITE } from "@/config/site";

// Single source of truth for which locales we INDEX and advertise in hreflang.
// hreflang, sitemap and canonical all read from this list, so adding a locale here
// (via SITE.locales, which routing.ts also reads) lights it up everywhere at once.
export const INDEXED_LOCALES = SITE.locales;

const BASE_URL = SITE.baseUrl;

export function isIndexedLocale(locale: string): boolean {
  return (INDEXED_LOCALES as readonly string[]).includes(locale);
}

// Absolute URL for a locale + path.
//
// This asks "is this the UNPREFIXED default locale", NOT "is this Georgian". next-intl runs
// localePrefix "as-needed", so the default locale lives at the bare path and every other locale
// is prefixed. On the Georgian landings the default is "ka"; on the export landings (aiapp,
// vibecoding) it is "en". Routing the question through SITE.defaultLocale keeps both correct.
export function localeUrl(locale: string, path = ""): string {
  return locale === SITE.defaultLocale ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
}

// hreflang + canonical block for a page at `path` (no locale prefix, e.g. "/contact").
// languages = every indexed locale + x-default (the default locale). canonical = the page's own
// URL for an indexed locale, or the default-locale equivalent for a non-indexed one, so a fallback
// render consolidates onto the original instead of self-canonicalizing a noindex page.
//
// EVERY page must call this. The root layout deliberately omits `alternates` (it has no path
// context), so a page that forgets it ships with no canonical and no hreflang at all. That is
// exactly how aiads.ge and aicontent.ge shipped their homepages.
export function buildAlternates(path: string, locale: string) {
  const languages: Record<string, string> = {};
  for (const loc of INDEXED_LOCALES) {
    languages[loc] = localeUrl(loc, path);
  }
  languages["x-default"] = localeUrl(SITE.defaultLocale, path);

  return {
    canonical: isIndexedLocale(locale)
      ? localeUrl(locale, path)
      : localeUrl(SITE.defaultLocale, path),
    languages,
  };
}
