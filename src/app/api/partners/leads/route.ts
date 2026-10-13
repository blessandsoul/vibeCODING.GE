import { previewDisabledResponse } from "@/lib/preview-api";

export const dynamic = "force-dynamic";

export function POST() {
  return previewDisabledResponse("PREVIEW_DISABLED_PARTNER_LEAD");
}

export function GET() {
  return previewDisabledResponse("PREVIEW_DISABLED_PARTNER_LEAD");
}
