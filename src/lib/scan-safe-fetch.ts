import { lookup as dnsLookup } from 'node:dns/promises';
import { request as httpRequest } from 'node:http';
import { request as httpsRequest } from 'node:https';
import { BlockList, isIP } from 'node:net';

export type ResolvedAddress = { address: string; family: 4 | 6 };

type ResolveHost = (hostname: string) => Promise<ResolvedAddress[]>;

type TransportResponse = {
  status: number;
  headers: Record<string, string | string[] | undefined>;
  body: AsyncIterable<Uint8Array>;
  cancel: () => void;
};

type Transport = (request: {
  url: URL;
  method: 'GET' | 'HEAD';
  address: string;
  family: 4 | 6;
  signal: AbortSignal;
}) => Promise<TransportResponse>;

export type SafeFetchLimits = {
  requestTimeoutMs: number;
  totalTimeoutMs: number;
  maxRedirects: number;
  maxTotalRequests: number;
  maxTotalBytes: number;
};

type SafeFetchOptions = {
  method?: 'GET' | 'HEAD';
  maxBytes?: number;
};

export type SafeFetchResult = {
  url: string;
  status: number;
  ok: boolean;
  headers: Headers;
  body: string;
};

export type SafeFetchErrorCode = 'url' | 'private' | 'dns' | 'redirect' | 'timeout' | 'budget' | 'network';

export class SafeFetchError extends Error {
  readonly code: SafeFetchErrorCode;

  constructor(code: SafeFetchErrorCode, message: string) {
    super(message);
    this.name = 'SafeFetchError';
    this.code = code;
  }
}

const DEFAULT_LIMITS: SafeFetchLimits = {
  requestTimeoutMs: 4_000,
  totalTimeoutMs: 12_000,
  maxRedirects: 3,
  maxTotalRequests: 16,
  maxTotalBytes: 4_000_000,
};

const DEFAULT_RESPONSE_BYTES = 2_000_000;
const REDIRECT_STATUSES = new Set([301, 302, 303, 307, 308]);

const blockedV4 = new BlockList();
for (const [network, prefix] of [
  ['0.0.0.0', 8],
  ['10.0.0.0', 8],
  ['100.64.0.0', 10],
  ['127.0.0.0', 8],
  ['169.254.0.0', 16],
  ['172.16.0.0', 12],
  ['192.0.0.0', 24],
  ['192.0.2.0', 24],
  ['192.88.99.0', 24],
  ['192.168.0.0', 16],
  ['198.18.0.0', 15],
  ['198.51.100.0', 24],
  ['203.0.113.0', 24],
  ['224.0.0.0', 3],
] as const) {
  blockedV4.addSubnet(network, prefix, 'ipv4');
}

const blockedV6 = new BlockList();
for (const [network, prefix] of [
  ['::', 96],
  ['::ffff:0:0', 96],
  ['64:ff9b::', 96],
  ['64:ff9b:1::', 48],
  ['100::', 64],
  ['2001::', 32],
  ['2001:2::', 48],
  ['2001:10::', 28],
  ['2001:20::', 28],
  ['2001:db8::', 32],
  ['2002::', 16],
  ['3fff::', 20],
  ['5f00::', 16],
  ['fc00::', 7],
  ['fe80::', 10],
  ['fec0::', 10],
  ['ff00::', 8],
] as const) {
  blockedV6.addSubnet(network, prefix, 'ipv6');
}

export function normalizeHostname(hostname: string): string {
  const value = hostname.trim().toLowerCase();
  const unwrapped = value.startsWith('[') && value.endsWith(']') ? value.slice(1, -1) : value;
  return unwrapped.endsWith('.') ? unwrapped.slice(0, -1) : unwrapped;
}

/** Only globally routable addresses may be connected to by the public scanner. */
export function isPublicAddress(address: string): boolean {
  const normalized = normalizeHostname(address);
  const family = isIP(normalized);
  if (family === 4) return !blockedV4.check(normalized, 'ipv4');
  if (family !== 6) return false;

  // At present, ordinary globally routed IPv6 space is 2000::/3. Refusing future/special
  // ranges is safer than silently turning the scanner into a tunnel to them.
  const firstGroup = Number.parseInt(normalized.split(':', 1)[0] || '0', 16);
  if (firstGroup < 0x2000 || firstGroup > 0x3fff) return false;
  return !blockedV6.check(normalized, 'ipv6');
}

