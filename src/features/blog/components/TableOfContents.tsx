'use client'

import { useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils'
import { Ico } from '@/components/common/Ico'

interface TOCItem {
    id: string
    text: string
    level: number
}

interface TableOfContentsProps {
    content: string
}

const emptySubscribe = () => () => {}

function slugifyHeading(text: string, index: number): string {
    const slug = text.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')
    return slug ? `article-${slug}` : `article-heading-${index}`
}

export function TableOfContents({ content }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState('')
    const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false)

    const items = useMemo<TOCItem[]>(() => {
        if (!mounted) return []
        const doc = new DOMParser().parseFromString(content, 'text/html')
        return Array.from(doc.querySelectorAll('h2, h3')).map((heading, index) => ({
            id: heading.id || slugifyHeading(heading.textContent || '', index),
            text: heading.textContent?.trim() || '',
            level: Number(heading.tagName.slice(1)),
        }))
    }, [content, mounted])

    useEffect(() => {
        if (!items.length) return
        const headings = Array.from(document.querySelectorAll<HTMLElement>('[data-article-content] h2, [data-article-content] h3'))
        items.forEach((item, index) => {
            const heading = headings[index]
            if (heading && !heading.id) heading.id = item.id
        })

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActiveId(entry.target.id)
            })
        }, { rootMargin: '-96px 0px -70% 0px', threshold: 0.1 })
        headings.forEach((heading) => observer.observe(heading))
        return () => observer.disconnect()
    }, [items])

    if (items.length < 2) return null

    return (
        <nav aria-label="Table of Contents" className="dodo-glass-box min-w-0 overflow-hidden p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                    <Ico name="solar:list-bold-duotone" className="size-4" />
                </span>
                <span>სარჩევი</span>
            </div>
            <ol className="min-w-0 space-y-1 border-l border-slate-200 pl-3 dark:border-white/10">
                {items.map((item) => (
                    <li key={item.id} className="min-w-0">
                        <a
                            href={`#${item.id}`}
                            onClick={(event) => {
                                event.preventDefault()
                                const element = document.getElementById(item.id)
                                if (element) {
                                    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
                                    element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
                                }
                            }}
                            className={cn(
                                'block min-w-0 break-words rounded-lg px-2 py-1.5 text-sm leading-5 transition-[background-color,color] duration-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-200',
                                item.level === 3 && 'pl-5 text-[13px]',
                                activeId === item.id ? 'bg-blue-50 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-200' : 'text-slate-600 dark:text-slate-300',
                            )}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
