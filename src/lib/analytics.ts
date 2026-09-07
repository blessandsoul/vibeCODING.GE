"use client";

export const ANALYTICS_CONSENT_STORAGE_KEY = "ainow.analytics-consent.v1";
const LEAD_EVENT_STORAGE_KEY = "ainow.analytics-lead-events.v1";
const MAX_STORED_EVENT_IDS = 100;

export type LeadForm =
  | "contact"
  | "homepage_cta"
  | "aistaff_gate"
  | "aistaff_bot";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function hasAcceptedConsent(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    if (value === "accepted") return true;
    if (!value) return false;
    const parsed = JSON.parse(value) as {
      status?: string;
      analytics?: boolean;
    };
    if (parsed.status === "declined" || parsed.analytics === false) return false;
    return parsed.status === "accepted";
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

export function trackLead(leadForm: LeadForm, eventId = createLeadEventId()): boolean {
  if (!hasAcceptedConsent()) return false;
  if (emittedEventIds.has(eventId) || readStoredEventIds().includes(eventId)) return false;

  const params = {
    content_name: leadForm,
    lead_form: leadForm,
    event_id: eventId,
  };
  const analyticsWindow = window as AnalyticsWindow;

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", "generate_lead", params);
  } else {
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.dataLayer.push(["event", "generate_lead", params]);
  }

  emittedEventIds.add(eventId);
  markEventId(eventId);
  return true;
}
