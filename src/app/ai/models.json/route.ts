import { models } from "@/lib/product-public-facts";

export const revalidate = 3600;

export async function GET(): Promise<Response> {
  return Response.json(models(), {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
