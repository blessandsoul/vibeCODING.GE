'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useSpring, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';

const AUCTIONS = ['Copart', 'IAAI', 'Manheim'] as const;
type Auction = (typeof AUCTIONS)[number];

const FX = 2.7;

function calculate(price: number, auction: Auction) {
  const auctionFeeRate = auction === 'Copart' ? 0.09 : auction === 'IAAI' ? 0.08 : 0.07;
  const auctionFee = price * auctionFeeRate;
  const inlandUS = 350;
  const seaFreight = 1450;
  const customsBase = price + auctionFee + inlandUS + seaFreight;
  const customsDuty = customsBase * 0.05;
  const vat = (customsBase + customsDuty) * 0.18;
  const serviceFee = price * 0.05;
  const total = customsBase + customsDuty + vat + serviceFee;
  return {
    auctionFee,
    inlandUS,
    seaFreight,
    customsDuty,
    vat,
    serviceFee,
    total,
  };
}

const fmtUsd = (v: number) => '$' + Math.round(v).toLocaleString('en-US');
const fmtGel = (v: number) => Math.round(v * FX).toLocaleString('en-US') + ' ₾';

function AnimatedNumber({ value, formatter }: { value: number; formatter: (v: number) => string }) {
  const spring = useSpring(value, { stiffness: 100, damping: 20, mass: 0.5 });
  const display = useTransform(spring, (v) => formatter(v));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
}

export const VinCalculator = () => {
  const t = useTranslations('servicesAuctionMarketing');
  const [price, setPrice] = useState(12000);
  const [auction, setAuction] = useState<Auction>('Copart');

  const calc = useMemo(() => calculate(price, auction), [price, auction]);

  const rows = [
    { key: 'auctionFee', value: calc.auctionFee },
    { key: 'inlandUs', value: calc.inlandUS },
    { key: 'seaFreight', value: calc.seaFreight },
    { key: 'customsDuty', value: calc.customsDuty },
    { key: 'vat', value: calc.vat },
    { key: 'serviceFee', value: calc.serviceFee },
  ] as const;

  const sliderProgress = ((price - 1000) / (50000 - 1000)) * 100;

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 text-center md:mb-10">
            <p className="eyebrow flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              <Ico name="solar:calculator-bold-duotone" className="size-[12px]" /> {t('calcEyebrow')}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">{t('calcTitle')}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
              {t('calcSubtitle')}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-3xl dodo-glass-card p-5 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <div>
                  <label className="eyebrow text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                    {t('calcAuctionLabel')}
                  </label>
                  <div className="mt-2 flex gap-2">
                    {AUCTIONS.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setAuction(a)}
                        className={`dodo-glass-box flex-1 py-3 text-xs font-bold uppercase tracking-wider transition duration-200 md:py-2 ${
                          auction === a
                            ? 'border-blue-500/30 dark:border-blue-400/25 bg-blue-500/10 dark:bg-blue-400/15 text-slate-950 dark:text-white'
                            : 'border-slate-200/80 dark:border-white/10 bg-slate-100/60 dark:bg-[#0a0b0e]/10 text-slate-600 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400'
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <label
                      htmlFor="vin-calc-price"
                      className="eyebrow text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300"
                    >
                      {t('calcPriceLabel')}
                    </label>
                    <span className="font-(family-name:--font-space-mono) text-lg font-bold text-slate-950 dark:text-white">
                      <AnimatedNumber value={price} formatter={fmtUsd} />
                    </span>
                  </div>
                  <div className="relative mt-3 h-7 md:h-6">
                    <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-slate-100/60 dark:bg-[#0a0b0e]/10" />
                    <div
                      className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-600 to-blue-400"
                      style={{ width: `${sliderProgress}%` }}
                    />
                    <input
                      id="vin-calc-price"
                      type="range"
                      min={1000}
                      max={50000}
                      step={500}
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      aria-label={t('calcPriceLabel')}
                      className="vin-slider absolute inset-0 w-full appearance-none bg-transparent outline-none"
                    />
                  </div>
                  <div className="mt-1 flex justify-between font-(family-name:--font-space-mono) text-[9px] uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    <span>$1K</span>
                    <span>$50K</span>
                  </div>
                </div>

                <div className="dodo-glass-emerald p-4 md:sticky md:top-24">
                  <p className="eyebrow text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
                    {t('calcTotalLabel')}
                  </p>
                  <p className="font-(family-name:--font-space-mono) text-3xl font-black text-emerald-600 md:text-3xl">
                    <AnimatedNumber value={calc.total} formatter={fmtUsd} />
                  </p>
                  <p className="mt-0.5 font-(family-name:--font-space-mono) text-xs text-emerald-600">
                    ≈ <AnimatedNumber value={calc.total} formatter={fmtGel} />
                  </p>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="eyebrow mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                  {t('calcBreakdown')}
                </p>
                <Row label={t('calcRowVehicle')} value={fmtUsd(price)} bold />
                {rows.map((r) => (
                  <Row
                    key={r.key}
                    label={t(`calcRow_${r.key}`)}
                    value={'+ ' + fmtUsd(r.value)}
                  />
                ))}
                <div className="mt-2 border-t border-slate-200/80 dark:border-white/10 pt-2">
                  <Row
                    label={t('calcRowTotal')}
                    value={fmtUsd(calc.total)}
                    bold
                  />
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-300">
              {t('calcDisclaimer')}
            </p>

            <div className="mt-5">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-5 py-3.5 text-sm font-semibold text-white transition duration-200 hover:brightness-110 md:mx-auto md:w-auto md:py-2.5"
              >
                {t('calcCta')} <Ico name="solar:arrow-right-bold-duotone" className="size-[14px]" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

function Row({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-md px-3 py-1.5 ${
        bold ? 'bg-slate-100/60 dark:bg-[#0a0b0e]/10' : ''
      }`}
    >
      <span
        className={`text-xs ${
          bold ? 'font-semibold text-slate-950 dark:text-white' : 'text-slate-600 dark:text-slate-300'
        }`}
      >
        {label}
      </span>
      <span
        className={`font-(family-name:--font-space-mono) text-xs ${
          bold ? 'font-bold text-slate-950 dark:text-white' : 'text-slate-950 dark:text-white'
        }`}
      >
        {value}
      </span>
    </div>
  );
}
