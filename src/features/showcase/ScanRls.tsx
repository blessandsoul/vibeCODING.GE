'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import {
  RLS_REQUEST,
  RLS_STAGES,
  createTimelinePlayer,
  rlsFrame,
} from '@/features/showcase/scan-demo-models.mjs';
import { playTimelineWhenVisible } from '@/features/showcase/scan-demo-visibility.mjs';
import { cn } from '@/lib/utils';

/* =========================================================================
   ScanRls: WHAT the hole is. A database anyone can read, made physical.

   Row-level security is the finding in this whole category. 85% of the 1,430+ scanned apps were
   missing it on SELECT, and every one of them ships a public key in its bundle that can read the
   table. Written down, that sentence does nothing to the founder we are selling to. He cannot
   picture it, so he does not act on it, and a paragraph is not going to fix that.

   The first pass runs by itself: other people's names, emails, phone numbers and order totals
   arrive with no login; the rules switch on; the same request returns an empty list. The manual
   controls remain because a founder should be able to repeat either half after the lesson lands.

   THE SECOND HALF IS WHAT MAKES IT TEACH RATHER THAN FRIGHTEN. The fix is one setting. And the
   locked answer is a 200 with an empty array, because a refused read never looks like a refusal:
   the status line stays green in both directions, and only the payload changes. That is the whole
   reason nobody catches this in production. Nobody complains about a database anyone can read.
   They read it, and you never hear about it.

   THE TABLE IS OURS, NOT HIS, and the panel says so on the chip and in the copy. The real scanner
   one section up fetches his bundle and finds his key; it cannot see whether his rules are on,
   because from the outside nobody can (that is exactly what /api/scan says back to him when it
   finds an anon key). Checking it from the inside is the first thing the paid audit does, and
   this widget is the argument for why that is worth 2,500 dollars.

   The rows are mock: fictional customers at a fictional domain, and phone numbers in the 555-01xx
   range that exists for fiction. The only real numbers on this page are the published ones, and
   they carry their source.
   ========================================================================= */

type Phase = 'idle' | 'reading' | 'enabling' | 'done';
type FictionalRow = {
  id: number;
  name: string;
  email: string;
  phone: string;
  total: string;
};

/* Column names are schema identifiers, not copy, so they stay in Latin in every locale. A
   Georgian founder reading his own Supabase table reads `email`, because that is what it says. */
const COLS = ['id', 'name', 'email', 'phone', 'total'] as const;

const ROWS = rlsFrame('open-result').rows as FictionalRow[];
const REQUEST_PATH = RLS_REQUEST.replace(/^GET /u, '');

const GRID = 'grid-cols-[44px_1.25fr_1.7fr_1.05fr_0.8fr]';

const FIRST_ROW_MS = 240;
const ROW_MS = 150;
const LOCKED_MS = 620;

/* The two segment fills carry the meaning, so they are the only place on this page where a colour
   is the message. Both are darkened to clear 4.5:1 under a white label: the vivid brand red gives
   3.76:1 and the vivid emerald is worse, and a label nobody can read is not a warning. */
const SEG_OFF = 'var(--brand-cta)';
const SEG_ON = '#047857';

