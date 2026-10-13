'use client'

import { AiNowImage as Image } from '@/features/home/components/ainow/AiNowImage'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { BlogPost as BlogPostType } from '../types'
import { Ico } from '@/components/common/Ico'
import { TableOfContents } from './TableOfContents'
import { tagToSlug } from '../lib/slugify'

/*
 * DESIGN PLAN
 * Theme: aiNOW OBSIDIAN editorial reading surface.
 * Hero: visual-first cover in a quiet glass frame with compact reading metadata.
 * Structure: constrained reading rail, responsive contents navigation, and a clear business bridge.
 * Signature: framed cover crop, subtle blueprint texture, and tactile glass actions.
 * Motion: only small hover and press feedback, with no layout-shifting transitions.
 */

interface BlogPostProps {
    post: BlogPostType
}

const pillTones = [
    'border-blue-200/80 bg-blue-50/75 text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300',
    'border-pink-200/80 bg-pink-50/75 text-pink-700 dark:border-pink-400/20 dark:bg-pink-500/10 dark:text-pink-300',
    'border-emerald-200/80 bg-emerald-50/75 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300',
]

function safeDate(value: string): string {
    const date = new Date(value)
    return Number.isNaN(date.getTime()) ? value : date.toISOString().slice(0, 10)
}

