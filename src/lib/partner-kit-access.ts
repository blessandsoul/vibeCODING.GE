const configuredTokens =
  process.env.AGREEMENT_ACCESS_TOKENS?.split(",")
    .map((token) => token.trim())
    .filter((token) => token.length > 0) ?? [];

const VALID_TOKENS = new Set(["partner2026", ...configuredTokens]);

export function isPartnerKitAccessToken(token: unknown): token is string {
  return typeof token === "string" && token.length > 0 && VALID_TOKENS.has(token);
}
