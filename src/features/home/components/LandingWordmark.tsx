'use client';

import { useTranslations } from 'next-intl';
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
  return (
    <section className="px-6 pb-12">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-6">
        <div className="wordmark-3d footer-wordmark text-[clamp(2rem,12vw,7rem)] md:text-[clamp(4rem,14vw,16rem)] leading-none max-w-full"><span className="wm-prefix">{SITE.wordmark.prefix}</span><span className="wm-mark">{SITE.wordmark.mark}</span><span className="wm-accent" aria-hidden="true"></span></div>
        <p className="text-center text-lg md:text-xl text-[#525252]">{t('line')}</p>
      </div>
    </section>
  );
}
