const BASE_URL = "https://vibecoding.ge";

const spec = {
  openapi: "3.1.0",
  info: {
    title: "vibeCODING preview compatibility API",
    version: "stage-b-local-preview",
    summary: "Fail-closed preview boundary for vibeCODING.",
    description:
      "This isolated preview exposes a liveness check. The lead and contact POST adapters are intentionally disabled and return HTTP 503 before any external request, storage or acceptance. No production delivery is represented. Configure and authorize an adapter before documenting successful delivery.",
    contact: { name: "aiNOW", email: "CONTACT@aiNOW.GE", url: BASE_URL },
  },
  servers: [{ url: BASE_URL, description: "External production URL (not used by this local preview)" }],
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
        summary: "Disabled contact adapter",
        description: "Disabled in this isolated preview. The request is not accepted, stored, or delivered.",
        responses: {
          "503": {
            description: "Preview adapter disabled; no contact message accepted or delivered",
            content: { "application/json": { schema: { $ref: "#/components/schemas/PreviewDisabledError" } } },
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

