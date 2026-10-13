import { catalog, serialise } from "@/lib/product-public-facts";

export const revalidate = 86400;

export function GET(): Response {
  return new Response(serialise(catalog()), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
