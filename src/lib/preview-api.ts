import { NextResponse } from "next/server";
import { previewNoIndexHeaders } from "./landing-clone-preview";

export function previewDisabledResponse(adapter: string): NextResponse {
  return NextResponse.json(
    {
      error: "PREVIEW_DISABLED",
      code: "PREVIEW_DISABLED",
      adapter,
      message: "This isolated public clone does not submit external requests.",
    },
    { status: 503, headers: previewNoIndexHeaders() },
  );
}
