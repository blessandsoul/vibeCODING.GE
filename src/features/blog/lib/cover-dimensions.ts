export type CoverDimensions = { width: number; height: number }

const COVER_DIMENSIONS: Record<string, CoverDimensions> = {
    "/images/blog-covers/cors-wildcard-with-credentials-in-an-ai-built-app.png": { width: 1600, height: 900 },
    "/images/blog-covers/csp-da-nonce-aiit-shekmnil-apshi.png": { width: 1672, height: 941 },
    "/images/blog-covers/csrf-state-changing-actions.png": { width: 1600, height: 900 },
    "/images/blog-covers/database-backups-for-a-production-vibe-coded-application.png": { width: 1600, height: 900 },
    "/images/blog-covers/dependency-and-supply-chain-checks-for-ai-generated-code.png": { width: 1672, height: 941 },
    "/images/blog-covers/error-monitoring-for-lovable-bolt-and-replit-apps.png": { width: 1600, height: 900 },
    "/images/blog-covers/logging-audit-trail.png": { width: 1600, height: 900 },
    "/images/blog-covers/prevent-duplicate-subscriptions-and-payment-events.png": { width: 1600, height: 900 },
    "/images/blog-covers/production-handover-checklist-for-a-nontechnical-founder.png": { width: 1600, height: 900 },
    "/images/blog-covers/protect-admin-routes-beyond-hiding-the-menu-link.png": { width: 1672, height: 941 },
    "/images/blog-covers/rate-limiting-public-forms-and-api-endpoints.png": { width: 1672, height: 941 },
    "/images/blog-covers/secure-file-uploads-in-an-ai-generated-application.png": { width: 1672, height: 941 },
    "/images/blog-covers/server-side-input-validation-injection.png": { width: 1600, height: 900 },
    "/images/blog-covers/session-cookie-and-token-storage-security-checklist.png": { width: 1672, height: 941 },
    "/images/blog-covers/ssrf-url-fetch.png": { width: 1600, height: 900 },
    "/images/blog-covers/staging-da-production-secrets-vibe-coded-apshi.png": { width: 1672, height: 941 },
    "/images/blog-covers/technical-due-diligence-for-a-vibe-coded-startup.png": { width: 1672, height: 941 },
    "/images/blog-covers/test-whether-users-can-read-another-users-supabase-rows.png": { width: 1672, height: 941 },
    "/images/blog-covers/webhookis-khelmotseris-shemotsmeba-aiit-shekmnil-apshi.png": { width: 1672, height: 941 },
    "/images/blog-covers/xss-untrusted-html.png": { width: 1600, height: 900 },
}

export function getCoverDimensions(coverPath: string): CoverDimensions | undefined {
    return Object.hasOwn(COVER_DIMENSIONS, coverPath) ? COVER_DIMENSIONS[coverPath] : undefined
}
