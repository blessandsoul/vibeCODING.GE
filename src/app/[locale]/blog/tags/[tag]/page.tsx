import { getTagBySlug, getAllTags } from '@/features/blog/lib/api'
import { BlogCard } from '@/features/blog/components/BlogCard'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { PRODUCT_OG_IMAGE, PRODUCT_OG_PATH } from "@/lib/product-og";
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { INDEXED_LOCALES, localeUrl } from '@/i18n/seo-locales'
import { APP_NAME } from '@/lib/constants/app.constants'
import { getAiNowHomeCopy } from '@/features/home/components/ainow/AiNowHomeCopy'

const LOCALES = INDEXED_LOCALES
const BASE_URL = localeUrl('ka')

// Tag pages are generated from the current finite tag registry.
export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
    const params: { locale: string; tag: string }[] = []
    for (const locale of LOCALES) {
        const tags = await getAllTags(locale)
        for (const { slug } of tags) {
            params.push({ locale, tag: slug })
        }
    }
    return params
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ tag: string; locale: string }>
}): Promise<Metadata> {
    const { tag, locale } = await params
    const result = await getTagBySlug(tag, locale)
    if (!result) notFound()

    const { tag: tagName, posts } = result
    const t = await getTranslations({ locale, namespace: 'blog' })

    const title = `${tagName}, ${t('title')} | ${APP_NAME}`
    const description =
        locale === 'ka'
            ? `${posts.length} სტატია თემაზე "${tagName}". ${getAiNowHomeCopy(locale).hero.description}`
            : locale === 'ru'
                ? `${posts.length} статей по теме "${tagName}". ${getAiNowHomeCopy(locale).hero.description}`
                : `${posts.length} articles about "${tagName}". ${getAiNowHomeCopy(locale).hero.description}`

    const url = localeUrl(locale, `/blog/tags/${tag}`)

    // IMPORTANT: tag slugs are locale-specific (ai-marketingi ≠ ai-marketing ≠ ии-маркетинг).
    // So cross-locale hreflang would point to 404s, omit languages entirely.
    // Only self-reference canonical; Google will treat each locale tag page as independent.
    return {
        title: { absolute: title },
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: APP_NAME,
            type: 'website',
            images: [PRODUCT_OG_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [PRODUCT_OG_PATH],
        },
        // Tag pages are thin aggregation pages, keep crawlable for link discovery
        // but out of the index to avoid "crawled, not indexed" noise.
        robots: { index: false, follow: true },
    }
}

export default async function TagPage({
    params,
}: {
    params: Promise<{ tag: string; locale: string }>
}) {
    const { tag, locale } = await params
    const result = await getTagBySlug(tag, locale)
    if (!result) notFound()

    const { tag: tagName, posts } = result
    const t = await getTranslations({ locale, namespace: 'blog' })

    const tagsLabel = locale === 'ka' ? 'თემები' : 'Tags'
    const blogHref = locale === 'ka' ? '/blog' : `/${locale}/blog`
    const tagsHref = locale === 'ka' ? '/blog/tags' : `/${locale}/blog/tags`
    const servicesHref = locale === 'ka' ? '/services' : `/${locale}/services`
    const startHref = locale === 'ka' ? '/start' : `/${locale}/start`

    const homeCopy = getAiNowHomeCopy(locale)
    const ctaTitle = homeCopy.closingCta.title
    const ctaSubtitle = homeCopy.closingCta.description
    const ctaButton = homeCopy.hero.primaryCta
    const ctaSecondary =
        locale === 'ka' ? 'სერვისები' : locale === 'ru' ? 'Услуги' : 'Services'

    // CollectionPage JSON-LD for AI Overviews / SEO
    const collectionJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: tagName,
        description: `Articles tagged with "${tagName}"`,
        url:
            locale === 'ka'
                ? `${BASE_URL}/blog/tags/${tag}`
                : `${BASE_URL}/${locale}/blog/tags/${tag}`,
        inLanguage: locale,
        isPartOf: {
            '@type': 'WebSite',
            name: APP_NAME,
            url: BASE_URL,
        },
        mainEntity: {
            '@type': 'ItemList',
            numberOfItems: posts.length,
            itemListElement: posts.map((p, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                url:
                    locale === 'ka'
                        ? `${BASE_URL}/blog/${p.slug}`
                        : `${BASE_URL}/${locale}/blog/${p.slug}`,
                name: p.title,
            })),
        },
    }

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}${blogHref}` },
            { '@type': 'ListItem', position: 3, name: tagsLabel, item: `${BASE_URL}${tagsHref}` },
            { '@type': 'ListItem', position: 4, name: tagName },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
            />
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16 lg:px-8">
                {/* Breadcrumb */}
                <nav className="text-sm text-slate-600 dark:text-slate-300 mb-6 flex flex-wrap gap-2 justify-center">
                    <Link href={blogHref} className="hover:text-blue-600 dark:hover:text-blue-300">
                        {t('title')}
                    </Link>
                    <span>/</span>
                    <Link href={tagsHref} className="hover:text-blue-600 dark:hover:text-blue-300">
                        {tagsLabel}
                    </Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white">{tagName}</span>
                </nav>

                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <h1 className="font-display text-3xl font-extrabold tracking-tight leading-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white pb-1">
                        {tagName}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {locale === 'ka' ? `${posts.length} სტატია` : `${posts.length} ${posts.length === 1 ? 'article' : 'articles'}`}
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-600 dark:text-slate-300">{t('noPostsForTag')}</p>
                    </div>
                )}

                {/* Conversion CTA, turns tag-page traffic into leads */}
                <div className="dodo-glass-card mt-12 max-w-4xl mx-auto p-5 sm:p-8 md:p-12 text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">{ctaTitle}</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">{ctaSubtitle}</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            href={startHref}
                            className="dodo-glass-box dodo-glass-pill inline-flex min-h-11 items-center px-6 py-3 text-slate-900 dark:text-white font-semibold"
                        >
                            {ctaButton}
                        </Link>
                        <Link
                            href={servicesHref}
                            className="dodo-glass-box dodo-glass-pill inline-flex min-h-11 items-center px-6 py-3 text-slate-900 dark:text-white font-semibold"
                        >
                            {ctaSecondary}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
