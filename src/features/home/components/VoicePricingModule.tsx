'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { ReactElement } from 'react';

import { Ico } from '@/components/common/Ico';

type VoicePricingCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  inbound: string;
  outbound: string;
  perMinute: string;
  setup: string;
  setupNote: string;
  included: string;
  indicative: string;
  choose: string;
  bundles: string;
  bundleSuffix: string;
  inboundReference: string;
  disclaimer: string;
  recommended: string;
};

const COPY: Record<string, VoicePricingCopy> = {
  ka: {
    eyebrow: 'aiCALL · ხმოვანი ზარების პაკეტები',
    title: 'აირჩიეთ წუთები, რომლებიც რეალურად გჭირდებათ',
    intro: 'ფუნქციური ტარიფი ცალკეა. შემდეგ ამატებთ შემომავალი ზარების წუთების პაკეტს.',
    inbound: 'შემომავალი ზარი',
    outbound: 'გამავალი ზარი',
    perMinute: 'დაკავშირებულ წუთზე',
    setup: 'პირველი გამართვა',
    setupNote: 'ნომრის შეძენა და დაყენება, ერთხელ',
    included: 'პაკეტში შედის',
    indicative: 'ფასი საორიენტაციოა',
    choose: 'აირჩიეთ წუთების პაკეტი',
    bundles: 'შემომავალი წუთები',
    bundleSuffix: 'წთ / თვე',
    inboundReference: '10 წუთი ≈ 5,40 ₾',
    disclaimer: 'ფასი საორიენტაციოა. საბოლოო ფასი და ხელმისაწვდომობა შეკვეთამდე უნდა დააზუსტოთ.',
    recommended: 'რეკომენდებული',
  },
  ru: {
    eyebrow: 'aiCALL · пакеты голосовых минут',
    title: 'Выберите объём минут под ваши звонки',
    intro: 'Функциональный тариф выбирается отдельно. Затем вы добавляете пакет входящих минут.',
    inbound: 'Входящий звонок',
    outbound: 'Исходящий звонок',
    perMinute: 'за соединённую минуту',
    setup: 'Первичная настройка',
    setupNote: 'покупка и подключение номера, один раз',
    included: 'В пакет входит',
    indicative: 'Цена ориентировочная',
    choose: 'Выберите пакет минут',
    bundles: 'Входящие минуты',
    bundleSuffix: 'мин / месяц',
    inboundReference: '10 минут ≈ 5,40 ₾',
    disclaimer: 'Цена ориентировочная. Финальную стоимость и доступность нужно уточнить до заказа.',
    recommended: 'Рекомендуемый',
  },
  en: {
    eyebrow: 'aiCALL · voice minute bundles',
    title: 'Choose the minutes your calls actually need',
    intro: 'Choose the functional plan first. Then add a separate inbound-minute bundle.',
    inbound: 'Inbound call',
    outbound: 'Outbound call',
    perMinute: 'per connected minute',
    setup: 'Initial setup',
    setupNote: 'number purchase and setup, one time',
    included: 'Bundle includes',
    indicative: 'Indicative price',
    choose: 'Choose a minute bundle',
    bundles: 'Inbound minutes',
    bundleSuffix: 'min / month',
    inboundReference: '10 minutes ≈ 5.40 GEL',
    disclaimer: 'This is an indicative price. Confirm the final price and availability before ordering.',
    recommended: 'Recommended',
  },
};

const BUNDLES = [
  { minutes: 100, price: '54', tone: 'cyan', icon: 'solar:clock-circle-bold-duotone', recommended: false },
  { minutes: 500, price: '270', tone: 'violet', icon: 'solar:clock-square-bold-duotone', recommended: false },
  { minutes: 2_000, price: '1 080', tone: 'blue', icon: 'solar:stopwatch-bold-duotone', recommended: true },
  { minutes: 5_000, price: '2 700', tone: 'orange', icon: 'solar:history-bold-duotone', recommended: false },
  { minutes: 10_000, price: '5 400', tone: 'slate', icon: 'solar:infinity-bold-duotone', recommended: false },
] as const;

