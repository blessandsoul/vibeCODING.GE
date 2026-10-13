import { getPostWithFallback, getRelatedPosts, getAvailableLocales, getPostSlugs } from '@/features/blog/lib/api'
import { BlogPost } from '@/features/blog/components/BlogPost'
import { RelatedPosts } from '@/features/blog/components/RelatedPosts'
import { ServiceCrossLink } from '@/features/blog/components/ServiceCrossLink'
import { ReadingProgress } from '@/features/blog/components/ReadingProgress'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { INDEXED_LOCALES, isIndexedLocale, localeUrl } from '@/i18n/seo-locales'
import { APP_DOMAIN, APP_NAME } from '@/lib/constants/app.constants'
import { getCoverDimensions } from '@/features/blog/lib/cover-dimensions'

const BASE_URL = `https://${APP_DOMAIN}`
const OG_LOCALES: Record<string, string> = { ka: 'ka_GE', en: 'en_US', ru: 'ru_RU', de: 'de_DE', tr: 'tr_TR', fa: 'fa_IR', zh: 'zh_CN' }

function toAbsoluteUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) return url
    return `${BASE_URL}${url.startsWith('/') ? url : `/${url}`}`
}

// Keep the <title> within ~60 chars INCLUDING the "%s | aiNOW" template suffix (8 chars) the root
// layout appends, so Semrush stops flagging long titles. og:title / twitter keep the full title.
function clampTitle(title: string, max = 52): string {
    if (title.length <= max) return title
    const cut = title.slice(0, max)
    const lastSpace = cut.lastIndexOf(' ')
    const clipped = lastSpace > 20 ? cut.slice(0, lastSpace) : cut
    // strip a trailing separator so a clamp never leaves a dangling comma / colon / dash
    return clipped.replace(/[\s.,:;!?·–—-]+$/u, '')
}

// Keep the meta description within Google's ~160 char display window; a clamp ends on a word
// boundary with an ellipsis. og:description / twitter keep the full excerpt.
function clampDescription(text: string, max = 160): string {
    if (text.length <= max) return text
    const cut = text.slice(0, max - 3)
    const lastSpace = cut.lastIndexOf(' ')
    const body = (lastSpace > 60 ? cut.slice(0, lastSpace) : cut).replace(/[\s.,:;!?·–—-]+$/u, '')
    return body + '...'
}

// Static generation, MDX content is build-time. New posts require rebuild OR rely on ISR fallback.
// Every authored slug is generated for its authored locales. Slugs with a
// Georgian source are also generated for every routing locale because
// getPostWithFallback intentionally serves the Georgian copy there (noindex).
// Reject everything else before streaming so unknown article URLs are real 404s.
export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
    const authoredLocalesBySlug = new Map<string, Set<string>>()

    for (const locale of INDEXED_LOCALES) {
        for (const file of getPostSlugs(locale)) {
            const slug = file.replace(/\.mdx$/, '')
            const authoredLocales = authoredLocalesBySlug.get(slug) ?? new Set<string>()
            authoredLocales.add(locale)
            authoredLocalesBySlug.set(slug, authoredLocales)
        }
    }

    const params: { locale: string; slug: string }[] = []
    for (const [slug, authoredLocales] of authoredLocalesBySlug) {
        const locales = authoredLocales.has('ka') ? INDEXED_LOCALES : [...authoredLocales]
        for (const locale of locales) {
            params.push({ locale, slug })
        }
    }
    return params
}

