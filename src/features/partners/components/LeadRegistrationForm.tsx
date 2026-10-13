"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { trackLead } from "@/lib/facebook-pixel";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  partnerLeadSchema,
  type PartnerLeadData,
} from "../schemas/lead.schema";
import { AnimatedMagnetIcon } from "@/features/home/components/ainow/AiNowAnimatedIcons";

const PARTNER_TYPES = ["referral", "setter", "sales", "not_sure"] as const;

const labelClass =
  "eyebrow mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300";
const inputClass =
  "dodo-glass-inset h-12 w-full px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 aria-invalid:border-rose-500 dark:text-slate-100 dark:placeholder:text-slate-500";
const textareaClass =
  "dodo-glass-inset w-full resize-y px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 aria-invalid:border-rose-500 dark:text-slate-100 dark:placeholder:text-slate-500";
const triggerClass =
  "dodo-glass-inset h-12 w-full px-4 text-sm text-slate-900 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20 dark:text-slate-100";
const errClass = "mt-1.5 text-xs text-rose-600 dark:text-rose-300";

export const LeadRegistrationForm = () => {
  const t = useTranslations("partnersKit");
  const previewDisabled = isLandingCloneClientPreview();
  const ownerReferenceOnly = true;
  const submissionDisabled = previewDisabled || ownerReferenceOnly;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PartnerLeadData>({
    resolver: zodResolver(partnerLeadSchema),
    defaultValues: { partnerType: "not_sure", partnerConsent: false },
  });

  const onSubmit = async (data: PartnerLeadData) => {
    if (submissionDisabled) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/partners/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.duplicate) {
        toast(t("leadForm.duplicateTitle"), {
          description: t("leadForm.duplicateMessage"),
        });
      } else if (res.ok) {
        trackLead({ content_name: "partner-lead" });
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
          event: "partner_lead",
        });
        setIsSubmitted(true);
        toast.success(t("leadForm.successTitle"), {
          description: t("leadForm.successMessage"),
        });
      } else {
        toast.error(t("leadForm.errorMessage"));
      }
    } catch {
      toast.error(t("leadForm.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const textField = (
    name: keyof PartnerLeadData,
    type: string,
    required: boolean,
  ) => {
    const err = errors[name];
    return (
      <div>
        <label htmlFor={name} className={labelClass}>
          {t(`leadForm.${name}`)} {required ? "*" : ""}
        </label>
        <input
          id={name}
          type={type}
          placeholder={t(`leadForm.${name}Placeholder`)}
          {...register(name)}
          aria-invalid={!!err}
          className={inputClass}
        />
        {err && <p className={errClass}>{err.message}</p>}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <div className="dodo-glass-card p-10 text-center md:p-14">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300">
          <AnimatedMagnetIcon size={32} className="size-8 text-white" isHovered={true} />
        </div>
        <h3 className="font-headline text-2xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">
          {t("leadForm.successTitle")}
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-600 dark:text-slate-300">
          {t("leadForm.successMessage")}
        </p>
      </div>
    );
  }

  return (
    <div className="dodo-glass-card p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {textField("clientBusiness", "text", true)}
        <div className="grid gap-4 sm:grid-cols-2">
          {textField("clientName", "text", false)}
          {textField("clientPhone", "tel", true)}
        </div>
        {textField("clientContact", "text", false)}
        <div>
          <label htmlFor="need" className={labelClass}>
            {t("leadForm.need")} *
          </label>
          <textarea
            id="need"
            rows={3}
            placeholder={t("leadForm.needPlaceholder")}
            {...register("need")}
            aria-invalid={!!errors.need}
            className={textareaClass}
          />
          {errors.need && <p className={errClass}>{errors.need.message}</p>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {textField("partnerName", "text", true)}
          {textField("partnerEmail", "email", true)}
        </div>
        <div>
          <label htmlFor="partnerType" className={labelClass}>
            {t("leadForm.partnerType")} *
          </label>
          <Controller
            name="partnerType"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="partnerType" className={triggerClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PARTNER_TYPES.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {t(`leadForm.partnerTypeOptions.${opt}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="dodo-glass-inset p-3.5">
          <div className="flex items-start gap-2.5">
            <input
              id="partnerConsent"
              type="checkbox"
              {...register("partnerConsent")}
              aria-invalid={!!errors.partnerConsent}
              className="mt-0.5 h-4 w-4 accent-blue-600"
            />
            <label
              htmlFor="partnerConsent"
              className="cursor-pointer text-xs leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {t("leadForm.consent")}{" "}
              <a href="#partner-privacy" className="underline hover:text-blue-600 dark:hover:text-blue-300">
                {t("leadForm.consentLink")}
              </a>
            </label>
          </div>
          {errors.partnerConsent && (
              <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-300">
              {errors.partnerConsent.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={submissionDisabled || isSubmitting}
          data-mcp-toolname="partner-lead-submit"
          data-mcp-tooldescription="Register a client lead for the aiNOW partner program"
          className="ainow-btn-primary h-12 w-full text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? t("leadForm.submitting") : t("leadForm.submit")}
        </button>
        {submissionDisabled && (
          <p
            role="status"
            data-owner-reference="true"
            className="text-center text-xs text-slate-500 dark:text-slate-400"
          >
            Owner-reference only — lead registration is disabled; no data will be sent.
          </p>
        )}
      </form>
    </div>
  );
};
