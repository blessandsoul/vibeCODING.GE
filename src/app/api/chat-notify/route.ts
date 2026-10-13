import { previewDisabledResponse } from "@/lib/preview-api";

export const dynamic = "force-dynamic";

export function POST() {
  return previewDisabledResponse("FIXTURE_ADAPTER_CHAT_NOTIFY_REQUIRED");
}

export function GET() {
  return previewDisabledResponse("FIXTURE_ADAPTER_CHAT_NOTIFY_REQUIRED");
}
