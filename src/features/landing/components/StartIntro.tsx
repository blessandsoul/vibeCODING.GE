"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowDown, ArrowUpRight, Globe, MessageCircle, Phone, Play, Users, Workflow } from "lucide-react";
import { AGENT_PRODUCTS } from "@/lib/public-facts";

const icons = [MessageCircle, Phone, Play, Globe, Users, Workflow];
const descriptions = {
  en: ["AI chat that answers recurring customer questions and collects requests.", "Voice AI for incoming calls and agreed outbound calling workflows.", "AI-generated advertising and social videos for products and services.", "Business websites and web applications with a clear next step for visitors.", "Internal AI assistants for team knowledge and recurring work.", "Connects aiNOW products when a task needs more than one tool."],
  ru: ["AI-чат отвечает на частые вопросы клиентов и собирает заявки.", "Голосовой AI принимает звонки и сам звонит клиентам по согласованному сценарию.", "Рекламные видео и контент для соцсетей, созданные с AI.", "Сайты и веб-приложения для бизнеса с понятным действием для посетителя.", "Внутренние AI-ассистенты для знаний команды и повторяющихся задач.", "Объединяет продукты aiNOW, когда для задачи нужно несколько инструментов."],
};

export function StartIntro() {
  const t = useTranslations("landing.hero");
  const locale = useLocale();
  return (
    <section className="container mx-auto grid gap-8 px-4 py-10 md:px-6 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className="min-w-0">
        <span className="dodo-glass-inset dodo-glass-pill inline-flex px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-300">aiNOW</span>
        <h1 className="mt-5 text-3xl font-bold leading-snug tracking-tight sm:text-4xl lg:text-5xl">{t("title")} <span className="text-blue-600 dark:text-blue-400">{t("titleAccent")}</span></h1>
        <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">{t("subtitle")}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{t("subtitleExtra")}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#lead-form" className="dodo-glass-box dodo-glass-pill inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold">{t("cta")}<ArrowDown className="size-4" aria-hidden="true" /></a>
          <Link href="/projects" className="inline-flex min-h-12 items-center gap-2 px-3 text-sm font-semibold text-blue-600 dark:text-blue-300">{t("ctaSecondary")}<ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </div>
        <a href="tel:+995599701552" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm"><Phone className="size-4" aria-hidden="true" />599 70 15 52</a>
      </div>
      <div className="grid min-w-0 gap-3 sm:grid-cols-2">
        {AGENT_PRODUCTS.map((product, index) => {
          const Icon = icons[index];
          return <a key={product.id} href={product.url} className="dodo-glass-card flex min-w-0 flex-col gap-3 p-5">
            <span className="flex items-center justify-between gap-3"><Icon className="size-6 text-blue-600 dark:text-blue-400" aria-hidden="true" /><ArrowUpRight className="size-4 text-slate-500" aria-hidden="true" /></span>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{locale === "ka" ? product.summary : (locale === "ru" ? descriptions.ru : descriptions.en)[index]}</p>
          </a>;
        })}
      </div>
    </section>
  );
}
