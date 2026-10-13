import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { isIndexedLocale } from "./seo-locales";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  const messageLocale = isIndexedLocale(locale) ? locale : "en";
  return {
    locale,
    messages: (await import(`../messages/${messageLocale}.json`)).default,
  };
});
