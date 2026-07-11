'use client';

import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { cn } from '@/lib/utils';

/* =========================================================================
   ScanScorecard: the signature, and the only widget in this fleet with a real backend.

   The buyer here is a non-technical founder who cannot see the problem. No paragraph is going
   to make him feel it. But if he pastes his own URL and his own API key appears on screen,
   redacted, sixty seconds later, the sale is essentially done and we have not made a single
   claim.

   THE REDACTION IS THE PRODUCT. We show him `sk-******3f2a` and we say, in the same breath,
   that we kept nothing. Finding the key proves competence; not keeping it proves character,
   and in a security purchase the second one is what he is actually buying.

   TWO DIRECTIONS, because the visual register for this page was a real decision and the user is
   choosing:

     A, THE REPORT. Paper white, severity chips, a findings register, an OWASP column. The
        subject's world is not a terminal, it is the DOCUMENT he forwards to his investor. This
        is the non-default direction and it is the one I would ship.

     B, THE TERMINAL. Near-black, alarm red, monospace scan output. It is the category
        vernacular (every security tool looks like this) and it is also, precisely, one of the
        three looks that give AI-generated design away. Built so the difference can be seen
        rather than argued about.

   Delete the loser once the choice is made.
   ========================================================================= */

type Severity = 'critical' | 'major' | 'minor';
type Finding = {
  id: string;
  severity: Severity;
  title: string;
  detail: string;
  evidence?: string;
};
type Result = {
  score: number;
  findings: Finding[];
  counts: Record<Severity, number>;
};

type Variant = 'a' | 'b';

const SEV_ORDER: Severity[] = ['critical', 'major', 'minor'];

