export interface ClosingLeadPlan {
  id: string;
  name: string;
  price?: string | number;
  cadence?: string;
}

export interface ClosingLeadAttribution {
  source?: string;
  sourcePath?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

export interface ClosingLeadInput {
  phone: string;
  company: string;
  task: string;
  product: string;
  contactPreference: string;
  turnstileToken: string;
  plan?: ClosingLeadPlan | null;
  attribution?: ClosingLeadAttribution;
}

export interface ClosingLeadRequest {
  url: "/api/contact";
  init: RequestInit & { body: string };
  message: string;
}

export const CLOSING_LEAD_PRODUCT = "vibecoding";
export const CLOSING_LEAD_MAX_MESSAGE = 5000;
const UTM_VALUE_PATTERN = /^[A-Za-z0-9._-]+$/;

export function sanitizeUtmValue(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed || trimmed.length > 160 || !UTM_VALUE_PATTERN.test(trimmed)) return undefined;
  return trimmed;
}
function clean(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function appendUnsupportedAttribution(lines: string[], attribution: ClosingLeadAttribution | undefined): void {
  if (!attribution) return;
  const values: Array<[string, string | undefined]> = [
    ["source", attribution.source],
    ["source_path", attribution.sourcePath],
    ["utm_source", attribution.utmSource],
    ["utm_medium", attribution.utmMedium],
    ["utm_campaign", attribution.utmCampaign],
    ["utm_content", attribution.utmContent],
    ["utm_term", sanitizeUtmValue(attribution.utmTerm)],
  ];
  const extras = values.filter(([, value]) => clean(value)).map(([key, value]) => `${key}: ${clean(value)}`);
  if (extras.length) lines.push("", ...extras);
}

export function buildClosingLeadMessage(input: ClosingLeadInput): string {
  const lines = [
    `Company / industry: ${input.company.trim()}`,
    `Product: ${input.product.trim()}`,
    `Preferred contact: ${input.contactPreference.trim()}`,
    input.plan ? `Plan: ${input.plan.name}${input.plan.id ? ` (${input.plan.id})` : ""}` : null,
    "",
    input.task.trim(),
  ].filter((value): value is string => Boolean(value));
  appendUnsupportedAttribution(lines, input.attribution);
  const message = lines.join("\n").trim();
  if (message.length > CLOSING_LEAD_MAX_MESSAGE) {
    throw new Error(`Closing lead message exceeds ${CLOSING_LEAD_MAX_MESSAGE} characters`);
  }
  return message;
}

export function buildClosingLeadRequest(input: ClosingLeadInput): ClosingLeadRequest {
  const message = buildClosingLeadMessage(input);
  return {
    url: "/api/contact",
    init: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: input.phone.trim(), name: input.company.trim(), message, turnstileToken: input.turnstileToken }),
    },
    message,
    };
}

export async function readClosingLeadReceipt(response: Response): Promise<{ accepted: true } | { accepted: false; reason: string }> {
  if (!response.ok) return { accepted: false, reason: "http_error" };
  let body: unknown;
  try {
    body = await response.json();
  } catch {
    return { accepted: false, reason: "invalid_receipt" };
  }
  if (!body || typeof body !== "object" || (body as { success?: unknown }).success !== true) {
    return { accepted: false, reason: "not_acknowledged" };
  }
  return { accepted: true };
}

export function createClosingLeadSubmitter(fetcher: typeof fetch): (input: ClosingLeadInput) => Promise<{ accepted: true } | { accepted: false; reason: string }> {
  let inFlight = false;
  return async (input) => {
    if (inFlight) return { accepted: false, reason: "in_flight" };
    inFlight = true;
    try {
      const request = buildClosingLeadRequest(input);
      return readClosingLeadReceipt(await fetcher(request.url, request.init));
    } catch {
      return { accepted: false, reason: "network_error" };
    } finally {
      inFlight = false;
    }
  };
}







