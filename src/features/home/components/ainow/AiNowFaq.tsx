"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import {
  AnimatedArrowRightIcon,
  AnimatedChevronRightIcon,
} from "./AiNowAnimatedIcons";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

interface FaqDefinition {
  id: string;
  num: string;
  category: "all" | "pricing" | "tech" | "safety";
}

interface FaqItem extends FaqDefinition {
  question: string;
  answer: string;
}

const FAQ_DEFINITIONS: FaqDefinition[] = Array.from({ length: 15 }, (_, index) => {
  const num = index + 1;
  const category = num <= 3 ? "pricing" : num <= 5 || num >= 13 ? "tech" : "safety";
  return { id: `q${num}`, num: String(num).padStart(2, "0"), category };
});

export function AiNowFaq() {
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const copy = getAiNowHomeCopy(locale);
  const faqItems: FaqItem[] = FAQ_DEFINITIONS.map((definition) => ({
    ...definition,
    ...copy.faq.items[definition.id],
  }));
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    q1: true,
    q3: true,
    q5: true,
  });
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredItems = faqItems.filter((item) => {
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AiNowSectionFrame
      id="faq"
      className="ainow-blueprint-bg"
      laserDelay={3.5}
      laserSpeed={14}
      showTicks={true}
      containerClassName="px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="relative w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-black/[0.08] dark:border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>{copy.faq.eyebrow}</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {copy.faq.title}
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            {copy.faq.description}
          </p>
        </div>

        {/* Filter Controls: Category Tabs + Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setCategoryFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer ${
                categoryFilter === "all"
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {copy.faq.filters.all}
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter("pricing")}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer ${
                categoryFilter === "pricing"
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {copy.faq.filters.pricing}
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter("tech")}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer ${
                categoryFilter === "tech"
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {copy.faq.filters.tech}
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter("safety")}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer ${
                categoryFilter === "safety"
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {copy.faq.filters.safety}
            </button>
          </div>

          <div className="w-full sm:w-64">
            <Input
              type="text"
              aria-label={copy.faq.searchLabel}
              placeholder={copy.faq.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-lg border-black/[0.08] bg-white px-3.5 text-xs text-slate-900 shadow-2xs placeholder:text-slate-400 dark:border-white/10 dark:bg-[#111318] dark:text-white"
            />
          </div>
        </div>

        {/* Accordion Stream */}
        <div className="space-y-3 mb-10">
          {filteredItems.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? "border-slate-300 dark:border-white/20 bg-white dark:bg-[#111318] shadow-sm"
                    : "border-black/[0.08] dark:border-white/10 bg-white/60 dark:bg-[#111318]/60 hover:border-black/20 dark:hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  id={`faq-question-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-4 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
                      {copy.faq.questionPrefix} {item.num}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <span
                    className={`size-6 rounded-md flex items-center justify-center shrink-0 border border-black/[0.08] dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "rotate-90 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white border-slate-300 dark:border-white/30"
                        : "group-hover:bg-slate-100 dark:group-hover:bg-slate-700/60"
                    }`}
                  >
                    <AnimatedChevronRightIcon size={12} className="size-3" isHovered={isOpen} />
                  </span>
                </button>

                    <motion.div
                      key={`faq-content-${item.id}`}
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.id}`}
                      aria-hidden={!isOpen}
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                        transition: {
                          height: { duration: reduceMotion ? 0 : isOpen ? 0.32 : 0.24, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: reduceMotion ? 0 : isOpen ? 0.22 : 0.14, delay: reduceMotion || !isOpen ? 0 : 0.05 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 sm:px-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-black/[0.04] dark:border-white/5 pt-3">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
              </div>
            );
          })}
        </div>

        {/* Still have questions? Callout footer banner */}
        <div className="relative p-6 rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white/80 dark:bg-[#111318]/80 overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Top 3-stripe aiNOW brand hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ec4899] via-[#2563eb] to-[#10b981] opacity-75" />

          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              {copy.faq.calloutTitle}
            </span>
          </div>
          <Link
            href="#cta"
            className="ainow-btn-primary h-10 px-5 text-xs flex items-center gap-2 group shrink-0"
          >
            <span>{copy.faq.calloutAction}</span>
            <AnimatedArrowRightIcon size={14} className="size-3.5" />
          </Link>
        </div>
      </div>
    </AiNowSectionFrame>
  );
}
