import { APP_DOMAIN, APP_NAME } from "@/lib/constants/app.constants";

// This product feed does not attribute parent-company case outcomes to the product.
export async function GET() {
  const body = {
    name: `${APP_NAME} public case studies`,
    url: `https://${APP_DOMAIN}/ai/cases.json`,
    provider: { name: "aiNOW", url: "https://ainow.ge" },
    status: "NO_VERIFIED_PRODUCT_CASES",
    note: "No independently verified product-specific customer outcomes are published in this feed. Parent-company cases are not attributed to this product.",
    citationPolicy: `Cite ${APP_NAME} (https://${APP_DOMAIN}).`,
    count: 0,
    cases: [],
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
