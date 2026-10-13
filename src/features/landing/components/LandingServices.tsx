"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/common/FadeIn";
import { Ico } from "@/components/common/Ico";

const SERVICES = [
  { key: "ai", icon: "solar:cpu-bold-duotone" },
  { key: "automation", icon: "solar:settings-bold-duotone" },
  { key: "creative", icon: "solar:chart-bold-duotone" },
  { key: "website", icon: "solar:global-bold-duotone" },
] as const;

export const LandingServices = () => {
  const t = useTranslations("landing.services");

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {SERVICES.map(({ key, icon }) => (
              <div
                key={key}
                className="card-glow rounded-2xl border border-border/50 bg-card/50 p-5 text-center transition duration-300 hover:-translate-y-0.5 hover:shadow-md md:p-6"
              >
                <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary md:size-12">
                  <Ico name={icon} className="size-5 md:size-6" />
                </div>
                <h3 className="text-sm font-semibold md:text-base">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {t(`${key}.price`)}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
