'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { useTranslations } from 'next-intl';
import { aiMedia } from '@/lib/media-assets';
import './landing-products.css';

/* Products, ported 1:1 from ainow_handoff/index.html (#products-viz). Two
   @sneas/telephone iPhone frames each cycling 3 IG states. Marketing copy is
   i18n-ized via home.products; the Instagram phone mockup internals (the fake
   IG UI + chat) intentionally stay in English, they depict the IG app. */

const ai = (style: CSSProperties) => (
  <span style={{ fontFamily: "'Space Mono',monospace", fontStyle: 'italic', fontWeight: 700, ...style }}>ai</span>
);

/* Repeated IG icons */
const IcReels = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="10 8 16 12 10 16 10 8" /><rect x="3" y="3" width="18" height="18" rx="3" /></svg>
);
const IcPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="8 5 19 12 8 19 8 5" /></svg>
);
const IcCarousel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2" /><path d="M21 7v12a2 2 0 0 1-2 2H7" /></svg>
);
const IcDots = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1.5" fill="currentColor" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><circle cx="12" cy="19" r="1.5" fill="currentColor" /></svg>
);
const IcBack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
);
const IcGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
);
const IcCall = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const IcVerified = () => (
  <svg style={{ display: 'inline-block', verticalAlign: 'middle', width: '12px', height: '12px', marginLeft: '2px' }} viewBox="0 0 24 24" fill="#3b82f6"><path d="M12 2l2.4 1.8 3 .2.2 3L19.4 9.6 21 12l-1.6 2.4-.8 2.8-3 .2-2.4 1.8L9.6 17.6 6.6 17.4l-.2-3L4 12l1.6-2.4.8-2.8 3-.2L12 2zm-1.4 13l5-5-1.4-1.4-3.6 3.6-1.6-1.6L7.6 12l3 3z" /></svg>
);

