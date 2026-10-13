"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { AnimatedArrowRightIcon } from "./AiNowAnimatedIcons";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

interface BannerProduct {
  id: string;
  name: Record<"ka" | "en" | "ru", string>;
  taglineKey: string;
  href: string;
  accentColor: string;
}

const BANNER_PRODUCTS: BannerProduct[] = [
  {
    id: "public",
    name: { ka: "საჯარო სკანი", en: "PUBLIC SCAN", ru: "ПУБЛИЧНЫЙ СКАН" },
    taglineKey: "publicSurface",
    href: "#model-architecture",
    accentColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "access",
    name: { ka: "წვდომა", en: "ACCESS", ru: "ДОСТУП" },
    taglineKey: "accessBoundary",
    href: "#architecture",
    accentColor: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "evidence",
    name: { ka: "მტკიცებულება", en: "EVIDENCE", ru: "СВИДЕТЕЛЬСТВА" },
    taglineKey: "evidence",
    href: "#comparison",
    accentColor: "text-pink-600 dark:text-pink-400",
  },
  {
    id: "triage",
    name: { ka: "ტრიაჟი", en: "TRIAGE", ru: "ТРИАЖ" },
    taglineKey: "triage",
    href: "#categories",
    accentColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "repair",
    name: { ka: "აღდგენა", en: "REPAIR", ru: "ИСПРАВЛЕНИЕ" },
    taglineKey: "repair",
    href: "#how-we-work",
    accentColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "rescan",
    name: { ka: "ხელახალი სკანი", en: "RESCAN", ru: "ПЕРЕСКАН" },
    taglineKey: "rescan",
    href: "#how-we-work",
    accentColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "release",
    name: { ka: "გამოშვება", en: "RELEASE", ru: "РЕЛИЗ" },
    taglineKey: "release",
    href: "#fit",
    accentColor: "text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "handover",
    name: { ka: "გადაცემა", en: "HANDOVER", ru: "ПЕРЕДАЧА" },
    taglineKey: "handover",
    href: "#cta",
    accentColor: "text-blue-600 dark:text-blue-400",
  },
];

export function AiNowTopBanner() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const copyLocale = locale === "ka" || locale === "ru" ? locale : "en";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNER_PRODUCTS.length);
    }, 3400);
    return () => clearInterval(interval);
  }, [isPaused]);

  const product = BANNER_PRODUCTS[currentIndex];

  return (
    <>
      <AiNowSectionFrame
        id="announcement-banner"
        className="relative flex min-w-0 bg-[#fcfcfb] dark:bg-[#0a0b0e] transition-colors duration-200"
        hasLaser={false}
        showTicks={false}
        showTopDiamonds={false}
        showBottomDiamonds={true}
        containerClassName="px-0 py-0"
      >
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative isolate overflow-hidden size-full py-2.5 px-4 text-center bg-gradient-to-r from-transparent via-[#ec4899]/[0.03] via-[#2563eb]/[0.05] via-[#10b981]/[0.03] to-transparent hover:via-[#2563eb]/[0.08] transition-all"
        >
          <div className="relative h-6 flex items-center justify-center overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -7 }}
                transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
                className="flex items-center justify-center w-full px-1"
              >
                <Link
                  href={product.href}
                  target={product.href.startsWith("http") ? "_blank" : undefined}
                  rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors max-w-full"
                >
                  <span className={`font-semibold shrink-0 ${product.accentColor} tracking-wide`}>
                    {product.name[copyLocale]}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 select-none text-xs shrink-0">
                    —
                  </span>
                  <span className="font-medium tracking-tight text-slate-800 dark:text-slate-200 truncate">
                    {copy.banner[product.taglineKey]}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 transition-transform group-hover:translate-x-0.5 shrink-0 flex items-center">
                    <AnimatedArrowRightIcon size={12} className="size-3" />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AiNowSectionFrame>
      {/* Full-width hairline divider underneath banner */}
      <div className="relative w-full ainow-divider-hairline" />
    </>
  );
}
