'use client';

import { useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { SITE } from '@/config/site';
import './landing-wordmark.css';

/* =========================================================================
   LandingWordmark (section after #cta): oversized product brand band.
   Ported from ainow_handoff/index.html. Reuses .wordmark-3d (landing-nav.css);
   `footer-wordmark` forces line-height:1 to match source. The wordmark plus the
   one-line tagline are product-aware.
   ========================================================================= */

export function LandingWordmark() {
  const t = useTranslations('product.wordmark');
  const hasOutcomeSummary = t.has('heading') && t.has('items');
  const outcomes = hasOutcomeSummary ? (t.raw('items') as string[]) : [];

  return (
    <section className="landing-product-wordmark-section px-4 pb-12 md:px-6">
      <div data-family-shell="true" className="max-w-[1216px] mx-auto flex flex-col items-center gap-6">
        <div
          className="wordmark-3d footer-wordmark text-[clamp(2rem,12vw,7rem)] md:text-[clamp(4rem,14vw,16rem)] leading-none max-w-full"
          aria-hidden="true"
        >
          <span className="wm-prefix">{SITE.wordmark.prefix}</span>
          <span className="wm-mark">{SITE.wordmark.mark}</span>
          <span className="wm-accent" aria-hidden="true"></span>
        </div>
        {hasOutcomeSummary ? (
          <div className="landing-wordmark-summary">
            <h2 className="text-balance">{t('heading')}</h2>
            <ul data-wordmark-outcomes="true">
              {outcomes.map((outcome) => (
                <li key={outcome}>
                  <Ico name="solar:check-circle-bold-duotone" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="landing-wordmark-line text-center text-lg md:text-xl">{t('line')}</p>
        )}
      </div>
    </section>
  );
}
