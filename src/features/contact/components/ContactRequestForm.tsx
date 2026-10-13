"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import {
  AiNowClosingCtaForm,
  type LeadAttribution,
} from "@/features/home/components/ainow/AiNowClosingCtaForm";
import { CLOSING_LEAD_PRODUCT } from "@/features/home/lib/closing-lead-message";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";

interface ContactRequestFormProps {
  source?: string;
  attribution?: LeadAttribution;
}

export function ContactRequestForm({ source, attribution: suppliedAttribution }: ContactRequestFormProps = {}) {
  const previewDisabled = isLandingCloneClientPreview();
  const searchParams = useSearchParams();
  const t = useTranslations("contact");
  const brief = searchParams.get("brief")?.slice(0, 5000) ?? "";
  const attribution: LeadAttribution = {
    source: suppliedAttribution?.source ?? source ?? `${CLOSING_LEAD_PRODUCT}-contact`,
    sourcePath: suppliedAttribution?.sourcePath ?? "/contact",
    utmSource: (suppliedAttribution?.utmSource ?? searchParams.get("utm_source")) || undefined,
    utmMedium: (suppliedAttribution?.utmMedium ?? searchParams.get("utm_medium")) || undefined,
    utmCampaign: (suppliedAttribution?.utmCampaign ?? searchParams.get("utm_campaign")) || undefined,
    utmContent: (suppliedAttribution?.utmContent ?? searchParams.get("utm_content")) || undefined,
    utmTerm: (suppliedAttribution?.utmTerm ?? searchParams.get("utm_term")) || undefined,
  };

  const handleSubmitted = (message: string) => {
    toast.success(t("successTitle"), { description: message || t("successMessage") });
  };

  const form = <AiNowClosingCtaForm onSubmitted={handleSubmitted} initialMessage={brief} attribution={attribution} />;

  return (
    <>
      {previewDisabled ? <p role="status" data-preview-disabled="true" className="mb-6 text-sm text-slate-500 dark:text-slate-400">Preview only — contact submission is disabled; no data will be sent.</p> : null}
      {previewDisabled ? (
        <fieldset disabled={previewDisabled} onSubmitCapture={(event) => { event.preventDefault(); event.stopPropagation(); }} className="contents">
          {form}
        </fieldset>
      ) : form}
    </>
  );
}

export type { ContactRequestFormProps };