const TONE_CLASSES: Record<string, string> = {
  cyan: 'border-cyan-200 bg-cyan-50/55 text-cyan-800',
  violet: 'border-violet-200 bg-violet-50/55 text-violet-800',
  blue: 'border-blue-200 bg-blue-50/55 text-blue-800',
  orange: 'border-orange-200 bg-orange-50/55 text-orange-800',
  slate: 'border-slate-200 bg-slate-50/70 text-slate-800',
};

function formatMinutes(minutes: number): string {
  return minutes.toLocaleString('en-US');
}

export function VoicePricingModule(): ReactElement {
  const locale = useLocale();
  const copy = COPY[locale] ?? COPY.en;
  const aiCallLocale = ['ka', 'en', 'ru'].includes(locale) ? locale : 'en';

  return (
    <section
      data-voice-pricing-module
      className="mt-12 rounded-3xl border border-[#e5e5e5] bg-white p-5 shadow-[0_18px_55px_rgba(124,58,237,0.08)] md:p-8"
      aria-labelledby="voice-pricing-title"
    >
      <div className="flex flex-col gap-6 border-b border-[#e5e5e5] pb-7 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7c3aed]">{copy.eyebrow}</p>
          <h2 id="voice-pricing-title" className="mt-3 font-display text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
            {copy.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#525252]">{copy.intro}</p>
        </div>
        <Link
          href={`https://aicall.ge/${aiCallLocale}/pricing`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#7c3aed] to-[#e040fb] px-5 text-sm font-bold text-white transition-[transform,box-shadow] duration-200 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
        >
          {copy.choose}
          <Ico name="solar:arrow-right-bold-duotone" className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <article className="rounded-2xl border border-violet-200 bg-violet-50/50 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-violet-800">
            <Ico name="solar:incoming-call-rounded-bold-duotone" className="h-4 w-4" />
            {copy.inbound}
          </div>
          <p className="mt-3 font-display text-2xl font-bold text-neutral-950">0,54 ₾</p>
          <p className="mt-1 text-xs text-[#525252]">{copy.perMinute} · {copy.inboundReference}</p>
        </article>
        <article className="rounded-2xl border border-orange-200 bg-orange-50/55 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-orange-800">
            <Ico name="solar:phone-calling-rounded-bold-duotone" className="h-4 w-4" />
            {copy.outbound}
          </div>
          <p className="mt-3 font-display text-2xl font-bold text-neutral-950">1,40 ₾</p>
          <p className="mt-1 text-xs text-[#525252]">{copy.perMinute}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-700">
            <Ico name="solar:settings-bold-duotone" className="h-4 w-4" />
            {copy.setup}
          </div>
          <p className="mt-3 font-display text-2xl font-bold text-neutral-950">150 ₾</p>
          <p className="mt-1 text-xs text-[#525252]">{copy.setupNote}</p>
        </article>
      </div>

      <div className="mt-7 flex items-center justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-neutral-950">{copy.bundles}</h3>
        <span className="rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-[11px] font-semibold text-[#525252]">{copy.included}</span>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {BUNDLES.map((bundle) => (
          <Link
            key={bundle.minutes}
            href={`https://aicall.ge/${aiCallLocale}/pricing?minutes=${bundle.minutes}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative rounded-2xl border p-4 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] ${TONE_CLASSES[bundle.tone]}`}
          >
            {bundle.recommended ? (
              <span className="absolute -top-2 right-3 rounded-full bg-[#7c3aed] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">{copy.recommended}</span>
            ) : null}
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm">
              <Ico name={bundle.icon} className="h-5 w-5" />
            </span>
            <p className="mt-4 font-display text-xl font-bold text-neutral-950">{formatMinutes(bundle.minutes)}</p>
            <p className="text-xs text-[#525252]">{copy.bundleSuffix}</p>
            <p className="mt-4 border-t border-current/15 pt-3 font-display text-xl font-bold text-neutral-950">
              {bundle.price} ₾ <span className="font-sans text-xs font-semibold text-[#525252]">/ თვე</span>
            </p>
          </Link>
        ))}
      </div>
      <p className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-xs leading-relaxed text-amber-950">
        <Ico name="solar:info-circle-bold-duotone" className="mt-0.5 h-4 w-4 shrink-0" />
        <span>{copy.indicative}. {copy.disclaimer}</span>
      </p>
    </section>
  );
}
