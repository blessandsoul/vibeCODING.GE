// API Catalog (RFC 9727), served at /.well-known/api-catalog as application/linkset+json (RFC 9264).
// Lets an agent discover the machine-readable description of aiNOW's public API in one hop:
// service-desc -> OpenAPI spec, service-doc -> human docs, status -> health endpoint.

const BASE_URL = "https://vibecoding.ge";

const linkset = {
  linkset: [
    {
      anchor: `${BASE_URL}/api`,
      "service-desc": [
        { href: `${BASE_URL}/openapi.json`, type: "application/json", title: "aiNOW Public API (OpenAPI 3.1)" },
      ],
      "service-doc": [
        { href: `${BASE_URL}/services`, type: "text/html", title: "aiNOW services" },
        { href: `${BASE_URL}/llms.txt`, type: "text/plain", title: "LLM-friendly site index" },
        { href: `${BASE_URL}/ai/catalog.json`, type: "application/json", title: "aiNOW product and pricing catalog" },
      ],
      status: [{ href: `${BASE_URL}/api/health`, type: "application/json", title: "Health" }],
    },
  ],
};

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify(linkset, null, 2), {
    headers: {
      "Content-Type": "application/linkset+json; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
