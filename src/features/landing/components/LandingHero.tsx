"use client";

import { lazy, Suspense } from "react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/ui/button";
import { Ico } from "@/components/common/Ico";

const Hyperspeed = lazy(() =>
  import("@/features/home/components/Hyperspeed").then((m) => ({
    default: m.Hyperspeed,
  }))
);

export const LandingHero = () => {
  const t = useTranslations("landing.hero");

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-[70dvh] overflow-hidden">
      {/* Background, Hyperspeed 3D effect (same as home) */}
      <Suspense fallback={null}>
        <Hyperspeed />
      </Suspense>

      <div className="container relative z-10 mx-auto flex min-h-[70dvh] items-center px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              {t("eyebrow")}
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("title")}{" "}
              <span className="gradient-text">{t("titleAccent")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="gradient-bg min-w-56 px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition duration-200 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
              >
                {t("cta")}
                <Ico name="solar:arrow-down-bold-duotone" className="ml-2 size-4" />
              </Button>
              <p className="text-xs text-muted-foreground">{t("badge")}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
