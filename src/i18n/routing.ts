import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ka", "en", "ru", "de", "tr", "fa", "zh"],
  defaultLocale: "ka",
  localePrefix: "as-needed",
  localeDetection: false,
});
