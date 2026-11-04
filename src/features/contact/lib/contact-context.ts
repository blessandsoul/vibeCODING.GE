export const CONTACT_SITE = "vibecoding.ge";

export function getReferrerHost(value: unknown): string | undefined {
  if (typeof value !== "string" || !value.trim() || /[\u0000-\u001f\u007f]/.test(value)) return undefined;
  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    return ["http:", "https:"].includes(url.protocol) ? url.hostname.toLowerCase().slice(0, 200) : undefined;
  } catch { return undefined; }
}

export interface ContactVisitContext {
  sourcePath?: string;
  landingPath?: string;
  referrerHost?: string;
  paidClick?: boolean;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

const STORAGE_KEY = "vibecoding-contact-visit-v1";
const UTM_FIELDS = {
  utm_source: "utmSource", utm_medium: "utmMedium", utm_campaign: "utmCampaign",
  utm_content: "utmContent", utm_term: "utmTerm",
} as const;
let memory: ContactVisitContext | undefined;

function pathOnly(value: unknown): string | undefined {
  if (typeof value !== "string" || value.length > 200) return undefined;
  if (!value.startsWith("/") || value.startsWith("//") || /[\\?#\s\u0000-\u001f\u007f]/.test(value)) return undefined;
  return value;
}

function visible(value: unknown): string | undefined {
  return typeof value === "string" && !/[\u0000-\u001f\u007f]/.test(value)
    ? value.trim().slice(0, 100) || undefined : undefined;
}

/** Only allowlisted context, never raw query strings or click identifiers. */
export function normalizeContactContext(value: unknown): ContactVisitContext {
  const data = value && typeof value === "object" ? value as Record<string, unknown> : {};
  const context: ContactVisitContext = {};
  for (const key of ["sourcePath", "landingPath"] as const) {
    const path = pathOnly(data[key]);
    if (path) context[key] = path;
  }
  const host = typeof data.referrerHost === "string" ? getReferrerHost(data.referrerHost) : undefined;
  if (host && ![CONTACT_SITE, `www.${CONTACT_SITE}`].includes(host.toLowerCase())) context.referrerHost = host;
  if (data.paidClick === true) context.paidClick = true;
  for (const key of Object.values(UTM_FIELDS)) {
    const val = visible(data[key]);
    if (val) context[key] = val;
  }
  return context;
}

export function buildContactVisitContext(
  pathname: string, search: string, referrer: string, stored?: unknown,
): ContactVisitContext {
  const previous = normalizeContactContext(stored);
  // Freeze one first-touch snapshot; do not combine a later campaign with an
  // earlier source/referrer and accidentally attribute an organic visit to ads.
  if (previous.landingPath) return previous;
  const current: ContactVisitContext = { landingPath: pathOnly(pathname) };
  const query = new URLSearchParams(search);
  const host = getReferrerHost(referrer);
  if (host) current.referrerHost = host;
  for (const [queryKey, field] of Object.entries(UTM_FIELDS)) {
    const val = visible(query.get(queryKey));
    if (val) current[field] = val;
  }
  if (["gclid", "dclid", "gbraid", "wbraid"].some(key => query.has(key))) current.paidClick = true;
  // Keep the first observed visit context during this tab's session.
  return normalizeContactContext(current);
}

export function captureContactVisitContext(): ContactVisitContext {
  if (typeof window === "undefined") return {};
  if (/^\/(?:ka\/|en\/|ru\/|de\/|tr\/|fa\/|zh\/)?(?:admin|dashboard|billing|login|register|auth)(?:\/|$)/.test(window.location.pathname)) return {};
  let previous: unknown = memory;
  try { previous = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "null") ?? memory; } catch { /* Memory fallback. */ }
  const context = buildContactVisitContext(window.location.pathname, window.location.search, document.referrer, previous);
  memory = context;
  try { window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context)); } catch { /* Private browsing can deny storage. */ }
  return context;
}

export function getContactSubmissionContext(): ContactVisitContext {
  return { ...captureContactVisitContext(), sourcePath: pathOnly(window.location.pathname) };
}

/** Service selection owns routing; it must not replace or mix the first visit. */
export function mergeContactSubmissionContext(
  visit: ContactVisitContext, selection?: ContactVisitContext,
): ContactVisitContext {
  const normalizedVisit = normalizeContactContext(visit);
  const selected = normalizeContactContext(selection);
  const context = normalizedVisit.landingPath ? normalizedVisit : selected;
  return { ...context, sourcePath: selected.sourcePath ?? normalizedVisit.sourcePath };
}
