import { isIP } from 'node:net';

type Environment = Record<string, string | undefined>;

const ALLOWED_EXPLICIT_HEADERS = new Set([
  'cf-connecting-ip',
  'fly-client-ip',
  'true-client-ip',
  'x-real-ip',
]);

function singleIp(headers: Headers, name: string): string | null {
  const raw = headers.get(name)?.trim();
  if (!raw || raw.includes(',')) return null;
  const lower = raw.toLowerCase();
  const normalized = lower.startsWith('[') && lower.endsWith(']') ? lower.slice(1, -1) : lower;
  return isIP(normalized) ? normalized : null;
}

/**
 * Generic X-Forwarded-For is intentionally ignored: a client can prepend an arbitrary value.
 * A platform-specific header is used only when the matching runtime marker is present, or when
 * the operator explicitly names the single-value header that its reverse proxy overwrites.
 */
export function clientIpForRateLimit(headers: Headers, env: Environment): string {
  if (env.VERCEL === '1') {
    return singleIp(headers, 'x-vercel-forwarded-for') ?? 'unknown';
  }
  if (env.CF_PAGES === '1' || env.CF_WORKER === '1') {
    return singleIp(headers, 'cf-connecting-ip') ?? 'unknown';
  }
  if (env.FLY_APP_NAME) {
    return singleIp(headers, 'fly-client-ip') ?? 'unknown';
  }
  if (env.COOLIFY_RESOURCE_UUID) {
    return singleIp(headers, 'x-real-ip') ?? 'unknown';
  }

  const configured = env.TRUSTED_PROXY_IP_HEADER?.trim().toLowerCase();
  if (configured && ALLOWED_EXPLICIT_HEADERS.has(configured)) {
    return singleIp(headers, configured) ?? 'unknown';
  }
  return 'unknown';
}
