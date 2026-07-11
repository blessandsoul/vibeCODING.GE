'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { cn } from '@/lib/utils';

/* =========================================================================
   ScanTenWays: the evidence, and every line of it has a source printed next to it.

   This is the SEO page and it is also the credibility page. Every claim here comes from a
   published scan or a documented incident: VibeEval's scan of 1,430+ Lovable apps, Veracode's
   GenAI code security report, Wiz on the Base44 auth bypass, the Replit agent deleting SaaStr's
   production database, the Tea app leaking 72,000 images.

   And there is one number NOT here on purpose: the "8,000 startups need rescue, a four billion
   dollar cleanup market" figure that circulates on this topic. It traces to vendor blogs with no
   source. Quoting it would make everything else on this page worth less, and the note at the
   bottom says exactly that, out loud, because our buyer is specifically someone who has already
   been burned by AI-generated confidence.

   Layout note: ten items in a scanning list with an expandable body, NOT a grid of equal cards.
   Ten equal cards would say these are ten equivalent options. They are not: they are ten ways
   the same app is already broken, and the list form says that.
   ========================================================================= */

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export function ScanTenWays() {
  const t = useTranslations('product.ten');
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(1);

  return (
    <SectionContainer className="py-20 md:py-28">
      <div className="mb-10 max-w-2xl">
        <span className="text-[12px] uppercase tracking-wide text-neutral-900/40">
          {t('eyebrow')}
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
          {t('heading')}
        </h2>
        <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#525252]">
          {t('subtitle')}
        </p>
      </div>

      <ul className="flex flex-col">
        {ITEMS.map((n, i) => {
          const on = open === n;
          return (
            <li key={n} className={i === 0 ? '' : 'border-t border-[#ececec]'}>
              <button
                type="button"
                onClick={() => setOpen(on ? null : n)}
                aria-expanded={on}
                className={cn(
                  'grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-5 text-left',
                  'transition-[transform,opacity] duration-150 ease-out active:scale-[0.995]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-4',
                )}
              >
                <span
                  className={cn(
                    'w-7 shrink-0 font-mono text-[13px] tabular-nums transition-colors duration-150 ease-out',
                    on ? 'text-[var(--brand)]' : 'text-neutral-900/25',
                  )}
                >
                  {String(n).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'text-pretty text-[17px] font-bold leading-snug transition-colors duration-150 ease-out md:text-[19px]',
                    on ? 'text-neutral-900' : 'text-neutral-900/70',
                  )}
                >
                  {t(`t${n}`)}
                </span>
                <span
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[15px] font-bold',
                    'transition-[transform,background-color,color] duration-200 ease-out',
                    on
                      ? 'rotate-45 text-white'
                      : 'bg-[#fafafa] text-neutral-900/35 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]',
                  )}
                  style={on ? { background: 'var(--brand)' } : undefined}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {on && (
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 8, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                  className="grid grid-cols-[auto_1fr] gap-4 pb-7"
                >
                  <span className="w-7" aria-hidden="true" />
                  <div className="max-w-3xl">
                    <p className="text-pretty text-[15px] leading-relaxed text-[#404040]">
                      {t(`b${n}`)}
                    </p>
                    <p className="mt-3 text-[12px] leading-relaxed text-neutral-900/40">
                      <span className="font-semibold uppercase tracking-wide">{t('source')}: </span>
                      {t(`s${n}`)}
                    </p>
                  </div>
                </motion.div>
              )}
            </li>
          );
        })}
      </ul>

      <p className="mt-9 max-w-2xl border-t border-[#ececec] pt-6 text-pretty text-[13px] leading-relaxed text-[#737373]">
        {t('note')}
      </p>
    </SectionContainer>
  );
}
