import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { BlogPost } from '../types'

const BLOG_LOCALES = new Set(['ka', 'en', 'ru', 'de', 'tr', 'fa', 'zh'])
const FALSE_VALUES = new Set(['false', 'no', 'off', '0'])

// Configure marked: GFM features + leave existing HTML blocks/tags intact.
marked.setOptions({
    gfm: true,
    breaks: false,
})

function renderMarkdown(raw: string): string {
    // marked.parse is synchronous when no async extensions are loaded.
    const html = marked.parse(raw) as string
    // Strip any JSON-LD <script> authored inside the MDX body. Blog structured data
    // (Article + FAQPage + BreadcrumbList) is emitted ONCE, typed, from blog/[slug]/page.tsx.
    // A raw copy left in the rendered HTML produced a DUPLICATE FAQPage that Semrush flagged
    // as a structured-data markup error.
    return html.replace(
        /<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
        '',
    )
}

function getLocaleDir(locale: string): string {
    // Keep the fixed content root visible to build-time file tracing.
    return path.join(process.cwd(), 'content/blog', BLOG_LOCALES.has(locale) ? locale : '__unsupported_locale__')
}

function isExplicitlyFalse(value: unknown): boolean {
    if (value === false || value === 0) return true
    return typeof value === 'string' && FALSE_VALUES.has(value.trim().toLowerCase())
}

function isPublishedFile(fullPath: string): boolean {
    try {
        const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
        const status = typeof data.status === 'string' ? data.status.toLowerCase() : ''
        return !isExplicitlyFalse(data.indexable) && status !== 'draft' && status !== 'editorial-hold'
    } catch {
        return false
    }
}

export function getPostSlugs(locale: string = 'ka'): string[] {
    const dir = getLocaleDir(locale)
    if (!fs.existsSync(dir)) {
        return []
    }
    return fs.readdirSync(dir).filter(f => f.endsWith('.mdx') && isPublishedFile(path.join(dir, f)))
}

export function getPostBySlug(slug: string, locale: string = 'ka', fields: string[] = []): Partial<BlogPost> {
    const realSlug = slug.replace(/\.mdx$/, '')
    if (!realSlug || realSlug.includes('..') || /[/\\\0]/.test(realSlug)) return {}
    const fullPath = path.join(getLocaleDir(locale), `${realSlug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        return {}
    }

    if (!isPublishedFile(fullPath)) {
        return {}
    }

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        const items: Record<string, unknown> = {}

        // Ensure only the minimal needed data is exposed
        fields.forEach((field) => {
            if (field === 'slug') {
                items[field] = realSlug
            }
            if (field === 'id') {
                items[field] = realSlug
            }
            if (field === 'content') {
                items[field] = renderMarkdown(content)
            }

            if (typeof data[field] !== 'undefined') {
                items[field] = data[field]
            }
        })

        items.locale = locale

        return items as Partial<BlogPost>
    } catch (e) {
        console.error(`Error reading file ${fullPath}`, e)
        return {}
    }
}

export function getAllPosts(locale: string = 'ka', fields: string[] = []): Partial<BlogPost>[] {
    const slugs = getPostSlugs(locale)
    const posts = slugs
        .map((slug) => getPostBySlug(slug, locale, fields))
        .filter((post) => post.slug || post.id)
        // sort posts by date in descending order
        .sort((post1, post2) => {
            const first = new Date(post1.date || 0).getTime() || 0
            const second = new Date(post2.date || 0).getTime() || 0
            return second - first || String(post1.slug).localeCompare(String(post2.slug), 'en')
        })
    return posts
}