export function LandingProducts({ single = false }: { single?: boolean } = {}) {
  const t = useTranslations('home.products');
  const ts = useTranslations('home.products.staff');
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;
    const timers: number[] = [];
    const observers: MutationObserver[] = [];
    const cleanups: Array<() => void> = [];

    // Register the <iphone-16-max> custom element (client-only)
    import('@sneas/telephone').catch(() => {});

    // ---------- phone-fit: scale .ig-screen (320px grid) into the slot ----------
    const BASE_W = 320;
    const refit = () => {
      root.querySelectorAll<HTMLElement>('iphone-16-max').forEach((phone) => {
        const shadow = phone.shadowRoot;
        const screen = phone.querySelector<HTMLElement>('.ig-screen');
        if (!shadow || !screen) return;
        const slot = shadow.querySelector<HTMLElement>('.screenshot');
        if (!slot) return;
        const slotW = slot.clientWidth;
        const slotH = slot.clientHeight;
        if (slotW < 10) return;
        const scale = slotW / BASE_W;
        screen.style.transform = 'scale(' + scale.toFixed(4) + ')';
        screen.style.height = (slotH / scale).toFixed(2) + 'px';
      });
    };
    refit();
    [60, 200, 500, 1000].forEach((t) => timers.push(window.setTimeout(refit, t)));
    window.addEventListener('resize', refit);
    root.querySelectorAll('iphone-16-max').forEach((p) => {
      const mo = new MutationObserver(refit);
      mo.observe(p, { attributes: true, attributeFilter: ['rendered'] });
      observers.push(mo);
    });
    if (typeof customElements !== 'undefined') {
      customElements.whenDefined('iphone-16-max').then(() => {
        if (cancelled) return;
        refit();
        timers.push(window.setTimeout(refit, 100));
      });
    }

    // ---------- shared coordination ----------
    const stopStateAutos: Array<() => void> = [];
    const randomizeState: Record<string, () => void> = {};
    let stopProductAuto: (() => void) | null = null;

    // Reel playback is gated so the (heavy) reel video only fetches/decodes
    // when it is genuinely on screen, i.e. the Reels state is active AND the
    // section is in view AND aiCONTENT (phone1) is the visible pane. Decoding a
    // hidden reel was downloading ~7MB on scroll and bogging down the slide
    // back to aiCONTENT. `reelSync.run` is assigned once the video els exist.
    let sectionVisible = false;
    let reelStateActive = false;
    let phone1Visible = true; // desktop shows both phones; mobile toggles this
    const reelSync: { run: () => void } = { run: () => {} };

    // ---------- state sliders ----------
    root.querySelectorAll<HTMLElement>('.state-slider').forEach((slider) => {
      const target = slider.dataset.target || 'phone1';
      const phoneIdx = target === 'phone1' ? 0 : 1;
      const tels = root.querySelectorAll<HTMLElement>('iphone-16-max');
      const phone = tels[phoneIdx];
      if (!phone) return;
      const states = phone.querySelectorAll<HTMLElement>('.ig-state');
      const captionEl = root.querySelector<HTMLElement>(`.product-caption[data-phone="${target}"]`);
      const featureEl = root.querySelector<HTMLElement>(`.product-feature[data-phone="${target}"]`);
      const dots = Array.from(slider.querySelectorAll<HTMLElement>('.ss-dot'));
      let stateTimer: number | null = null;
      let stateStopped = false;

      function stopStateAuto() {
        stateStopped = true;
        if (stateTimer) clearTimeout(stateTimer);
      }

      function activate(idx: number, isUser: boolean) {
        const btn = dots[idx];
        if (!btn) return;
        dots.forEach((b) => b.classList.toggle('is-active', b === btn));
        const s = btn.dataset.state;
        states.forEach((st) => st.classList.toggle('is-active', st.dataset.state === s));
        const activeState = phone.querySelector(`.ig-state[data-state="${s}"]`);
        const isReel = !!activeState?.querySelector('.reel-canvas');
        if (phone.shadowRoot) {
          let modeStyle = phone.shadowRoot.querySelector<HTMLStyleElement>('style.reel-flip');
          if (isReel) {
            if (!modeStyle) {
              modeStyle = document.createElement('style');
              modeStyle.className = 'reel-flip';
              modeStyle.textContent = '[fill="#0D0D0E"]{fill:#ffffff!important}[fill="#030303"]{fill:#ffffff!important}';
              phone.shadowRoot.appendChild(modeStyle);
            }
          } else if (modeStyle) {
            modeStyle.remove();
          }
        }
        // Only phone1 has a reel; track whether its Reels state is on screen so
        // the video is paused (and never fetched) while any other state shows.
        if (phone.querySelector('.reel-canvas')) {
          reelStateActive = isReel;
          reelSync.run();
        }
        if (captionEl && btn.dataset.caption) {
          captionEl.style.opacity = '0';
          window.setTimeout(() => {
            captionEl.textContent = btn.dataset.caption || '';
            requestAnimationFrame(() => { captionEl.style.opacity = '1'; });
          }, 380);
        }
        if (featureEl && btn.dataset.feature) {
          featureEl.style.opacity = '0';
          window.setTimeout(() => {
            featureEl.textContent = btn.dataset.feature || '';
            requestAnimationFrame(() => { featureEl.style.opacity = '1'; });
          }, 380);
        }
        window.setTimeout(refit, 800);
        if (isUser) {
          stopStateAuto();
          if (stopProductAuto) stopProductAuto();
        }
      }

      function stateTick() {
        if (stateStopped) return;
        const curIdx = dots.findIndex((b) => b.classList.contains('is-active'));
        const next = (curIdx + 1) % dots.length;
        activate(next, false);
        stateTimer = window.setTimeout(stateTick, 5000);
      }

      stopStateAutos.push(stopStateAuto);
      dots.forEach((btn, idx) => {
        const h = () => activate(idx, true);
        btn.addEventListener('click', h);
        cleanups.push(() => btn.removeEventListener('click', h));
      });

      function startStateAuto() {
        const randomIdx = Math.floor(Math.random() * dots.length);
        activate(randomIdx, false);
        stateTimer = window.setTimeout(stateTick, 5000);
      }
      timers.push(window.setTimeout(startStateAuto, 700));

      randomizeState[target] = () => {
        if (stateStopped) return;
        const randomIdx = Math.floor(Math.random() * dots.length);
        activate(randomIdx, false);
      };
      cleanups.push(() => { if (stateTimer) clearTimeout(stateTimer); });
    });

    // ---------- reel sub-toggle ----------
    const rstBtns = root.querySelectorAll<HTMLElement>('.rst-btn');
    const vids = root.querySelectorAll<HTMLVideoElement>('.reel-video-bg');
    // The two reels are ~16MB combined. Loading them on mount (preload="auto" +
    // an eager .load()) stalled slow connections and exhausted memory on older
    // iOS. Instead keep preload="none" and only fetch/play the visible reel
    // once the section scrolls near the viewport; pause it when it leaves.
    if (typeof IntersectionObserver !== 'undefined') {
      reelSync.run = () => {
        const shouldPlay = sectionVisible && reelStateActive && phone1Visible;
        if (!shouldPlay) {
          vids.forEach((v) => v.pause());
          return;
        }
        let active = Array.from(vids).find((v) => v.style.opacity !== '0');
        if (!active) active = vids[0];
        if (!active) return;
        const p = active.play();
        if (p && p.catch) p.catch(() => {});
      };
      const vio = new IntersectionObserver(
        (entries) => {
          sectionVisible = entries.some((en) => en.isIntersecting);
          reelSync.run();
        },
        { rootMargin: '200px' },
      );
      vio.observe(root);
      cleanups.push(() => vio.disconnect());
    }
    rstBtns.forEach((btn) => {
      const h = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        stopStateAutos.forEach((fn) => fn());
        if (stopProductAuto) stopProductAuto();
        const idx = btn.dataset.reelIdx;
        rstBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        vids.forEach((v) => {
          const isThis = v.dataset.reel === idx;
          v.style.opacity = isThis ? '1' : '0';
          if (isThis) {
            v.currentTime = 0;
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
          } else {
            v.pause();
          }
        });
      };
      btn.addEventListener('click', h);
      cleanups.push(() => btn.removeEventListener('click', h));
    });

    // ---------- mobile product toggle ----------
    const toggle = root.querySelector<HTMLElement>('#product-toggle');
    if (toggle) {
      const panes = Array.from(root.querySelectorAll<HTMLElement>('.product-pane'));
      const ptBtns = Array.from(toggle.querySelectorAll<HTMLElement>('.pt-btn'));
      const track = root.querySelector<HTMLElement>('.product-track');
      let autoTimer: number | null = null;
      let autoStopped = false;

      const showPane = (idx: number, autoTriggered = false) => {
        ptBtns.forEach((b, i) => {
          b.classList.toggle('is-active', i === idx);
          b.classList.remove('is-counting');
        });
        panes.forEach((p, i) => p.classList.toggle('is-active', i === idx));
        // Drive the GPU slide (mobile); transform-only, no opacity on the phones.
        if (track) track.dataset.active = String(idx);
        // Pause the reel while aiCONTENT (pane 0) is off screen, so no video
        // decodes behind the aiCHATS pane (and the slide back stays smooth).
        phone1Visible = idx === 0;
        reelSync.run();
        window.setTimeout(refit, 50);
        if (!autoStopped) {
          const activeBtn = ptBtns[idx];
          requestAnimationFrame(() => { activeBtn.classList.add('is-counting'); });
          if (autoTriggered) {
            const phoneKey = idx === 0 ? 'phone1' : 'phone2';
            const randomize = randomizeState[phoneKey];
            if (randomize) window.setTimeout(randomize, 200);
          }
        }
      };
      const tick = () => {
        if (autoStopped) return;
        const currentIdx = ptBtns.findIndex((b) => b.classList.contains('is-active'));
        const next = (currentIdx + 1) % ptBtns.length;
        showPane(next, true);
        autoTimer = window.setTimeout(tick, 5000);
      };
      stopProductAuto = () => {
        autoStopped = true;
        if (autoTimer) clearTimeout(autoTimer);
        ptBtns.forEach((b) => b.classList.remove('is-counting'));
      };
      const clickH = (e: Event) => {
        const btn = (e.target as HTMLElement).closest('.pt-btn');
        if (!btn) return;
        stopProductAuto?.();
        stopStateAutos.forEach((fn) => fn());
        const idx = ptBtns.indexOf(btn as HTMLElement);
        showPane(idx);
      };
      toggle.addEventListener('click', clickH);
      cleanups.push(() => toggle.removeEventListener('click', clickH));

      const startAuto = () => {
        if (window.innerWidth > 900) return;
        const randomStart = Math.floor(Math.random() * ptBtns.length);
        showPane(randomStart, true);
        window.setTimeout(() => {
          const phoneKey = randomStart === 0 ? 'phone1' : 'phone2';
          const fn = randomizeState[phoneKey];
          if (fn) fn();
        }, 300);
        autoTimer = window.setTimeout(tick, 5000);
      };
      timers.push(window.setTimeout(startAuto, 500));
      cleanups.push(() => { if (autoTimer) clearTimeout(autoTimer); });
    }

    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
      window.removeEventListener('resize', refit);
      observers.forEach((o) => o.disconnect());
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section ref={rootRef} id="products-viz" className="py-20 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[#7c3aed]/[0.05] blur-[90px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative">
        {!single && (
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#525252] mb-4">{t('eyebrow')}</p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight text-neutral-900">
            {t('headingPre')} <span className="gradient-text">{t('headingAccent')}</span>
          </h2>
          <p className="mt-6 text-[#525252] text-lg max-w-2xl mx-auto leading-relaxed">{t('intro')}</p>
        </div>
        )}

        {/* Mobile-only product toggle (≤900px), hidden in single mode */}
        {!single && (
        <div className="product-toggle" id="product-toggle">
          <button className="pt-btn is-active" data-target="0">
            <svg className="pt-ring" viewBox="0 0 36 36" aria-hidden="true">
              <circle className="pt-ring-bg" cx="18" cy="18" r="16" />
              <circle className="pt-ring-fg" cx="18" cy="18" r="16" />
            </svg>
            <span>aiCONTENT</span>
          </button>
          <button className="pt-btn" data-target="1">
            <svg className="pt-ring" viewBox="0 0 36 36" aria-hidden="true">
              <circle className="pt-ring-bg" cx="18" cy="18" r="16" />
              <circle className="pt-ring-fg" cx="18" cy="18" r="16" />
            </svg>
            <span>aiCHATS</span>
          </button>
        </div>
        )}

        <div className={single ? "mx-auto w-full max-w-[360px] product-grid" : "grid grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-start max-w-6xl mx-auto product-grid"}>
          <div className="product-track">

          {/* ============ aiCONTENT - Instagram PROFILE GRID ============ */}
          <div className="text-center product-pane is-active" data-product="0">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#7c3aed] mb-3">FLAGSHIP · 01</p>
            <div className="wordmark-3d text-3xl justify-center mb-3"><span className="wm-prefix">ai</span><span className="wm-mark">CONTENT</span><span className="wm-accent" aria-hidden="true" /></div>
            <p className="text-[#525252] text-sm mb-2 product-caption" data-phone="phone1">{t('caption')}</p>
            <p className="text-xs text-[#7c3aed] font-mono uppercase tracking-[0.2em] mb-8 product-feature" data-phone="phone1">{t('feature')}</p>

            <div className="ig-frame-wrap mx-auto">
              <div className="anno-pill pill-purple pill-side-left" style={{ top: '120px' }}>{t('anno1')}<i className="anno-arrow" /></div>
              <div className="anno-pill pill-purple pill-side-left" style={{ top: '290px' }}>{t('anno2')}<i className="anno-arrow" /></div>
              <div className="anno-pill pill-purple pill-side-left" style={{ top: '490px' }}>{t('anno3')}<i className="anno-arrow" /></div>

              <iphone-16-max mode="light" className="ig-tel">
                <div className="ig-screen">
                  <div className="ig-state ig-state-1 is-active" data-state="1">
                    {/* IG nav bar */}
                    <div className="ig-nav">
                      <span className="ig-nav-back ig-svg-md"><IcBack /></span>
                      <div className="ig-nav-title">
                        <span className="ig-username">ainow.ge</span>
                        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M3 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
                      </div>
                      <div className="ig-nav-actions">
                        <span className="ig-nav-plus ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></span>
                        <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg></span>
                      </div>
                    </div>

                    {/* Profile header */}
                    <div className="ig-profile-row">
                      <div className="ig-avatar">
                        <div className="ig-avatar-ring">
                          <div className="ig-avatar-inner">{ai({ color: '#7c3aed', fontSize: '11px' })}</div>
                        </div>
                      </div>
                      <div className="ig-stats">
                        <div><b>247</b><span>posts</span></div>
                        <div><b>18.4k</b><span>followers</span></div>
                        <div><b>312</b><span>following</span></div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="ig-bio">
                      <div className="ig-display-name">aiNOW</div>
                      <div className="ig-bio-text">AI Agency in Georgia</div>
                      <div className="ig-bio-text">Chatbots · Content · Automation</div>
                      <div className="ig-bio-link"><span className="ig-svg-xs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></span> ainow.ge</div>
                    </div>

                    {/* Buttons */}
                    <div className="ig-buttons">
                      <button className="ig-btn ig-btn-primary">Edit profile</button>
                      <button className="ig-btn">Share</button>
                      <button className="ig-btn ig-btn-icon"><span className="ig-svg-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg></span></button>
                    </div>

                    {/* Story highlights */}
                    <div className="ig-highlights">
                      <div className="ig-highlight">
                        <div className="ig-highlight-ring"><div className="ig-highlight-inner" style={{ background: 'linear-gradient(135deg,#7c3aed,#e040fb)' }}><span className="ig-hl-icon ig-svg-xs"><IcGrid /></span></div></div>
                        <span>posts</span>
                      </div>
                      <div className="ig-highlight">
                        <div className="ig-highlight-ring"><div className="ig-highlight-inner" style={{ background: 'linear-gradient(135deg,#e040fb,#ff6b00)' }}><span className="ig-hl-icon ig-svg-xs"><IcPlay /></span></div></div>
                        <span>reels</span>
                      </div>
                      <div className="ig-highlight">
                        <div className="ig-highlight-ring"><div className="ig-highlight-inner" style={{ background: 'linear-gradient(135deg,#ff6b00,#7c3aed)' }}><span className="ig-hl-icon ig-svg-xs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg></span></div></div>
                        <span>cases</span>
                      </div>
                      <div className="ig-highlight">
                        <div className="ig-highlight-ring"><div className="ig-highlight-inner" style={{ background: 'linear-gradient(135deg,#a855f7,#c026d3)' }}><span className="ig-hl-icon ig-svg-xs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg></span></div></div>
                        <span>BTS</span>
                      </div>
                    </div>

                    {/* Tab bar */}
                    <div className="ig-tabs">
                      <div className="ig-tab ig-tab-active ig-svg-tab"><IcGrid /></div>
                      <div className="ig-tab ig-svg-tab"><IcReels /></div>
                      <div className="ig-tab ig-svg-tab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
                    </div>

                    {/* Posts grid */}
                    <div className="ig-grid">
                      <div className="ig-post" style={{ background: 'linear-gradient(160deg,#7c3aed 0%,#e040fb 70%,#ff6b00 100%)' }}>
                        <span className="ig-post-icon-tr ig-svg-xs"><IcReels /></span>
                        <svg className="ig-post-art" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <circle cx="50" cy="38" r="14" fill="rgba(255,255,255,0.18)" />
                          <path d="M22 88c0-15 12-26 28-26s28 11 28 26" fill="rgba(255,255,255,0.14)" />
                          <circle cx="44" cy="35" r="2" fill="#fff" /><circle cx="56" cy="35" r="2" fill="#fff" />
                          <path d="M44 44q6 4 12 0" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                        </svg>
                        <span className="ig-post-play ig-svg-md"><IcPlay /></span>
                        <span className="ig-post-meta"><span className="ig-svg-xs"><IcPlay /></span>47.1K</span>
                      </div>
                      <div className="ig-post ig-post-static" style={{ background: '#0a0a0a', color: '#fff' }}>
                        <div className="ig-post-text-block">
                          <span className="ig-post-tagline" style={{ color: '#e040fb' }}>RESULTS</span>
                          <span className="ig-post-headline" style={{ fontSize: '24px' }}>+387%</span>
                          <span className="ig-post-sub">ROAS · Q1 2026</span>
                        </div>
                      </div>
                      <div className="ig-post" style={{ background: '#1a1a1a' }}>
                        <span className="ig-post-icon-tr ig-svg-xs"><IcCarousel /></span>
                        <div className="ig-post-palette">
                          <span style={{ background: '#7c3aed' }} /><span style={{ background: '#e040fb' }} /><span style={{ background: '#ff6b00' }} /><span style={{ background: '#fafafa' }} />
                        </div>
                        <div className="ig-post-carousel-dots"><span /><span className="active" /><span /><span /></div>
                      </div>
                      <div className="ig-post" style={{ background: 'linear-gradient(135deg,#1a1a1a,#7c3aed)' }}>
                        <span className="ig-post-icon-tr ig-svg-xs"><IcReels /></span>
                        <svg className="ig-post-art" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <rect x="32" y="20" width="36" height="60" rx="18" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                          <circle cx="50" cy="38" r="6" fill="rgba(224,64,251,0.55)" />
                          <rect x="42" y="50" width="16" height="2.5" rx="1" fill="rgba(255,255,255,0.4)" />
                          <rect x="42" y="56" width="11" height="2.5" rx="1" fill="rgba(255,255,255,0.3)" />
                        </svg>
                        <span className="ig-post-play ig-svg-md"><IcPlay /></span>
                        <span className="ig-post-meta"><span className="ig-svg-xs"><IcPlay /></span>23.8K</span>
                      </div>
                      <div className="ig-post ig-post-quote" style={{ background: '#fafafa', color: '#0a0a0a' }}>
                        <span className="ig-post-bigquote">{'“'}</span>
                        <span className="ig-post-quotetext">AI era <b>is here.</b></span>
                        <span className="ig-post-sig">- aiNOW</span>
                      </div>
                      <div className="ig-post" style={{ background: 'linear-gradient(135deg,#7c3aed,#ff6b00)' }}>
                        <span className="ig-post-icon-tr ig-svg-xs"><IcCarousel /></span>
                        <div className="ig-post-chart">
                          <span className="ig-post-bar" style={{ height: '25%' }} /><span className="ig-post-bar" style={{ height: '42%' }} /><span className="ig-post-bar" style={{ height: '68%' }} /><span className="ig-post-bar" style={{ height: '88%' }} />
                        </div>
                        <span className="ig-post-meta" style={{ left: '6px', right: 'auto', bottom: '6px' }}>GROWTH</span>
                      </div>
                      <div className="ig-post ig-post-static" style={{ background: 'linear-gradient(135deg,#e040fb,#7c3aed)', color: '#fff' }}>
                        <div className="ig-post-text-block">
                          <span className="ig-post-tagline">CASE</span>
                          <span className="ig-post-headline" style={{ fontSize: '30px', lineHeight: 0.9 }}>14d</span>
                          <span className="ig-post-sub">to launch</span>
                        </div>
                      </div>
                      <div className="ig-post" style={{ background: 'linear-gradient(135deg,#ff6b00,#e040fb)' }}>
                        <span className="ig-post-icon-tr ig-svg-xs"><IcReels /></span>
                        <svg className="ig-post-art" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <rect x="15" y="25" width="58" height="22" rx="11" fill="rgba(255,255,255,0.25)" />
                          <circle cx="32" cy="36" r="2.5" fill="#fff" /><circle cx="42" cy="36" r="2.5" fill="#fff" /><circle cx="52" cy="36" r="2.5" fill="#fff" />
                          <rect x="32" y="55" width="55" height="22" rx="11" fill="rgba(255,255,255,0.45)" />
                          <rect x="42" y="62" width="36" height="2.5" rx="1" fill="rgba(255,255,255,0.7)" />
                          <rect x="42" y="68" width="24" height="2.5" rx="1" fill="rgba(255,255,255,0.55)" />
                        </svg>
                        <span className="ig-post-play ig-svg-md"><IcPlay /></span>
                        <span className="ig-post-meta"><span className="ig-svg-xs"><IcPlay /></span>89.3K</span>
                      </div>
                      <div className="ig-post ig-post-static" style={{ background: 'linear-gradient(135deg,#0a0a0a,#7c3aed)', color: '#fff' }}>
                        <span className="ig-post-icon-tr ig-svg-xs"><IcCarousel /></span>
                        <div className="ig-post-text-block">
                          <span className="ig-post-tagline" style={{ color: '#e040fb' }}>WORKSHOP</span>
                          <span className="ig-post-headline" style={{ fontSize: '20px' }}>ChatGPT</span>
                          <span className="ig-post-sub">June 14 · Free</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="ig-bottom-nav">
                      <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></span>
                      <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></span>
                      <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg></span>
                      <span className="ig-svg-md"><IcReels /></span>
                      <span className="ig-bottom-pfp" />
                    </div>
                  </div>

                  <div className="ig-state ig-state-2" data-state="2">
                    {/* Reel-view header */}
                    <div className="ig-nav" style={{ background: 'transparent', border: 0, color: '#fff', position: 'absolute', top: '38px', left: 0, right: 0, zIndex: 5, padding: '8px 14px', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                      <span className="ig-nav-back ig-svg-md"><IcBack /></span>
                      <span className="ig-username" style={{ color: '#fff' }}>Reels</span>
                      <span className="ig-svg-md" style={{ color: '#fff' }}><IcDots /></span>
                    </div>
                    {/* Reel canvas */}
                    <div className="reel-canvas">
                      <video className="reel-video-bg" muted loop playsInline preload="none" poster="/landing/reel-poster.jpg" data-reel="0">
                        <source src={aiMedia.landingReel} type="video/mp4" />
                      </video>
                      <video className="reel-video-bg" muted loop playsInline preload="none" poster="/landing/reel_product-poster.jpg" data-reel="1" style={{ opacity: 0 }}>
                        <source src={aiMedia.landingProductReel} type="video/mp4" />
                      </video>
                      {/* Reel sub-toggle */}
                      <div className="reel-sub-toggle">
                        <button className="rst-btn is-active" data-reel-idx="0">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                          <span>Product</span>
                        </button>
                        <button className="rst-btn" data-reel-idx="1">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>
                          <span>AI Influencer</span>
                        </button>
                      </div>
                      <div className="reel-overlay-bottom">
                        <div className="reel-user-row">
                          <div className="reel-avatar">{ai({ color: '#7c3aed', fontSize: '9px' })}</div>
                          <span className="reel-username">ainow.ge</span>
                          <button className="reel-follow">Follow</button>
                        </div>
                        <div className="reel-caption">How we make AI content 24/7 <span style={{ color: '#e040fb' }}>#aiNOW</span></div>
                        <div className="reel-audio">♪ Original audio · ainow.ge</div>
                      </div>
                      <div className="reel-actions">
                        <div className="reel-action"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg><span>284K</span></div>
                        <div className="reel-action"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg><span>5.7K</span></div>
                        <div className="reel-action"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg><span>12K</span></div>
                        <div className="reel-action"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><polygon points="8 5 19 12 8 19 8 5" /></svg><span className="reel-views">1.2M views</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="ig-state ig-state-3" data-state="3">
                    {/* IG nav for post detail */}
                    <div className="ig-nav">
                      <span className="ig-nav-back ig-svg-md"><IcBack /></span>
                      <span className="ig-username">Post</span>
                      <span className="ig-svg-md"><IcDots /></span>
                    </div>
                    {/* Post header */}
                    <div className="post-header">
                      <div className="ig-avatar-ring" style={{ width: '32px', height: '32px' }}><div className="ig-avatar-inner" style={{ background: 'linear-gradient(135deg,#7c3aed,#e040fb)' }}>{ai({ color: '#fff', fontSize: '8px' })}</div></div>
                      <div className="post-meta"><b>ainow.ge</b><span>Tbilisi</span></div>
                      <span className="ig-svg-sm" style={{ marginLeft: 'auto' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="1.5" fill="currentColor" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><circle cx="12" cy="19" r="1.5" fill="currentColor" /></svg></span>
                    </div>
                    {/* Carousel slide */}
                    <div className="carousel-slide" style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#e040fb 100%)' }}>
                      <div className="slide-content">
                        <div className="slide-tag">5 steps</div>
                        <div className="slide-title">How to write<br />an AI brief</div>
                        <div className="slide-num">02<span>/05</span></div>
                      </div>
                      <div className="carousel-dots-bottom"><span /><span className="active" /><span /><span /><span /></div>
                    </div>
                    {/* Post actions */}
                    <div className="post-actions">
                      <div className="pa-left">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                      </div>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                    </div>
                    <div className="post-likes"><b>14,231 likes</b></div>
                    <div className="post-caption"><b>ainow.ge</b> AI brief = 5 steps. Save it before you forget ↓</div>
                    <div className="post-comments">View all 287 comments</div>
                    <div className="post-time">2 hours ago</div>
                  </div>
                </div>
              </iphone-16-max>
            </div>

            <div className="kpi-row kpi-purple">
              <div className="kpi-item"><div className="kpi-val">∞</div><div className="kpi-label">{t('kpiPerDay')}</div></div>
              <div className="kpi-item"><div className="kpi-val">100+</div><div className="kpi-label">{t('kpiFormats')}</div></div>
              <div className="kpi-item"><div className="kpi-val">24/7</div><div className="kpi-label">{t('kpiActive')}</div></div>
            </div>
            <div className="state-slider" data-target="phone1">
              <button className="ss-dot is-active" data-state="1" data-caption={t('s1Caption')} data-feature={t('s1Feature')}><em>{t('s1Label')}</em></button>
              <button className="ss-dot" data-state="2" data-caption={t('s2Caption')} data-feature={t('s2Feature')}><em>{t('s2Label')}</em></button>
              <button className="ss-dot" data-state="3" data-caption={t('s3Caption')} data-feature={t('s3Feature')}><em>{t('s3Label')}</em></button>
            </div>

            <a href="https://aicontent.ge" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition">
              aiCONTENT.ge <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* ============ aiCHATS - Instagram DM CHAT (hidden when single) ============ */}
          {!single && (
          <div className="text-center product-pane" data-product="1">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C2185B] mb-3">FLAGSHIP · 02</p>
            <div className="wordmark-3d text-3xl justify-center mb-3"><span className="wm-prefix">ai</span><span className="wm-mark">CHATS</span><span className="wm-accent" aria-hidden="true" /></div>
            <p className="text-[#525252] text-sm mb-2 product-caption" data-phone="phone2">{ts('caption')}</p>
            <p className="text-xs text-[#C2185B] font-mono uppercase tracking-[0.2em] mb-8 product-feature" data-phone="phone2">{ts('feature')}</p>

            <div className="ig-frame-wrap ig-frame-wrap-staff mx-auto">
              <div className="anno-pill pill-magenta pill-side-right" style={{ top: '120px' }}><i className="anno-arrow" />{ts('anno1')}</div>
              <div className="anno-pill pill-magenta pill-side-right" style={{ top: '290px' }}><i className="anno-arrow" />{ts('anno2')}</div>
              <div className="anno-pill pill-magenta pill-side-right" style={{ top: '490px' }}><i className="anno-arrow" />{ts('anno3')}</div>

              <iphone-16-max mode="light" className="ig-tel">
                <div className="ig-screen">
                  <div className="ig-state ig-state-1 is-active" data-state="1">
                    {/* DM header */}
                    <div className="ig-dm-header">
                      <span className="ig-dm-back ig-svg-md"><IcBack /></span>
                      <div className="ig-dm-pfp">
                        <div className="ig-dm-pfp-inner" style={{ background: 'linear-gradient(135deg,#C2185B,#7c3aed)' }}>{ai({ color: '#fff', fontSize: '9px' })}</div>
                        <div className="ig-dm-active-dot" />
                      </div>
                      <div className="ig-dm-info">
                        <div className="ig-dm-name">ainow.ge<IcVerified /></div>
                        <div className="ig-dm-status">Active now · Avg reply 1 min</div>
                      </div>
                      <div className="ig-dm-actions">
                        <span className="ig-svg-md"><IcCall /></span>
                        <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg></span>
                      </div>
                    </div>

                    {/* Chat thread */}
                    <div className="ig-chat">
                      <div className="ig-chat-date">Today, 14:23</div>
                      <div className="ig-msg-row ig-msg-in">
                        <div className="ig-msg-bubble ig-msg-bubble-in">Hi! Need a chatbot for our shop. How much?</div>
                      </div>
                      <div className="ig-msg-row ig-msg-out">
                        <div className="ig-msg-bubble ig-msg-bubble-out">
                          Hi! <span className="ig-msg-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" /></svg></span><br />
                          Telegram + Instagram bot<br />
                          + CRM integration = <b>$650</b><br />
                          Launch: <b>14 days</b>
                        </div>
                      </div>
                      <div className="ig-msg-row ig-msg-in">
                        <div className="ig-msg-bubble ig-msg-bubble-in">And content? Reels?</div>
                      </div>
                      <div className="ig-msg-row ig-msg-out">
                        <div className="ig-msg-bubble ig-msg-bubble-out">
                          20 Reels/month + 30 photos = <b>$430</b><br />
                          Or combo package:<br />
                          <a href="#" className="ig-msg-link">ainow.ge/pricing</a>
                        </div>
                      </div>
                      <div className="ig-msg-row ig-msg-in">
                        <div className="ig-msg-bubble ig-msg-bubble-in">Great. Let&apos;s start <span className="ig-msg-icon"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="8 5 19 12 8 19" /></svg></span></div>
                      </div>
                      <div className="ig-seen">Seen · 14:25</div>
                      <div className="ig-msg-row ig-msg-in">
                        <div className="ig-msg-bubble ig-msg-bubble-in ig-typing"><span /><span /><span /></div>
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="ig-input-bar">
                      <div className="ig-input-camera ig-svg-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg></div>
                      <div className="ig-input-field">Message</div>
                      <div className="ig-input-icons">
                        <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg></span>
                        <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></span>
                        <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></span>
                      </div>
                    </div>
                  </div>

                  <div className="ig-state ig-state-2" data-state="2">
                    {/* Post detail header */}
                    <div className="ig-nav">
                      <span className="ig-nav-back ig-svg-md"><IcBack /></span>
                      <span className="ig-username">Comments · 287</span>
                      <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></span>
                    </div>
                    {/* Comment thread */}
                    <div className="comment-thread">
                      <div className="cmnt">
                        <div className="cmnt-pfp" style={{ background: 'linear-gradient(135deg,#fde047,#f97316)' }}>E</div>
                        <div className="cmnt-body">
                          <div><b>elene_tbilisi</b> How much does it cost? 😍</div>
                          <div className="cmnt-meta">2m ago · 12 likes</div>
                        </div>
                      </div>
                      <div className="cmnt cmnt-bot">
                        <div className="cmnt-pfp" style={{ background: 'linear-gradient(135deg,#7c3aed,#C2185B)' }}>{ai({ color: '#fff', fontSize: '9px' })}</div>
                        <div className="cmnt-body">
                          <div><b>ainow.ge</b> <span className="cmnt-ai-badge">AI</span> @elene_tbilisi Hi! 🙌 Price is <b>$32</b>. Order ⬇️ ainow.ge/order</div>
                          <div className="cmnt-meta cmnt-meta-bot">now · auto-reply · 1.2s</div>
                        </div>
                      </div>
                      <div className="cmnt">
                        <div className="cmnt-pfp" style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}>N</div>
                        <div className="cmnt-body">
                          <div><b>nika.t</b> Do you deliver to Batumi?</div>
                          <div className="cmnt-meta">5m ago · 3 likes</div>
                        </div>
                      </div>
                      <div className="cmnt cmnt-bot">
                        <div className="cmnt-pfp" style={{ background: 'linear-gradient(135deg,#7c3aed,#C2185B)' }}>{ai({ color: '#fff', fontSize: '9px' })}</div>
                        <div className="cmnt-body">
                          <div><b>ainow.ge</b> <span className="cmnt-ai-badge">AI</span> @nika.t Yes! Batumi 2 days · free on $35+ orders ✓</div>
                          <div className="cmnt-meta cmnt-meta-bot">now · auto-reply</div>
                        </div>
                      </div>
                      <div className="cmnt-stats">
                        <span><b>147</b> comments · <b>147</b> auto-replies</span>
                        <span className="cmnt-status">✓ Bot is active</span>
                      </div>
                    </div>
                  </div>

                  <div className="ig-state ig-state-3" data-state="3">
                    {/* DM header same */}
                    <div className="ig-dm-header">
                      <span className="ig-dm-back ig-svg-md"><IcBack /></span>
                      <div className="ig-dm-pfp">
                        <div className="ig-dm-pfp-inner" style={{ background: 'linear-gradient(135deg,#C2185B,#7c3aed)' }}>{ai({ color: '#fff', fontSize: '9px' })}</div>
                        <div className="ig-dm-active-dot" />
                      </div>
                      <div className="ig-dm-info">
                        <div className="ig-dm-name">ainow.ge<IcVerified /></div>
                        <div className="ig-dm-status">Active now · AI bot</div>
                      </div>
                      <div className="ig-dm-actions">
                        <span className="ig-svg-md"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>
                      </div>
                    </div>
                    {/* Chat */}
                    <div className="ig-chat">
                      <div className="ig-chat-date">Today, 16:08</div>
                      <div className="ig-msg-row ig-msg-in">
                        <div className="ig-msg-bubble ig-msg-bubble-in">Hi, I want the catalog</div>
                      </div>
                      <div className="ig-msg-row ig-msg-out">
                        <div className="ig-msg-bubble ig-msg-bubble-out">
                          Hi! Before accessing the catalog:<br />
                          <span className="check-step">①</span> Follow <b>@ainow.ge</b><br />
                          <span className="check-step">②</span> Verify your email<br />
                          <a href="#" className="ig-msg-link">ainow.ge/verify</a>
                        </div>
                      </div>
                      <div className="ig-msg-row ig-msg-in">
                        <div className="ig-msg-bubble ig-msg-bubble-in">Done ✓</div>
                      </div>
                      <div className="ig-msg-row ig-msg-out">
                        <div className="ig-msg-bubble ig-msg-bubble-out" style={{ background: 'linear-gradient(135deg,#16a34a 0%,#22c55e 100%)', color: '#fff' }}>
                          <b>✓ Verified!</b><br />
                          Unlock - full catalog<br />
                          + 15% discount for new customers<br />
                          <a href="#" className="ig-msg-link" style={{ color: '#fff' }}>ainow.ge/catalog</a>
                        </div>
                      </div>
                      <div className="ig-seen">Seen · 16:09</div>
                    </div>
                  </div>
                </div>
              </iphone-16-max>
            </div>

            <div className="kpi-row kpi-magenta">
              <div className="kpi-item"><div className="kpi-val">{ts('kpiReplyVal')}</div><div className="kpi-label">{ts('kpiReplyLabel')}</div></div>
              <div className="kpi-item"><div className="kpi-val">24/7</div><div className="kpi-label">{ts('kpiActive')}</div></div>
              <div className="kpi-item"><div className="kpi-val">3</div><div className="kpi-label">{ts('kpiFeatures')}</div></div>
            </div>
            <div className="state-slider state-slider-magenta" data-target="phone2">
              <button className="ss-dot is-active" data-state="1" data-caption={ts('caption')} data-feature={ts('feature')}><em>{ts('s1Label')}</em></button>
              <button className="ss-dot" data-state="2" data-caption={ts('s2Caption')} data-feature={ts('s2Feature')}><em>{ts('s2Label')}</em></button>
              <button className="ss-dot" data-state="3" data-caption={ts('s3Caption')} data-feature={ts('s3Feature')}><em>{ts('s3Label')}</em></button>
            </div>

            <a href="https://aichats.ge" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition">
              aiCHATS.ge <span aria-hidden="true">→</span>
            </a>
          </div>
          )}

          </div>
        </div>
      </div>
    </section>
  );
}
