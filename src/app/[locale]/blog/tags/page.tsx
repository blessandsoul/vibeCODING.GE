import { getAllTags } from '@/features/blog/lib/api'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { PRODUCT_OG_IMAGE, PRODUCT_OG_PATH } from "@/lib/product-og";
import Link from 'next/link'
import { buildAlternates } from '@/i18n/seo-locales'
import { APP_NAME } from '@/lib/constants/app.constants'
import { getAiNowHomeCopy } from '@/features/home/components/ainow/AiNowHomeCopy'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'blog' })
    const heading = locale === 'ka' ? 'თემები' : 'Tags'

    const title = `${heading}, ${t('title')} | ${APP_NAME}`
    const description = getAiNowHomeCopy(locale).hero.description

    const alternates = buildAlternates('/blog/tags', locale)
    const url = alternates.canonical

    return {
        title: { absolute: title },
        description,
        alternates,
        openGraph: { title, description, url, siteName: APP_NAME, type: 'website', images: [PRODUCT_OG_IMAGE] },
        twitter: { card: 'summary', title, description, images: [PRODUCT_OG_PATH] },
        // Thin aggregation page, crawlable for discovery, kept out of the index.
        robots: { index: false, follow: true },
    }
}

export default async function TagsIndexPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const tags = await getAllTags(locale)
    const t = await getTranslations({ locale, namespace: 'blog' })
    const heading = locale === 'ka' ? 'თემები' : 'Tags'

    const tagsBase = locale === 'ka' ? '/blog/tags' : `/${locale}/blog/tags`

    return (
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
                <h1 className="font-display text-3xl font-extrabold tracking-tight leading-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white pb-1">
                    {heading}
                </h1>
                <p className="text-lg leading-7 text-slate-600 dark:text-slate-300">
                    {t('subtitle')}
                </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
                {tags.map(({ tag, slug, count }) => {
                    // Scale font-size by count (min 0.9rem, max 1.6rem)
                    const maxCount = tags[0]?.count ?? 1
                    const scale = 0.9 + (count / maxCount) * 0.7
                    return (
                        <Link
                            key={slug}
                            href={`${tagsBase}/${slug}`}
                            className="dodo-glass-box dodo-glass-pill inline-flex min-h-11 max-w-full items-center px-4 py-2 text-slate-900 dark:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                            style={{ fontSize: `${scale}rem` }}
                        >
                            {tag}
                            <span className="ml-2 text-slate-600 dark:text-slate-300 text-sm">({count})</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
