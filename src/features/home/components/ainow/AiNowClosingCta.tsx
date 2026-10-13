"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { AnimatedCheckIcon } from "./AiNowAnimatedIcons";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { AiNowThreeStripes } from "@/components/common/AiNowLogo";
import { PulsatingBorder } from "@/components/ui/PulsatingBorder";
import { AiNowClosingCtaForm } from "./AiNowClosingCtaForm";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";

export function AiNowClosingCta() {
  const previewDisabled = isLandingCloneClientPreview();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);

  return (
    <AiNowSectionFrame
      id="cta"
      className="ainow-blueprint-bg"
      laserDelay={1}
      laserSpeed={9}
      showTicks={true}
      containerClassName="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="relative w-full">
        <PulsatingBorder
          className="mx-auto max-w-4xl"
          colors={["#ec4899", "#2563eb", "#10b981"]}
          cornerRadiusPx={16}
          thickness={5}
          spread={32}
          softness={75}
          bloom={55}
          intensity={32}
          spotSize={60}
          speed={0.9}
        >
          <div className="relative overflow-hidden rounded-2xl dodo-glass-card p-8 text-center shadow-2xl sm:p-14">
            <div className="group relative z-10 mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl dodo-glass-box shadow-xl">
              <AiNowThreeStripes className="size-10 transition-transform duration-200 group-hover:scale-110" />
            </div>

            <h2 className="relative z-10 text-3xl font-semibold tracking-tight text-slate-900 text-balance dark:text-white sm:text-5xl">
              {copy.closingCta.title}
            </h2>

            <p className="relative z-10 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 text-balance dark:text-slate-300 sm:text-base">
              {copy.closingCta.description}
            </p>

            {successMessage ? (
              <div role="status" aria-live="polite" className="relative z-10 mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-300">
                <AnimatedCheckIcon size={16} className="size-4 text-emerald-600 dark:text-emerald-400" />
                <span>{copy.closingCta.successPrefix} {successMessage}</span>
              </div>
            ) : previewDisabled ? (
              <>
                <p role="status" data-preview-disabled="true" className="relative z-10 mt-6 text-sm text-slate-500 dark:text-slate-400">
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
                  <AiNowClosingCtaForm onSubmitted={setSuccessMessage} />
                </fieldset>
              </>
            ) : (
              <AiNowClosingCtaForm onSubmitted={setSuccessMessage} />
            )}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              {copy.closingCta.checks.map((check) => (
                <span key={check} className="flex items-center gap-1">
                  <AnimatedCheckIcon size={12} className="size-3 text-emerald-600 dark:text-emerald-400" /> {check}
                </span>
              ))}
            </div>
          </div>
        </PulsatingBorder>
      </div>
    </AiNowSectionFrame>
  );
}
