'use client';

import type { ReactElement } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Ico } from '@/components/common/Ico';
import { cn } from '@/lib/utils';
import {
  formatChatPlanNumber,
  type ChatPlan,
} from '@/lib/chat-plans';
import {
  getChatPricingCopy,
  interpolateChatPricingLabel,
} from '@/lib/chat-pricing-copy';
import { ChatPricingInfo } from './ChatPricingInfo';

const MODEL_ICONS: Record<ChatPlan['slug'], string> = {
  starter: 'solar:bolt-circle-bold-duotone',
  business: 'solar:stars-minimalistic-bold-duotone',
  premium: 'solar:medal-star-bold-duotone',
  enterprise: 'solar:crown-star-bold-duotone',
  custom: 'solar:widget-5-bold-duotone',
};

const CATALOG_ICONS: Record<ChatPlan['slug'], string> = {
  starter: 'solar:box-minimalistic-bold-duotone',
  business: 'solar:box-minimalistic-bold-duotone',
  premium: 'solar:database-bold-duotone',
  enterprise: 'solar:database-bold-duotone',
  custom: 'solar:database-bold-duotone',
};

const HIGHLIGHT_ICONS: Record<ChatPlan['slug'], string> = {
  starter: 'solar:magic-stick-3-bold-duotone',
  business: 'solar:database-bold-duotone',
  premium: 'solar:headphones-round-bold-duotone',
  enterprise: 'solar:call-chat-rounded-bold-duotone',
  custom: 'solar:widget-5-bold-duotone',
};

const CATALOG_CARD_VALUES: Record<ChatPlan['slug'], string> = {
  starter: '20-100',
  business: '100-500',
  premium: '500-2 000',
  enterprise: '2 000-5 000',
  custom: '5 000+',
};

const PLAN_TONES: Record<
  ChatPlan['slug'],
  {
    border: string;
    text: string;
    soft: string;
    panel: string;
    button: string;
    info: string;
  }
> = {
  starter: {
    border: 'border-[#0e7490]/35 hover:border-[#0e7490]/60',
    text: 'text-[#0e7490]',
    soft: 'bg-[#ecfeff] text-[#0e7490]',
    panel: 'border-[#0e7490]/20 bg-[#ecfeff]/70',
    button:
      'border-[#0e7490]/25 text-[#0e7490] hover:border-[#0e7490]/55 hover:bg-[#ecfeff]',
    info: 'hover:text-[#0e7490] focus-visible:ring-[#0e7490]/45',
  },
  business: {
    border: 'border-[#7c3aed]/35 hover:border-[#7c3aed]/60',
    text: 'text-[#7c3aed]',
    soft: 'bg-[#f3edff] text-[#7c3aed]',
    panel: 'border-[#7c3aed]/20 bg-[#f3edff]/75',
    button:
      'border-[#7c3aed]/25 text-[#7c3aed] hover:border-[#7c3aed]/55 hover:bg-[#f3edff]',
    info: 'hover:text-[#7c3aed] focus-visible:ring-[#7c3aed]/45',
  },
  premium: {
    border: 'border-[#2563eb]/35 hover:border-[#2563eb]/60',
    text: 'text-[#2563eb]',
    soft: 'bg-[#edf4ff] text-[#2563eb]',
    panel: 'border-[#2563eb]/20 bg-[#edf4ff]/75',
    button:
      'border-[#2563eb]/25 text-[#2563eb] hover:border-[#2563eb]/55 hover:bg-[#edf4ff]',
    info: 'hover:text-[#2563eb] focus-visible:ring-[#2563eb]/45',
  },
  enterprise: {
    border: 'border-[#c2410c] ring-1 ring-[#c2410c]/25',
    text: 'text-[#c2410c]',
    soft: 'bg-[#fff2e9] text-[#c2410c]',
    panel: 'border-[#c2410c]/20 bg-[#fff2e9]/75',
    button:
      'bg-[#c2410c] text-white shadow-lg shadow-[#c2410c]/20 hover:bg-[#9a3412]',
    info: 'hover:text-[#c2410c] focus-visible:ring-[#c2410c]/45',
  },
  custom: {
    border: 'border-[#334155]/35 hover:border-[#334155]/60',
    text: 'text-[#334155]',
    soft: 'bg-[#f1f5f9] text-[#334155]',
    panel: 'border-[#334155]/20 bg-[#f8fafc]',
    button:
      'border-[#334155]/25 text-[#334155] hover:border-[#334155]/55 hover:bg-[#f8fafc]',
    info: 'hover:text-[#334155] focus-visible:ring-[#334155]/45',
  },
};

