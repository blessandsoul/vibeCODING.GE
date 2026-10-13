'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import './landing-flagships.css';

/* =========================================================================
   LandingFlagships, "#products" 3-brand showcase.
   Ported verbatim from ainow_handoff/index.html. Token swaps: text-muted →
   #525252, text-accent → #7c3aed, text-accent2 → #e040fb, text-glow →
   #ff6b00, bg-border/border-border → #e5e5e5, bg-accent/8 → bg-[#7c3aed]/8.
   Scroll fade-up (IntersectionObserver) and tilt-card parallax are ported
   from the source scripts, scoped to this section's root.
   ========================================================================= */

// Repeated right-arrow between flow steps (source-exact).
function FlowArrow() {
  return (
    <div className="sf-arrow">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </div>
  );
}

export function LandingFlagships() {
  const t = useTranslations('home.flagships');
  const th = useTranslations('home.hero'); // shared product slogans
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: Array<() => void> = [];

    // --- Scroll-triggered fade-up (source-exact) ---
    const items = root.querySelectorAll<HTMLElement>('.fade-up');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
    } else {
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
      cleanups.push(() => io.disconnect());
    }

    // --- Tilt Card parallax (source-exact) ---
    const cards = root.querySelectorAll<HTMLElement>('.tilt-card');
    cards.forEach((card) => {
      const maxTilt = 5;
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * maxTilt * 2}deg) rotateX(${-y * maxTilt * 2}deg)`;
      };
      const onLeave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section ref={rootRef} id="products" className="py-20 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#7c3aed]/[0.08] blur-[120px] pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto relative">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#525252] mb-4">{t('eyebrow')}</p>
          <div className="fade-up slogan-bar mt-8 mx-auto">
            <span className="slogan-pill slogan-content"><span className="wordmark-3d"><span className="wm-prefix">ai</span><span className="wm-mark">CONTENT</span><span className="wm-accent" aria-hidden="true"></span></span> {th('sloganCreates')}</span>
            <span className="slogan-sep" aria-hidden="true"></span>
            <span className="slogan-pill slogan-ads"><span className="wordmark-3d"><span className="wm-prefix">ai</span><span className="wm-mark">ADS</span><span className="wm-accent" aria-hidden="true"></span></span> {th('sloganAds')}</span>
            <span className="slogan-sep" aria-hidden="true"></span>
            <span className="slogan-pill slogan-staff"><span className="wordmark-3d"><span className="wm-prefix">ai</span><span className="wm-mark">CHATS</span><span className="wm-accent" aria-hidden="true"></span></span> {th('sloganSells')}</span>
            <span className="slogan-sep" aria-hidden="true"></span>
            <span className="slogan-pill slogan-iai"><span className="wordmark-3d"><span className="wm-prefix">i</span><span className="wm-mark">AI</span><span className="wm-accent" aria-hidden="true"></span></span> {th('sloganManages')}</span>
            <span className="slogan-sep slogan-sep-strong" aria-hidden="true"></span>
            <span className="slogan-pill slogan-together">{th('sloganTogether')} <span className="wordmark-3d"><span className="wm-prefix">ai</span><span className="wm-mark">NOW</span><span className="wm-accent" aria-hidden="true"></span></span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e5e5e5]">

          {/* aiCONTENT */}
          <article className="brand-card brand-content fade-up tilt-card relative bg-white p-8 md:p-12 border border-[#e5e5e5] flex flex-col">
            <div className="flex items-start justify-between mb-12">
              <span className="brand-tag tilt-depth-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#ec4899]">{t('flagship')} · 01</span>
              <span className="tilt-depth-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#525252]">aiCONTENT.ge</span>
            </div>
            <div className="tilt-depth-3 mb-8">
              <div className="brand-wordmark brand-wordmark-content text-[clamp(2.5rem,5vw,4rem)] leading-none mb-4"><span className="wm-prefix">ai</span><span className="wm-mark">CONTENT</span><span className="wm-dot" aria-hidden="true"></span></div>
              <p className="text-base text-[#525252] leading-relaxed max-w-sm">{t('cDesc')}</p>
            </div>
            <ul className="tilt-depth-2 feature-list feature-list-content mb-10 flex-1">
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg></span>
                <div className="fl-text"><b>{t('cF1Title')}</b><em>{t('cF1Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg></span>
                <div className="fl-text"><b>{t('cF2Title')}</b><em>{t('cF2Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path></svg></span>
                <div className="fl-text"><b>{t('cF3Title')}</b><em>{t('cF3Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></span>
                <div className="fl-text"><b>{t('cF4Title')}</b><em>{t('cF4Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                <div className="fl-text"><b>{t('cF5Title')}</b><em>{t('cF5Sub')}</em></div>
              </li>
            </ul>
          </article>

          {/* aiADS */}
          <article className="brand-card brand-ads fade-up tilt-card relative bg-white p-8 md:p-12 border border-[#e5e5e5] flex flex-col">
            <div className="flex items-start justify-between mb-12">
              <span className="brand-tag tilt-depth-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#10b981]">{t('flagship')} · 02</span>
              <span className="tilt-depth-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#525252]">aiADS.ge</span>
            </div>
            <div className="tilt-depth-3 mb-8">
              <div className="brand-wordmark brand-wordmark-ads text-[clamp(2.5rem,5vw,4rem)] leading-none mb-4"><span className="wm-prefix">ai</span><span className="wm-mark">ADS</span><span className="wm-dot" aria-hidden="true"></span></div>
              <p className="text-base text-[#525252] leading-relaxed max-w-sm">{t('adDesc')}</p>
            </div>
            <ul className="tilt-depth-2 feature-list feature-list-ads mb-10 flex-1">
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg></span>
                <div className="fl-text"><b>{t('adF1Title')}</b><em>{t('adF1Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                <div className="fl-text"><b>{t('adF2Title')}</b><em>{t('adF2Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path></svg></span>
                <div className="fl-text"><b>{t('adF3Title')}</b><em>{t('adF3Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg></span>
                <div className="fl-text"><b>{t('adF4Title')}</b><em>{t('adF4Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span>
                <div className="fl-text"><b>{t('adF5Title')}</b><em>{t('adF5Sub')}</em></div>
              </li>
            </ul>
          </article>

          {/* aiCHATS */}
          <article className="brand-card brand-staff fade-up tilt-card relative bg-white p-8 md:p-12 border border-[#e5e5e5] flex flex-col">
            <div className="flex items-start justify-between mb-12">
              <span className="brand-tag tilt-depth-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#C2185B]">{t('flagship')} · 03</span>
              <span className="tilt-depth-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#525252]">aiCHATS.ge</span>
            </div>
            <div className="tilt-depth-3 mb-8">
              <div className="brand-wordmark brand-wordmark-staff text-[clamp(2.5rem,5vw,4rem)] leading-none mb-4"><span className="wm-prefix">ai</span><span className="wm-mark">CHATS</span><span className="wm-dot" aria-hidden="true"></span></div>
              <p className="text-base text-[#525252] leading-relaxed max-w-sm">{t('sDesc')}</p>
            </div>
            <ul className="tilt-depth-2 feature-list feature-list-staff mb-10 flex-1">
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span>
                <div className="fl-text"><b>{t('sF1Title')}</b><em>web · Facebook Messenger · Instagram · WhatsApp · Telegram</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"></path></svg></span>
                <div className="fl-text"><b>{t('sF2Title')}</b><em>{t('sF2Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
                <div className="fl-text"><b>{t('sF3Title')}</b><em>n8n · Make · Zapier · MCP</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></span>
                <div className="fl-text"><b>{t('sF4Title')}</b><em>{t('sF4Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></span>
                <div className="fl-text"><b>{t('sF5Title')}</b><em>{t('sF5Sub')}</em></div>
              </li>
            </ul>
          </article>

          {/* iAI - the unified platform (content + ads + sales in one panel) */}
          <article className="brand-card brand-iai fade-up tilt-card relative bg-white p-8 md:p-12 border border-[#e5e5e5] flex flex-col">
            <div className="flex items-start justify-between mb-12">
              <span className="brand-tag tilt-depth-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#6366f1]">{t('flagship')} · 04</span>
              <span className="tilt-depth-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#525252]">iAI.ge</span>
            </div>
            <div className="tilt-depth-3 mb-8">
              <div className="brand-wordmark brand-wordmark-iai text-[clamp(2.5rem,5vw,4rem)] leading-none mb-4"><span className="wm-prefix">i</span><span className="wm-mark">AI</span><span className="wm-dot" aria-hidden="true"></span></div>
              <p className="text-base text-[#525252] leading-relaxed max-w-sm">{t('iaiDesc')}</p>
            </div>
            <ul className="tilt-depth-2 feature-list feature-list-iai mb-10 flex-1">
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect></svg></span>
                <div className="fl-text"><b>{t('iaiF1Title')}</b><em>{t('iaiF1Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></span>
                <div className="fl-text"><b>{t('iaiF2Title')}</b><em>{t('iaiF2Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></span>
                <div className="fl-text"><b>{t('iaiF3Title')}</b><em>{t('iaiF3Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg></span>
                <div className="fl-text"><b>{t('iaiF4Title')}</b><em>{t('iaiF4Sub')}</em></div>
              </li>
              <li>
                <span className="fl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                <div className="fl-text"><b>{t('iaiF5Title')}</b><em>{t('iaiF5Sub')}</em></div>
              </li>
            </ul>
          </article>

        </div>

        {/* aiCONTENT - content engine flow + metrics */}
        <div className="fade-up max-w-4xl mx-auto mt-10 md:mt-14 rounded-2xl border border-[#e5e5e5] bg-white p-6 md:p-10">
          <div className="text-center mb-8">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#ec4899] mb-2">{t('howItWorks')}</p>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-neutral-900">{t('cFlowHeading')}</h3>
          </div>

          <div className="staff-flow content-flow">
            <div className="sf-step">
              <div className="sf-num">1</div>
              <div className="sf-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg></div>
              <div className="sf-title">{t('cS1Title')}</div>
              <div className="sf-desc">{t('cS1Desc')}</div>
            </div>

            <FlowArrow />

            <div className="sf-step">
              <div className="sf-num">2</div>
              <div className="sf-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></div>
              <div className="sf-title">{t('cS2Title')}</div>
              <div className="sf-desc">{t('cS2Desc')}</div>
            </div>

            <FlowArrow />

            <div className="sf-step">
              <div className="sf-num">3</div>
              <div className="sf-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.13-1.58a.5.5 0 0 1 0-.96l6.13-1.58A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.13 1.58a.5.5 0 0 1 0 .96l-6.13 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z"></path></svg></div>
              <div className="sf-title">{t('cS3Title')}</div>
              <div className="sf-desc">{t('cS3Desc')}</div>
            </div>

            <FlowArrow />

            <div className="sf-step">
              <div className="sf-num">4</div>
              <div className="sf-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline><line x1="22" y1="2" x2="11" y2="13"></line></svg></div>
              <div className="sf-title">{t('cS4Title')}</div>
              <div className="sf-desc">{t('cS4Desc')}</div>
            </div>
          </div>

          {/* Content metrics */}
          <div className="staff-metrics">
            <div className="sm-cell">
              <div className="sm-num">∞</div>
              <div className="sm-label">{t('cmPosts')}</div>
            </div>
            <div className="sm-divider"></div>
            <div className="sm-cell">
              <div className="sm-num">100+</div>
              <div className="sm-label">{t('cmFormats')}</div>
            </div>
            <div className="sm-divider"></div>
            <div className="sm-cell">
              <div className="sm-num sm-num-green">+387%</div>
              <div className="sm-label">{t('cmRoas')}</div>
            </div>
            <div className="sm-divider"></div>
            <div className="sm-cell">
              <div className="sm-num sm-num-red">{t('cmTimeVal')}</div>
              <div className="sm-label">{t('cmTime')}</div>
            </div>
          </div>
        </div>

        {/* aiCHATS - business-language flow + metrics */}
        <div className="fade-up max-w-4xl mx-auto mt-10 md:mt-14 rounded-2xl border border-[#e5e5e5] bg-white p-6 md:p-10">
          <div className="text-center mb-8">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C2185B] mb-2">{t('howItWorks')}</p>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-neutral-900">{t('sFlowHeading')}</h3>
          </div>

          {/* 4-step flow */}
          <div className="staff-flow">
            <div className="sf-step">
              <div className="sf-num">1</div>
              <div className="sf-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
              <div className="sf-title">{t('sS1Title')}</div>
              <div className="sf-desc">{t('sS1Desc')}</div>
            </div>

            <FlowArrow />

            <div className="sf-step">
              <div className="sf-num">2</div>
              <div className="sf-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"></path></svg></div>
              <div className="sf-title">{t('sS2Title')}</div>
              <div className="sf-desc">{t('sS2Desc')}</div>
            </div>

            <FlowArrow />

            <div className="sf-step">
              <div className="sf-num">3</div>
              <div className="sf-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
              <div className="sf-title">{t('sS3Title')}</div>
              <div className="sf-desc">{t('sS3Desc')}</div>
            </div>

            <FlowArrow />

            <div className="sf-step">
              <div className="sf-num">4</div>
              <div className="sf-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M7 14l4-4 4 4 5-5"></path></svg></div>
              <div className="sf-title">{t('sS4Title')}</div>
              <div className="sf-desc">{t('sS4Desc')}</div>
            </div>
          </div>

          {/* Metrics row */}
          <div className="staff-metrics">
            <div className="sm-cell">
              <div className="sm-num">24/7</div>
              <div className="sm-label">{t('smActive')}</div>
            </div>
            <div className="sm-divider"></div>
            <div className="sm-cell">
              <div className="sm-num">{t('smReplyVal')}</div>
              <div className="sm-label">{t('smReply')}</div>
            </div>
            <div className="sm-divider"></div>
            <div className="sm-cell">
              <div className="sm-num sm-num-green">+47%</div>
              <div className="sm-label">{t('smRetain')}</div>
            </div>
            <div className="sm-divider"></div>
            <div className="sm-cell">
              <div className="sm-num sm-num-red">{t('smSalaryVal')}</div>
              <div className="sm-label">{t('smSalary')}</div>
            </div>
          </div>
        </div>

        {/* iAI - small horizontal strip (real product, in development) */}
        <a href="https://iai.ge" className="fade-up mt-8 md:mt-12 group flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6 rounded-2xl border border-[#e5e5e5] bg-white hover:border-[#6366f1] hover:bg-[#6366f1]/3 transition max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="brand-wordmark brand-wordmark-iai text-3xl leading-none"><span className="wm-prefix">i</span><span className="wm-mark">AI</span><span className="wm-accent" aria-hidden="true"></span></div>
            <div>
              <p className="text-sm text-neutral-900 font-medium">{t('iaiText')}</p>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#525252] mt-1">iAI.ge</p>
            </div>
          </div>
          <span className="text-sm font-mono uppercase tracking-[0.25em] text-neutral-900 group-hover:text-[#6366f1] transition">{t('iaiCta')}</span>
        </a>

      </div>
    </section>
  );
}
