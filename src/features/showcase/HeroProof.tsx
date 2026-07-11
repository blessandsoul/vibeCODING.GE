'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';

/* =========================================================================
   HeroProof, vibecoding: the scorecard, and the key we just found in his browser.

   The audit's third finding was that this page named the mechanism and never the fear.
   "We fix what the AI built" could mean bugs. It does not say your database is probably
   readable by strangers, and the fear IS the product.

   So the first screen now shows a scan result: a bad score, three findings, and a real API key
   with the secret redacted. The redaction is the whole sales moment. Finding it proves
   competence; showing him that we did not keep it proves character, and in a security purchase
   the second one is the thing he is actually buying.

   The numbers are the published ones (85% missing row-level security, 62% with keys in the
   browser, across 1,430+ scanned apps) and the frame says so. Nothing here is invented, and the
   real scanner, which fetches his actual URL, is one screen down.
   ========================================================================= */

const FINDINGS = [
  { sev: 'critical', key: 'f1', ms: 0 },
  { sev: 'critical', key: 'f2', ms: 700 },
  { sev: 'major', key: 'f3', ms: 1400 },
] as const;

const TONE = {
  critical: { chip: 'bg-[#ef4444]/16 text-[#ef4444]', rail: '#ef4444' },
  major: { chip: 'bg-[#f59e0b]/18 text-[#f59e0b]', rail: '#f59e0b' },
} as const;

const CYCLE = 6000;
const SCORE = 31;

export function HeroProof() {
  const t = useTranslations('product.proof');
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(0);
  const [score, setScore] = useState(100);

  useEffect(() => {
    if (reduced) {
      setShown(FINDINGS.length);
      setScore(SCORE);
      return;
    }
    let raf = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setShown(0);
      setScore(100);
      FINDINGS.forEach((_, i) => {
        timers.push(setTimeout(() => setShown(i + 1), 900 + FINDINGS[i].ms));
      });
      const t0 = performance.now();
      const tick = () => {
        const p = Math.min((performance.now() - t0 - 900) / 1600, 1);
        if (p > 0) setScore(Math.round(100 - (100 - SCORE) * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    run();
    const loop = setInterval(run, CYCLE);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="overflow-hidden rounded-3xl bg-[#0b0b0e] shadow-[0_28px_60px_-40px_rgba(0,0,0,0.6)]">
      {/* the url bar, so he knows this is HIS app */}
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/12" />
          <span className="h-2 w-2 rounded-full bg-white/12" />
          <span className="h-2 w-2 rounded-full bg-white/12" />
        </span>
        <span className="ml-1 min-w-0 flex-1 truncate rounded-md bg-white/[0.05] px-3 py-1 font-mono text-[11px] text-white/40">
          your-app.lovable.app
        </span>
      </div>

      <div className="p-5 md:p-6">
        {/* the score */}
        <div className="flex items-end gap-5">
          <div>
            <span className="block text-[10.5px] font-semibold uppercase tracking-wide text-white/35">
              {t('score')}
            </span>
            <span
              className="font-display text-6xl font-extrabold tabular-nums leading-none"
              style={{ color: score < 50 ? '#ef4444' : score < 80 ? '#f59e0b' : '#fff' }}
            >
              {score}
            </span>
          </div>
          <p className="pb-1 text-pretty text-[12px] leading-snug text-white/45">{t('scoreNote')}</p>
        </div>

        {/* the findings */}
        <ul className="mt-5 flex flex-col gap-2">
          {FINDINGS.map((f, i) => (
            <motion.li
              key={f.key}
              initial={false}
              animate={
                i < shown
                  ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                  : { opacity: 0, x: -10, filter: 'blur(4px)' }
              }
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="rounded-xl bg-white/[0.04] px-4 py-3"
              style={{ boxShadow: `inset 3px 0 0 0 ${TONE[f.sev].rail}` }}
            >
              <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span
                  className={`rounded-full px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wide ${TONE[f.sev].chip}`}
                >
                  {t(f.sev)}
                </span>
                <span className="text-pretty text-[13px] font-semibold leading-snug text-white">
                  {t(f.key)}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>

        {/* THE MOMENT: his own key, and the secret gone. */}
        <motion.div
          initial={false}
          animate={
            shown >= FINDINGS.length
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 10, filter: 'blur(4px)' }
          }
          transition={{ duration: 0.34, ease: [0.23, 1, 0.32, 1] }}
          className="mt-4 rounded-xl bg-black/50 px-4 py-3"
        >
          <span className="block text-[9.5px] font-semibold uppercase tracking-wide text-white/30">
            {t('found')}
          </span>
          <code className="mt-1 block break-all font-mono text-[13.5px] text-[#fca5a5]">
            sk-proj-{'•'.repeat(10)}3f2a
          </code>
          <span className="mt-2 block text-[11px] leading-snug text-white/40">{t('redacted')}</span>
        </motion.div>
      </div>
    </div>
  );
}
