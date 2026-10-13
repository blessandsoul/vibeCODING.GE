'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import './landing-hero-sim.css';

/* =========================================================================
   LandingHeroSim, "#hero". One AI employee doing three jobs, live.
   Port of the approved prototype's one-clock simulation: a single clock
   drives the typed verb, the lit lane, the status steps, the wire comets
   and the counters, so nothing can desync.
   House pattern (see ReviewsMarquee.tsx): all mutable sim state lives
   outside React, timers only inside useEffect with full cleanup, pauses on
   document.hidden, and a matchMedia reduced-motion guard renders the
   static everything-visible variant instead.
   ========================================================================= */

type JobKey = 'content' | 'ads' | 'sales';

const JOB_ORDER: JobKey[] = ['content', 'ads', 'sales'];
const JOB_COLOR: Record<JobKey, string> = { content: '#ec4899', ads: '#10b981', sales: '#2563eb' };
const DRIP: Record<JobKey, { n: number; dur: number }> = {
  content: { n: 4, dur: 1500 },
  ads: { n: 3, dur: 2200 },
  sales: { n: 2, dur: 3100 },
};
/* sphere switcher icons, one per demo industry (feather-style strokes) */
const SPH_ICONS: React.ReactNode[] = [
  /* salon: scissors */
  <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" /></>,
  /* shop: bag */
  <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></>,
  /* construction: hard hat */
  <><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" /><path d="M10 10V5a2 2 0 0 1 4 0v5" /><path d="M4 15v-3a6 6 0 0 1 6-6" /><path d="M14 6a6 6 0 0 1 6 6v3" /></>,
  /* clinic: cross */
  <><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2z" /></>,
  /* restaurant: utensils */
  <><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" /><path d="M21 15v7" /></>,
  /* hotel: bed */
  <><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></>,
  /* auto service: car */
  <><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></>,
  /* fitness: activity pulse */
  <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
];

/* feed ticker: each done-item's checkmark wears the color of the product
   that did the work (feed1..feed8 order):
   post published / answered 0.9s / 2 Meta leads / booking 23:47 /
   campaign optimized / video edited / weekly report / sale closed */
const FEED_TONE = ['#ec4899', '#2563eb', '#10b981', '#2563eb', '#10b981', '#ec4899', '#7c3aed', '#2563eb'];

const CHIPS: Record<JobKey, [string, string, [number, number]][]> = {
  content: [['video', 'M2 6h13v12H2z m20 2-7 4 7 4z', [6, 18]], ['photo', 'M3 3h18v18H3z', [8, 30]], ['text', 'M4 7h16M4 12h12M4 17h8', [10, 32]]],
  ads: [['meta', 'M2 12c2-6 8-6 10 0s8 6 10 0', [3, 9]], ['google', 'M12 3a9 9 0 1 0 9 9h-9z', [2, 8]]],
  sales: [['chat', 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', [12, 45]], ['call', 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-17.7-17.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z', [3, 12]]],
};