const defaultResolveHost: ResolveHost = async (hostname) => {
  const answers = await dnsLookup(hostname, { all: true, verbatim: true });
  return answers
    .filter((answer): answer is { address: string; family: 4 | 6 } => answer.family === 4 || answer.family === 6)
    .map(({ address, family }) => ({ address, family }));
};

function validateUrl(input: string | URL): URL {
  let url: URL;
  try {
    url = input instanceof URL ? new URL(input.toString()) : new URL(input);
  } catch {
    throw new SafeFetchError('url', 'Invalid URL');
  }
  if (!['http:', 'https:'].includes(url.protocol) || !url.hostname || url.username || url.password) {
    throw new SafeFetchError('url', 'Only credential-free HTTP(S) URLs are allowed');
  }
  return url;
}

function headerMap(headers: Record<string, string | string[] | undefined>): Headers {
  const result = new Headers();
  for (const [name, value] of Object.entries(headers)) {
    if (Array.isArray(value)) {
      for (const item of value) result.append(name, item);
    } else if (value !== undefined) {
      result.set(name, value);
    }
  }
  return result;
}

const nodeTransport: Transport = ({ url, method, address, family, signal }) =>
  new Promise((resolve, reject) => {
    const request = url.protocol === 'https:' ? httpsRequest : httpRequest;
    let settled = false;
    const req = request(
      url,
      {
        method,
        agent: false,
        headers: {
          Accept: 'text/html,application/javascript,text/plain;q=0.9,*/*;q=0.1',
          'Accept-Encoding': 'identity',
          'User-Agent': 'vibecoding.ge scanner (+https://vibecoding.ge)',
        },
        lookup: (_hostname, options, callback) => {
          if (typeof options === 'object' && options.all) {
            callback(null, [{ address, family }]);
            return;
          }
          callback(null, address, family);
        },
        ...(url.protocol === 'https:' && isIP(normalizeHostname(url.hostname)) === 0
          ? { servername: normalizeHostname(url.hostname) }
          : {}),
      },
      (response) => {
        settled = true;
        const cleanup = () => signal.removeEventListener('abort', abort);
        response.once('close', cleanup);
        resolve({
          status: response.statusCode ?? 0,
          headers: response.headers,
          body: response,
          cancel: () => response.destroy(),
        });
      },
    );

    const abort = () => {
      const reason = signal.reason instanceof Error ? signal.reason : new SafeFetchError('timeout', 'Request aborted');
      req.destroy(reason);
    };
    signal.addEventListener('abort', abort, { once: true });
    req.once('error', (error) => {
      signal.removeEventListener('abort', abort);
      if (!settled) reject(error);
    });
    req.end();
  });

async function readCappedBody(
  response: TransportResponse,
  maxBytes: number,
  signal: AbortSignal,
): Promise<{ body: string; bytes: number }> {
  if (maxBytes === 0) {
    response.cancel();
    return { body: '', bytes: 0 };
  }

  const chunks: Buffer[] = [];
  let bytes = 0;
  for await (const rawChunk of response.body) {
    if (signal.aborted) throw signal.reason;
    const chunk = Buffer.from(rawChunk);
    const remaining = maxBytes - bytes;
    if (remaining <= 0) {
      response.cancel();
      break;
    }
    if (chunk.length >= remaining) {
      chunks.push(chunk.subarray(0, remaining));
      bytes += remaining;
      response.cancel();
      break;
    }
    chunks.push(chunk);
    bytes += chunk.length;
  }
  return { body: Buffer.concat(chunks, bytes).toString('utf8'), bytes };
}

async function awaitWithAbort<T>(promise: Promise<T>, signal: AbortSignal): Promise<T> {
  if (signal.aborted) throw signal.reason;
  return new Promise<T>((resolve, reject) => {
    const abort = () => reject(signal.reason);
    signal.addEventListener('abort', abort, { once: true });
    promise.then(
      (value) => {
        signal.removeEventListener('abort', abort);
        resolve(value);
      },
      (error) => {
        signal.removeEventListener('abort', abort);
        reject(error);
      },
    );
  });
}

