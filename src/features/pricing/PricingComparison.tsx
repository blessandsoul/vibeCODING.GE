"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import { useLocale } from "next-intl";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";

import { Ico } from "@/components/common/Ico";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { AiNowCatalogButton } from "@/features/home/components/ainow/AiNowCatalogButton";
import { AiNowImage } from "@/features/home/components/ainow/AiNowImage";
import { cn } from "@/lib/utils";

import { PricingDetails } from "./PricingDetails";
import type { PricingUiCopy } from "./pricing-copy";
import { getPricingUiCopy, isMonthlyPlan, localizePricingProducts } from "./pricing-copy";
import {
  type PricingModel,
  type PricingPlan,
  type PricingProduct,
  type PricingValue,
} from "./pricing-data";

/*
 * DESIGN READ: a comparison surface for Georgian SMB owners who need one obvious action,
 * with the aiNOW OBSIDIAN liquid-glass language already used in the hero.
 * DIALS: DESIGN_VARIANCE 5, MOTION_INTENSITY 3, VISUAL_DENSITY 5.
 * DESIGN PLAN: dark OBSIDIAN canvas, asymmetric product selector beside one product lens,
 * full-plan swipe on mobile, and the bad-dodo-83 glass material for every visible control.
 */

type ProductChange = (id: string, revealProduct: boolean) => void;
type PlanChange = (planId: string) => void;

type Copy = PricingUiCopy;

const PRICING_MODEL_META: Record<PricingModel, { icon: string }> = {
  subscription: { icon: "solar:calendar-bold-duotone" },
  project: { icon: "solar:clipboard-check-bold-duotone" },
  mixed: { icon: "solar:transfer-horizontal-bold-duotone" },
  custom: { icon: "solar:tuning-3-bold-duotone" },
};

function formatValue(value: PricingValue, copy: Copy) {
  if (typeof value !== "boolean") return value;

  if (value) {
    return (
      <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
        <Check className="size-4" aria-hidden="true" />
        <span className="sr-only">{copy.yes}</span>
      </span>
    );
  }

  return <span className="text-slate-500 dark:text-slate-400">{copy.no}</span>;
}

function ProductModelBadge({ product, label }: { product: PricingProduct; label: string }) {
  const model = PRICING_MODEL_META[product.pricingModel];

  return (
    <span
      className="dodo-glass-inset dodo-glass-pill hidden max-w-full items-center gap-1 px-2 py-1 text-[10px] font-semibold leading-none sm:inline-flex"
      style={{ color: product.accent, borderColor: `${product.accent}3d`, backgroundColor: `${product.accent}0d` }}
    >
      <Ico name={model.icon} className="size-3 shrink-0" aria-hidden="true" />
      <span className="truncate">{label}</span>
    </span>
  );
}

