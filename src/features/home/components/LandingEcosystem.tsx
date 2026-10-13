'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import './landing-ecosystem.css';

/* =========================================================================
   LandingEcosystem, "#products" bento: aiCONTENT / aiADS / aiCHATS + iAI.
   Replaces LandingProducts + LandingFlagships in the composition, so it
   carries their load-bearing pieces: the "#products" nav anchor and the
   external product links (aicontent.ge, aichats.ge, iai.ge).
   Nemo video: /landing/iai-nemo.mp4.
   ========================================================================= */

function Wordmark({ prefix, mark }: { prefix: string; mark: string }) {
  return (
    <span className="wordmark-3d eco-wm">
      <span className="wm-prefix">{prefix}</span>
      <span className="wm-mark">{mark}</span>
      <span className="wm-accent" aria-hidden="true" />
    </span>
  );
}

export function LandingEcosystem() {
  const t = useTranslations('home.ecosystem');
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

    /* autoplay is unreliable for offscreen-mounted videos: nudge on reveal */
    const vid = root.querySelector<HTMLVideoElement>('.eco-video');
    let vio: IntersectionObserver | null = null;
    if (vid && 'IntersectionObserver' in window) {
      vio = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (e.isIntersecting) vid.play().catch(() => {});
        });
      }, { threshold: 0.3 });
      vio.observe(vid);
    }
    return () => {
      io.disconnect();
      vio?.disconnect();
    };
  }, []);

  return (
    <section ref={rootRef} id="products" className="eco-section py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-14">
          <p className="eco-eyebrow">{t('eyebrow')}</p>
          <h2 className="fade-up font-display font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-tight text-neutral-900">
            {t('heading')}
          </h2>
          <p className="eco-math fade-up">{t('math')}</p>
        </div>

        <div className="eco-bento fade-up">
          <div className="eco-cell eco-content" style={{ ['--tone' as never]: '#ec4899' }}>
            <Wordmark prefix="ai" mark="CONTENT" />
            <span className="eco-role r-pink">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
              </svg>
              {t('contentRole')}
            </span>
            <p>{t('contentDesc')}</p>
            <div className="eco-covers" aria-hidden="true">
              <span className="eco-cover">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="13" height="12" rx="2.5" /><path d="m22 8-7 4 7 4z" /></svg>
              </span>
              <span className="eco-cover">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="3.4" /></svg>
              </span>
              <span className="eco-cover">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="16" y2="12" /><line x1="4" y1="17" x2="12" y2="17" /></svg>
              </span>
              <span className="eco-cover">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
              </span>
            </div>
            <a href="https://aicontent.ge" target="_blank" rel="noopener" className="eco-link">
              {t('see')}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
            </a>
          </div>

          <div className="eco-cell eco-ads" style={{ ['--tone' as never]: '#10b981' }}>
            <Wordmark prefix="ai" mark="ADS" />
            <span className="eco-role r-emerald">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
              </svg>
              {t('adsRole')}
            </span>
            <p>{t('adsDesc')}</p>
            <div className="eco-bar" aria-hidden="true">
              <div className="eco-bar-track"><i className="b-meta" /><i className="b-goo" /></div>
              <div className="eco-bar-legend"><span>{t('budget')}: Meta 62%</span><span>Google 38%</span></div>
            </div>
            <a href="https://aiads.ge" target="_blank" rel="noopener" className="eco-link">
              {t('see')}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
            </a>
          </div>

          <div className="eco-cell eco-staff" style={{ ['--tone' as never]: '#C2185B' }}>
            <Wordmark prefix="ai" mark="CHATS" />
            <span className="eco-role r-blue" style={{ color: '#C2185B', background: 'rgba(194, 24, 91, 0.1)' }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 14a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" />
              </svg>
              {t('staffRole')}
            </span>
            <p>{t('staffDesc')}</p>
            <div className="eco-chat" aria-hidden="true">
              <span className="eco-q">{t('staffDemoQ')}</span>
              <span className="eco-a"><i />{t('staffDemoA')}</span>
            </div>
            <a href="https://aichats.ge" target="_blank" rel="noopener" className="eco-link">
              {t('see')}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
            </a>
          </div>

          <div className="eco-cell eco-iai" style={{ ['--tone' as never]: '#7c3aed' }}>
            <div>
              <Wordmark prefix="i" mark="AI" />
              <span className="eco-role r-violet">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                </svg>
                {t('iaiRole')}
              </span>
              <p className="eco-iai-desc">{t('iaiDesc')}</p>
              <a href="https://iai.ge" target="_blank" rel="noopener" className="eco-link">
                {t('iaiLink')}
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
              </a>
            </div>
            <div className="eco-fig">
              <div className="eco-orb">
                <video className="eco-video" src="/landing/iai-nemo.mp4" muted loop playsInline autoPlay preload="metadata" />
              </div>
              <p className="eco-name"><b>iAI</b> · {t('iaiName')}</p>
            </div>
          </div>
        </div>

        <article
          className="eco-tiktok-roadmap fade-up"
          data-integration-status="planned"
          data-available-now="false"
        >
          <span className="eco-tiktok-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l9-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="15" cy="16" r="3" />
            </svg>
          </span>
          <div className="eco-tiktok-copy">
            <strong>{t('tiktokRoadmapTitle')}</strong>
            <p>{t('tiktokRoadmapDesc')}</p>
          </div>
          <span className="eco-tiktok-status">{t('tiktokRoadmapStatus')}</span>
        </article>
      </div>
    </section>
  );
}
