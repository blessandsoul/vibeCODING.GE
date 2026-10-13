"use client";

import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { AiNowIconTile } from "@/components/common/AiNowIconTile";
import {
  AnimatedArrowRightIcon,
} from "./AiNowAnimatedIcons";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";
import { AiNowImage } from "./AiNowImage";
import { getOwnCategoryFeatures } from "./own-category-features";

interface ProductItem {
  id: string;
  iconId?: string;
  name: Record<"ka" | "en" | "ru", string>;
  gradient: string;
  shadow: string;
  href: string;
}

interface CategoryCard {
  id: string;
  sceneImage: string;
  products: ProductItem[];
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "communication",
    sceneImage: "/graphics-3d/products/vibecoding-hero-scan-v1.png",
    products: [
      {
        id: "scan",
        iconId: "vibecoding",
        name: { ka: "საჯარო სკანი", en: "Public scan", ru: "Публичное сканирование" },
        gradient: "from-blue-600 to-blue-700",
        shadow: "rgba(37, 99, 235, 0.35)",
        href: "#model-architecture",
      },
      {
        id: "surface",
        iconId: "vibecoding",
        name: { ka: "წვდომის ზედაპირი", en: "Access surface", ru: "Поверхность доступа" },
        gradient: "from-orange-500 to-amber-600",
        shadow: "rgba(234, 88, 12, 0.35)",
        href: "#architecture",
      },
    ],
  },
  {
    id: "marketing",
    sceneImage: "/graphics-3d/products/vibecoding-surface-audit-v1.png",
    products: [
      {
        id: "triage",
        iconId: "vibecoding",
        name: { ka: "მიგნებების ტრიაჟი", en: "Finding triage", ru: "Приоритизация находок" },
        gradient: "from-pink-500 to-rose-600",
        shadow: "rgba(219, 39, 119, 0.35)",
        href: "#comparison",
      },
      {
        id: "findings",
        iconId: "vibecoding",
        name: { ka: "მიგნებები", en: "Findings", ru: "Находки" },
        gradient: "from-emerald-500 to-teal-600",
        shadow: "rgba(16, 185, 129, 0.35)",
        href: "#faq",
      },
      {
        id: "severity",
        iconId: "vibecoding",
        name: { ka: "კრიტიკულობის დონე", en: "Severity", ru: "Критичность" },
        gradient: "from-rose-500 to-red-600",
        shadow: "rgba(244, 63, 94, 0.35)",
        href: "#fit",
      },
    ],
  },
  {
    id: "internal",
    sceneImage: "/graphics-3d/products/vibecoding-severity-triage-v1.png",
    products: [
      {
        id: "repair",
        iconId: "vibecoding",
        name: { ka: "აღდგენა", en: "Repair", ru: "Исправление" },
        gradient: "from-indigo-600 to-violet-700",
        shadow: "rgba(79, 70, 229, 0.35)",
        href: "#how-we-work",
      },
      {
        id: "handover",
        iconId: "vibecoding",
        name: { ka: "გადაცემა", en: "Handover", ru: "Передача" },
        gradient: "from-indigo-600 to-violet-700",
        shadow: "rgba(79, 70, 229, 0.35)",
        href: "#cta",
      },
      {
        id: "scope",
        iconId: "vibecoding",
        name: { ka: "შემოწმების ფარგლები", en: "Review scope", ru: "Границы проверки" },
        gradient: "from-emerald-600 to-green-700",
        shadow: "rgba(5, 150, 105, 0.35)",
        href: "#architecture",
      },
      {
        id: "rescan",
        iconId: "vibecoding",
        name: { ka: "ხელახალი სკანი", en: "Rescan", ru: "Повторная проверка" },
        gradient: "from-blue-600 to-cyan-600",
        shadow: "rgba(37, 99, 235, 0.35)",
        href: "#how-we-work",
      },
    ],
  },
  {
    id: "products",
    sceneImage: "/graphics-3d/products/vibecoding-handover-v1.png",
    products: [
      {
        id: "public",
        iconId: "vibecoding",
        name: { ka: "საჯარო ნაწილი", en: "Public surface", ru: "Публичная часть" },
        gradient: "from-sky-500 to-blue-600",
        shadow: "rgba(14, 165, 233, 0.35)",
        href: "#model-architecture",
      },
      {
        id: "private",
        iconId: "vibecoding",
        name: { ka: "პირადი ნაწილი", en: "Private surface", ru: "Приватная часть" },
        gradient: "from-purple-600 to-indigo-700",
        shadow: "rgba(147, 51, 234, 0.35)",
        href: "#architecture",
      },
      {
        id: "release",
        iconId: "vibecoding",
        name: { ka: "გამოშვების გადაწყვეტილება", en: "Release decision", ru: "Решение о релизе" },
        gradient: "from-rose-500 to-pink-600",
        shadow: "rgba(244, 63, 94, 0.35)",
        href: "#cta",
      },
    ],
  },
];