export function LandingHeroSim() {
  const t = useTranslations('home.heroSim');
  /* brand tagline strings live in the old hero's namespace; reused as-is */
  const th = useTranslations('home.hero');
  const rootRef = useRef<HTMLElement>(null);

  /* i18n bundles consumed by the imperative sim */
  const VERBS: Record<JobKey, string> = {
    content: t('verbContent'),
    ads: t('verbAds'),
    sales: t('verbSales'),
  };
  const STATES: Record<JobKey, { step: number; list: { txt: string; chip?: string; done?: boolean; add?: [number, number] }[] }> = {
    content: {
      step: 1750,
      list: [
        { txt: t('stC1'), chip: 'video' },
        { txt: t('stC2'), chip: 'video' },
        { txt: t('stCDone'), chip: 'video', done: true, add: [20, 60] },
        { txt: t('stC3'), chip: 'photo' },
        { txt: t('stCDone'), chip: 'photo', done: true, add: [15, 45] },
        { txt: t('stC4'), chip: 'text' },
        { txt: t('stCDone'), chip: 'text', done: true, add: [10, 35] },
      ],
    },
    ads: {
      step: 2250,
      list: [
        { txt: t('stA1') },
        { txt: t('stA2'), chip: 'meta' },
        { txt: t('stADone'), chip: 'meta', done: true, add: [2, 6] },
        { txt: t('stA3') },
        { txt: t('stA2'), chip: 'google' },
        { txt: t('stADone'), chip: 'google', done: true, add: [1, 4] },
      ],
    },
    sales: {
      step: 2700,
      list: [
        { txt: t('stS1'), chip: 'chat' },
        { txt: t('stS2'), chip: 'chat' },
        { txt: t('stS3'), chip: 'call' },
        { txt: t('stS4'), chip: 'call' },
        { txt: t('stSDone'), chip: 'chat', done: true, add: [1, 1] },
      ],
    },
  };
  const CHAT: { who: 'user' | 'bot'; text: string }[][] = [
    [
      { who: 'user', text: t('chatS1U') },
      { who: 'bot', text: t('chatS1B') },
    ],
    [
      { who: 'user', text: t('chatS2U') },
      { who: 'bot', text: t('chatS2B') },
    ],
    [
      { who: 'user', text: t('chatS3U') },
      { who: 'bot', text: t('chatS3B') },
    ],
    [
      { who: 'user', text: t('chatS4U') },
      { who: 'bot', text: t('chatS4B') },
    ],
    [
      { who: 'user', text: t('chatS5U') },
      { who: 'bot', text: t('chatS5B') },
    ],
    [
      { who: 'user', text: t('chatS6U') },
      { who: 'bot', text: t('chatS6B') },
    ],
    [
      { who: 'user', text: t('chatS7U') },
      { who: 'bot', text: t('chatS7B') },
    ],
    [
      { who: 'user', text: t('chatS8U') },
      { who: 'bot', text: t('chatS8B') },
    ],
  ];
  const FALLBACK_REPLY = t('chatFallback');
  /* keyword reply bank, ported from the prototype. Georgian first, with
     EN/RU alternations so the demo answers in every indexed locale.
     JS \b is ASCII-only, so short Georgian words are anchored manually. */
  const REPLIES: { re: RegExp; key: string }[] = [
    { re: /(გამარჯობ|სალამ|ჰეი|hello|hi|привет|здравств)/i, key: 'reply1' },
    { re: /(ჯავშ|თავისუფალ|ხვალ|დრო|როდის|slot|book|tomorrow|запис|свободн|завтра)/i, key: 'reply2' },
    { re: /(ფას|ღირ|რამდენ|თანხ|ბიუჯეტ|price|cost|how much|цен|сколько|стоит)/i, key: 'reply3' },
    { re: /(სად |მისამართ|ოფის|ქალაქ|where|address|где|адрес)/i, key: 'reply4' },
    { re: /(მუშაობ|საათ|ღამ|შაბათ|კვირა|hours|night|часы|ночь)/i, key: 'reply5' },
    { re: /(რეკლამ|meta|google|facebook|instagram|ads|реклам)/i, key: 'reply6' },
    { re: /(პოსტ|კონტენტ|ვიდეო|ფოტო|ტექსტ|post|content|video|пост|контент|видео)/i, key: 'reply7' },
    { re: /(ბოტი|რობოტ|ადამიან|ხელოვნურ|(^|\s)ვინ(\s|\?|$)|(^|\s)ხარ|robot|human|бот|робот|человек)/i, key: 'reply8' },
  ];
  const TOUR = [
    { sel: '.hs-chat-card', text: t('tour1') },
    { sel: '.hs-spheres', text: t('tour2') },
    { sel: '.hs-qq-row', text: t('tour3') },
    { sel: '.hs-lanes', text: t('tour4') },
    { sel: '.hs-trunk', text: t('tour5') },
    { sel: '.hs-btn-primary', text: t('tour6') },
  ];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const $ = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector<T>(sel);
    const $$ = <T extends HTMLElement = HTMLElement>(sel: string) => Array.from(root.querySelectorAll<T>(sel));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const timers: number[] = [];
    const intervals: number[] = [];
    const rafs: number[] = [];
    const later = (fn: () => void, ms: number) => { const id = window.setTimeout(fn, ms); timers.push(id); return id; };
    const every = (fn: () => void, ms: number) => { const id = window.setInterval(fn, ms); intervals.push(id); return id; };

    /* deterministic LCG so the demo is lively but reproducible-ish */
    let seed = Date.now() % 100000;
    const rand = (lo: number, hi: number) => {
      seed = (seed * 1103515245 + 12345) % 2147483648;
      return lo + (seed % (hi - lo + 1));
    };

    /* ── counters seeded mid-day so the screen is never at zero ───────── */
    const counters: Record<JobKey, number> = {
      content: rand(700, 1600), ads: rand(25, 60), sales: rand(6, 22),
    };
    let money = rand(1800, 3400);
    const fmt = (n: number) => n.toLocaleString('en-US').replace(/,/g, ' ');
    const moneyEl = $('.hs-money');
    const initialMoney = money;
    const earnedEl = $('.hs-earned');
    const earnedVal = $('.hs-earned b');
    const paintMoney = () => {
      if (moneyEl) moneyEl.textContent = '+₾ ' + fmt(money);
      const earned = money - initialMoney;
      if (earned > 0 && earnedEl && earnedVal) {
        earnedVal.textContent = '+₾ ' + fmt(earned);
        earnedEl.classList.add('show');
      }
    };
    JOB_ORDER.forEach((k) => {
      const el = $(`.hs-lane[data-job="${k}"] .hs-cnt`);
      if (el) el.textContent = fmt(counters[k]);
    });
    paintMoney();

    /* chips: seeded per-tool counters */
    $$('.hs-chip').forEach((c) => {
      const lo = parseInt(c.dataset.lo || '2', 10);
      const hi = parseInt(c.dataset.hi || '9', 10);
      c.dataset.n = String(rand(lo, hi));
      const n = c.querySelector('.hs-chip-n');
      if (n) n.textContent = c.dataset.n;
    });

    /* ── lit lane paint ────────────────────────────────────────────────── */
    const jobsRoot = $('.hs-jobs');
    const typedEl = $('.hs-typed');
    const paintJob = (key: JobKey) => {
      if (jobsRoot) jobsRoot.dataset.active = key;
      /* the typed verb wears the color of the product doing that job */
      if (typedEl) typedEl.style.color = JOB_COLOR[key];
      $$('.hs-lane').forEach((l) => l.classList.toggle('on', l.dataset.job === key));
      $$('.hs-wire').forEach((w) => w.classList.toggle('hot', w.dataset.job === key));
    };

    /* ── status steps per lane, each on its own cadence ────────────────── */
    const paintState = (key: JobKey, i: number) => {
      const lane = $(`.hs-lane[data-job="${key}"]`);
      if (!lane) return;
      const step = STATES[key].list[i];
      const st = lane.querySelector('.hs-status') as HTMLElement | null;
      const text = lane.querySelector('.hs-st-text') as HTMLElement | null;
      if (text) text.textContent = step.txt;
      if (st) st.classList.toggle('done', !!step.done);
      lane.querySelectorAll('.hs-chip.live').forEach((c) => c.classList.remove('live'));
      const chip = step.chip && lane.querySelector(`.hs-chip[data-tool="${step.chip}"]`);
      if (chip) chip.classList.add('live');
      if (step.done && step.add) {
        const inc = rand(step.add[0], step.add[1]);
        counters[key] += inc;
        const cnt = lane.querySelector('.hs-cnt') as HTMLElement | null;
        if (cnt) cnt.textContent = fmt(counters[key]);
        const bump = document.createElement('span');
        bump.className = 'hs-bump';
        bump.textContent = '+' + inc;
        lane.querySelector('.hs-metric')?.appendChild(bump);
        later(() => bump.remove(), 900);
        if (chip) {
          const n = parseInt((chip as HTMLElement).dataset.n || '0', 10) + 1;
          (chip as HTMLElement).dataset.n = String(n);
          const cn = chip.querySelector('.hs-chip-n');
          if (cn) cn.textContent = String(n);
        }
        if (key === 'sales') {
          money += rand(30, 160);
          paintMoney();
        }
      }
    };

    if (reduced) {
      /* static variant: everything visible, no clocks */
      JOB_ORDER.forEach((k) => paintState(k, STATES[k].list.length - 1));
      paintJob('content');
      const tw = $('.hs-tw');
      if (tw) tw.textContent = VERBS.content;
      CHAT[0].forEach((m) => pushBubble(m.who, m.text, true));
      return;
    }

    JOB_ORDER.forEach((k) => {
      let i = 0;
      paintState(k, 0);
      every(() => {
        if (document.hidden) return;
        i = (i + 1) % STATES[k].list.length;
        paintState(k, i);
      }, STATES[k].step);
    });

    /* ── the one clock: typewriter fused to the lit lane ───────────────── */
    const tw = $('.hs-tw');
    let ji = 0;
    /* first load starts EMPTY and types the first verb in, instead of the
       full verb popping into existence on hydration */
    let ci = 0;
    let typing = true;
    paintJob(JOB_ORDER[0]);
    if (tw) tw.textContent = '';
    const tick = () => {
      if (document.hidden) { later(tick, 400); return; }
      const verb = VERBS[JOB_ORDER[ji]];
      if (typing) {
        ci++;
        if (tw) tw.textContent = verb.slice(0, ci);
        if (ci >= verb.length) { typing = false; later(tick, 1900); return; }
        later(tick, 78);
      } else {
        ci--;
        if (tw) tw.textContent = verb.slice(0, ci);
        if (ci <= 0) {
          typing = true;
          ji = (ji + 1) % JOB_ORDER.length;
          paintJob(JOB_ORDER[ji]);
          ci = 1;
          if (tw) tw.textContent = VERBS[JOB_ORDER[ji]].slice(0, 1);
          later(tick, 96);
          return;
        }
        later(tick, 38);
      }
    };
    later(tick, 350);

    /* ── wire comets: drops flowing on every branch at its own rate ────── */
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const dropsG = document.getElementById('hs-drops');
    const buildDrops = () => {
      if (!dropsG) return;
      dropsG.innerHTML = '';
      JOB_ORDER.forEach((k) => {
        const path = root.querySelector(`.hs-wire[data-job="${k}"]`) as SVGPathElement | null;
        if (!path || typeof path.getTotalLength !== 'function') return;
        const len = path.getTotalLength();
        const conf = DRIP[k];
        for (let i = 0; i < conf.n; i++) {
          const g = document.createElementNS(SVG_NS, 'g');
          const tail = document.createElementNS(SVG_NS, 'rect');
          tail.setAttribute('width', '14'); tail.setAttribute('height', '2.4');
          tail.setAttribute('rx', '1.2'); tail.setAttribute('x', '-14'); tail.setAttribute('y', '-1.2');
          tail.setAttribute('fill', JOB_COLOR[k]); tail.setAttribute('opacity', '0.35');
          const core = document.createElementNS(SVG_NS, 'circle');
          core.setAttribute('r', '3'); core.setAttribute('fill', JOB_COLOR[k]);
          g.appendChild(tail); g.appendChild(core);
          dropsG.appendChild(g);
          const phase = i / conf.n;
          const anim = () => {
            const p = ((performance.now() / conf.dur + phase) % 1);
            const pt = path.getPointAtLength(p * len);
            const pt2 = path.getPointAtLength(Math.min(len, p * len + 1));
            const ang = (Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180) / Math.PI;
            const lit = jobsRoot?.dataset.active === k;
            g.setAttribute('transform', `translate(${pt.x},${pt.y}) rotate(${ang})`);
            g.setAttribute('opacity', String((lit ? 1 : 0.4) * Math.sin(Math.PI * p)));
            rafs.push(requestAnimationFrame(anim));
          };
          rafs.push(requestAnimationFrame(anim));
        }
      });
    };
    buildDrops();

    /* ── the demo chat: sphere scripts + quick chips + echo replies ────── */
    const body = $('.hs-chat-body');
    let chatTimers: number[] = [];
    function pushBubble(who: 'user' | 'bot', text: string, instant = false) {
      if (!body) return;
      const d = document.createElement('div');
      d.className = 'hs-msg ' + (who === 'bot' ? 'hs-msg-bot' : 'hs-msg-user');
      d.textContent = text;
      if (who === 'bot' && !reduced) {
        /* per-reply speed badge: the product's one-second promise, shown */
        const meta = document.createElement('span');
        meta.className = 'hs-msg-meta';
        meta.textContent = (rand(4, 12) / 10).toFixed(1) + ' ' + t('sec');
        d.appendChild(meta);
      }
      body.appendChild(d);
      body.scrollTop = body.scrollHeight;
      if (instant) d.classList.add('in');
      else requestAnimationFrame(() => d.classList.add('in'));
    }
    const typingBubble = () => {
      if (!body) return null;
      const d = document.createElement('div');
      d.className = 'hs-msg hs-msg-typing';
      d.innerHTML = '<span class="hs-typing"><i></i><i></i><i></i></span>';
      body.appendChild(d);
      body.scrollTop = body.scrollHeight;
      requestAnimationFrame(() => d.classList.add('in'));
      return d;
    };
    const playScript = (idx: number) => {
      chatTimers.forEach((id) => window.clearTimeout(id));
      chatTimers = [];
      if (body) body.innerHTML = '';
      let delay = 350;
      CHAT[idx].forEach((m) => {
        if (m.who === 'bot') {
          chatTimers.push(window.setTimeout(() => {
            const th = typingBubble();
            chatTimers.push(window.setTimeout(() => { th?.remove(); pushBubble('bot', m.text); }, 850));
          }, delay));
          delay += 2100;
        } else {
          chatTimers.push(window.setTimeout(() => pushBubble('user', m.text), delay));
          delay += 1100;
        }
      });
    };
    playScript(0);

    $$('.hs-sph').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        $$('.hs-sph').forEach((b) => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        playScript(idx);
      });
    });

    const input = $('.hs-input') as HTMLInputElement | null;
    const form = $('.hs-chat-foot') as HTMLFormElement | null;
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = (input?.value || '').trim();
      if (!v) return;
      pushBubble('user', v);
      if (input) input.value = '';
      const hit = REPLIES.find((r) => r.re.test(v));
      const answer = hit ? t(hit.key as Parameters<typeof t>[0]) : FALLBACK_REPLY;
      const th = typingBubble();
      chatTimers.push(window.setTimeout(() => { th?.remove(); pushBubble('bot', answer); }, 900));
    });
    $$('.hs-qq').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (input) input.value = btn.textContent || '';
        form?.requestSubmit();
        input?.focus();
      });
    });

    /* ── spotlight tour: opened only by the "lost?" button ─────────────── */
    const tour = $('.hs-tour');
    const hole = $('.hs-tour-hole');
    const tip = $('.hs-tour-tip');
    const tipText = $('.hs-tour-text');
    const stepLab = $('.hs-tour-step');
    const nextBtn = $('.hs-tour-next');
    let ti = 0;
    const placeTour = () => {
      const target = $(TOUR[ti].sel);
      if (!target || !hole || !tip || !tipText || !stepLab || !nextBtn) return;
      /* text first, so the tip height we measure below already fits it */
      tipText.textContent = TOUR[ti].text;
      stepLab.textContent = (ti + 1) + ' / ' + TOUR.length;
      nextBtn.textContent = ti === TOUR.length - 1 ? t('tourDone') : t('tourNext');
      /* body scroll is locked while the tour is open, and the site's CSS
         smooth scroll would leave getBoundingClientRect stale: unlock for
         one INSTANT scroll, relock, then measure on a settled frame */
      document.body.style.overflow = '';
      const r0 = target.getBoundingClientRect();
      window.scrollTo({
        top: Math.max(0, window.scrollY + r0.top - (window.innerHeight - r0.height) / 2),
        behavior: 'instant',
      });
      document.body.style.overflow = 'hidden';
      rafs.push(requestAnimationFrame(() => rafs.push(requestAnimationFrame(() => {
        const r = target.getBoundingClientRect();
        const pad = 10;
        hole.style.top = r.top - pad + 'px';
        hole.style.left = r.left - pad + 'px';
        hole.style.width = r.width + pad * 2 + 'px';
        hole.style.height = r.height + pad * 2 + 'px';
        const tipH = tip.offsetHeight || 150;
        const below = r.bottom + 18 + tipH + 16 < window.innerHeight;
        tip.style.top = (below ? r.bottom + 18 : Math.max(16, r.top - pad - tipH - 12)) + 'px';
        tip.style.left = Math.max(16, Math.min(window.innerWidth - 316, r.left)) + 'px';
      }))));
    };
    const closeTour = () => {
      tour?.classList.remove('open');
      document.body.style.overflow = '';
    };
    const openTour = () => {
      ti = 0;
      tour?.classList.add('open');
      document.body.style.overflow = 'hidden';
      placeTour();
    };
    /* hero wordmark crossfades with the nav logo (nav shows its own past
       30px on the home page, see LandingNav) */
    const brandRow = $('.hs-brandrow');
    const onBrandScroll = () => brandRow?.classList.toggle('scrolled', window.scrollY > 30);
    onBrandScroll();
    window.addEventListener('scroll', onBrandScroll, { passive: true });

    $('.hs-tour-btn')?.addEventListener('click', openTour);
    nextBtn?.addEventListener('click', () => {
      if (ti >= TOUR.length - 1) { closeTour(); return; }
      ti++;
      placeTour();
    });
    tour?.addEventListener('click', (e) => {
      if (e.target === tour) closeTour();
    });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && tour?.classList.contains('open')) closeTour();
    };
    document.addEventListener('keydown', onKey);
    const onResize = () => { if (tour?.classList.contains('open')) placeTour(); };
    window.addEventListener('resize', onResize);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
      chatTimers.forEach((id) => window.clearTimeout(id));
      rafs.forEach((id) => cancelAnimationFrame(id));
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onBrandScroll);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const laneMeta: { key: JobKey; title: string; cntLab: string; brandPre: string; brandMark: string }[] = [
    { key: 'content', title: t('laneContent'), cntLab: t('cntContent'), brandPre: 'ai', brandMark: 'CONTENT' },
    { key: 'ads', title: t('laneAds'), cntLab: t('cntAds'), brandPre: 'ai', brandMark: 'ADS' },
    { key: 'sales', title: t('laneSales'), cntLab: t('cntSales'), brandPre: 'ai', brandMark: 'STAFF' },
  ];

  return (
    <section ref={rootRef} id="hero" className="hs-hero">
      <div className="hs-wrap">
        <div className="hs-grid">
          <div className="hs-copy">
            <div className="hs-brandrow">
              <span className="wordmark-3d hs-hero-wm">
                <span className="wm-prefix">ai</span>
                <span className="wm-mark">NOW</span>
                <span className="wm-accent" aria-hidden="true" />
              </span>
              <span className="hs-tagline">
                {th('taglinePrefix')} <b>{th('taglineWorks')}</b>
              </span>
            </div>
            <h1 className="hs-lead">
              {t('h1')}
              <span className="hs-typed">
                <span className="hs-tw" /><span className="hs-caret" aria-hidden="true">|</span>
              </span>
              <span className="sr-only">{t('h1Sr')}</span>
            </h1>
            <p className="hs-sub">
              {t('sub')} <b>{t('subB')}</b>
            </p>
            <div className="hs-cta-row">
              <a href="#cta" className="hs-btn-primary" data-primary-cta>
                <span>{t('ctaDemo')}</span>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
              <a href="#reviews" className="hs-btn-ghost">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <span>{t('ctaReviews')}</span>
              </a>
            </div>
            <p className="hs-note">
              {t('note')}{' '}
              <button className="hs-tour-btn" type="button">{t('tourBtn')}</button>
            </p>
            <p className="hs-salary">
              {t('salaryPre')} <b>₾1500/{t('mo')}</b>. {t('salaryPost')}
            </p>
            <p className="hs-earned" aria-live="polite">
              {t('earnedPre')} <b /></p>
          </div>

          <div className="hs-chat">
            <div className="hs-spheres" role="group" aria-label={t('spheresLabel')}>
              <span className="hs-sph-lab" aria-hidden="true">{t('spheresLabelShort')}:</span>
              {SPH_ICONS.map((icon, i) => (
                <button className="hs-sph" type="button" key={i} aria-pressed={i === 0}>
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                  <span>{t(`sph${i + 1}` as Parameters<typeof t>[0])}</span>
                </button>
              ))}
            </div>
            <div className="hs-chat-card">
              <div className="hs-chat-top">
                <span className="hs-dot" aria-hidden="true" />
                <span className="hs-who">
                  <span className="wordmark-3d hs-wm"><span className="wm-prefix">i</span><span className="wm-mark">AI</span></span> {t('online')}
                </span>
                <span className="hs-247">24/7</span>
              </div>
              <div className="hs-chat-body" aria-live="polite" />
              <div className="hs-qq-row" role="group" aria-label={t('qqLabel')}>
                <button className="hs-qq" type="button">{t('qq1')}</button>
                <button className="hs-qq" type="button">{t('qq2')}</button>
                <button className="hs-qq" type="button">{t('qq3')}</button>
              </div>
              <form className="hs-chat-foot" autoComplete="off">
                <input className="hs-input" type="text" placeholder={t('inputPh')} aria-label={t('inputLabel')} maxLength={140} />
                <button className="hs-send" type="submit" aria-label={t('send')}>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="hs-jobs" data-active="content">
          <div className="hs-trunk-row">
            <div className="hs-trunk">
              <span className="hs-pulse" aria-hidden="true" />
              <span className="wordmark-3d hs-wm"><span className="wm-prefix">i</span><span className="wm-mark">AI</span></span>
              <span className="hs-trunk-lab">{t('trunkLab')}</span>
              <span className="hs-trunk-sep" aria-hidden="true" />
              <span className="hs-trunk-money">
                <span className="hs-money">+₾ 0</span>
                <span className="hs-money-lab">{t('moneyLab')}</span>
              </span>
            </div>
          </div>

          <svg className="hs-wires" viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true">
            <path className="hs-wire" data-job="content" d="M500,6 C500,50 180,40 168,86" fill="none" />
            <path className="hs-wire" data-job="ads" d="M500,6 C500,54 500,54 500,86" fill="none" />
            <path className="hs-wire" data-job="sales" d="M500,6 C500,50 820,40 832,86" fill="none" />
            <g id="hs-drops" />
          </svg>

          <div className="hs-lanes">
            {laneMeta.map((l) => (
              <div className="hs-lane" data-job={l.key} key={l.key} style={{ ['--tone' as never]: JOB_COLOR[l.key] }}>
                <div className="hs-lane-in">
                  <div className="hs-lane-head">
                    <span className="hs-lane-h"><span className="hs-bead" aria-hidden="true" />{l.title}</span>
                    <span className="hs-brand"><span className="hs-brand-pre">{l.brandPre}</span><b>{l.brandMark}</b></span>
                  </div>
                  <div className="hs-metric">
                    <span className="hs-cnt">0</span>
                    <span className="hs-cnt-lab">{l.cntLab}</span>
                    <span className="hs-chips">
                      {CHIPS[l.key].map(([tool, path, range]) => (
                        <span className="hs-chip" data-tool={tool} data-lo={range[0]} data-hi={range[1]} key={tool}>
                          <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
                          <i className="hs-chip-n">0</i>
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="hs-status" role="status">
                    <span className="hs-st-ic" aria-hidden="true"><span className="hs-st-spin" /></span>
                    <span className="hs-st-text" />
                    <span className="hs-st-dots" aria-hidden="true"><i /><i /><i /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hs-feed" aria-hidden="true">
          <div className="hs-feed-track">
            {[0, 1].map((dup) => (
              <div className="hs-feed-group" key={dup} aria-hidden={dup === 1 || undefined}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <span className="hs-feed-item" key={n}>
                    <i /><b style={{ color: FEED_TONE[n - 1] }}>&#10003;</b>{t(`feed${n}` as Parameters<typeof t>[0])}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hs-tour" role="dialog" aria-modal="true" aria-label={t('tourBtn')}>
        <div className="hs-tour-hole" aria-hidden="true" />
        <div className="hs-tour-tip">
          <p className="hs-tour-text" />
          <div className="hs-tour-row">
            <span className="hs-tour-step" />
            <button className="hs-tour-next" type="button" />
          </div>
        </div>
      </div>
    </section>
  );
}
