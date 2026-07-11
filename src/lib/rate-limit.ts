const rateLimit = new Map<string, { count: number; resetTime: number }>();

const CLEANUP_INTERVAL = 60 * 1000; // 1 minute
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [key, value] of rateLimit) {
    if (now > value.resetTime) {
      rateLimit.delete(key);
    }
  }
}

/**
 * Simple in-memory rate limiter.
 * Returns { success: true } if under limit, { success: false } if exceeded.
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { success: boolean } {
  cleanup();

  const now = Date.now();
  const entry = rateLimit.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(key, { count: 1, resetTime: now + windowMs });
    return { success: true };
  }

  if (entry.count >= limit) {
    return { success: false };
  }

  entry.count++;
  return { success: true };
}