// Generate full SEO metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
    const { slug, locale } = await params
    const result = await getPostWithFallback(slug, locale)

    if (!result) {
        notFound()
    }

    const { post, isFallback } = result
    const publicAvailableLocales = getAvailableLocales(slug).filter((candidate) => isIndexedLocale(candidate))

    const currentUrl = locale === 'ka'
        ? `${BASE_URL}/blog/${slug}`
        : `${BASE_URL}/${locale}/blog/${slug}`

    // Fix duplicate content: if fallback, canonical points to original (ka) version.
    // This tells Google the current URL is NOT the master, consolidates ranking signals.
    const kaUrl = `${BASE_URL}/blog/${slug}`
    const canonical = isFallback || !isIndexedLocale(locale) ? kaUrl : currentUrl

    // A permanent article cover is shared by the page, JSON-LD and social cards.
    // It avoids a second dynamic card that can drift from the actual article visual.
    const ogImage = toAbsoluteUrl(post.coverImage)

    const languages: Record<string, string> = {}
    for (const loc of publicAvailableLocales) {
        languages[loc] = loc === 'ka'
            ? `${BASE_URL}/blog/${slug}`
            : `${BASE_URL}/${loc}/blog/${slug}`
    }
    // x-default points to Georgian (primary market)
    if (publicAvailableLocales.includes('ka')) {
        languages['x-default'] = kaUrl
    } else if (publicAvailableLocales[0]) {
        languages['x-default'] = languages[publicAvailableLocales[0]]
    }

    return {
        title: clampTitle(post.title),
        description: clampDescription(post.excerpt),
        alternates: {
            canonical,
            languages,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: canonical,
            siteName: APP_NAME,
            images: [{
                url: ogImage,
                ...getCoverDimensions(post.coverImage),
                alt: post.title,
            }],
            type: 'article',
            publishedTime: post.date,
            authors: [post.author.name],
            tags: post.tags || [],
            locale: OG_LOCALES[post.locale || locale] || 'ka_GE',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [ogImage],
        },
        robots: {
            // Fallback pages show duplicate content, let canonical consolidate signals
            // but keep indexable so they're discoverable via the language switcher.
            index: isIndexedLocale(locale) && !isFallback,
            follow: true,
        },
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await params
    const result = await getPostWithFallback(slug, locale)

    if (!result) {
        notFound()
    }

    const { post, isFallback } = result
    const relatedPosts = await getRelatedPosts(slug, locale, 3)
    const t = await getTranslations({ locale, namespace: 'blog' })

    const contentLocale = post.locale || locale
    const articleUrl = localeUrl(contentLocale, `/blog/${slug}`)
    const organizationAuthor = /^ainow(?:$|[\s-])/i.test(post.author.name)
    // Article JSON-LD
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: toAbsoluteUrl(post.coverImage),
        datePublished: post.date,
        // `updated` frontmatter when the post has been revised, otherwise the publish date.
        // This was hard-wired to post.date, which meant a rewrite of an evergreen article
        // carried zero freshness signal.
        dateModified: post.updated || post.date,
        inLanguage: post.locale || locale,
        author: {
            '@type': organizationAuthor ? 'Organization' : 'Person',
            name: post.author.name,
            ...(!organizationAuthor && post.author.role ? { jobTitle: post.author.role } : {}),
            url: `${BASE_URL}/about`,
        },
        publisher: {
            '@type': 'Organization',
            name: 'aiNOW',
            url: BASE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/icon.svg`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleUrl,
        },
        keywords: (post.tags || []).join(', '),
        wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
        articleSection: (post.tags || [])[0],
    }

    // FAQPage JSON-LD, extract from article content
    const faqRegex = /<h3[^>]*id="faq-\d+"[^>]*>([^<]+)<\/h3>\s*<p>([^<]+(?:<[^/][^>]*>[^<]*<\/[^>]+>)*[^<]*)<\/p>/g
    const faqItems: { question: string; answer: string }[] = []
    let faqMatch
    while ((faqMatch = faqRegex.exec(post.content)) !== null) {
        faqItems.push({
            question: faqMatch[1].trim(),
            answer: faqMatch[2].replace(/<[^>]*>/g, '').trim(),
        })
    }

    const faqJsonLd = faqItems.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    } : null

    // BreadcrumbList JSON-LD
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: localeUrl(contentLocale) },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: localeUrl(contentLocale, '/blog') },
            { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
        ],
    }

    return (
        <>
            <ReadingProgress />
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            {isFallback && (
                <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8 pt-8">
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-center text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                        {t('fallbackNotice')}
                    </div>
                </div>
            )}
            <BlogPost post={post} />
            <div className="mx-auto w-full max-w-[1180px] min-w-0 px-4 pb-20 sm:px-6 lg:px-8">
                <ServiceCrossLink tags={post.tags || []} locale={locale} />
                <RelatedPosts posts={relatedPosts} />
            </div>
        </>
    )
}
