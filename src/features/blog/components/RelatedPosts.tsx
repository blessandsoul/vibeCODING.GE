'use client'

import { AiNowImage as Image } from '@/features/home/components/ainow/AiNowImage'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { BlogPost } from '../types'

interface RelatedPostsProps {
    posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
    const t = useTranslations('blog')
    if (!posts.length) return null

    return (
        <aside className="dodo-glass-card mt-8 min-w-0 overflow-hidden p-5 sm:p-7" aria-label="Related articles">
            <div className="mb-5">
                <h2 className="font-headline text-2xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">{t('relatedPosts')}</h2>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
                {posts.map((post, index) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className={`group flex min-w-0 gap-3 rounded-2xl border border-slate-200/80 bg-white/60 p-3 outline-none transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-[0.96] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/40 dark:hover:bg-white/[0.06] ${index === 0 ? 'sm:col-span-2' : ''}`}
                    >
                        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 dark:border-white/10 dark:bg-slate-900 sm:size-20">
                            <Image src={post.coverImage} alt="" fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105" unoptimized={post.coverImage.startsWith('/api/og')} />
                        </div>
                        <div className="min-w-0">
                            <h3 className="line-clamp-3 break-words text-sm font-semibold leading-5 text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-200">{post.title}</h3>
                            <time dateTime={post.date} className="mt-1 block truncate text-xs text-slate-400">{post.readTime || post.date}</time>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    )
}
