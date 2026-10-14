"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import { Calculator } from "lucide-react";

import { AiNowDisclosure } from "@/features/home/components/ainow/AiNowDisclosure";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";

import { CALL_RATES, estimateCallCost } from "./call-estimate";
import { getPricingDetailsCopy } from "./pricing-faq";
import { normalizePricingLocale, type PricingLocale, type PricingProductId } from "./pricing-copy";
import type { PricingProduct } from "./pricing-data";

const INTL_LOCALE: Record<PricingLocale, string> = {
  ka: "ka-GE",
  en: "en-US",
  ru: "ru-RU",
  de: "de-DE",
  tr: "tr-TR",
  fa: "fa-IR",
  zh: "zh-CN",
};

function money(tetri: number, locale: string): string {
  const normalized = normalizePricingLocale(locale);
  return `${new Intl.NumberFormat(INTL_LOCALE[normalized], { maximumFractionDigits: 2 }).format(tetri / 100)} ₾`;
}

function minutes(value: number, locale: string): string {
  const normalized = normalizePricingLocale(locale);
  return new Intl.NumberFormat(INTL_LOCALE[normalized]).format(value);
}

function CallEstimate({ product, selectedPlanId, locale }: { product: PricingProduct; selectedPlanId?: string; locale: PricingLocale }) {
  const [extraChannels, setExtraChannels] = useState("0");
  const [outbound, setOutbound] = useState("50");
  const [firstMonth, setFirstMonth] = useState(true);
  const copy = getPricingDetailsCopy(locale).calculator;
  const plan = product.plans.find((item) => item.id === selectedPlanId) ?? product.plans[0];
  const monthly = Number(plan.price.replace(/[^0-9]/g, ""));
  const cost = estimateCallCost(monthly, Number(extraChannels), Number(outbound), firstMonth);

  return (
    <section className="dodo-glass-card p-5 sm:p-6" aria-labelledby="call-estimate-title">
      <h3 id="call-estimate-title" className="flex items-center gap-2 text-balance text-base font-bold text-slate-900 dark:text-white"><Calculator className="size-5 shrink-0" aria-hidden="true" />{copy.title}</h3>
      <p className="mt-2 text-pretty text-sm leading-6 text-slate-600 dark:text-slate-300">{copy.packageLabel}: {plan.name}. {copy.description}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium">{copy.inboundLabel}</p>
          <div id="pricing-inbound" className="dodo-glass-inset flex min-h-11 items-center px-3 text-sm font-semibold">{copy.inboundRate}</div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="pricing-extra-channels">{copy.extraChannelLabel}</Label>
          <Select value={extraChannels} onValueChange={setExtraChannels}>
            <SelectTrigger id="pricing-extra-channels" className="dodo-glass-inset min-h-11 w-full tabular-nums"><span>{minutes(Number(extraChannels), locale)} · {money(Number(extraChannels) * CALL_RATES.extraChannel, locale)}</span></SelectTrigger>
            <SelectContent alignItemWithTrigger={false} align="start" className="dodo-glass-card">{Array.from({ length: 10 }, (_, value) => value).map((value) => <SelectItem key={value} value={String(value)} className="min-h-10">{minutes(value, locale)} · {money(value * CALL_RATES.extraChannel, locale)}</SelectItem>)}</SelectContent>
          </Select>
          <p className="text-xs text-slate-600 dark:text-slate-300">{copy.extraChannelRate}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="pricing-outbound">{copy.outboundLabel}</Label>
          <Input id="pricing-outbound" type="number" min="0" step="1" inputMode="numeric" value={outbound} onChange={(event) => setOutbound(event.target.value)} className="dodo-glass-inset h-11 tabular-nums" />
          <p className="text-xs text-slate-600 dark:text-slate-300">{copy.outboundRate}</p>
        </div>
      </div>
      <label className="mt-3 flex min-h-11 w-fit cursor-pointer items-center gap-3 text-sm"><input type="checkbox" checked={firstMonth} onChange={(event) => setFirstMonth(event.target.checked)} className="size-4 accent-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500" />{copy.firstMonthLabel}</label>
      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-black/10 pt-4 text-sm dark:border-white/10">
        <dt>{copy.subscriptionLabel}</dt><dd className="text-right tabular-nums">{money(cost.subscription, locale)}</dd>
        <dt>{copy.inboundCallsLabel}</dt><dd className="text-right tabular-nums">{money(cost.inbound, locale)}</dd>
        <dt>{copy.extraChannelsCallsLabel}</dt><dd className="text-right tabular-nums">{money(cost.extraChannels, locale)}</dd>
        <dt>{copy.outboundCallsLabel}</dt><dd className="text-right tabular-nums">{money(cost.outbound, locale)}</dd>
        {firstMonth && <><dt>{copy.setupOnceLabel}</dt><dd className="text-right tabular-nums">{money(cost.setup, locale)}</dd></>}
        <dt className="pt-2 font-bold">{copy.totalExampleLabel}</dt><dd className="pt-2 text-right text-xl font-bold tabular-nums" aria-live="polite" aria-atomic="true">{money(cost.total, locale)}</dd>
      </dl>
      <p className="mt-3 text-pretty text-xs leading-5 text-slate-600 dark:text-slate-300">{copy.disclaimer}</p>
    </section>
  );
}

export function PricingDetails({ product, selectedPlanId }: { product: PricingProduct; selectedPlanId?: string }) {
  const locale = normalizePricingLocale(useLocale());
  const copy = getPricingDetailsCopy(locale);
  const questions = [...(copy.productQuestions[product.id as PricingProductId] ?? []), ...copy.commonQuestions];
  const disclosure = copy.disclosure;

  return (
    <div className="mt-6 space-y-6">
      {product.id === "aicall" && <CallEstimate product={product} selectedPlanId={selectedPlanId} locale={locale} />}
      {(product.id === "aicall" || product.id === "aicontent") && (
        <AiNowDisclosure className="dodo-glass-card px-4 sm:px-5" title={product.id === "aicall" ? disclosure.callTitle : disclosure.contentTitle}>
          {product.id === "aicall" ? (
            <div className="pb-5">
              <audio controls preload="none" src="https://aicall.ge/audio/turn_1.mp3?v=6" className="w-full" aria-label={disclosure.callAriaLabel} />
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-300">{disclosure.callDisclaimer} <a href="https://aicall.ge" className="underline underline-offset-4">{disclosure.callLink}</a></p>
            </div>
          ) : (
            <div className="pb-5"><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{disclosure.contentBody} <a href="https://aicontent.ge/pricing" className="font-medium text-slate-900 underline underline-offset-4 dark:text-white">{disclosure.contentLink}</a>.</p></div>
          )}
        </AiNowDisclosure>
      )}
      <section aria-labelledby={`pricing-questions-${product.id}`}>
        <h3 id={`pricing-questions-${product.id}`} className="mb-3 text-balance text-lg font-bold text-slate-900 dark:text-white">{disclosure.orderTitle}</h3>
        <div className="dodo-glass-card divide-y divide-black/10 overflow-hidden dark:divide-white/10">
          {questions.map((item) => <AiNowDisclosure key={`${product.id}-${item.question}`} title={item.question} className="px-4 sm:px-5">
            <p className="pb-5 text-pretty text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
          </AiNowDisclosure>)}
        </div>
      </section>
    </div>
  );
}
