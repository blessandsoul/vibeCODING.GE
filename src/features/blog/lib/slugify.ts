// Client-safe tag slugify (no fs deps).
// Keep in sync with api.ts (server-side re-exports from here).
export function tagToSlug(tag: string): string {
    return tag
        .toLowerCase()
        .trim()
        .replace(/[\s/]+/g, '-')
        .replace(/[^\p{L}\p{N}\-]+/gu, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
}
