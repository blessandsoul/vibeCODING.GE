import { SITE } from "@/config/site";

export const APP_NAME = SITE.wordmark.prefix + SITE.wordmark.mark;
export const APP_DOMAIN = SITE.domain;

// Real reachable channels of the parent company (aiNOW / AI NOW LLC). Every product landing
// funnels into the same inbox and the same Telegram until a product gets its own.
export const CONTACT_EMAIL = "CONTACT@aiNOW.GE";
export const CONTACT_EMAIL_SECONDARY = "ainowgeorgia@gmail.com";

// Single source of truth for the business phone.
// CONTACT_PHONE = raw E.164 for tel: links / schema. CONTACT_PHONE_DISPLAY = human-readable.
export const CONTACT_PHONE = "+995599701552";
export const CONTACT_PHONE_DISPLAY = "+995 599 70 15 52";