export function createSafeFetchSession(options: {
  resolveHost?: ResolveHost;
  transport?: Transport;
  limits?: Partial<SafeFetchLimits>;
} = {}) {
  const resolveHost = options.resolveHost ?? defaultResolveHost;
  const transport = options.transport ?? nodeTransport;
  const limits = { ...DEFAULT_LIMITS, ...options.limits };
  const startedAt = Date.now();
  let requestCount = 0;
  let totalBytes = 0;

  async function resolvePublic(url: URL): Promise<ResolvedAddress> {
    const hostname = normalizeHostname(url.hostname);
    const literalFamily = isIP(hostname);
    const answers: ResolvedAddress[] = literalFamily
      ? [{ address: hostname, family: literalFamily as 4 | 6 }]
      : await resolveHost(hostname).catch(() => {
          throw new SafeFetchError('dns', 'DNS resolution failed');
        });

    if (answers.length === 0) throw new SafeFetchError('dns', 'DNS returned no addresses');
    if (answers.some(({ address }) => !isPublicAddress(address))) {
      throw new SafeFetchError('private', 'Private or reserved address refused');
    }
    // Prefer IPv4 for predictable reachability; the exact validated address is pinned below.
    return answers.find(({ family }) => family === 4) ?? answers[0];
  }

  async function fetch(input: string | URL, fetchOptions: SafeFetchOptions = {}): Promise<SafeFetchResult> {
    const method = fetchOptions.method ?? 'GET';
    const perResponseLimit = Math.max(0, fetchOptions.maxBytes ?? DEFAULT_RESPONSE_BYTES);
    let url = validateUrl(input);

    for (let redirectCount = 0; ; redirectCount += 1) {
      if (redirectCount > limits.maxRedirects) {
        throw new SafeFetchError('redirect', 'Redirect limit exceeded');
      }
      if (requestCount >= limits.maxTotalRequests) {
        throw new SafeFetchError('budget', 'Total request budget exhausted');
      }

      const remainingTotalMs = startedAt + limits.totalTimeoutMs - Date.now();
      if (remainingTotalMs <= 0) throw new SafeFetchError('budget', 'Total time budget exhausted');
      const timeoutMs = Math.min(limits.requestTimeoutMs, remainingTotalMs);
      const timeoutCode: SafeFetchErrorCode = remainingTotalMs <= limits.requestTimeoutMs ? 'budget' : 'timeout';
      const controller = new AbortController();
      const timeoutError = new SafeFetchError(timeoutCode, 'Request timed out');
      const timer = setTimeout(() => controller.abort(timeoutError), timeoutMs);
      try {
        const pinned = await awaitWithAbort(resolvePublic(url), controller.signal);
        requestCount += 1;
        const response = await transport({
          url,
          method,
          address: pinned.address,
          family: pinned.family,
          signal: controller.signal,
        });

        if (REDIRECT_STATUSES.has(response.status)) {
          const locationValue = response.headers.location;
          const location = Array.isArray(locationValue) ? locationValue[0] : locationValue;
          response.cancel();
          if (!location) throw new SafeFetchError('redirect', 'Redirect has no location');
          try {
            url = validateUrl(new URL(location, url));
          } catch (error) {
            if (error instanceof SafeFetchError) throw error;
            throw new SafeFetchError('redirect', 'Invalid redirect URL');
          }
          continue;
        }

        const remainingBytes = limits.maxTotalBytes - totalBytes;
        if (method !== 'HEAD' && remainingBytes <= 0) {
          response.cancel();
          throw new SafeFetchError('budget', 'Total body budget exhausted');
        }
        const allowedBytes = method === 'HEAD' ? 0 : Math.min(perResponseLimit, remainingBytes);
        const { body, bytes } = await readCappedBody(response, allowedBytes, controller.signal);
        totalBytes += bytes;
        return {
          url: url.toString(),
          status: response.status,
          ok: response.status >= 200 && response.status < 300,
          headers: headerMap(response.headers),
          body,
        };
      } catch (error) {
        if (controller.signal.aborted) throw controller.signal.reason;
        if (error instanceof SafeFetchError) throw error;
        throw new SafeFetchError('network', 'Network request failed');
      } finally {
        clearTimeout(timer);
      }
    }
  }

  return { fetch };
}
