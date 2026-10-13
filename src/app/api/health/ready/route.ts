import { previewDisabledResponse } from "@/lib/preview-api";

export const dynamic = "force-dynamic";

export function POST() {
  return previewDisabledResponse("PREVIEW_DISABLED_HEALTH_READINESS");
}

export function GET() {
  return previewDisabledResponse("PREVIEW_DISABLED_HEALTH_READINESS");
}
