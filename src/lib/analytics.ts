export const ANALYTICS_CONSENT_STORAGE_KEY = "ainow.analytics-consent";
const LEAD_EVENT_STORAGE_KEY = "ainow.analytics-lead-events.v1";
const MAX_STORED_EVENT_IDS = 100;

export type LeadForm =
  | "contact"
  | "landing_phone"
  | "hero_phone"
  | "homepage_cta"
  | "partner_application"
  | "partner_lead"
  | "aistaff_gate"
  | "aistaff_bot";

export type LeadContentName =
  | "contact-phone"
  | "phone-lead"
  | "hero-phone"
  | "cta-phone"
  | "partner-application"
  | "partner-lead"
  | "aistaff-gate"
  | "aistaff-bot";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  fbq?: (...args: unknown[]) => void;
};

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

function readStoredEventIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(LEAD_EVENT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((value): value is string => typeof value === "string")
      : [];
  } catch {
    return [];
  }
}

function markEventId(eventId: string): void {
  if (typeof window === "undefined") return;
  try {
    const eventIds = readStoredEventIds().filter((value) => value !== eventId);
    eventIds.push(eventId);
    window.sessionStorage.setItem(
      LEAD_EVENT_STORAGE_KEY,
      JSON.stringify(eventIds.slice(-MAX_STORED_EVENT_IDS)),
    );
  } catch {
    // In-memory de-duplication still protects the current page when storage is blocked.
  }
}

const emittedEventIds = new Set<string>();

export function createLeadEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function trackLead(
  leadForm: LeadForm,
  eventId = createLeadEventId(),
  contentName?: LeadContentName,
): boolean {
  if (!hasAnalyticsConsent()) return false;
  if (emittedEventIds.has(eventId) || readStoredEventIds().includes(eventId)) return false;

  const params = {
    content_name: contentName ?? leadForm,
    lead_form: leadForm,
    event_id: eventId,
  };
  const analyticsWindow = window as AnalyticsWindow;

  if (typeof analyticsWindow.fbq === "function") {
    analyticsWindow.fbq("track", "Lead", params, { eventID: eventId });
  }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event: "generate_lead", ...params });
  emittedEventIds.add(eventId);
  markEventId(eventId);
  return true;
}
