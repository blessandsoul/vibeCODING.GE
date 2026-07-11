'use client';

import { useEffect, useRef, type ReactNode, type MouseEvent } from 'react';
import { useTranslations } from 'next-intl';
import { SITE } from '@/config/site';
import './landing-faq.css';

/* =========================================================================
   LandingFaq, "#faq" accordion.
   Ported verbatim from ainow_handoff/index.html. Token swaps: text-muted →
   #525252, border-border → #e5e5e5, bg-panel → #fafafa. The .fade-up heading
   reveal is an IntersectionObserver scoped to the section root; the smooth
   open/close is ported from the source script. The click handler lives on the
   whole <details> card (React onClick) so clicking ANYWHERE on it toggles.
   ========================================================================= */

type Faq = { q: ReactNode; a: string };

const DUR = 420;

// Whole-card toggle with the source's smooth max-height/opacity animation.
function toggleFaq(e: MouseEvent<HTMLDetailsElement>) {
  const det = e.currentTarget;
  const body = det.querySelector<HTMLElement>('.faq-body');
  if (!body) return;
  // Clicks inside the OPEN answer are ignored so the text stays readable/selectable.
  if (det.open && body.contains(e.target as Node)) return;
  e.preventDefault();
  if (det.dataset.animating === '1') return;
  det.dataset.animating = '1';
  if (det.open) {
    // CLOSE: snap from current height -> 0
    const h = body.scrollHeight;
    body.style.maxHeight = h + 'px';
    body.style.opacity = '1';
    body.style.marginTop = '1rem';
    det.classList.remove('is-open');
    void body.offsetHeight; // reflow
    requestAnimationFrame(() => {
      body.style.maxHeight = '0px';
      body.style.opacity = '0';
      body.style.marginTop = '0';
      setTimeout(() => {
        det.open = false;
        body.style.maxHeight = '';
        body.style.opacity = '';
        body.style.marginTop = '';
        det.dataset.animating = '';
      }, DUR);
    });
  } else {
    // OPEN: native open -> animate 0 -> scrollHeight
    det.open = true;
    body.style.maxHeight = '0px';
    body.style.opacity = '0';
    body.style.marginTop = '0';
    void body.offsetHeight; // reflow
    requestAnimationFrame(() => {
      const h = body.scrollHeight;
      body.style.maxHeight = h + 'px';
      body.style.opacity = '1';
      body.style.marginTop = '1rem';
      det.classList.add('is-open');
      setTimeout(() => {
        body.style.maxHeight = 'none';
        det.dataset.animating = '';
      }, DUR);
    });
  }
}

const makeBrandMark = (prefix: string, mark: string) => () => (
  <span className="brand-mark"><span className="bm-prefix">{prefix}</span><span className="bm-mark">{mark}</span></span>
);

export function LandingFaq() {
  const t = useTranslations('product.faq');
  const brandMark = makeBrandMark(SITE.wordmark.prefix, SITE.wordmark.mark);
  const FAQS: Faq[] = [
    // q1 is rendered on its own because it is the one that can carry the inline brand
    // wordmark. The loop then covers q2..q14, so the contract is 14 pairs, not 15. It
    // used to run to 15 while the message files only carried 14, which threw a
    // MISSING_MESSAGE on every build.
    { q: t.rich('q1', { brand: brandMark }), a: t('a1') },
    ...Array.from({ length: 13 }, (_, i) => {
      const n = i + 2;
      return { q: t(`q${n}`), a: t(`a${n}`) };
    }),
  ];
  const rootRef = useRef<HTMLElement>(null);

  // Scroll-triggered fade-up (source-exact), scoped to this section.
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
    <section ref={rootRef} id="faq" className="py-20 md:py-32 px-6 border-t border-[#e5e5e5]/60">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#525252] mb-4">FAQ</p>
          <h2 className="fade-up font-display font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight text-neutral-900">{t('headingPre')}<br /><span>{t('headingAccent')}</span></h2>
          <p className="mt-6 text-[#525252]">{t('subtitle')}</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <details key={i} onClick={toggleFaq} className="faq-item group border border-[#e5e5e5] rounded-2xl p-6 bg-white open:bg-[#fafafa]">
              <summary className="flex items-center justify-between cursor-pointer">
                <h3 className="font-display font-bold text-xl text-neutral-900">{f.q}</h3>
                <svg className="w-5 h-5 text-[#525252] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"></path></svg>
              </summary>
              <div className="faq-body"><div><p className="text-[#525252] leading-relaxed">{f.a}</p></div></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
