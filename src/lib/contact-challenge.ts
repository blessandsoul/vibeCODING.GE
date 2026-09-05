import { CONTACT_CHALLENGE_HOSTS } from "@/config/contact-challenge";

export async function verifyContactChallenge(token: unknown): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || typeof token !== "string" || !token || token.length > 2048) return false;
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return false;
    const result = await response.json();
    return result.success === true && result.action === "contact" &&
      CONTACT_CHALLENGE_HOSTS.includes(result.hostname);
  } catch {
    return false;
  }
}
