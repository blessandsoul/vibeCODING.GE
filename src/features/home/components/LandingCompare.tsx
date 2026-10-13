'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import './landing-compare.css';

/* =========================================================================
   LandingCompare, "what changes today vs with aiNOW" single table + the
   price line (real numbers, same as the global OfferCatalog: chatbot from
   150 GEL, marketing from 500 GEL) + the plain-word "lead" gloss.
   Ported from the approved prototype. Reveal = house fade-up IO pattern.
   ========================================================================= */

type Row = { was: string; wasSub: string; now: string; nowSub: string };

export function LandingCompare() {
  const t = useTranslations('home.compare');
  const rootRef = useRef<HTMLElement>(null);

  const ROWS: Row[] = [
    { was: t('r1Was'), wasSub: t('r1WasSub'), now: t('r1Now'), nowSub: t('r1NowSub') },
    { was: t('r2Was'), wasSub: t('r2WasSub'), now: t('r2Now'), nowSub: t('r2NowSub') },
    { was: t('r3Was'), wasSub: t('r3WasSub'), now: '~$0.4', nowSub: t('r3NowSub') },
    { was: t('r4Was'), wasSub: t('r4WasSub'), now: '24/7', nowSub: t('r4NowSub') },
  ];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>('.fade-up');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} id="compare" className="cx-compare py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-14">
          <p className="cx-eyebrow">{t('eyebrow')}</p>
          <h2 className="fade-up font-display font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-tight text-neutral-900">
            {t('heading')}
          </h2>
        </div>

        <div className="cx-table fade-up">
          <div className="cx-thead">
            <span>{t('colWas')}</span>
            <span className="cx-th-now">{t('colNow')}</span>
          </div>
          {ROWS.map((r, i) => (
            <div className="cx-row" key={i}>
              <div className="cx-cell cx-was">
                <span className="cx-x" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                <div>
                  <b>{r.was}</b>
                  <span>{r.wasSub}</span>
                </div>
              </div>
              <span className="cx-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <div className="cx-cell cx-now">
                <span className="cx-check" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <b>{r.now}</b>
                  <span>{r.nowSub}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="cx-foot">
            <p>{t('footLine')}</p>
            <a href="#cta" className="cx-btn">
              {t('footCta')}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <p className="cx-gloss fade-up">{t('gloss')}</p>

        <div className="cx-price fade-up">
          <span className="cx-price-lab">{t('priceLab')}</span>
          <p>
            <b>{t('priceLead')}</b> {t('priceTail')}
          </p>
        </div>
      </div>
    </section>
  );
}