export function ScanRls() {
  const t = useTranslations('product.rls');
  const reduced = useReducedMotion();

  const [rls, setRls] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [shown, setShown] = useState(0);
  const demoRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const timeline = useRef<ReturnType<typeof createTimelinePlayer> | null>(null);

  const clear = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const applyTimelineStage = useCallback(
    (stage: string) => {
      clear();
      const frame = rlsFrame(stage);
      setRls(frame.rulesEnabled);
      setShown(frame.rows.length);
      setPhase(
        frame.status === 'complete'
          ? 'done'
          : frame.status === 'enabling'
            ? 'enabling'
            : 'reading',
      );
    },
    [clear],
  );

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: RLS_STAGES,
      reducedMotion: Boolean(reduced),
      onStage: applyTimelineStage,
    });
    timeline.current = player;
    const cleanupVisibility = playTimelineWhenVisible({
      element: demoRef.current,
      reducedMotion: Boolean(reduced),
      play: player.play,
      stop: player.stop,
    });

    return () => {
      cleanupVisibility();
      clear();
      if (timeline.current === player) timeline.current = null;
    };
  }, [applyTimelineStage, clear, reduced]);

  const read = useCallback(() => {
    timeline.current?.stop();
    clear();
    setShown(0);
    setPhase('reading');

    if (rls) {
      if (reduced) {
        setPhase('done');
        return;
      }
      timers.current.push(setTimeout(() => setPhase('done'), LOCKED_MS));
      return;
    }

    if (reduced) {
      setShown(ROWS.length);
      setPhase('done');
      return;
    }

    ROWS.forEach((_, i) => {
      timers.current.push(setTimeout(() => setShown(i + 1), FIRST_ROW_MS + i * ROW_MS));
    });
    timers.current.push(
      setTimeout(() => setPhase('done'), FIRST_ROW_MS + ROWS.length * ROW_MS + 140),
    );
  }, [clear, rls, reduced]);

  /* Flipping the setting resets the panel to idle on purpose. The lesson is that the SAME request
     behaves differently, so he has to send it again to see that. */
  const setRules = useCallback(
    (on: boolean) => {
      timeline.current?.stop();
      clear();
      setRls(on);
      setPhase('idle');
      setShown(0);
    },
    [clear],
  );

  const replay = useCallback(() => {
    clear();
    timeline.current?.replay();
  }, [clear]);

  const open = phase === 'done' && !rls;
  const locked = phase === 'done' && rls;
  const rows = rls ? [] : ROWS.slice(0, shown);

  return (
    <SectionContainer className="py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-[12px] uppercase tracking-wide text-neutral-900/40">
          {t('eyebrow')}
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
          {t('heading')}
        </h2>
        <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#525252]">
          {t('subtitle')}
        </p>
      </div>

      <div
        ref={demoRef}
        className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_24px_50px_-38px_rgba(0,0,0,0.45)]"
      >
        {/* the table, and the one setting that decides everything about it */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-[#ececec] bg-[#fafafa] px-5 py-3.5 md:px-6">
          <div className="flex items-center gap-3">
            <code className="font-mono text-[14px] font-bold text-neutral-900">customers</code>
            <span className="rounded-full bg-neutral-900/[0.06] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-neutral-900/45">
              {t('mock')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold text-neutral-900/50">{t('rlsLabel')}</span>
            <div
              className="flex gap-1 rounded-full bg-white p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
              role="group"
              aria-label={t('rlsLabel')}
            >
              {([false, true] as const).map((on) => (
                <button
                  key={String(on)}
                  type="button"
                  onClick={() => setRules(on)}
                  aria-pressed={rls === on}
                  className={cn(
                    'min-h-[44px] rounded-full px-4 text-[13px] font-bold',
                    'transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.96]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
                    rls === on ? 'text-white' : 'text-neutral-900/45 md:hover:text-neutral-900',
                  )}
                  style={rls === on ? { background: on ? SEG_ON : SEG_OFF } : undefined}
                >
                  {t(on ? 'on' : 'off')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* the request. it never changes, and that is the point of the whole widget. */}
        <div className="bg-[#0b0b0e] px-5 py-5 md:px-6">
          <span className="block text-[10px] font-semibold uppercase tracking-wide text-white/30">
            {t('request')}
          </span>
          <pre className="mt-2.5 overflow-x-auto font-mono text-[13px] leading-relaxed text-white/80">
            <code>
              <span className="text-[#93c5fd]">GET</span> {REQUEST_PATH}{'\n'}
              <span className="text-white/35">apikey:</span> eyJhbGciOiJIUzI1NiJ9.
              {'•'.repeat(16)}
            </code>
          </pre>
          <p className="mt-3 max-w-xl text-[11.5px] leading-relaxed text-white/40">{t('keyNote')}</p>

          <div className="mt-4 border-t border-white/[0.08] pt-3.5 font-mono text-[13px]">
            {phase === 'idle' && <span className="text-white/25">{t('consoleIdle')}</span>}
            {phase === 'reading' && (
              <motion.span
                className="text-white/50"
                animate={reduced ? undefined : { opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
              >
                {t('consoleReading')}
              </motion.span>
            )}
            {phase === 'enabling' && (
              <motion.span
                className="text-white/50"
                animate={reduced ? undefined : { opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
              >
                {t('consoleEnabling')}
              </motion.span>
            )}
            {phase === 'done' && (
              <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                {/* green in BOTH states, and that is the lesson: the server is not complaining. */}
                <span className="font-bold text-[#4ade80]">200 OK</span>
                <span className={open ? 'font-bold text-[#fca5a5]' : 'text-white/55'}>
                  {open ? t('consoleRows', { n: ROWS.length }) : t('consoleZero')}
                </span>
              </span>
            )}
          </div>
        </div>

        <div className="px-5 py-6 md:px-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="button"
              onClick={read}
              disabled={phase === 'reading'}
              className={cn(
                'inline-flex min-h-[52px] items-center justify-center rounded-full px-7 text-[15px] font-bold text-white',
                'transition-[transform,filter] duration-150 ease-out active:scale-[0.96] md:hover:brightness-110',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
                phase === 'reading' && 'opacity-70',
              )}
              style={{ background: 'var(--brand-cta)' }}
            >
              {phase === 'reading' ? t('reading') : phase === 'done' ? t('again') : t('read')}
            </button>

            <button
              type="button"
              onClick={replay}
              className={cn(
                'inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-5 text-[13px] font-bold text-neutral-900',
                'shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-[transform,background-color] duration-150 ease-out active:scale-[0.96] md:hover:bg-[#fafafa]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
              )}
            >
              {t('replay')}
            </button>

            {/* the second half of the demo, offered the moment the first half lands */}
            <AnimatePresence>
              {open && (
                <motion.span
                  initial={reduced ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="text-pretty text-[13px] font-semibold leading-snug text-[#b91c1c]"
                >
                  {t('hint')}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* the response, as a spreadsheet, because that is what he thinks his customers are */}
          <div className="mt-6 overflow-x-auto rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.07)]">
            <div role="table" aria-label={t('tableAria')} className={cn('min-w-[620px]')}>
              <div
                role="row"
                className={cn('grid gap-x-4 bg-[#fafafa] px-4 py-2.5', GRID)}
              >
                {COLS.map((c) => (
                  <span
                    key={c}
                    role="columnheader"
                    className={cn(
                      'font-mono text-[11px] tracking-wide text-neutral-900/35',
                      c === 'total' && 'text-right',
                    )}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <AnimatePresence initial={false}>
                {rows.map((r) => (
                  <motion.div
                    key={r.id}
                    role="row"
                    initial={reduced ? false : { opacity: 0, x: -12, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.26,
                      delay: reduced ? 0 : (r.id - 1) * 0.055,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className={cn(
                      'grid items-center gap-x-4 border-t border-[#f1f1f1] bg-white px-4 py-3',
                      GRID,
                    )}
                  >
                    <span
                      role="cell"
                      className="font-mono text-[12px] tabular-nums text-neutral-900/30"
                    >
                      {r.id}
                    </span>
                    <span role="cell" className="truncate text-[14px] font-semibold text-neutral-900">
                      {r.name}
                    </span>
                    <span role="cell" className="truncate font-mono text-[12.5px] text-[#525252]">
                      {r.email}
                    </span>
                    <span role="cell" className="truncate font-mono text-[12.5px] text-[#525252]">
                      {r.phone}
                    </span>
                    <span
                      role="cell"
                      className="text-right font-mono text-[12.5px] font-semibold tabular-nums text-neutral-900"
                    >
                      ${r.total}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {rows.length === 0 && (
                <div className="border-t border-[#f1f1f1] bg-white px-4 py-10 text-center">
                  {locked ? (
                    <>
                      <code className="font-mono text-[16px] font-bold text-[#047857]">[]</code>
                      <p className="mx-auto mt-2 max-w-sm text-pretty text-[13px] leading-relaxed text-[#525252]">
                        {t('emptyRow')}
                      </p>
                    </>
                  ) : (
                    <p className="text-[13px] text-neutral-900/35">
                      {phase === 'reading' ? t('waiting') : t('idleRow')}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* the verdict */}
          <AnimatePresence mode="wait">
            {phase === 'done' && (
              <motion.p
                key={open ? 'open' : 'locked'}
                role="status"
                aria-live="polite"
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                  'mt-5 text-pretty rounded-2xl px-5 py-4 text-[14.5px] leading-relaxed',
                  open
                    ? 'bg-[#fef2f2] text-[#7f1d1d] shadow-[0_0_0_1px_#fecaca]'
                    : 'bg-[#f0fdf4] text-[#065f46] shadow-[0_0_0_1px_#a7f3d0]',
                )}
              >
                {open ? t('verdictOpen', { n: ROWS.length }) : t('verdictLocked')}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* what it means, and the one thing the free scan honestly cannot tell him */}
      <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-14">
        <p className="text-balance font-display text-2xl font-extrabold leading-[1.2] tracking-tight text-neutral-900 md:text-[30px]">
          {t('punch')}
        </p>

        <div>
          <p className="text-pretty text-[15px] leading-relaxed text-[#404040]">{t('stat')}</p>
          <p className="mt-2.5 text-[12px] leading-relaxed text-neutral-900/40">
            <span className="font-semibold uppercase tracking-wide">{t('sourceLabel')}: </span>
            {t('source')}
          </p>
          <p className="mt-6 border-l-2 border-[var(--brand)] pl-4 text-pretty text-[13px] leading-relaxed text-[#525252]">
            {t('honest')}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