interface ChatPlanCardProps {
  plan: ChatPlan;
  showCta: boolean;
}

export function ChatPlanCard({
  plan,
  showCta,
}: ChatPlanCardProps): ReactElement {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const copy = getChatPricingCopy(locale);
  const planCopy = copy.plans[plan.slug];
  const tone = PLAN_TONES[plan.slug];
  const accountsRow = copy.comparison.rows.find((row) => row.id === 'accounts');
  const updatesRow = copy.comparison.rows.find((row) => row.id === 'updates');
  const hasAiCallBonus = plan.slug === 'enterprise' && plan.aiCallMinutesPerMonth > 0;
  const highlight = plan.slug === 'enterprise'
    ? copy.aiCallBonus
    : copy.planHighlights[plan.slug];

  const metricClass =
    'grid min-h-[4.75rem] min-w-0 grid-cols-[2.5rem_minmax(0,1fr)_2.75rem] items-center gap-2.5 rounded-xl border p-3';
  const metricLabelClass =
    'block text-pretty text-[10px] font-semibold leading-[1.25] text-[#525252] [overflow-wrap:anywhere]';
  const metricValueClass =
    'mt-1 block whitespace-nowrap font-display text-sm font-bold leading-none tabular-nums text-neutral-900';

  return (
    <article
      className={cn(
        'relative flex h-full min-h-[40rem] min-w-0 flex-col rounded-2xl border bg-white p-5 shadow-sm',
        'transition-[border-color,box-shadow] duration-300 ease-out',
        'hover:shadow-[0_18px_42px_-24px_rgba(68,36,120,0.45)]',
        tone.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute end-4 top-4 h-11 w-11 border',
          tone.panel,
          plan.slug === 'starter' && 'rounded-full',
          plan.slug === 'business' && 'rotate-12 rounded-xl',
          plan.slug === 'premium' && 'rotate-45 rounded-lg',
          plan.slug === 'enterprise' && 'rounded-[45%_55%_58%_42%]',
          plan.slug === 'custom' && 'rounded-[35%_65%_48%_52%]',
        )}
      />

      {plan.popular && (
        <span
          className={cn(
            'absolute -top-3 start-5 z-10 rounded-full border bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide shadow-sm',
            plan.slug === 'enterprise'
              ? 'border-[#c2410c]/25 text-[#c2410c]'
              : 'border-[#7c3aed]/25 text-[#7c3aed]',
          )}
        >
          {plan.slug === 'enterprise' ? copy.enterpriseBadge : t('popular')}
        </span>
      )}

      <header className="min-w-0 pe-12">
        <p className={cn('font-display text-lg font-bold', tone.text)}>
          {plan.name}
        </p>
      </header>

      <div className="mt-5 flex min-w-0 items-baseline gap-2">
        <strong
          className={cn(
            'stat-number whitespace-nowrap tabular-nums text-neutral-900',
            plan.slug === 'custom' ? 'text-xl' : 'text-4xl',
          )}
        >
          {plan.slug === 'custom'
            ? copy.customPrice
            : `${formatChatPlanNumber(plan.price)} ₾`}
        </strong>
        <span className="whitespace-nowrap text-xs text-[#525252]">
          {t('monthly')}
        </span>
      </div>

      <div className={cn(metricClass, 'mt-5', tone.panel)}>
        <span
          className={cn(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5',
            tone.text,
          )}
        >
          <Ico name={MODEL_ICONS[plan.slug]} className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <span className={metricLabelClass}>{copy.serviceLevel}</span>
          <strong className={metricValueClass}>{plan.serviceLevel}</strong>
        </div>
        <ChatPricingInfo
          className={cn(
            'justify-self-end',
            tone.info,
          )}
          label={interpolateChatPricingLabel(copy.infoLabel, plan.serviceLevel)}
          text={planCopy.serviceInfo}
        />
      </div>

      <div className={cn(metricClass, 'mt-3 border-[#e5e5e5]')}>
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl',
            tone.soft,
          )}
        >
          <Ico
            name="solar:chat-round-dots-bold-duotone"
            className="h-5 w-5"
          />
        </span>
        <div className="min-w-0">
          <span className={metricLabelClass}>
            <span className="gradient-text font-mono">ai</span>{' '}
            {copy.repliesPerMonth}
          </span>
          <strong className={metricValueClass}>
            {plan.slug === 'custom'
              ? copy.customVolume
              : formatChatPlanNumber(plan.replies)}
          </strong>
        </div>
        <ChatPricingInfo
          className={cn(
            'justify-self-end',
            tone.info,
          )}
          label={interpolateChatPricingLabel(copy.infoLabel, copy.repliesPerMonth)}
          text={copy.repliesInfo}
        />
      </div>

      <div className={cn(metricClass, 'mt-3 border-[#e5e5e5]')}>
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl',
            tone.soft,
          )}
        >
          <Ico name={CATALOG_ICONS[plan.slug]} className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <span className={metricLabelClass}>
            {plan.ragEnabled ? copy.ragKnowledge : copy.cardLabels.catalog}
          </span>
          <strong className={metricValueClass}>
            {CATALOG_CARD_VALUES[plan.slug]}
          </strong>
        </div>
        <ChatPricingInfo
          className={cn(
            'justify-self-end',
            tone.info,
          )}
          label={interpolateChatPricingLabel(
            copy.infoLabel,
            planCopy.features[1],
          )}
          text={planCopy.featureInfo[1]}
        />
      </div>

      <div className={cn(metricClass, 'mt-3 border-[#e5e5e5]')}>
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl',
            tone.soft,
          )}
        >
          <Ico name="solar:link-circle-bold-duotone" className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <span className={metricLabelClass}>{copy.cardLabels.accounts}</span>
          <strong className={metricValueClass}>
            {plan.slug === 'custom'
              ? copy.customVolume
              : formatChatPlanNumber(plan.accounts)}
          </strong>
        </div>
        <ChatPricingInfo
          className={cn('justify-self-end', tone.info)}
          label={interpolateChatPricingLabel(
            copy.infoLabel,
            accountsRow?.label ?? '',
          )}
          text={accountsRow?.info ?? ''}
        />
      </div>

      <div className={cn(metricClass, 'mt-3 border-[#e5e5e5]')}>
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl',
            tone.soft,
          )}
        >
          <Ico name="solar:refresh-circle-bold-duotone" className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <span className={metricLabelClass}>{copy.cardLabels.updates}</span>
          <strong className={metricValueClass}>
            {plan.slug === 'custom'
              ? copy.customVolume
              : plan.monthlyUpdates > 0
                ? `${formatChatPlanNumber(plan.monthlyUpdates)}+`
                : copy.comparison.notIncluded}
          </strong>
        </div>
        <ChatPricingInfo
          className={cn('justify-self-end', tone.info)}
          label={interpolateChatPricingLabel(
            copy.infoLabel,
            updatesRow?.label ?? '',
          )}
          text={updatesRow?.info ?? ''}
        />
      </div>

      <div
        className={cn(
          'group/highlight relative isolate mt-3 grid min-h-24 min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-3 overflow-hidden rounded-xl border p-3 pe-8 text-neutral-900',
          hasAiCallBonus
            ? 'border-[#ff5a1f]/35 bg-[#fff8f4] shadow-[0_12px_30px_-22px_rgba(255,90,31,0.7)] transition-[border-color,background-color,box-shadow] duration-200 ease-out hover:border-[#ff5a1f]/60 hover:bg-[#fff5ee] hover:shadow-[0_16px_34px_-20px_rgba(255,90,31,0.78)]'
            : cn(tone.panel, 'shadow-[0_12px_28px_-26px_rgba(15,23,42,0.45)]'),
        )}
      >
        <span
          className={cn(
            'relative inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1',
            hasAiCallBonus
              ? 'text-[#ff5a1f] ring-[#ff5a1f]/20'
              : cn(tone.text, 'ring-black/8'),
          )}
        >
          <span
            aria-hidden
            className={cn(
              'absolute inset-1.5 rounded-lg border',
              hasAiCallBonus ? 'border-[#ff5a1f]/30' : 'border-current opacity-20',
            )}
          />
          <Ico name={HIGHLIGHT_ICONS[plan.slug]} className="relative size-5" aria-hidden />
        </span>

        <span className="min-w-0">
          <span
            className={cn(
              'block text-[10px] font-extrabold leading-[1.2]',
              hasAiCallBonus ? 'text-[#c2410c]' : 'text-[#525252]',
            )}
          >
            {highlight.label}
          </span>
          {hasAiCallBonus ? (
            <strong className="mt-1 flex min-w-0 items-baseline gap-1.5 leading-none text-neutral-950">
              <span className="font-mono text-[1.7rem] font-black tabular-nums text-[#ea4b12]">
                {formatChatPlanNumber(plan.aiCallMinutesPerMonth)}
              </span>
              <span className="whitespace-nowrap text-[11px] font-extrabold leading-tight">
                {copy.aiCallBonus.unit}
              </span>
            </strong>
          ) : (
            <strong className="mt-1 block text-pretty font-display text-sm font-bold leading-tight text-neutral-900">
              {highlight.value}
            </strong>
          )}
          <span
            className={cn(
              'mt-1 inline-flex max-w-full rounded-full px-2 py-1 text-pretty text-[10px] font-bold leading-[1.2]',
              hasAiCallBonus
                ? 'bg-[#ff5a1f]/10 text-[#9a3412]'
                : 'bg-white/80 text-[#525252] ring-1 ring-black/5',
            )}
          >
            {highlight.caption}
          </span>
        </span>

        {hasAiCallBonus ? (
          <>
            <a
              href="https://aicall.ge"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a1f]/45"
              aria-label={`${copy.aiCallBonus.value}. ${copy.aiCallBonus.caption}. ${copy.aiCallBonus.cta}`}
            />
            <Ico
              name="solar:arrow-right-up-linear"
              className="pointer-events-none absolute end-2.5 top-2.5 size-4 text-[#ff5a1f] transition-transform duration-200 ease-out group-hover/highlight:translate-x-0.5 group-hover/highlight:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden
            />
          </>
        ) : (
          <Ico
            name="solar:check-circle-bold-duotone"
            className={cn('absolute end-2.5 top-2.5 size-4 opacity-70', tone.text)}
            aria-hidden
          />
        )}
      </div>

      {showCta && (
        <div className="mt-auto pt-4">
          <Button
            asChild
            variant={plan.popular ? 'default' : 'outline'}
            className={cn(
              'min-h-11 w-full rounded-full text-xs font-semibold',
              'transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out active:scale-[0.96]',
              plan.popular ? tone.button : cn('border bg-white', tone.button),
            )}
          >
            <Link href={`/${locale}/contact`}>
              {plan.slug === 'enterprise' ? copy.enterpriseCta : t('chatChoose')}
            </Link>
          </Button>
        </div>
      )}
    </article>
  );
}
