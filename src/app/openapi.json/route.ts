const BASE_URL = "https://vibecoding.ge";

const spec = {
  openapi: "3.1.0",
  info: {
    title: "vibeCODING preview compatibility API",
    version: "stage-b-local-preview",
    summary: "Fail-closed preview boundary for vibeCODING.",
    description:
      "The public contact endpoint accepts qualified requests after server-side validation and a successful security check. The legacy /api/lead adapter remains disabled; it does not accept, store or deliver requests. A liveness endpoint is also available.",
    contact: { name: "aiNOW", email: "CONTACT@aiNOW.GE", url: BASE_URL },
  },
  servers: [{ url: BASE_URL, description: "Production" }],
  paths: {
    "/api/lead": {
      post: {
        operationId: "submitLead",
        summary: "Disabled lead adapter",
        description: "Disabled in this isolated preview. The request is not accepted, stored, or delivered.",
        responses: {
          "503": {
            description: "Preview adapter disabled; no lead accepted or delivered",
            content: { "application/json": { schema: { $ref: "#/components/schemas/PreviewDisabledError" } } },
          },
        },
      },
    },
    "/api/contact": {
      post: {
        operationId: "submitContact",
        summary: "Qualified contact request",
        description: "Submit a qualified contact request from the product contact flow. Provide a human name, business or product context when available, a concrete task, a contact channel code, and explicit confirmation. The browser contact form captures first-touch visit context and sends the actual pathname. A caller must provide a valid single-use Turnstile token; this API does not solve CAPTCHA automatically.",
        requestBody: {
          required: true,
          content: { "application/json": { schema: { $ref: "#/components/schemas/Contact" } } },
        },
        responses: {
          "200": {
            description: "Request accepted",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Success" } } },
          },
          "400": {
            description: "Invalid qualified contact data",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
          "403": {
            description: "Missing or invalid Turnstile challenge",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
          "429": {
            description: "Too many requests",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
          "500": {
            description: "Delivery failed",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
          },
        },
      },
    },
    "/api/health": {
      get: {
        operationId: "getHealth",
        summary: "Liveness probe",
        tags: ["system"],
        responses: {
          "200": {
            description: "Service is up",
            content: { "application/json": { schema: { $ref: "#/components/schemas/Health" } } },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      PreviewDisabledError: {
        type: "object",
        required: ["error", "code", "adapter", "message"],
        properties: {
          error: { type: "string", const: "PREVIEW_DISABLED" },
          code: { type: "string", const: "PREVIEW_DISABLED" },
          adapter: { type: "string" },
          message: { type: "string" },
        },
      },
      Contact: {
          type: "object",
          description: "Qualified contact request. Trim the human name and task before sending. The name must contain at least two characters and one letter; the task must contain at least eight characters and at least four Unicode letters or digits. The formatted notification must remain within 4096 characters.",
          required: ["name", "message", "contactPreference", "contactConfirmed", "turnstileToken"],
          properties: {
            name: { type: "string", minLength: 2, maxLength: 120, description: "Trimmed human name with at least one Unicode letter." },
            company: { type: "string", maxLength: 120, description: "Optional trimmed business or industry name." },
            product: { type: "string", maxLength: 120, description: "Optional trimmed product or direction." },
            phone: { type: "string", minLength: 9, maxLength: 20, pattern: "^\\+?[\\d\\s()-]+$", description: "Phone channel value: formatted string of nine to fifteen digits." },
            email: { type: "string", format: "email", maxLength: 254, description: "Required when contactPreference is email." },
            message: { type: "string", minLength: 8, maxLength: 1800, description: "Trimmed task with at least four Unicode letters or digits; formatted notification must remain at most 4096 characters." },
            contactPreference: { type: "string", enum: ["whatsapp", "sms", "call", "email"], description: "Contact channel code, not the localized display label." },
            contactConfirmed: { type: "boolean", const: true, description: "The requester confirmed the contact details and consented to this request." },
            source: { type: "string", maxLength: 100 },
            sourcePath: { type: "string", maxLength: 200, pattern: "^/(?!/)", description: "Actual page pathname beginning with one slash." },
            landingPath: { type: "string", maxLength: 200, pattern: "^/(?!/)", description: "First-visit landing pathname." },
            referrerHost: { type: "string", maxLength: 200 },
            paidClick: { type: "boolean" },
            utmSource: { type: "string", maxLength: 100, description: "Unicode-safe first-touch campaign value." },
            utmMedium: { type: "string", maxLength: 100 },
            utmCampaign: { type: "string", maxLength: 100 },
            utmContent: { type: "string", maxLength: 100 },
            utmTerm: { type: "string", maxLength: 100 },
            turnstileToken: { type: "string", minLength: 1, maxLength: 2048, description: "Single-use challenge token; it is verified and not persisted." },
          },
          oneOf: [
            { properties: { contactPreference: { const: "whatsapp" } }, required: ["phone"] },
            { properties: { contactPreference: { const: "sms" } }, required: ["phone"] },
            { properties: { contactPreference: { const: "call" } }, required: ["phone"] },
            { properties: { contactPreference: { const: "email" } }, required: ["email"] },
          ],
          additionalProperties: false,
        },
        Error: {
          type: "object",
          properties: {
            error: { type: "string" },
            details: { type: "object", additionalProperties: true },
          },
          required: ["error"],
        },
        Success: {
          type: "object",
          properties: { success: { type: "boolean", const: true } },
          required: ["success"],
          additionalProperties: false,
        },
      Health: {
        type: "object",
        required: ["status", "timestamp"],
        properties: {
          status: { type: "string", const: "ok" },
          timestamp: { type: "string", format: "date-time" },
        },
      },
    },
  },
};

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(spec, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

