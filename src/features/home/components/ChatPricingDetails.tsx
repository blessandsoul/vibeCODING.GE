'use client';

import type { ReactElement } from 'react';
import { useLocale } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import {
  getChatPricingCopy,
  interpolateChatPricingLabel,
} from '@/lib/chat-pricing-copy';
import { ChatPricingInfo } from './ChatPricingInfo';
import { ChatPlanComparison } from './ChatPlanComparison';
import { ChatPricingBrandedText } from './ChatPricingBrandedText';

const FOUNDATION_ICONS = [
  'solar:book-2-bold-duotone',
  'solar:user-plus-bold-duotone',
  'solar:transfer-horizontal-bold-duotone',
  'solar:inbox-bold-duotone',
  'solar:tuning-3-bold-duotone',
  'solar:chart-2-bold-duotone',
] as const;

const CAPABILITY_ICONS = [
  'solar:inbox-bold-duotone',
  'solar:hand-stars-bold-duotone',
  'solar:users-group-rounded-bold-duotone',
  'solar:calendar-mark-bold-duotone',
  'solar:chat-square-like-bold-duotone',
  'solar:refresh-circle-bold-duotone',
  'solar:widget-2-bold-duotone',
  'solar:database-bold-duotone',
] as const;

export function ChatPricingDetails(): ReactElement {
  const locale = useLocale();
  const copy = getChatPricingCopy(locale);

  return (
    <>
      <section
        className="mt-16 rounded-3xl border border-[#e5e5e5] bg-white p-5 md:mt-20 md:p-8 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-10"
        aria-labelledby="chatFoundationTitle"
      >
        <div className="flex min-w-0 flex-col justify-between rounded-2xl bg-[#faf8ff] p-6 md:p-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7c3aed] shadow-sm ring-1 ring-[#7c3aed]/10">
            <Ico name="solar:cpu-bolt-bold-duotone" className="h-6 w-6" />
          </span>
          <div className="mt-12">
            <strong className="text-balance font-display text-2xl font-bold text-neutral-900 md:text-3xl">
              <ChatPricingBrandedText text={copy.foundation.visualTitle} />
            </strong>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-[#525252]">
              {copy.foundation.visualText}
            </p>
          </div>
        </div>

        <div className="min-w-0 pt-8 lg:pt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
            {copy.foundation.eyebrow}
          </p>
          <h3
            id="chatFoundationTitle"
            className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
          >
            {copy.foundation.title}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-[#525252]">
            {copy.foundation.description}
          </p>

          <ul className="mt-6 divide-y divide-[#eeeeef]">
            {copy.foundation.items.map((item, index) => (
              <li
                key={item.title}
                className="relative grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-4 pe-11"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c3aed]/8 text-[#7c3aed]">
                  <Ico name={FOUNDATION_ICONS[index]} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <strong className="block text-sm font-semibold text-neutral-900">
                    <ChatPricingBrandedText text={item.title} />
                  </strong>
                  <p className="mt-1 text-pretty text-xs leading-relaxed text-[#525252]">
                    {item.text}
                  </p>
                </div>
                <ChatPricingInfo
                  className="absolute end-0 top-1/2 -translate-y-1/2"
                  label={interpolateChatPricingLabel(copy.infoLabel, item.title)}
                  text={item.info}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 md:mt-20" aria-labelledby="chatCapabilitiesTitle">
        <div className="grid gap-4 md:grid-cols-[1fr_1.15fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
              {copy.capabilities.eyebrow}
            </p>
            <h3
              id="chatCapabilitiesTitle"
              className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
            >
              {copy.capabilities.title}
            </h3>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-[#525252]">
            {copy.capabilities.description}
          </p>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white md:grid-cols-2">
          {copy.capabilities.items.map((item, index) => (
            <article
              key={item.title}
              className="relative grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b border-[#eeeeef] p-5 pe-14 last:border-b-0 md:[&:nth-child(odd)]:border-e md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#fafafa] text-[#7c3aed]">
                <Ico name={CAPABILITY_ICONS[index]} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-pretty text-sm font-semibold text-neutral-900">
                    <ChatPricingBrandedText text={item.title} />
                  </h4>
                  <span className="rounded-full bg-[#7c3aed]/8 px-2 py-0.5 text-[10px] font-semibold text-[#7c3aed]">
                    {item.availability}
                  </span>
                </div>
                <p className="mt-2 text-pretty text-xs leading-relaxed text-[#525252]">
                  {item.text}
                </p>
              </div>
              <ChatPricingInfo
                className="absolute end-2 top-2"
                label={interpolateChatPricingLabel(copy.infoLabel, item.title)}
                text={item.info}
              />
            </article>
          ))}
        </div>
      </section>

      <ChatPlanComparison />

      <section
        className="mt-16 overflow-hidden rounded-3xl border border-[#e5e5e5] bg-white p-5 md:mt-20 md:grid md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:p-8"
        aria-labelledby="chatGuideTitle"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
            {copy.guide.eyebrow}
          </p>
          <h3
            id="chatGuideTitle"
            className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
          >
            {copy.guide.title}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-[#525252]">
            {copy.guide.description}
          </p>
        </div>
        <ol className="mt-8 divide-y divide-[#eeeeef] md:mt-0">
          {copy.guide.items.map((item, index) => (
            <li
              key={item.title}
              className="grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] gap-3 py-4 first:pt-0 last:pb-0"
            >
              <span className="stat-number inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#7c3aed]/8 text-xs tabular-nums text-[#7c3aed]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0">
                <h4 className="text-pretty text-sm font-semibold text-neutral-900">
                  {item.title}
                </h4>
                <p className="mt-1 text-pretty text-xs leading-relaxed text-[#525252]">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 md:mt-20" aria-labelledby="chatFaqTitle">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
          {copy.faq.eyebrow}
        </p>
        <h3
          id="chatFaqTitle"
          className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
        >
          {copy.faq.title}
        </h3>
        <div className="mt-7 divide-y divide-[#eeeeef] rounded-2xl border border-[#e5e5e5] bg-white px-5">
          {copy.faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/40">
                <span className="min-w-0 text-pretty [overflow-wrap:anywhere]">
                  {item.question}
                </span>
                <Ico
                  name="solar:alt-arrow-down-linear"
                  className="h-4 w-4 shrink-0 text-[#7c3aed] transition-transform duration-200 ease-out group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="max-w-3xl pb-5 text-pretty text-sm leading-relaxed text-[#525252]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
