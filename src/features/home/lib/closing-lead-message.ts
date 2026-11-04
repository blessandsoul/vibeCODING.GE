export interface ClosingLeadPlan {
  id: string;
  name: string;
  price?: string | number;
  cadence?: string;
}

export interface ClosingLeadAttribution {
  source?: string;
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

export type ContactChannel = "whatsapp" | "sms" | "call";

export interface SharedInput {
  phone: string;
  name: string;
  company: string;
  task: string;
  product: string;
  contactPreference: ContactChannel;
  contactChannel: ContactChannel;
  contactConfirmed: boolean;
  turnstileToken: string;
  plan?: ClosingLeadPlan | null;
  attribution?: ClosingLeadAttribution;
}

export type ClosingLeadInput = SharedInput;

export interface ClosingLeadRequest {
  url: "/api/contact";
  init: RequestInit & { body: string };
  message: string;
}

export const CLOSING_LEAD_PRODUCT = "vibecoding";
export const CLOSING_LEAD_MAX_MESSAGE = 1800;
export function buildClosingLeadMessage(input: ClosingLeadInput): string {
  const lines = [
    input.plan
      ? "Plan: " + input.plan.name
        + (input.plan.id ? " (" + input.plan.id + ")" : "")
        + (input.plan.price !== undefined ? " · " + String(input.plan.price) : "")
        + (input.plan.cadence ? " · " + input.plan.cadence : "")
      : null,
    input.task.trim(),
  ].filter((value): value is string => Boolean(value));
  const message = lines.join("\n").trim();
  if (message.length > CLOSING_LEAD_MAX_MESSAGE) {
    throw new Error("Closing lead message exceeds " + CLOSING_LEAD_MAX_MESSAGE + " characters");
  }
  return message;
}

export function buildClosingLeadRequest(input: ClosingLeadInput): ClosingLeadRequest {
  const message = buildClosingLeadMessage(input);
  const context = input.attribution ?? {};
  const body: Record<string, unknown> = {
    phone: input.phone.trim(),
    name: input.name.trim(),
    company: input.company.trim(),
    product: input.product.trim(),
    message,
    contactPreference: input.contactPreference,
    contactConfirmed: input.contactConfirmed,
    source: context.source,
    sourcePath: context.sourcePath,
    landingPath: context.landingPath,
    referrerHost: context.referrerHost,
    paidClick: context.paidClick,
    utmSource: context.utmSource,
    utmMedium: context.utmMedium,
    utmCampaign: context.utmCampaign,
    utmContent: context.utmContent,
    utmTerm: context.utmTerm,
    turnstileToken: input.turnstileToken,
  };
  for (const key of Object.keys(body)) {
    if (body[key] === undefined) delete body[key];
  }
  return {
    url: "/api/contact",
    init: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
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