export function ScanScorecard() {
  const t = useTranslations('product.scan');
  const reduced = useReducedMotion();

  const [variant, setVariant] = useState<Variant>('a');
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scan = useCallback(async () => {
    if (!url.trim() || busy) return;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        const map: Record<string, string> = {
          url: t('errorUrl'),
          private: t('errorPrivate'),
          fetch: t('errorFetch'),
          rate: t('errorRate'),
        };
        setError(map[data?.error] ?? t('errorFetch'));
        return;
      }
      setResult(data as Result);
    } catch {
      setError(t('errorFetch'));
    } finally {
      setBusy(false);
    }
  }, [url, busy, t]);

  const dark = variant === 'b';

  return (
    <SectionContainer className="py-20 md:py-28">
      {/* the direction switch. this block is temporary and goes when the choice is made. */}
      <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl bg-[#fafafa] px-4 py-3 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
        {(['a', 'b'] as Variant[]).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setVariant(v)}
            aria-pressed={variant === v}
            className={cn(
              'min-h-[40px] rounded-full px-4 text-[13px] font-semibold',
              'transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.96]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
              variant === v
                ? 'bg-neutral-900 text-white'
                : 'bg-white text-neutral-900/55 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]',
            )}
          >
            {t(v === 'a' ? 'variantA' : 'variantB')}
          </button>
        ))}
        <span className="text-[12px] text-neutral-900/40">{t('variantNote')}</span>
      </div>

      <div
        className={cn(
          'overflow-hidden rounded-3xl',
          dark ? 'bg-[#0b0b0e]' : 'bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09)]',
        )}
      >
        {/* header */}
        <div
          className={cn(
            'px-6 py-7 md:px-10 md:py-9',
            dark ? 'border-b border-white/8' : 'border-b border-[#ececec]',
          )}
        >
          <span
            className={cn(
              'text-[12px] uppercase tracking-wide',
              dark ? 'text-white/35' : 'text-neutral-900/40',
            )}
          >
            {t('eyebrow')}
          </span>
          <h2
            className={cn(
              'mt-3 max-w-2xl text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl',
              dark ? 'text-white' : 'text-neutral-900',
            )}
          >
            {t('heading')}
          </h2>
          <p
            className={cn(
              'mt-3 max-w-xl text-pretty text-[15px] leading-relaxed',
              dark ? 'text-white/50' : 'text-[#525252]',
            )}
          >
            {t('subtitle')}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void scan();
            }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t('placeholder')}
              inputMode="url"
              className={cn(
                'h-14 min-w-0 flex-1 rounded-xl px-4 font-mono text-[14px] outline-none',
                'transition-[box-shadow] duration-150 ease-out',
                dark
                  ? 'bg-white/[0.06] text-white placeholder:text-white/25 focus-visible:shadow-[0_0_0_2px_var(--brand)]'
                  : 'bg-[#fafafa] text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.09)] placeholder:text-neutral-900/30 focus-visible:shadow-[0_0_0_2px_var(--brand)]',
              )}
            />
            <button
              type="submit"
              disabled={busy}
              className={cn(
                'inline-flex h-14 items-center justify-center rounded-xl px-8 text-[15px] font-bold text-white',
                'transition-[transform,filter] duration-150 ease-out active:scale-[0.96] md:hover:brightness-110',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
                busy && 'opacity-70',
              )}
              style={{ background: 'var(--brand)' }}
            >
              {busy ? t('scanning') : result ? t('again') : t('go')}
            </button>
          </form>

          {error && (
            <p className={cn('mt-4 text-[14px]', dark ? 'text-[#fca5a5]' : 'text-[#b91c1c]')}>
              {error}
            </p>
          )}
        </div>

        {/* result */}
        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={variant}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
              className="px-6 py-7 md:px-10 md:py-9"
            >
              {/* score + counts */}
              <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
                <div>
                  <span
                    className={cn(
                      'block text-[11px] uppercase tracking-wide',
                      dark ? 'text-white/35' : 'text-neutral-900/40',
                    )}
                  >
                    {t('score')}
                  </span>
                  <span
                    className={cn(
                      'font-display text-6xl font-extrabold tabular-nums leading-none md:text-7xl',
                      dark ? 'text-white' : 'text-neutral-900',
                    )}
                    style={{
                      color:
                        result.score < 50
                          ? '#ef4444'
                          : result.score < 80
                            ? '#f59e0b'
                            : undefined,
                    }}
                  >
                    {result.score}
                  </span>
                </div>

                <div className="flex gap-3">
                  {SEV_ORDER.map((s) => (
                    <div
                      key={s}
                      className={cn(
                        'rounded-xl px-4 py-3',
                        dark ? 'bg-white/[0.05]' : 'bg-[#fafafa] shadow-[0_0_0_1px_rgba(0,0,0,0.05)]',
                      )}
                    >
                      <span
                        className={cn(
                          'block text-[10px] uppercase tracking-wide',
                          s === 'critical'
                            ? 'text-[#ef4444]'
                            : s === 'major'
                              ? 'text-[#f59e0b]'
                              : dark
                                ? 'text-white/35'
                                : 'text-neutral-900/35',
                        )}
                      >
                        {t(s)}
                      </span>
                      <span
                        className={cn(
                          'mt-1 block font-display text-2xl font-extrabold tabular-nums',
                          dark ? 'text-white' : 'text-neutral-900',
                        )}
                      >
                        {result.counts[s]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* findings register */}
              {result.findings.length > 0 ? (
                <ul className="mt-8 flex flex-col gap-3">
                  {result.findings.map((f, i) => (
                    <motion.li
                      key={f.id}
                      initial={reduced ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduced ? 0 : i * 0.06, duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                      className={cn(
                        'rounded-2xl px-5 py-4',
                        dark
                          ? 'bg-white/[0.04]'
                          : 'bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]',
                        f.severity === 'critical' &&
                          (dark ? 'shadow-[inset_3px_0_0_0_#ef4444]' : 'shadow-[0_0_0_1px_#ef4444]'),
                      )}
                    >
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span
                          className={cn(
                            'rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                            f.severity === 'critical'
                              ? 'bg-[#ef4444]/15 text-[#ef4444]'
                              : f.severity === 'major'
                                ? 'bg-[#f59e0b]/16 text-[#f59e0b]'
                                : dark
                                  ? 'bg-white/8 text-white/45'
                                  : 'bg-neutral-900/7 text-neutral-900/45',
                          )}
                        >
                          {t(f.severity)}
                        </span>
                        <span
                          className={cn(
                            'text-pretty text-[15px] font-bold leading-snug',
                            dark ? 'text-white' : 'text-neutral-900',
                          )}
                        >
                          {f.title}
                        </span>
                      </div>

                      <p
                        className={cn(
                          'mt-2 text-pretty text-[14px] leading-relaxed',
                          dark ? 'text-white/55' : 'text-[#525252]',
                        )}
                      >
                        {f.detail}
                      </p>

                      {/* THE MOMENT. his own key, on his own screen, with the secret gone. */}
                      {f.evidence && (
                        <div
                          className={cn(
                            'mt-4 rounded-xl px-4 py-3',
                            dark ? 'bg-black/40' : 'bg-[#0b0b0e]',
                          )}
                        >
                          <span className="block text-[10px] uppercase tracking-wide text-white/30">
                            {t('found')}
                          </span>
                          <code className="mt-1 block break-all font-mono text-[14px] text-[#fca5a5]">
                            {f.evidence}
                          </code>
                          <span className="mt-2 block text-[11px] leading-relaxed text-white/40">
                            {t('redacted')}
                          </span>
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p
                  className={cn(
                    'mt-8 max-w-2xl text-pretty text-[15px] leading-relaxed',
                    dark ? 'text-white/60' : 'text-[#404040]',
                  )}
                >
                  {t('clean')}
                </p>
              )}

              {/* the promise we have to be telling the truth about */}
              <p
                className={cn(
                  'mt-7 border-t pt-5 text-[12px] leading-relaxed',
                  dark ? 'border-white/8 text-white/35' : 'border-[#ececec] text-[#737373]',
                )}
              >
                {t('nostore')}
              </p>

              <a
                href="#cta"
                className={cn(
                  'mt-6 inline-flex min-h-[52px] flex-wrap items-center gap-x-3 rounded-full px-7 text-[15px] font-bold text-white',
                  'transition-[transform,filter] duration-150 ease-out active:scale-[0.96] md:hover:brightness-110',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
                )}
                style={{ background: 'var(--brand)' }}
              >
                {t('cta')}
                <span className="text-[13px] font-medium text-white/70">{t('ctaSub')}</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}
