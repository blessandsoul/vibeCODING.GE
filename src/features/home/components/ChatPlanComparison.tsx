'use client';

import type { ReactElement, ReactNode } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  CHAT_PLANS,
  formatChatPlanNumber,
  type ChatPlan,
} from '@/lib/chat-plans';
import {
  getChatPricingCopy,
  interpolateChatPricingLabel,
  type ChatPricingCopy,
} from '@/lib/chat-pricing-copy';
import { Ico } from '@/components/common/Ico';
import { ChatPricingInfo } from './ChatPricingInfo';
import { ChatPricingBrandedText } from './ChatPricingBrandedText';

type ComparisonRow = ChatPricingCopy['comparison']['rows'][number];

const PLAN_TEXT_CLASS: Record<ChatPlan['slug'], string> = {
  starter: 'text-[#0e7490]',
  business: 'text-[#7c3aed]',
  premium: 'text-[#2563eb]',
  enterprise: 'text-[#c2410c]',
  custom: 'text-[#334155]',
};

function ComparisonStatusMark({
  included,
  label,
}: {
  included: boolean;
  label: string;
}): ReactElement {
  return (
    <span
      className={
        included
          ? 'inline-flex size-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200'
          : 'inline-flex size-7 items-center justify-center rounded-full bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200'
      }
    >
      <Ico
        name={
          included
            ? 'solar:check-circle-bold-duotone'
            : 'solar:close-circle-bold-duotone'
        }
        className="size-5"
        aria-hidden
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}

function PlanValue({
  plan,
  row,
  copy,
}: {
  plan: ChatPlan;
  row: ComparisonRow;
  copy: ChatPricingCopy;
}): ReactNode {
  const planCopy = copy.plans[plan.slug];

  if (plan.slug === 'custom') {
    switch (row.id) {
      case 'service':
        return plan.serviceLevel;
      case 'catalog':
        return planCopy.catalogValue;
      case 'qualification':
      case 'booking':
      case 'automation':
      case 'channels':
      case 'unifiedInbox':
      case 'manualControl':
      case 'leadCollection':
      case 'websiteWidget':
      case 'analytics':
      case 'custom':
        return (
          <ComparisonStatusMark included label={copy.comparison.included} />
        );
      case 'support':
        return planCopy.support;
      case 'photoOcr':
      case 'voiceMessages':
      case 'aiCallMinutes':
      case 'instagramActions':
      case 'followUp':
        return copy.customVolume;
      default:
        return copy.customVolume;
    }
  }

  switch (row.id) {
    case 'service':
      return plan.serviceLevel;
    case 'replies':
      return formatChatPlanNumber(plan.replies);
    case 'accounts':
      return formatChatPlanNumber(plan.accounts);
    case 'catalog':
      return planCopy.catalogValue;
    case 'updates':
      return plan.monthlyUpdates > 0
        ? `${formatChatPlanNumber(plan.monthlyUpdates)}+`
        : (
            <ComparisonStatusMark
              included={false}
              label={copy.comparison.notIncluded}
            />
          );
    case 'qualification':
      return (
        <ComparisonStatusMark
          included={plan.slug !== 'starter'}
          label={
            plan.slug === 'starter'
              ? copy.comparison.notIncluded
              : planCopy.qualification
          }
        />
      );
    case 'booking':
      return (
        <ComparisonStatusMark
          included={plan.slug !== 'starter'}
          label={planCopy.booking}
        />
      );
    case 'automation':
      return (
        <ComparisonStatusMark
          included={plan.slug === 'premium' || plan.slug === 'enterprise'}
          label={planCopy.automation}
        />
      );
    case 'channels':
    case 'unifiedInbox':
    case 'manualControl':
    case 'leadCollection':
    case 'websiteWidget':
    case 'analytics':
      return (
        <ComparisonStatusMark included label={copy.comparison.included} />
      );
    case 'photoOcr':
      return plan.photoOcrPerMonth === null
        ? copy.comparison.unlimited
        : formatChatPlanNumber(plan.photoOcrPerMonth);
    case 'voiceMessages':
      return plan.voiceMessagesPerMonth === null
        ? copy.comparison.unlimited
        : formatChatPlanNumber(plan.voiceMessagesPerMonth);
    case 'aiCallMinutes':
      return plan.aiCallMinutesPerMonth > 0
        ? formatChatPlanNumber(plan.aiCallMinutesPerMonth)
        : (
            <ComparisonStatusMark
              included={false}
              label={copy.comparison.notIncluded}
            />
          );
    case 'instagramActions':
      return plan.instagramActionsPerMonth === null
        ? copy.comparison.unlimited
        : formatChatPlanNumber(plan.instagramActionsPerMonth);
    case 'followUp':
      return plan.followUpsPerMonth === null
        ? copy.comparison.unlimited
        : formatChatPlanNumber(plan.followUpsPerMonth);
    case 'support':
      return planCopy.support;
    case 'custom':
      return (
        <ComparisonStatusMark
          included={plan.slug === 'enterprise'}
          label={planCopy.custom}
        />
      );
  }
}

function RowLabel({
  row,
  copy,
}: {
  row: ComparisonRow;
  copy: ChatPricingCopy;
}): ReactElement {
  return (
    <span className="flex min-w-0 items-center gap-1">
      <span className="min-w-0 [overflow-wrap:anywhere]">
        <ChatPricingBrandedText text={row.label} />
      </span>
      <ChatPricingInfo
        label={interpolateChatPricingLabel(copy.infoLabel, row.label)}
        text={row.info}
      />
    </span>
  );
}

export function ChatPlanComparison(): ReactElement {
  const locale = useLocale();
  const t = useTranslations('pricing');
  const copy = getChatPricingCopy(locale);

  return (
    <section className="mt-16 md:mt-20" aria-labelledby="chatComparisonTitle">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c3aed]">
          {copy.comparison.eyebrow}
        </p>
        <h3
          id="chatComparisonTitle"
          className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
        >
          {copy.comparison.title}
        </h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-[#525252]">
          {copy.comparison.description}
        </p>
      </div>

      <div
        className="mt-8 hidden overflow-x-auto rounded-2xl border border-[#e5e5e5] bg-white md:block"
        tabIndex={0}
        role="region"
        aria-label={copy.comparison.title}
      >
        <table className="w-full min-w-[880px] border-collapse text-sm">
          <caption className="sr-only">{copy.comparison.title}</caption>
          <thead>
            <tr className="bg-[#fafafa]">
              <th
                scope="col"
                className="w-[250px] px-4 py-4 text-start text-xs font-semibold text-[#525252]"
              >
                {copy.comparison.feature}
              </th>
              {CHAT_PLANS.map((plan) => (
                <th
                  key={plan.slug}
                  scope="col"
                  className="px-4 py-4 text-center"
                >
                  <span
                    className={`block font-display text-sm font-bold ${PLAN_TEXT_CLASS[plan.slug]}`}
                  >
                    {plan.name}
                  </span>
                  <span
                    className={`mt-1 block whitespace-nowrap text-xs font-semibold tabular-nums ${PLAN_TEXT_CLASS[plan.slug]}`}
                  >
                    {plan.slug === 'custom'
                      ? copy.customPrice
                      : `${formatChatPlanNumber(plan.price)} ₾${t('monthly')}`}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {copy.comparison.rows.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 1 ? 'bg-[#fafafa]/70' : undefined}
              >
                <th
                  scope="row"
                  className="border-t border-[#eeeeef] px-4 py-3 text-start text-xs font-semibold text-neutral-900"
                >
                  <RowLabel row={row} copy={copy} />
                </th>
                {CHAT_PLANS.map((plan) => (
                  <td
                    key={plan.slug}
                    className="border-t border-[#eeeeef] px-4 py-3 text-center text-xs font-medium tabular-nums text-neutral-900"
                  >
                    <PlanValue plan={plan} row={row} copy={copy} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-3 md:hidden">
        {CHAT_PLANS.map((plan) => (
          <details
            key={plan.slug}
            open={plan.popular || undefined}
            className="group overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white"
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#7c3aed]/45">
              <span
                className={`font-display text-sm font-bold ${PLAN_TEXT_CLASS[plan.slug]}`}
              >
                {plan.name}
              </span>
              <span
                className={`whitespace-nowrap text-xs font-semibold tabular-nums ${PLAN_TEXT_CLASS[plan.slug]}`}
              >
                {plan.slug === 'custom'
                  ? copy.customPrice
                  : `${formatChatPlanNumber(plan.price)} ₾${t('monthly')}`}
              </span>
            </summary>
            <dl className="divide-y divide-[#eeeeef] border-t border-[#eeeeef] px-4">
              {copy.comparison.rows.map((row) => (
                <div
                  key={row.id}
                  className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(5rem,auto)] items-center gap-4 py-3"
                >
                  <dt className="flex min-w-0 items-center gap-1 text-xs font-medium text-[#525252]">
                    <span className="min-w-0 [overflow-wrap:anywhere]">
                      <ChatPricingBrandedText text={row.label} />
                    </span>
                    <ChatPricingInfo
                      label={interpolateChatPricingLabel(
                        copy.infoLabel,
                        row.label,
                      )}
                      text={row.info}
                    />
                  </dt>
                  <dd className="max-w-[48vw] text-end text-xs font-semibold tabular-nums text-neutral-900 [overflow-wrap:anywhere]">
                    <PlanValue plan={plan} row={row} copy={copy} />
                  </dd>
                </div>
              ))}
            </dl>
          </details>
        ))}
      </div>
    </section>
  );
}
