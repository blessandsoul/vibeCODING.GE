import {
  createLeadEventId as makeLeadEventId,
  trackLead as trackAnalyticsLead,
  type LeadContentName,
  type LeadForm,
} from "@/lib/analytics";

export { createLeadEventId } from "@/lib/analytics";

// Meta Pixel id. Public value (it ships in the page HTML anyway), so a hardcoded
// fallback is fine when the Coolify env var is unset or empty, mirroring the
// hardcoded GTM container id in layout.tsx. Env still overrides when provided.
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "1035516142146194";

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

const LEAD_FORM_BY_CONTENT_NAME: Record<LeadContentName, LeadForm> = {
  "contact-phone": "contact",
  "phone-lead": "landing_phone",
  "hero-phone": "hero_phone",
  "cta-phone": "homepage_cta",
  "partner-application": "partner_application",
  "partner-lead": "partner_lead",
  "aistaff-gate": "aistaff_gate",
  "aistaff-bot": "aistaff_bot",
};

export const trackLead = (data?: { content_name?: string }, eventId?: string) => {
  const contentName = data?.content_name;
  const safeContentName: LeadContentName = contentName && contentName in LEAD_FORM_BY_CONTENT_NAME
    ? contentName as LeadContentName
    : "contact-phone";
  const leadForm = LEAD_FORM_BY_CONTENT_NAME[safeContentName] || "contact";
  return trackAnalyticsLead(leadForm, eventId ?? makeLeadEventId(), safeContentName);
};

export const trackViewContent = (data?: Record<string, string>) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", data);
  }
};

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}