function ProductTabs({ activeId, onChange, copy, products }: { activeId: string; onChange: ProductChange; copy: Copy; products: readonly PricingProduct[] }) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number): void => {
    const lastIndex = products.length - 1;
    const isNext = event.key === "ArrowRight" || event.key === "ArrowDown";
    const isPrevious = event.key === "ArrowLeft" || event.key === "ArrowUp";
    const nextIndex = isNext
      ? index === lastIndex ? 0 : index + 1
      : isPrevious
        ? index === 0 ? lastIndex : index - 1
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? lastIndex
            : null;

    if (nextIndex === null) return;

    event.preventDefault();
    const nextProduct = products[nextIndex];
    onChange(nextProduct.id, true);
    document.getElementById(`pricing-product-${nextProduct.id}`)?.focus();
  };

  return (
    <div className={cn("grid gap-2 lg:grid-cols-1", products.length === 1 ? "grid-cols-1" : "grid-cols-2")} role="tablist" aria-label={copy.choose}>
      {products.map((product, index) => {
        const active = product.id === activeId;

        return (
          <button
            key={product.id}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls="pricing-selected-product"
            aria-label={`${product.name}: ${product.label}. ${product.pricingModelLabel}`}
            id={`pricing-product-${product.id}`}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(product.id, true)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              "dodo-glass-box group relative flex min-h-[100px] items-center gap-2 overflow-hidden p-3 text-start transition-[transform,border-color,box-shadow,opacity] duration-200 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0b0e] sm:gap-3 lg:min-h-[82px]",
              active ? "shadow-[0_18px_36px_-22px_rgba(37,99,235,0.55)]" : "opacity-[0.82] hover:opacity-100",
            )}
            style={{ borderColor: active ? `${product.accent}86` : undefined }}
          >
            <span
              className="dodo-glass-inset relative flex size-9 shrink-0 items-center justify-center sm:size-11"
              style={{ color: product.accent, backgroundColor: `${product.accent}16`, borderColor: `${product.accent}3e` }}
            >
              <Ico name={product.icon} className="size-5" aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-white dark:border-[#0a0b0e]" style={{ backgroundColor: product.accent }} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex min-w-0 items-center justify-between gap-2">
                <span className="truncate font-headline text-xs font-semibold tracking-[-0.02em] text-slate-950 dark:text-white sm:text-base">{product.name}</span>
                <ProductModelBadge product={product} label={copy.modelCompact[product.pricingModel]} />
              </span>
              <span className="mt-1 block text-[11px] leading-4 text-slate-600 dark:text-slate-300 sm:text-xs">{product.label}</span>
              <span className="mt-1 block max-w-full text-pretty text-[10px] font-semibold leading-4 sm:text-xs" style={{ color: active ? product.accent : undefined }}>
                {product.priceLead}
              </span>
            </span>
            <ChevronRight className="hidden size-4 shrink-0 text-slate-400 transition-transform duration-200 ease-out group-hover:translate-x-0.5 sm:block" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}

function ProductLens({ product, copy }: { product: PricingProduct; copy: Copy }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.article
        key={product.id}
        id="pricing-selected-product"
        role="tabpanel"
        aria-live="polite"
        aria-label={`${copy.selected}: ${product.name}`}
        data-pricing-product={product.id}
        data-pricing-model={product.pricingModel}
        data-price-start={product.priceLead}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
        transition={{ duration: reduceMotion ? 0 : 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="dodo-glass-card isolate overflow-hidden p-4 sm:p-5"
        style={{ borderColor: `${product.accent}52` }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${product.accent}24 0%, transparent 69%)` }}
        />
        <div className="relative z-10 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(9rem,13rem)] sm:items-center">
          <div className="flex min-w-0 flex-col">
          <div className="flex items-center gap-2">
            <span
              className="dodo-glass-inset flex size-10 shrink-0 items-center justify-center"
              style={{ color: product.accent, backgroundColor: `${product.accent}16`, borderColor: `${product.accent}42` }}
            >
              <Ico name={product.icon} className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold" style={{ color: product.accent }}>{copy.selected}</p>
              <p className="truncate text-sm font-semibold text-slate-950 dark:text-white">{product.name}</p>
            </div>
          </div>

          <h3 className="mt-3 font-headline text-balance text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl dark:text-white">
            {product.label}
          </h3>
          <p className="mt-2 text-sm font-semibold text-slate-900 sm:hidden dark:text-white">{product.priceLead}</p>
          <p className="mt-2 max-w-[68ch] text-pretty text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">{product.summary}</p>

          <dl className="mt-4 hidden overflow-hidden border-y border-slate-200/70 text-sm sm:block dark:border-white/10">
            <div className="grid gap-1 border-b border-slate-200/70 py-2.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center dark:border-white/10">
              <dt className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Ico name="solar:calendar-bold-duotone" className="size-4" style={{ color: product.accent }} aria-hidden="true" />
                {copy.pricingForm}
              </dt>
              <dd className="font-semibold text-slate-900 dark:text-white">{product.pricingModelLabel}</dd>
            </div>
            {product.pricingModel !== "custom" ? (
              <div className="grid gap-1 border-b border-slate-200/70 py-2.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center dark:border-white/10">
                <dt className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <Ico name="solar:wallet-money-bold-duotone" className="size-4" style={{ color: product.accent }} aria-hidden="true" />
                  {copy.priceStarts}
                </dt>
                <dd className="font-semibold text-slate-900 dark:text-white">{product.priceLead}</dd>
              </div>
            ) : null}
            <div className="grid gap-1 py-2.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-center">
              <dt className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Ico name="solar:target-bold-duotone" className="size-4" style={{ color: product.accent }} aria-hidden="true" />
                {copy.usefulWhen}
              </dt>
              <dd className="font-medium leading-5 text-slate-800 dark:text-slate-200">{product.decisionPrompt}</dd>
            </div>
          </dl>

          <p className="mt-3 hidden max-w-[72ch] text-pretty text-xs leading-5 text-slate-500 sm:block dark:text-slate-400">{product.pricingModelDetail}</p>
          <AiNowCatalogButton href={product.url} className="mt-4" size="md">
            {copy.productPage}
          </AiNowCatalogButton>
          </div>

          <div data-pricing-image-frame className="relative hidden min-h-24 items-center justify-center overflow-hidden sm:flex sm:min-h-32">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-2 blur-2xl"
              style={{ background: `radial-gradient(circle at 50% 50%, ${product.accent}30 0%, transparent 70%)` }}
            />
            <AiNowImage
              key={product.id}
              src={product.visualAsset}
              alt={product.visualAlt}
              fill
              sizes="13rem"
              frameClassName="absolute inset-0 z-[1]"
              className="object-contain"
            />
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

function PlanHeader({ plan, product }: { plan: PricingPlan; product: PricingProduct }) {
  const compactPrice = plan.price.length > 16;
  const isMonthly = isMonthlyPlan(product.id, plan.id);

  return (
    <div className="dodo-glass-inset m-2 flex min-h-[190px] flex-col p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold leading-5 text-slate-950 dark:text-white">{plan.name}</p>
        <span className="dodo-glass-inset flex size-8 shrink-0 items-center justify-center" style={{ color: product.accent, backgroundColor: `${product.accent}12`, borderColor: `${product.accent}32` }}>
          <Ico name={PRICING_MODEL_META[product.pricingModel].icon} className="size-4" aria-hidden="true" />
        </span>
      </div>
      <div className={cn("mt-5", isMonthly && "flex items-start justify-between gap-2")}>
        <p className={cn("font-headline whitespace-nowrap font-semibold tracking-[-0.035em] text-slate-950 dark:text-white", compactPrice ? "text-lg leading-6" : "text-2xl leading-7")}>{plan.price}</p>
        {isMonthly ? (
          <span className="dodo-glass-inset dodo-glass-pill shrink-0 px-2 py-1 text-[11px] font-semibold leading-4 text-slate-500 dark:text-slate-300">{plan.cadence}</span>
        ) : (
          <span className="dodo-glass-inset dodo-glass-pill mt-2 inline-flex px-2 py-1 text-[11px] font-semibold text-slate-500 dark:text-slate-300">{plan.cadence}</span>
        )}
      </div>
      <p className="mt-4 min-h-10 text-xs leading-5 text-slate-600 dark:text-slate-300">{plan.note}</p>
    </div>
  );
}

function MobilePlanCarousel({
  product,
  copy,
  selectedPlanId,
  onPlanChange,
}: {
  product: PricingProduct;
  copy: Copy;
  selectedPlanId: string;
  onPlanChange: PlanChange;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<number | null>(null);
  const skipSyncKeyRef = useRef<string | null>(null);
  const initialPlanIndex = product.plans.findIndex((plan) => plan.id === selectedPlanId);
  const [activePlanIndex, setActivePlanIndex] = useState(initialPlanIndex >= 0 ? initialPlanIndex : 0);
  const reduceMotion = useReducedMotion();
  const lastPlanIndex = product.plans.length - 1;

  useEffect(() => () => {
    if (scrollTimerRef.current !== null) window.clearTimeout(scrollTimerRef.current);
  }, []);

  const centerPlan = useCallback((nextIndex: number, behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth"): void => {
    const carousel = carouselRef.current;
    if (!carousel || carousel.clientWidth === 0) return;

    const card = carousel.children.item(nextIndex) as HTMLElement | null;
    if (!card) return;

    const carouselRect = carousel.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const target = carousel.scrollLeft + cardRect.left - carouselRect.left - (carousel.clientWidth - card.clientWidth) / 2;
    if (Math.abs(target - carousel.scrollLeft) < 1) return;

    carousel.scrollTo({ left: target, behavior });
  }, [reduceMotion]);

  useEffect(() => {
    if (scrollTimerRef.current !== null) {
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }

    const nextIndex = product.plans.findIndex((plan) => plan.id === selectedPlanId);
    const resolvedIndex = nextIndex >= 0 ? nextIndex : 0;
    const syncKey = `${product.id}:${selectedPlanId}`;
    const skipCentering = skipSyncKeyRef.current === syncKey;
    if (skipCentering) skipSyncKeyRef.current = null;
    const frame = window.requestAnimationFrame(() => {
      setActivePlanIndex((currentIndex) => currentIndex === resolvedIndex ? currentIndex : resolvedIndex);
      if (!skipCentering) centerPlan(resolvedIndex);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [centerPlan, product.id, product.plans, selectedPlanId]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || typeof ResizeObserver === "undefined") return;

    let frame: number | null = null;
    const syncAfterResize = (): void => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        frame = null;
        if (carousel.clientWidth === 0) return;
        const selectedIndex = product.plans.findIndex((plan) => plan.id === selectedPlanId);
        if (selectedIndex >= 0) centerPlan(selectedIndex, "auto");
      });
    };
    const observer = new ResizeObserver(syncAfterResize);
    observer.observe(carousel);

    return () => {
      observer.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [centerPlan, product.plans, selectedPlanId]);

  const scrollToPlan = (nextIndex: number): void => {
    const clampedIndex = Math.max(0, Math.min(lastPlanIndex, nextIndex));

    if (scrollTimerRef.current !== null) {
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }
    setActivePlanIndex((currentIndex) => currentIndex === clampedIndex ? currentIndex : clampedIndex);
    const plan = product.plans[clampedIndex];
    if (plan && plan.id !== selectedPlanId) {
      skipSyncKeyRef.current = `${product.id}:${plan.id}`;
      onPlanChange(plan.id);
    }
    centerPlan(clampedIndex);
  };

  const updateActivePlan = (): void => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(carousel.children).forEach((node, index) => {
      const card = node as HTMLElement;
      const cardRect = card.getBoundingClientRect();
      const distance = Math.abs(cardRect.left + cardRect.width / 2 - carouselCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActivePlanIndex((currentIndex) => currentIndex === nearestIndex ? currentIndex : nearestIndex);
    const nearestPlan = product.plans[nearestIndex];
    if (nearestPlan && nearestPlan.id !== selectedPlanId) {
      skipSyncKeyRef.current = `${product.id}:${nearestPlan.id}`;
      onPlanChange(nearestPlan.id);
    }
    scrollTimerRef.current = null;
  };

  const handlePlanScroll = (): void => {
    if (scrollTimerRef.current !== null) window.clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = window.setTimeout(updateActivePlan, 96);
  };

  return (
    <div className="relative z-10 p-4 md:hidden sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-950 dark:text-white">{copy.plansMobile}</p>
          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{copy.plansHint}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="min-w-9 text-center font-mono text-[11px] font-semibold tabular-nums text-slate-500 dark:text-slate-400" aria-live="polite">
            {activePlanIndex + 1} / {product.plans.length}
          </span>
          <button
            type="button"
            onClick={() => scrollToPlan(activePlanIndex - 1)}
            disabled={activePlanIndex === 0}
            aria-label={copy.previousPlan}
            className="dodo-glass-inset flex size-10 items-center justify-center text-slate-700 transition-[transform,opacity,box-shadow] duration-200 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-35 dark:text-slate-200 dark:focus-visible:ring-offset-[#0a0b0e]"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollToPlan(activePlanIndex + 1)}
            disabled={activePlanIndex === lastPlanIndex}
            aria-label={copy.nextPlan}
            className="dodo-glass-inset flex size-10 items-center justify-center text-slate-700 transition-[transform,opacity,box-shadow] duration-200 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-35 dark:text-slate-200 dark:focus-visible:ring-offset-[#0a0b0e]"
          >
            <ChevronRight className="size-4 rtl:rotate-180" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden rtl:left-auto rtl:right-1/2 rtl:translate-x-1/2">
        <div
          ref={carouselRef}
          onScroll={handlePlanScroll}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth px-[max(1.5rem,calc((100vw-340px)/2))] pb-2 pt-0 touch-pan-x motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label={copy.plansMobile}
          tabIndex={0}
        >
          {product.plans.map((plan, planIndex) => (
            <article
              key={plan.id}
              className="dodo-glass-box flex basis-[min(340px,calc(100vw-48px))] shrink-0 snap-center flex-col overflow-hidden p-4 sm:p-5"
              style={{ borderColor: `${product.accent}4c` }}
              aria-label={`${plan.name}, ${planIndex + 1} / ${product.plans.length}`}
            >
              <div className="flex items-start gap-3">
                <span
                  className="dodo-glass-inset flex size-11 shrink-0 items-center justify-center"
                  style={{ color: product.accent, backgroundColor: `${product.accent}16`, borderColor: `${product.accent}3e` }}
                >
                  <Ico name={PRICING_MODEL_META[product.pricingModel].icon} className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-balance font-headline text-xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">{plan.name}</h3>
                  <p className="mt-1 text-pretty text-xs leading-5 text-slate-600 dark:text-slate-300">{plan.note}</p>
                </div>
              </div>

              <div className="dodo-glass-inset mt-5 px-3.5 py-3">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-headline whitespace-nowrap text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">{plan.price}</p>
                  {isMonthlyPlan(product.id, plan.id) && (
                    <span className="dodo-glass-inset dodo-glass-pill shrink-0 px-2 py-1 text-[10px] font-semibold leading-4 text-slate-500 dark:text-slate-300">{plan.cadence}</span>
                  )}
                </div>
                <div className={cn("mt-1.5 flex items-center gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400", isMonthlyPlan(product.id, plan.id) ? "justify-start" : "justify-between")}>
                  {!isMonthlyPlan(product.id, plan.id) && <span>{plan.cadence}</span>}
                  <span className="truncate" style={{ color: product.accent }}>{product.pricingModelLabel}</span>
                </div>
              </div>

              <ul className="mt-4 grid gap-2.5">
                {product.rowLabels.map((row, rowIndex) => (
                  <li key={row.label} className="dodo-glass-inset flex min-w-0 items-start gap-3 px-3 py-2.5">
                    <span
                      className="dodo-glass-inset mt-0.5 flex size-7 shrink-0 items-center justify-center"
                      style={{ color: product.accent, backgroundColor: `${product.accent}10`, borderColor: `${product.accent}2d` }}
                    >
                      <Ico name={row.icon} className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold leading-4 text-slate-500 dark:text-slate-400">{row.label}</span>
                      <span className="mt-1 block text-pretty text-sm font-semibold leading-5 text-slate-900 dark:text-white">{formatValue(plan.values[rowIndex], copy)}</span>
                    </span>
                  </li>
                ))}
              </ul>

            </article>
          ))}
        </div>
        <div className="mt-1 flex items-center justify-center gap-1.5 px-4" role="tablist" aria-label={copy.plansMobile}>
          {product.plans.map((plan, index) => (
            <button
              type="button"
              key={plan.id}
              onClick={() => scrollToPlan(index)}
              aria-label={`${plan.name}, ${index + 1} / ${product.plans.length}`}
              aria-current={index === activePlanIndex ? "true" : undefined}
              data-pricing-plan-indicator={index === activePlanIndex ? "active" : "inactive"}
              className="flex size-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0b0e]"
            >
              <span
                className={cn(
                  "h-1.5 rounded-full transition-colors duration-150 ease-out",
                  index === activePlanIndex ? "w-5" : "w-1.5 bg-slate-300 dark:bg-white/20",
                )}
                style={index === activePlanIndex ? { backgroundColor: product.accent } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgentBrief({ product, copy }: { product: PricingProduct; copy: Copy }) {
  const briefRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const brief = briefRef.current;
    const content = contentRef.current;
    if (!brief || !content) return;

    const syncContentHeight = (): void => {
      brief.style.setProperty("--pricing-agent-brief-height", `${content.scrollHeight}px`);
    };

    syncContentHeight();
    const observer = new ResizeObserver(syncContentHeight);
    observer.observe(content);
    return () => observer.disconnect();
  }, [product.id]);

  return (
    <section
      ref={briefRef}
      className={cn("pricing-agent-brief relative z-10 border-t border-slate-200/70 dark:border-white/10", isOpen && "is-open")}
      data-pricing-product={product.id}
      data-pricing-model={product.pricingModel}
      data-price-start={product.priceLead}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`pricing-agent-brief-${product.id}`}
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-3 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 sm:px-7"
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="dodo-glass-inset flex size-8 shrink-0 items-center justify-center" style={{ color: product.accent, backgroundColor: `${product.accent}12`, borderColor: `${product.accent}32` }}>
            <Ico name="solar:cpu-bold-duotone" className="size-4" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-slate-900 dark:text-white">{copy.agentBrief}</span>
            <span className="mt-0.5 block text-xs leading-5 text-slate-500 dark:text-slate-400">{copy.agentBriefNote}</span>
          </span>
        </span>
        <ChevronDown className={cn("size-4 shrink-0 text-slate-400 transition-transform duration-200 ease-out", isOpen && "rotate-180")} aria-hidden="true" />
      </button>
      <div id={`pricing-agent-brief-${product.id}`} ref={contentRef} className="pricing-agent-brief__content">
        <div className="pricing-agent-brief__content-clip">
          <div className="border-t border-slate-200/70 px-5 py-5 dark:border-white/10 sm:px-7">
            <dl className="grid gap-3 sm:grid-cols-3">
              {product.agentFacts.map((fact) => (
                <div key={fact.label} className="min-w-0 border-l-2 pl-3" style={{ borderColor: `${product.accent}72` }}>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Ico name={fact.icon} className="size-3.5" style={{ color: product.accent }} aria-hidden="true" />
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-5 text-slate-800 dark:text-slate-200">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-200/70 pt-4 text-xs dark:border-white/10">
              <span className="font-semibold text-slate-500 dark:text-slate-400">{copy.sourcePage}</span>
              <a href={product.url} className="font-mono font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 dark:text-slate-200 dark:decoration-white/20 dark:hover:text-white">
                {product.url}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomTaskOptions({ product }: { product: PricingProduct }) {
  return (
    <div className="relative z-10 border-b border-slate-200/70 px-5 pb-5 dark:border-white/10 sm:px-7">
      <ul className="grid gap-2">
        {product.plans.map((plan) => (
          <li
            key={plan.id}
            className="dodo-glass-box grid gap-2 p-3 sm:grid-cols-[minmax(10rem,0.72fr)_minmax(0,1.28fr)] sm:items-center sm:gap-4 sm:p-4"
          >
            <p className="text-sm font-semibold text-slate-950 dark:text-white">{plan.name}</p>
            <p className="text-pretty text-sm leading-5 text-slate-600 dark:text-slate-300">{plan.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonMatrix({
  product,
  copy,
  selectedPlanId,
  onPlanChange,
}: {
  product: PricingProduct;
  copy: Copy;
  selectedPlanId: string;
  onPlanChange: PlanChange;
}) {
  const tableMinWidth = 166 + product.plans.length * 196;
  const reduceMotion = useReducedMotion();
  const tableScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateTableScrollState = useCallback((): void => {
    const table = tableScrollRef.current;
    if (!table) return;
    const isRtl = getComputedStyle(table).direction === "rtl";
    const offset = isRtl ? Math.abs(table.scrollLeft) : table.scrollLeft;
    setCanScrollLeft(offset > 2);
    setCanScrollRight(table.scrollWidth - table.clientWidth - offset > 2);
  }, []);

  useEffect(() => {
    const table = tableScrollRef.current;
    if (!table) return;
    const frame = window.requestAnimationFrame(updateTableScrollState);
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(updateTableScrollState);
    observer?.observe(table);
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [product.id, tableMinWidth, updateTableScrollState]);

  const scrollTable = (direction: -1 | 1): void => {
    const table = tableScrollRef.current;
    if (!table) return;
    const distance = Math.max(196, Math.round(table.clientWidth * 0.75));
    const isRtl = getComputedStyle(table).direction === "rtl";
    tableScrollRef.current?.scrollBy({ left: direction * distance * (isRtl ? -1 : 1), behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.article
        key={product.id}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
        transition={{ duration: reduceMotion ? 0 : 0.14, ease: [0.16, 1, 0.3, 1] }}
        className="dodo-glass-card overflow-hidden"
        style={{ borderColor: `${product.accent}52` }}
        aria-labelledby="pricing-plan-title"
      >
      <div className="relative z-10 flex flex-col gap-4 border-b border-slate-200/70 p-5 sm:p-7 dark:border-white/10">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div className="flex min-w-0 items-start gap-3.5">
            <span className="dodo-glass-inset flex size-11 shrink-0 items-center justify-center" style={{ color: product.accent, backgroundColor: `${product.accent}12`, borderColor: `${product.accent}35` }}>
              <Ico name={product.icon} className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold" style={{ color: product.accent }}>{product.sectionLabel}</p>
              <h2 id="pricing-plan-title" className="mt-1 font-headline text-balance text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl dark:text-white">
                {product.pricingModel === "custom" ? copy.customOptions : copy.compare}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">{product.billingLabel}</p>
            </div>
          </div>
          <span className="dodo-glass-inset dodo-glass-pill inline-flex w-fit items-center gap-2 px-3 py-1.5 text-xs font-semibold" style={{ color: product.accent, backgroundColor: `${product.accent}0c`, borderColor: `${product.accent}34` }}>
            <Ico name={PRICING_MODEL_META[product.pricingModel].icon} className="size-4" aria-hidden="true" />
            {product.pricingModelLabel}
          </span>
        </div>
        {product.scopeNotice ? <p className="max-w-3xl border-l-2 pl-3 text-xs leading-5 text-slate-500 dark:text-slate-400" style={{ borderColor: `${product.accent}66` }}>{product.scopeNotice}</p> : null}
      </div>

      {product.pricingModel === "custom" ? <CustomTaskOptions product={product} /> : (
        <>
          <MobilePlanCarousel
            key={product.id}
            product={product}
            copy={copy}
            selectedPlanId={selectedPlanId}
            onPlanChange={onPlanChange}
          />

          <div className="relative z-10 hidden md:block">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-3 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
              <span className="flex min-w-0 items-center gap-2">
                <MoveHorizontal className="size-4 shrink-0" aria-hidden="true" />
                <span className="truncate">{copy.swipe}</span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5">
                <button type="button" onClick={() => scrollTable(-1)} disabled={!canScrollLeft} aria-label={copy.previousPlan} className="dodo-glass-inset flex size-10 items-center justify-center text-slate-700 transition-[transform,opacity,box-shadow] duration-200 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-35 dark:text-slate-200 dark:focus-visible:ring-offset-[#0a0b0e]">
                  <ChevronLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollTable(1)} disabled={!canScrollRight} aria-label={copy.nextPlan} className="dodo-glass-inset flex size-10 items-center justify-center text-slate-700 transition-[transform,opacity,box-shadow] duration-200 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-35 dark:text-slate-200 dark:focus-visible:ring-offset-[#0a0b0e]">
                  <ChevronRight className="size-4 rtl:rotate-180" aria-hidden="true" />
                </button>
              </span>
            </div>
            <div ref={tableScrollRef} onScroll={updateTableScrollState} className="overflow-x-auto overscroll-x-contain touch-pan-x [-webkit-overflow-scrolling:touch] [scrollbar-color:rgba(37,99,235,.35)_transparent] [scrollbar-width:thin]" role="region" aria-label={copy.comparisonTitle} tabIndex={0}>
              <table className="w-full border-separate border-spacing-0 text-start" style={{ minWidth: tableMinWidth }}>
                <thead>
                  <tr>
                    <th scope="col" className="dodo-glass-table-sticky sticky left-0 z-20 min-w-[166px] border-r border-slate-200/70 p-4 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400">{copy.included}</th>
                    {product.plans.map((plan) => (
                      <th key={plan.id} scope="col" className="min-w-[196px] border-r border-slate-200/70 p-0 align-top last:border-r-0 dark:border-white/10">
                        <PlanHeader plan={plan} product={product} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.rowLabels.map((row, rowIndex) => (
                    <tr key={row.label} className="border-t border-slate-200/70 dark:border-white/10">
                      <th scope="row" className="dodo-glass-table-sticky sticky left-0 z-10 min-w-[166px] border-r border-slate-200/70 p-4 text-xs font-semibold leading-5 text-slate-600 dark:border-white/10 dark:text-slate-300">
                        <span className="flex items-start gap-2">
                          <Ico name={row.icon} className="mt-0.5 size-4 shrink-0" style={{ color: product.accent }} aria-hidden="true" />
                          <span>{row.label}</span>
                        </span>
                      </th>
                      {product.plans.map((plan) => (
                        <td key={plan.id} className="min-h-[72px] border-r border-slate-200/70 p-4 text-sm font-medium leading-5 text-slate-800 last:border-r-0 dark:border-white/10 dark:text-slate-200">{formatValue(plan.values[rowIndex], copy)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      <AgentBrief product={product} copy={copy} />
      </motion.article>
    </AnimatePresence>
  );
}

function PlanSelection({
  product,
  copy,
  selectedPlanId,
  onChange,
}: {
  product: PricingProduct;
  copy: Copy;
  selectedPlanId: string;
  onChange: (planId: string) => void;
}) {
  const isCustom = product.pricingModel === "custom";
  const locale = useLocale();
  const localePrefix = ["en", "ru", "de", "tr", "fa", "zh"].includes(locale) ? `/${locale}` : "/";
  const requestHref = `${localePrefix}?pricingProduct=${encodeURIComponent(product.id)}${selectedPlanId ? `&pricingPlan=${encodeURIComponent(selectedPlanId)}` : ""}#cta`;

  return (
    <section className="dodo-glass-card relative mt-4 overflow-hidden p-4 sm:p-5" aria-labelledby="pricing-plan-selection-title">
      <div className="relative z-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.62fr)_auto] lg:items-end">
        <div className="min-w-0">
          <h3 id="pricing-plan-selection-title" className="font-headline text-balance text-xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white">
            {copy.selectionTitle}
          </h3>
          <p className="mt-1 text-pretty text-sm leading-5 text-slate-600 dark:text-slate-300">{copy.selectionHint}</p>
        </div>
        <div className="min-w-0">
          <label htmlFor="pricing-plan-selection" className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">
            {isCustom ? copy.customSelectionLabel : copy.selectionLabel}
          </label>
          <Select value={selectedPlanId || "undecided"} onValueChange={(value) => onChange(value === "undecided" ? "" : value)}>
            <SelectTrigger id="pricing-plan-selection" className="dodo-glass-inset min-h-11 w-full px-3 text-sm font-semibold text-slate-900 dark:text-white">
              <span className="min-w-0 flex-1 truncate text-start">{product.plans.find((plan) => plan.id === selectedPlanId)?.name ?? copy.selectionOptional}</span>
            </SelectTrigger>
            <SelectContent className="dodo-glass-card">
            {isCustom ? <SelectItem value="undecided" className="min-h-10">{copy.selectionOptional}</SelectItem> : null}
            {product.plans.map((plan) => (
              <SelectItem key={plan.id} value={plan.id} className="min-h-10 [&_[data-slot=select-item-text]]:whitespace-normal">{`${plan.name} · ${plan.price}`}</SelectItem>
            ))}
            </SelectContent>
          </Select>
        </div>
        <a
          href={requestHref}
          className="ainow-btn-primary min-h-11 justify-center px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0b0e]"
          data-pricing-cta
        >
          {copy.selectionCta}
          <ChevronRight className="size-4 rtl:rotate-180" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function PricingComparison() {
  const rawLocale = useLocale();
  const copy = getPricingUiCopy(rawLocale);
  const products = localizePricingProducts(rawLocale);
  const [activeId, setActiveId] = useState(products[0]?.id ?? "vibecoding");
  const [selectedPlanIds, setSelectedPlanIds] = useState<Record<string, string>>({});
  const productLensRef = useRef<HTMLDivElement>(null);
  const product = products.find((item) => item.id === activeId) ?? products[0];
  const storedSelectedPlanId = selectedPlanIds[product.id];
  const selectedPlanId = storedSelectedPlanId && product.plans.some((plan) => plan.id === storedSelectedPlanId)
    ? storedSelectedPlanId
    : product.pricingModel === "custom" ? "" : product.plans[0]?.id ?? "";

  const handleProductChange: ProductChange = (id, revealProduct) => {
    setActiveId(id);

    if (revealProduct && window.matchMedia("(max-width: 1023px)").matches) {
      window.requestAnimationFrame(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        productLensRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
    }
  };

  const handlePlanChange = (planId: string): void => {
    setSelectedPlanIds((current) => ({ ...current, [product.id]: planId }));
  };

  return (
    <section className="relative" aria-labelledby="pricing-comparison-title">
      <div className="max-w-3xl">
        <h2 id="pricing-comparison-title" className="font-headline text-balance text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl dark:text-white">{copy.comparisonTitle}</h2>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(17rem,0.72fr)_minmax(0,1.28fr)] lg:gap-5">
        <div className="lg:pt-1">
          <ProductTabs activeId={activeId} onChange={handleProductChange} copy={copy} products={products} />
        </div>
        <div ref={productLensRef} className="scroll-mt-24">
          <ProductLens product={product} copy={copy} />
        </div>
      </div>

      <div className="mt-5">
        <ComparisonMatrix
          product={product}
          copy={copy}
          selectedPlanId={selectedPlanId}
          onPlanChange={handlePlanChange}
        />
      </div>
      <PlanSelection product={product} copy={copy} selectedPlanId={selectedPlanId} onChange={handlePlanChange} />
      <PricingDetails product={product} selectedPlanId={selectedPlanId || undefined} />
    </section>
  );
}
