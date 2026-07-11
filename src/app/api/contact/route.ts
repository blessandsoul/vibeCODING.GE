import { NextResponse } from "next/server";
import { contactFormSchema } from "@/features/contact/schemas/contact.schema";
import { sendTelegramNotification } from "@/lib/telegram";
import { checkRateLimit } from "@/lib/rate-limit";

// 5 requests per 15 minutes per IP
const RATE_LIMIT = 5;
const RATE_WINDOW = 15 * 60 * 1000;

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0].trim() ?? "unknown";
    const { success: withinLimit } = checkRateLimit(
      `contact:${ip}`,
      RATE_LIMIT,
      RATE_WINDOW,
    );

    if (!withinLimit) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    await sendTelegramNotification(parsed.data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
