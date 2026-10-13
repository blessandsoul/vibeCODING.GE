"use client";

import { Suspense } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AiNowHero } from "@/features/home/components/ainow/AiNowHero";
import { AiNowCategoryMatrix } from "@/features/home/components/ainow/AiNowCategoryMatrix";
import { AiNowProcessRoadmap } from "@/features/home/components/ainow/AiNowProcessRoadmap";
import { LandingForm } from "./LandingForm";

export const StartPageContent = () => {
  const locale = useLocale();
  const t = useTranslations("landing.hero");
  return (
    <>
      <AiNowHero conversationId="lead-form" catalogHref={locale === "ka" ? "/projects" : `/${locale}/projects`} catalogLabel={t("ctaSecondary")} hint={<a href="tel:+995599701552">599 70 15 52</a>} centerHref="#lead-form" />
      <AiNowCategoryMatrix conversationHref="#lead-form" />
      <div id="cta">
        <Suspense>
          <LandingForm />
        </Suspense>
      </div>
      <AiNowProcessRoadmap />
    </>
  );
};
