import { defineRouting } from "next-intl/routing";
import { SITE } from "@/config/site";

// Locales and the unprefixed default both come from src/config/site.ts, so switching a landing
// to an EN default (aiapp, vibecoding) is one line there and nothing here. Middleware needs no
// change either: next-intl derives the unprefixed locale from routing.defaultLocale.
export const routing = defineRouting({
  locales: [...SITE.locales],
  defaultLocale: SITE.defaultLocale,
  localePrefix: "as-needed",
  localeDetection: false,
});