export function AiNowCategoryMatrix({ conversationHref = "#cta" }: { conversationHref?: string } = {}) {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const ownFeatures = getOwnCategoryFeatures(locale);
  const copyLocale = locale === "ka" || locale === "ru" ? locale : "en";
  const categories = CATEGORIES.map((category) => {
    const localized = copy.categories.items[category.id as keyof typeof copy.categories.items];
    return {
      ...category,
      title: localized.title,
      subtitle: localized.subtitle,
      products: category.products.map((product) => ({
        ...product,
        name: ownFeatures[product.id]?.name ?? product.name[copyLocale],
        href: conversationHref,
        desc: ownFeatures[product.id]?.description ?? localized.products[product.id] ?? localized.subtitle,
      })),
    };
  });

  return (
    <AiNowSectionFrame
      id="categories"
      className="ainow-blueprint-bg"
      laserDelay={1}
      laserSpeed={10}
      showTicks={true}
      containerClassName="px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="relative w-full">
        {/* Section Header: Left Title + Right Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-black/[0.08] dark:border-white/10 gap-4">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {copy.categories.title}
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            {copy.categories.description}
          </p>
        </div>

        {/* 2x2 Bento Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((cat) => {
            const catStyles: Record<string, { borderHover: string; textHover: string }> = {
              communication: {
                borderHover: "hover:border-blue-500/40",
                textHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
              },
              marketing: {
                borderHover: "hover:border-pink-500/40",
                textHover: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
              },
              internal: {
                borderHover: "hover:border-purple-500/40",
                textHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
              },
              products: {
                borderHover: "hover:border-emerald-500/40",
                textHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
              },
            };
            const style = catStyles[cat.id] || catStyles.communication;

            return (
              <div
                key={cat.id}
                className={`group relative flex flex-col justify-between rounded-2xl dodo-glass-card p-6 sm:p-7 shadow-lg hover:shadow-2xl ${style.borderHover} transition-all duration-300 overflow-hidden`}
              >
                {/* Category Header: Left Text + Right 3D Graphic (no icon box, only picture) */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-headline font-semibold text-lg sm:text-xl text-slate-900 dark:text-white ${style.textHover} transition-colors`}>
                        {cat.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                        {cat.subtitle}
                      </p>
                    </div>

                    {/* Bespoke 3D Foreground Scene (only picture, no square icon) */}
                    <div className="relative shrink-0 size-16 sm:size-20 pointer-events-none -mr-1 -mt-1">
                      <AiNowImage
                        fill
                        src={cat.sceneImage}
                        alt={cat.title}
                        sizes="(min-width: 640px) 80px, 64px"
                        frameClassName="absolute inset-0"
                        className="size-full object-contain filter drop-shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Product Rows with Authentic Glossy SVG Icon Tiles */}
                  <div className="mt-6 divide-y divide-black/[0.05] dark:divide-white/5 border-t border-black/[0.06] dark:border-white/10">
                    {cat.products.map((prod) => (
                      <Link
                        key={prod.id}
                        href={prod.href}
                        className="flex items-center justify-between py-3 px-2.5 -mx-2.5 rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-all group/item"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          {/* Official Glossy 3D SVG Icon Tile */}
                          <AiNowIconTile
                            iconId={prod.iconId ?? prod.id}
                            size="sm"
                            bgGradient={prod.gradient}
                            shadowColor={prod.shadow}
                            alt={prod.name}
                            className="group-hover/item:scale-105 transition-transform"
                          />

                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2.5 min-w-0">
                            <span className="font-mono font-bold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors shrink-0">
                              {prod.name}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-normal truncate">
                              {prod.desc}
                            </span>
                          </div>
                        </div>

                        <AnimatedArrowRightIcon size={16} className="size-4 text-slate-400 dark:text-slate-500 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {false && (
          <>
        {/* Meta Verified Tech Provider & 1-Click Integration Trust Showcase */}
        <div className="mt-8 rounded-2xl border border-black/[0.06] dark:border-white/10 bg-slate-50/60 dark:bg-[#111318]/60 p-6 sm:p-8 shadow-xs overflow-hidden relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/[0.06] dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-gradient-to-tr from-[#0064e0] to-[#0081fb] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25 text-white font-black text-2xl select-none">
                ∞
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-1.5">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Meta Tech Provider
                </div>
                <h3 className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Meta-ს ოფიციალური ტექნოლოგიური პროვაიდერი
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  aiNOW Meta-ს ოფიციალურად ვერიფიცირებული ტექნოლოგიური პროვაიდერია (Verified Tech Provider &amp; App Review Approved).
                  ინტეგრაცია თქვენს WhatsApp Cloud API-სთან, Instagram Direct-თან და Facebook Messenger-თან <strong className="font-semibold text-blue-600 dark:text-blue-400">ერთი კლიკით</strong> სრულდება — პაროლების გაზიარება საჭირო არ არის და ავტორიზაცია Meta-ს ოფიციალური, უსაფრთხო OAuth-ით ხდება.
                </p>
              </div>
            </div>

            {/* Quick 1-click CTA badge */}
            <div className="flex items-center gap-3 shrink-0 self-start lg:self-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-xs">
                <span className="font-mono font-bold text-sm">1-CLICK</span>
                <span>სწრაფი ჩართვა</span>
              </div>
            </div>
          </div>

          {/* 3 Visual Meta Proof Cards with Editorial Left-Side Overlay */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Verified Tech Provider */}
            <div className="group relative rounded-2xl overflow-hidden dodo-glass-box hover:border-blue-500/40 transition-all duration-300">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                {/* Visual Artwork on the Right */}
                <AiNowImage
                  fill
                  src="/images/meta-trust/meta-tech-provider-light-v3.png"
                  alt="Verified Meta Tech Provider"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  frameClassName="absolute inset-0"
                  className="absolute inset-0 size-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Left Smooth Fade Scrim for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-50% to-transparent/10 dark:from-[#0d0f17]/95 dark:via-[#0d0f17]/85 dark:via-50% dark:to-transparent/10 pointer-events-none" />

                {/* Overlaid Content Docked on the Left */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10 max-w-[70%] sm:max-w-[65%]">
                  {/* Top Status Badge */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-500/10 dark:bg-blue-400/15 text-blue-700 dark:text-blue-300 shadow-2xs backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>VERIFIED TECH PROVIDER</span>
                    </div>
                  </div>

                  {/* Bottom Title & Subtitle */}
                  <div>
                    <h4 className="font-headline font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">
                      ოფიციალური სტატუსი
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-snug">
                      Meta-ს ინფრასტრუქტურასთან პირდაპირი წვდომა შუამავლების გარეშე.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: App Review Approved */}
            <div className="group relative rounded-2xl overflow-hidden dodo-glass-box hover:border-emerald-500/40 transition-all duration-300">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                {/* Visual Artwork on the Right */}
                <AiNowImage
                  fill
                  src="/images/meta-trust/meta-app-review-light-v3.png"
                  alt="Meta App Review Approved"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  frameClassName="absolute inset-0"
                  className="absolute inset-0 size-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Left Smooth Fade Scrim for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-50% to-transparent/10 dark:from-[#0d0f17]/95 dark:via-[#0d0f17]/85 dark:via-50% dark:to-transparent/10 pointer-events-none" />

                {/* Overlaid Content Docked on the Left */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10 max-w-[70%] sm:max-w-[65%]">
                  {/* Top Status Badge */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-300 shadow-2xs backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>APP REVIEW APPROVED</span>
                    </div>
                  </div>

                  {/* Bottom Title & Subtitle */}
                  <div>
                    <h4 className="font-headline font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">
                      დამტკიცებულია Meta-ს მიერ
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-snug">
                      Meta App Review-ის ფარგლებში დამტკიცებული აპლიკაცია.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Connect in One Click */}
            <div className="group relative rounded-2xl overflow-hidden dodo-glass-box hover:border-indigo-500/40 transition-all duration-300">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                {/* Visual Artwork on the Right */}
                <AiNowImage
                  fill
                  src="/images/meta-trust/meta-one-click-light-v3.png"
                  alt="Connect In 1 Click"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  frameClassName="absolute inset-0"
                  className="absolute inset-0 size-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Left Smooth Fade Scrim for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-50% to-transparent/10 dark:from-[#0d0f17]/95 dark:via-[#0d0f17]/85 dark:via-50% dark:to-transparent/10 pointer-events-none" />

                {/* Overlaid Content Docked on the Left */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10 max-w-[70%] sm:max-w-[65%]">
                  {/* Top Status Badge */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-indigo-500/10 dark:bg-indigo-400/15 text-indigo-700 dark:text-indigo-300 shadow-2xs backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>CONNECT IN ONE CLICK</span>
                    </div>
                  </div>

                  {/* Bottom Title & Subtitle */}
                  <div>
                    <h4 className="font-headline font-bold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight">
                      ინტეგრაცია ერთი კლიკით
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-snug">
                      წვდომას თავად Meta-ში ადასტურებთ — პაროლების გაზიარება საჭირო არ არის.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
        )}

      </div>
    </AiNowSectionFrame>
  );
}
