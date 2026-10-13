"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/common/FadeIn";
import { Ico } from "@/components/common/Ico";

const TRUST_KEYS = ["nda", "law", "response", "free"] as const;

export const LandingTrust = () => {
  const t = useTranslations("landing.trust");

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {TRUST_KEYS.map((key) => (
              <div
                key={key}
                className="flex items-start gap-2.5 rounded-xl border border-border/30 bg-card/30 p-4"
              >
                <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Ico name="solar:check-circle-bold-duotone" className="size-3" />
                </div>
                <p className="text-sm leading-snug text-foreground/80">
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
