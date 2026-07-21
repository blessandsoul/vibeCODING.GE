export type Severity = 'critical' | 'major' | 'minor';

export type Finding = {
  id: string;
  severity: Severity;
  title: string;
  detail: string;
  /** Always redacted. Never the live secret. */
  evidence?: string;
};

const SECRET_PATTERNS: {
  id: string;
  re: RegExp;
  severity: Severity;
  title: string;
  detail: string;
}[] = [
  {
    id: 'openai-key',
    re: /\bsk-[A-Za-z0-9_-]{20,}\b/g,
    severity: 'critical',
    title: 'An OpenAI-style secret key is in your client bundle',
    detail:
      'This key is in the JavaScript every visitor downloads. Anyone can read it and spend your money with it. Rotate it now.',
  },
  {
    id: 'google-key',
    re: /\bAIza[0-9A-Za-z_-]{35}\b/g,
    severity: 'major',
    title: 'A Google API key is in your client bundle',
    detail:
      'Google keys can be public only when both referrer and API restrictions are configured. Verify those restrictions before launch.',
  },
  {
    id: 'stripe-live',
    re: /\bsk_live_[A-Za-z0-9]{16,}\b/g,
    severity: 'critical',
    title: 'A live Stripe secret key is in your client bundle',
    detail: 'This key can move money. Rotate it and keep its replacement on the server only.',
  },
  {
    id: 'aws-key',
    re: /\bAKIA[0-9A-Z]{16}\b/g,
    severity: 'critical',
    title: 'An AWS access key is in your client bundle',
    detail: 'Rotate it now and review its recent use in CloudTrail.',
  },
];

const JWT_RE = /\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g;

export function redactSecret(secret: string): string {
  if (secret.length <= 10) return '****';
  return `${secret.slice(0, 6)}${'*'.repeat(8)}${secret.slice(-4)}`;
}

function decodeJwtRole(token: string): string | null {
  try {
    const payload = token.split('.')[1];
    if (!payload) return null;
    const json = Buffer.from(payload, 'base64url').toString('utf8');
    const parsed = JSON.parse(json) as { role?: string };
    return typeof parsed.role === 'string' ? parsed.role : null;
  } catch {
    return null;
  }
}

export function analyzeClientBundle(haystack: string): Finding[] {
  const findings: Finding[] = [];
  const seen = new Set<string>();

  for (const pattern of SECRET_PATTERNS) {
    const hit = haystack.match(pattern.re)?.[0];
    if (!hit || seen.has(pattern.id)) continue;
    seen.add(pattern.id);
    findings.push({
      id: pattern.id,
      severity: pattern.severity,
      title: pattern.title,
      detail: pattern.detail,
      evidence: redactSecret(hit),
    });
  }

  for (const token of haystack.match(JWT_RE) ?? []) {
    if (decodeJwtRole(token) !== 'service_role' || seen.has('supabase-service')) continue;
    seen.add('supabase-service');
    findings.push({
      id: 'supabase-service',
      severity: 'critical',
      title: 'Your Supabase service-role key is in the browser',
      detail:
        'This key bypasses row-level security. Rotate it now and move the replacement to a server-only environment variable.',
      evidence: redactSecret(token),
    });
  }

  // Supabase anon keys are public by design. An outside bundle scan cannot prove whether RLS is
  // configured correctly, so anon presence is deliberately omitted from scored findings.
  return findings;
}

export function buildScanReport(findings: Finding[]) {
  const weight = { critical: 34, major: 16, minor: 5 } as const;
  const penalty = findings.reduce((sum, finding) => sum + weight[finding.severity], 0);
  return {
    score: Math.max(0, 100 - penalty),
    findings,
    counts: {
      critical: findings.filter((finding) => finding.severity === 'critical').length,
      major: findings.filter((finding) => finding.severity === 'major').length,
      minor: findings.filter((finding) => finding.severity === 'minor').length,
    },
  };
}
