'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { cn } from '@/lib/utils';

/* =========================================================================
   ScanPaywall: twenty seconds that convert a non-technical founder.

   In the published scan, 27% of monetized apps gated a paid feature in the browser. Explaining
   what that means takes a paragraph he will not read. Doing it to him takes ten seconds.

   So: a fake app with a Pro-only feature, a visible JavaScript object with `isPro: false`, and
   a button labelled "do what a user did in 2025". He presses it, the value flips, and the Pro
   feature unlocks in front of him. Nothing is hacked. Nothing is even clever. That is the point,
   and it is why this lands harder than any statistic on the page.

   The line under it is the one that matters and it is the one every rescue shop forgets: the fix
   is not a better check in the browser. The check does not belong in the browser at all.
   ========================================================================= */

export function ScanPaywall() {
  const t = useTranslations('product.paywall');
  const reduced = useReducedMotion();
  const [isPro, setIsPro] = useState(false);

  return (
    <SectionContainer className="py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(280px,400px)_1fr] lg:gap-14">
        <div>
          <span className="text-[12px] uppercase tracking-wide text-neutral-900/40">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#525252]">
            {t('subtitle')}
          </p>

          <p className="mt-8 rounded-2xl bg-[#fafafa] p-5 text-pretty text-[14px] font-semibold leading-relaxed text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
            {t('explain')}
          </p>

          <p className="mt-4 border-l-2 border-[#ef4444] pl-4 text-pretty text-[13px] leading-relaxed text-[#525252]">
            {t('incident')}
          </p>
        </div>

        <div>
          {/* the fake app */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_20px_44px_-30px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between border-b border-[#ececec] bg-[#fafafa] px-5 py-3">
              <span className="text-[13px] font-bold text-neutral-900">yourapp.lovable.app</span>
              <span
                className={cn(
                  'rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide transition-colors duration-200 ease-out',
                  isPro
                    ? 'bg-[#10b981]/15 text-[#065f46]'
                    : 'bg-neutral-900/7 text-neutral-900/45',
                )}
              >
                {isPro ? t('pro') : t('free')}
              </span>
            </div>

            <div className="p-6 md:p-8">
              <div
                className={cn(
                  'relative overflow-hidden rounded-xl p-6 transition-[background-color] duration-200 ease-out',
                  isPro ? 'bg-[#f0fdf4]' : 'bg-[#fafafa]',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-[15px] font-bold text-neutral-900">
                      {t('feature')}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-neutral-900/45">
                      {t('featureSub')}
                    </span>
                  </div>
                  <motion.span
                    initial={false}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    className={cn(
                      'shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase',
                      isPro ? 'bg-[#10b981] text-white' : 'bg-neutral-900/10 text-neutral-900/45',
                    )}
                  >
                    {isPro ? t('unlocked') : t('locked')}
                  </motion.span>
                </div>

                {/* the gate, or the absence of it */}
                {!isPro && (
                  <span
                    className="pointer-events-none absolute inset-0 backdrop-blur-[3px]"
                    style={{ background: 'rgba(250,250,250,0.55)' }}
                    aria-hidden="true"
                  />
                )}

                <div className="relative mt-5 flex flex-col gap-2">
                  {[70, 88, 54].map((w, i) => (
                    <span
                      key={i}
                      className="block h-2 rounded-full bg-neutral-900/10"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* the console, showing the whole crime */}
              <div className="mt-5 rounded-xl bg-[#0b0b0e] p-4">
                <span className="block text-[10px] uppercase tracking-wide text-white/30">
                  {t('console')}
                </span>
                <pre className="mt-2 overflow-x-auto font-mono text-[13px] leading-relaxed text-white/80">
                  <code>
                    {'> user = { plan: '}
                    <span className={isPro ? 'text-[#4ade80]' : 'text-[#fca5a5]'}>
                      {isPro ? "'pro'" : "'free'"}
                    </span>
                    {', isPro: '}
                    <motion.span
                      key={String(isPro)}
                      initial={reduced ? false : { scale: 0.25, opacity: 0, filter: 'blur(4px)' }}
                      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                      className={cn(
                        'inline-block font-bold',
                        isPro ? 'text-[#4ade80]' : 'text-[#fca5a5]',
                      )}
                    >
                      {String(isPro)}
                    </motion.span>
                    {' }'}
                  </code>
                </pre>
              </div>

              <button
                type="button"
                onClick={() => setIsPro((p) => !p)}
                className={cn(
                  'mt-5 inline-flex h-13 min-h-[52px] w-full items-center justify-center rounded-full px-6 text-[15px] font-bold text-white',
                  'transition-[transform,filter] duration-150 ease-out active:scale-[0.96] md:hover:brightness-110',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
                )}
                style={{ background: isPro ? '#525252' : 'var(--brand)' }}
              >
                {isPro ? t('reset') : t('doIt')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
