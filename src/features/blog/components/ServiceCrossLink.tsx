import { Link } from '@/i18n/navigation'

import { APP_NAME } from '@/lib/constants/app.constants'
import { getAiNowHomeCopy } from '@/features/home/components/ainow/AiNowHomeCopy'

type LocaleText = Record<string, string>
const REVIEWED_LOCALES = new Set(['ka', 'en', 'ru'])
const EYEBROW: LocaleText = { ka: APP_NAME, en: APP_NAME, ru: APP_NAME }

type Props = { tags?: string[]; locale: string; title?: string }

export function ServiceCrossLink({ locale }: Props) {
    const loc = REVIEWED_LOCALES.has(locale) ? locale : 'en'
    const copy = getAiNowHomeCopy(loc)
    const target: { href: string; name: LocaleText; blurb: LocaleText } = {
        href: '/#cta',
        name: { ka: APP_NAME, en: APP_NAME, ru: APP_NAME },
        blurb: { ka: copy.hero.description, en: copy.hero.description, ru: copy.hero.description },
    }
    const CTA: LocaleText = { ka: copy.hero.primaryCta, en: copy.hero.primaryCta, ru: copy.hero.primaryCta }


    return (
        <aside data-business-cta="true" data-product-bridge="true" className="dodo-glass-card my-8 min-w-0 overflow-hidden border-blue-200/60 p-5 sm:p-7 dark:border-blue-400/20">
            <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                    <p className="eyebrow mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">{EYEBROW[loc]}</p>
                    <h2 className="break-words font-headline text-xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white">{target.name[loc]}</h2>
                    <p className="mt-1.5 max-w-2xl break-words text-sm leading-6 text-slate-600 dark:text-slate-300">{target.blurb[loc]}</p>
                </div>
                <Link href={target.href as never} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-[background-color,border-color,transform] hover:border-blue-700 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-[0.96]">
                    {CTA[loc]} <span aria-hidden="true">→</span>
                </Link>
            </div>
        </aside>
    )
}


