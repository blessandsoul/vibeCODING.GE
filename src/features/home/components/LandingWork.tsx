'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { SITE } from '@/config/site';
import './landing-work.css';

/* =========================================================================
   LandingWork, "#work" 6-step process.
   Ported verbatim from ainow_handoff/index.html. Token swaps: text-muted →
   #525252, text-accent2 → #e040fb, bg-border → #e5e5e5, bg-panel → #fafafa.
   The .fade-up heading reveal uses an IntersectionObserver scoped to this
   section's root (source-exact settings).
   ========================================================================= */

type Step = { num: string; title: string; tag: string; desc: string };

export function LandingWork() {
  const t = useTranslations('product.work');
  const STEPS: Step[] = [
    { num: '01', title: t('s1Title'), tag: t('s1Tag'), desc: t('s1Desc') },
    { num: '02', title: t('s2Title'), tag: t('s2Tag'), desc: t('s2Desc') },
    { num: '03', title: t('s3Title'), tag: t('s3Tag'), desc: t('s3Desc') },
    { num: '04', title: t('s4Title'), tag: t('s4Tag'), desc: t('s4Desc') },
    { num: '05', title: t('s5Title'), tag: t('s5Tag'), desc: t('s5Desc') },
    { num: '06', title: t('s6Title'), tag: t('s6Tag'), desc: t('s6Desc') },
  ];
  const rootRef = useRef<HTMLElement>(null);

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
    <section ref={rootRef} id="work" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#525252] mb-4">{t('eyebrow')}</p>
          <h2 className="fade-up font-display font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto text-neutral-900">
            {t('headingPre')}<br /><span className="text-[#525252]">{t('headingAccent')}</span>
          </h2>
        </div>
        <div className="space-y-px bg-[#e5e5e5]">
          {STEPS.map((s) => (
            <div key={s.num} className="grid grid-cols-12 gap-4 md:gap-6 p-6 md:p-10 bg-white hover:bg-[#fafafa] transition">
              <div className="col-span-1 font-mono text-[#525252] text-2xl">{s.num}</div>
              <div className="col-span-11 md:col-span-3">
                <h3 className="font-display font-bold text-2xl text-neutral-900">{s.title}</h3>
                <span className="text-sm font-mono text-(--brand)">{s.tag}</span>
              </div>
              <div className="col-span-12 md:col-span-8 text-base text-[#525252] leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
