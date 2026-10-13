"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/common/FadeIn";
import { Ico } from "@/components/common/Ico";

const STATS = [
  { key: "response", icon: "solar:clock-circle-bold-duotone" },
  { key: "nda", icon: "solar:shield-bold-duotone" },
  { key: "price", icon: "solar:dollar-bold-duotone" },
  { key: "speed", icon: "solar:bolt-bold-duotone" },
] as const;

export const LandingSocialProof = () => {
  const t = useTranslations("landing.proof");

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-2xl border border-border/30 bg-card/30 px-4 py-5 backdrop-blur-sm md:px-8 md:py-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {STATS.map(({ key, icon }) => (
                <div key={key} className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Ico name={icon} className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tabular-nums">
                      {t(`${key}.value`)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t(`${key}.label`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
