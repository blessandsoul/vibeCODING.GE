"use client";

import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getAiNowHomeCopy } from "@/features/home/components/ainow/AiNowHomeCopy";
import { toast } from "sonner";
import { FadeIn } from "@/components/common/FadeIn";
import { Ico } from "@/components/common/Ico";
import {
  AiNowClosingCtaForm,
  type LeadAttribution,
} from "@/features/home/components/ainow/AiNowClosingCtaForm";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";

export const LandingForm = () => {
  const t = useTranslations("landing.form");
  const formCopy = getAiNowHomeCopy(useLocale()).closingCta;
  const previewDisabled = isLandingCloneClientPreview();
  const searchParams = useSearchParams();
  const brief = searchParams.get("brief")?.slice(0, 5000) ?? "";
  const attribution: LeadAttribution = {
    source: "landing",
    sourcePath: "/start",
    utmSource: searchParams.get("utm_source") || undefined,
    utmMedium: searchParams.get("utm_medium") || undefined,
    utmCampaign: searchParams.get("utm_campaign") || undefined,
    utmContent: searchParams.get("utm_content") || undefined,
    utmTerm: searchParams.get("utm_term") || undefined,
  };

  const handleSubmitted = (successMessage: string) => {
    toast.success(t("successTitle"), {
      description: successMessage || t("successMessage"),
    });
  };

  return (
    <section id="lead-form" className="scroll-mt-20 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <div className="dodo-glass-card p-5 sm:p-8 md:p-10">
              <div className="relative z-10">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Ico name="solar:phone-bold-duotone" className="h-6 w-6 text-primary" />
                </div>

                <h2 className="text-center text-xl font-bold tracking-tight md:text-2xl">
                  {formCopy.title}
                </h2>
                <p className="mt-1.5 text-center text-sm text-muted-foreground">
                  {formCopy.description}
                </p>

                {previewDisabled ? (
                  <>
                    <p role="status" data-preview-disabled="true" className="mt-8 text-center text-sm text-muted-foreground">
                      Preview only — lead submission is disabled; no data will be sent.
                    </p>
                    <fieldset
                      disabled={previewDisabled}
                      onSubmitCapture={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      className="contents"
                    >
                      <AiNowClosingCtaForm onSubmitted={handleSubmitted} initialMessage={brief} attribution={attribution} />
                    </fieldset>
                  </>
                ) : (
                  <AiNowClosingCtaForm onSubmitted={handleSubmitted} initialMessage={brief} attribution={attribution} />
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