export function BlogPost({ post }: BlogPostProps) {
    const t = useTranslations('blog')
    const tNav = useTranslations('nav')
    const date = safeDate(post.date)

    return (
        <main className="ainow-blueprint-bg min-w-0 overflow-x-clip">
            <article className="mx-auto min-w-0 max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <header className="dodo-glass-card relative min-w-0 overflow-hidden p-5 sm:p-8 lg:p-10">
                    <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true" />
                    <div className="relative z-10">
                        <nav aria-label="Breadcrumb" className="mb-7 min-w-0 overflow-hidden">
                            <ol className="flex min-w-0 items-center gap-2 overflow-hidden text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">
                                <li className="shrink-0">
                                    <Link href="/" className="inline-flex items-center gap-1.5 rounded-full px-1 py-1 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                        <Ico name="solar:home-bold-duotone" className="size-3.5" />
                                        <span className="sr-only">{tNav('home')}</span>
                                    </Link>
                                </li>
                                <li aria-hidden="true" className="shrink-0 text-slate-300 dark:text-slate-600">/</li>
                                <li className="shrink-0">
                                    <Link href="/blog" className="rounded-full px-1 py-1 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                        {t('title')}
                                    </Link>
                                </li>
                                <li aria-hidden="true" className="shrink-0 text-slate-300 dark:text-slate-600">/</li>
                                <li className="min-w-0 truncate px-1 py-1 font-medium text-slate-900 dark:text-white" aria-current="page">{post.title}</li>
                            </ol>
                        </nav>

                        <div className="grid min-w-0 items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(12rem,0.28fr)] lg:gap-12">
                            <div className="min-w-0">
                                <div className="mb-5 flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <Link
                                            key={tag}
                                            href={`/blog/tags/${tagToSlug(tag)}`}
                                            className={`max-w-full rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-[0.96] ${pillTones[index % pillTones.length]}`}
                                        >
                                            <span className="block max-w-[16rem] truncate">{tag}</span>
                                        </Link>
                                    ))}
                                </div>
                                <h1 data-article-title="true" className="font-headline max-w-4xl text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                                    {post.title}
                                </h1>
                                {post.excerpt && (
                                    <p data-article-summary="true" className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-xl sm:leading-8">
                                        {post.excerpt}
                                    </p>
                                )}
                            </div>

                            <dl className="grid min-w-0 grid-cols-2 gap-3 border-t border-slate-200/80 pt-4 text-sm dark:border-white/10 lg:block lg:space-y-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                                {post.author?.name && (
                                    <div className="min-w-0">
                                        <dt className="eyebrow text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">ავტორი</dt>
                                        <dd className="mt-1 truncate font-semibold text-slate-900 dark:text-white">{post.author.name}</dd>
                                    </div>
                                )}
                                <div className="min-w-0">
                                        <dt className="eyebrow text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">კითხვის დრო</dt>
                                    <dd className="mt-1 truncate font-semibold text-slate-900 dark:text-white">{post.readTime || '5 წთ'}</dd>
                                </div>
                                <div className="col-span-2 min-w-0 sm:col-span-1 lg:col-span-1">
                                    <dt className="eyebrow text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">გამოქვეყნდა</dt>
                                    <dd className="mt-1 truncate font-semibold text-slate-900 dark:text-white"><time dateTime={date}>{date}</time></dd>
                                </div>
                            </dl>
                        </div>

                        <figure className="relative mt-8 aspect-[16/9] min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900 sm:mt-10 sm:rounded-3xl">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                priority
                                sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 3rem), 1120px"
                                className="object-cover"
                                unoptimized={post.coverImage.startsWith('/api/og')}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10" aria-hidden="true" />
                            {post.coverCredit && String(post.coverCredit.source) !== 'generated' && (
                                <figcaption className="absolute bottom-2 right-2 max-w-[calc(100%-1rem)] truncate rounded-full border border-white/20 bg-slate-950/55 px-3 py-1.5 text-[10px] text-white/85 backdrop-blur-md">
                                    <a href={post.coverCredit.creditUrl} target="_blank" rel="nofollow noopener noreferrer" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{post.coverCredit.credit}</a>
                                    {' · '}
                                    <a href={post.coverCredit.sourceUrl} target="_blank" rel="nofollow noopener noreferrer" className="capitalize hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{post.coverCredit.source}</a>
                                </figcaption>
                            )}
                        </figure>
                    </div>
                </header>

                <div className="mt-8 grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(13rem,0.28fr)_minmax(0,1fr)] lg:gap-12">
                    <aside className="hidden min-w-0 lg:sticky lg:top-24 lg:block">
                        <TableOfContents content={post.content} />
                    </aside>

                    <div className="min-w-0">
                        <div className="mb-6 min-w-0 lg:hidden">
                            <TableOfContents content={post.content} />
                        </div>
                        <section
                            data-article-content="true"
                            className="dodo-glass-card min-w-0 overflow-hidden p-5 sm:p-8 lg:p-10 [&_*]:max-w-full [&_a]:break-words [&_code]:break-words [&_img]:h-auto [&_img]:max-w-full [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto prose prose-slate max-w-none break-words prose-headings:font-headline prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.035em] prose-headings:text-slate-950 dark:prose-invert dark:prose-headings:text-white prose-p:leading-8 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:[overflow-wrap:anywhere] prose-a:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline dark:prose-a:text-blue-300 dark:hover:prose-a:text-blue-200 prose-img:rounded-2xl prose-img:border prose-img:border-slate-200/80 prose-img:shadow-lg dark:prose-img:border-white/10 prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-li:[overflow-wrap:anywhere] prose-strong:text-slate-950 dark:prose-strong:text-white prose-blockquote:rounded-r-2xl prose-blockquote:border-l-4 prose-blockquote:border-blue-500/60 prose-blockquote:bg-blue-50/70 prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:text-slate-700 dark:prose-blockquote:bg-blue-500/10 dark:prose-blockquote:text-slate-200 prose-code:rounded-md prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-blue-700 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-white/10 dark:prose-code:text-blue-200 prose-pre:rounded-2xl prose-pre:border prose-pre:border-slate-200/80 prose-pre:bg-slate-950 prose-pre:p-4 dark:prose-pre:border-white/10 prose-hr:border-slate-200/80 dark:prose-hr:border-white/10 [&>*:first-child]:!mt-0 sm:prose-lg sm:prose-headings:text-balance prose-h2:mt-12 prose-h2:text-2xl prose-h2:leading-tight sm:prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-xl prose-table:text-sm sm:prose-table:text-base"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>

                <footer className="mt-8 flex min-w-0 flex-col gap-5 border-t border-slate-200/80 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                            <Link key={tag} href={`/blog/tags/${tagToSlug(tag)}`} className={`max-w-full rounded-full border px-3 py-1 text-xs font-semibold transition-[background-color,border-color,color,transform] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-[0.96] ${pillTones[index % pillTones.length]}`}>
                                #{tag}
                            </Link>
                        ))}
                    </div>
                    <Link href="/blog" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-300 dark:hover:text-blue-200">
                        <span aria-hidden="true">←</span> {t('backToBlog')}
                    </Link>
                </footer>
            </article>
        </main>
    )
}
