'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import './landing-dashboard.css';

/* =========================================================================
   LandingDashboard, "one screen, every number" demo board. Three product
   groups visible at once, a gentle ambient tick keeps the board alive.
   Honest framing: the copy says out loud this is a demo screen.
   House pattern: mutable sim state in refs, interval inside useEffect with
   cleanup, document.hidden pause, matchMedia reduced-motion guard
   (see ReviewsMarquee.tsx).
   ========================================================================= */

type Kpi = {
  lab: string;
  val: string;
  d: string;
  up: boolean;
  hero?: boolean;
  n?: [number, number];
  unit?: string;
  line: string;
  ic: React.ReactNode;
};

const ICONS = {
  spend: <><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  lead: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m19 8 2 2-4.5 4.5L14 12z" /></>,
  form: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h10M7 12h6" /></>,
  roi: <><path d="M3 17l6-6 4 4 7-7" /><path d="M14 8h6v6" /></>,
  chat: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  cal: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" /></>,
  handoff: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 11h-6" /></>,
  post: <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="16" y2="12" /><line x1="4" y1="17" x2="12" y2="17" /></>,
  reach: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" /></>,
  save: <><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></>,
  profile: <><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
};

export function LandingDashboard() {
  const t = useTranslations('home.dashboard');
  const rootRef = useRef<HTMLElement>(null);

  const GROUPS: { key: string; tone: string; label: string; rows: Kpi[] }[] = [
    {
      key: 'ads', tone: '#10b981', label: t('gAds'),
      rows: [
        { lab: t('adsSpend'), val: '1 844 ₾', d: '+6%', up: true, n: [3, 11], unit: ' ₾', line: '4,40 20,34 36,36 52,28 68,26 84,18 100,14', ic: ICONS.spend },
        { lab: t('adsLead'), val: '~$0.4', d: '-18%', up: true, hero: true, line: '4,14 20,20 36,18 52,26 68,30 84,38 100,42', ic: ICONS.lead },
        { lab: t('adsForms'), val: '53', d: '+27%', up: true, line: '4,42 20,36 36,34 52,26 68,24 84,16 100,10', ic: ICONS.form },
        { lab: t('adsRoi'), val: '3.1x', d: '+0.4', up: true, line: '4,44 20,36 36,34 52,24 68,22 84,16 100,8', ic: ICONS.roi },
      ],
    },
    {
      key: 'staff', tone: '#2563eb', label: t('gStaff'),
      rows: [
        { lab: t('staffChats'), val: '428', d: '+12%', up: true, n: [1, 3], line: '4,40 20,36 36,32 52,28 68,24 84,18 100,12', ic: ICONS.chat },
        { lab: t('staffSpeed'), val: '0.9 ' + t('sec'), d: '-0.3 ' + t('sec'), up: true, line: '4,16 20,20 36,22 52,26 68,30 84,36 100,42', ic: ICONS.clock },
        { lab: t('staffBookings'), val: '19', d: '+9', up: true, hero: true, line: '4,10 20,16 36,14 52,24 68,28 84,36 100,44', ic: ICONS.cal },
        { lab: t('staffHandoff'), val: '14%', d: '-3%', up: true, line: '4,16 20,20 36,22 52,28 68,30 84,38 100,42', ic: ICONS.handoff },
      ],
    },
    {
      key: 'content', tone: '#ec4899', label: t('gContent'),
      rows: [
        { lab: t('contentPosts'), val: '31', d: '+4', up: true, line: '4,40 20,36 36,34 52,28 68,24 84,18 100,12', ic: ICONS.post },
        { lab: t('contentReach'), val: '74 200', d: '+21%', up: true, hero: true, n: [14, 55], line: '4,44 20,38 36,36 52,28 68,24 84,14 100,8', ic: ICONS.reach },
        { lab: t('contentSaves'), val: '1 106', d: '+64', up: true, n: [1, 4], line: '4,38 20,34 36,32 52,26 68,24 84,18 100,12', ic: ICONS.save },
        { lab: t('contentProfile'), val: '2 340', d: '-2%', up: false, n: [1, 5], line: '4,16 20,18 36,22 52,26 68,28 84,34 100,40', ic: ICONS.profile },
      ],
    },
  ];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* fade-up reveal */
    const items = root.querySelectorAll<HTMLElement>('.fade-up');
    if (items.length && 'IntersectionObserver' in window && !reduced) {
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

      /* ambient tick: every ~1.4s one counter moves a little (deterministic LCG) */
      let seed = 7;
      const rand = (lo: number, hi: number) => {
        seed = (seed * 1103515245 + 12345) % 2147483648;
        return lo + (seed % (hi - lo + 1));
      };
      const pool = Array.from(root.querySelectorAll<HTMLElement>('.db-val[data-n]')).map((el) => ({
        el,
        val: parseInt((el.textContent || '0').replace(/[^0-9]/g, ''), 10),
        lo: parseInt(el.dataset.lo || '1', 10),
        hi: parseInt(el.dataset.hi || '3', 10),
        unit: el.dataset.unit || '',
      }));
      const tick = window.setInterval(() => {
        if (document.hidden || !pool.length) return;
        const it = pool[rand(0, pool.length - 1)];
        it.val += rand(it.lo, it.hi);
        it.el.textContent = it.val.toLocaleString('en-US').replace(/,/g, ' ') + it.unit;
        it.el.classList.add('pop');
        window.setTimeout(() => it.el.classList.remove('pop'), 200);
      }, 1400);

      return () => {
        io.disconnect();
        window.clearInterval(tick);
      };
    }
    items.forEach((el) => el.classList.add('in'));
  }, []);

  return (
    <section ref={rootRef} id="dashboard" className="db-section py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="db-head">
          <div>
            <p className="db-eyebrow">{t('eyebrow')}</p>
            <h2 className="fade-up font-display font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-tight text-neutral-900">
              {t('heading')}
            </h2>
          </div>
          <div>
            <p className="db-sub fade-up">{t('sub')}</p>
            <p className="db-demo-note fade-up">{t('demoNote')}</p>
          </div>
        </div>

        <div className="db-shell fade-up">
          {GROUPS.map((g) => (
            <div className="db-group" key={g.key}>
              <div className="db-glab">
                <span className="db-bead" style={{ background: g.tone }} aria-hidden="true" />
                {g.label}
                <small>{t('last7')}</small>
              </div>
              <div className="db-grid">
                {g.rows.map((k) => (
                  <div className="db-kpi" key={k.lab}>
                    <div className="db-top">
                      <span className="db-ic" aria-hidden="true">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{k.ic}</svg>
                      </span>
                      <span className="db-lab">{k.lab}</span>
                    </div>
                    <div
                      className="db-val"
                      {...(k.n ? { 'data-n': '1', 'data-lo': String(k.n[0]), 'data-hi': String(k.n[1]), 'data-unit': k.unit || '' } : {})}
                    >
                      {k.val}
                    </div>
                    <div className={'db-delta' + (k.up ? '' : ' down')}>
                      <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        {k.up ? <path d="M7 17 17 7M8 7h9v9" /> : <path d="M7 7l10 10M8 17h9V8" />}
                      </svg>
                      {k.d}
                    </div>
                    <svg className="db-spark" viewBox="0 0 104 52" fill="none" preserveAspectRatio="none" aria-hidden="true">
                      <polyline points={k.line} stroke={k.hero ? '#7c3aed' : '#c9c9d3'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="db-foot">
            <p>{t('footLine')}</p>
            <a href="#cta" className="db-cta">{t('footCta')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
