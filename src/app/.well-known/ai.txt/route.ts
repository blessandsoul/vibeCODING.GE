import { aiTxt } from "@/lib/product-public-facts";

export const revalidate = 86400;

export function GET(): Response {
  return new Response(aiTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
