import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

type PageItem = number | '…'

/* Numbered window: always 1 and last, current ±1, ellipsis for gaps.
   A gap of exactly one page shows the page itself instead of '…'. */
function pageWindow(current: number, total: number): PageItem[] {
    const wanted = new Set<number>([1, total, current - 1, current, current + 1])
    const pages = [...wanted].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b)
    const out: PageItem[] = []
    let prev = 0
    for (const p of pages) {
        if (p - prev === 2) out.push(prev + 1)
        else if (p - prev > 2) out.push('…')
        out.push(p)
        prev = p
    }
    return out
}

interface PaginationProps {
    page: number
    totalPages: number
    prevLabel: string
    nextLabel: string
}

/* Server component, pure links, no client JS. Page 1 keeps the clean /blog URL. */
export function Pagination({ page, totalPages, prevLabel, nextLabel }: PaginationProps) {
    if (totalPages <= 1) return null

    const href = (n: number) =>
        (n === 1 ? '/blog' : { pathname: '/blog', query: { page: String(n) } }) as never

    const arrowPill =
        'dodo-glass-box inline-flex min-h-10 items-center rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition-[transform,border-color,box-shadow] hover:border-blue-300 hover:text-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 dark:text-slate-200 dark:hover:text-blue-200'
    const numPill =
        'dodo-glass-box flex min-h-10 min-w-10 items-center justify-center rounded-xl px-2 text-sm font-semibold transition-[transform,border-color,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2'

    return (
        <nav aria-label="Pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {page > 1 && (
                <Link rel="prev" href={href(page - 1)} className={arrowPill}>
                    ← <span className="hidden sm:inline">{prevLabel}</span>
                </Link>
            )}

            {pageWindow(page, totalPages).map((item, i) =>
                item === '…' ? (
                    <span key={`gap-${i}`} className="px-1 text-sm text-[#525252]" aria-hidden="true">
                        …
                    </span>
                ) : item === page ? (
                    <span
                        key={item}
                        aria-current="page"
                        className={cn(numPill, 'border-blue-600 bg-[#2563eb] text-white shadow-[0_8px_18px_-8px_rgba(37,99,235,0.55)]')}
                    >
                        {item}
                    </span>
                ) : (
                    <Link
                        key={item}
                        href={href(item)}
                        className={cn(
                            numPill,
                            'text-slate-700 hover:border-blue-300 hover:text-[#1d4ed8] dark:text-slate-200 dark:hover:text-blue-200',
                        )}
                    >
                        {item}
                    </Link>
                ),
            )}

            {page < totalPages && (
                <Link rel="next" href={href(page + 1)} className={arrowPill}>
                    <span className="hidden sm:inline">{nextLabel}</span> →
                </Link>
            )}
        </nav>
    )
}
