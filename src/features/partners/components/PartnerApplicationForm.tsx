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
  partnerApplicationSchema,
  type PartnerApplicationData,
} from "../schemas/partner.schema";
import { AnimatedHandshakeIcon } from "@/features/home/components/ainow/AiNowAnimatedIcons";

const PARTNER_TYPES = ["referral", "setter", "sales", "not_sure"] as const;
const EXPECTED_CLIENTS = ["1-2", "3-5", "6-10", "10_plus", "not_sure"] as const;

const labelClass =
  "eyebrow mb-2 block text-[10px] uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300";
const inputClass =
  "dodo-glass-inset h-12 w-full px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 aria-invalid:border-rose-500 dark:text-slate-100 dark:placeholder:text-slate-500";
const textareaClass =
  "dodo-glass-inset w-full resize-y px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 aria-invalid:border-rose-500 dark:text-slate-100 dark:placeholder:text-slate-500";
const triggerClass =
  "dodo-glass-inset h-12 w-full px-4 text-sm text-slate-900 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20 dark:text-slate-100";
const errClass = "mt-1.5 text-xs text-rose-600 dark:text-rose-300";

export const PartnerApplicationForm = () => {
  const t = useTranslations("partners");
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
  } = useForm<PartnerApplicationData>({
    resolver: zodResolver(partnerApplicationSchema),
    defaultValues: { partnerType: "not_sure", expectedClients: "not_sure" },
  });

  const onSubmit = async (data: PartnerApplicationData) => {
    if (submissionDisabled) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        trackLead({ content_name: "partner-application" });
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
          event: "partner_application",
        });
        setIsSubmitted(true);
        toast.success(t("form.successTitle"), {
          description: t("form.successMessage"),
        });
      } else {
        toast.error(t("form.errorMessage"));
      }
    } catch {
      toast.error(t("form.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const textField = (
    name: keyof PartnerApplicationData,
    type: string,
    required: boolean,
  ) => {
    const err = errors[name];
    return (
      <div>
        <label htmlFor={name} className={labelClass}>
          {t(`form.${name}`)} {required ? "*" : ""}
        </label>
        <input
          id={name}
          type={type}
          placeholder={t(`form.${name}Placeholder`)}
          {...register(name)}
          aria-invalid={!!err}
          className={inputClass}
        />
        {err && <p className={errClass}>{err.message}</p>}
      </div>
    );
  };

  const selectField = (
    name: "partnerType" | "expectedClients",
    opts: readonly string[],
    optKey: string,
  ) => (
    <div>
      <label htmlFor={name} className={labelClass}>
        {t(`form.${name}`)} *
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger id={name} className={triggerClass}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {opts.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {t(`form.${optKey}.${opt}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="dodo-glass-card mx-auto max-w-2xl p-10 text-center md:p-14">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300">
          <AnimatedHandshakeIcon size={32} className="size-8 text-white" isHovered={true} />
        </div>
        <h3 className="font-headline text-2xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">
          {t("form.successTitle")}
        </h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-600 dark:text-slate-300">
          {t("form.successMessage")}
        </p>
      </div>
    );
  }

  return (
    <div className="dodo-glass-card mx-auto max-w-2xl p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {textField("name", "text", true)}
          {textField("phone", "tel", true)}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {textField("email", "email", false)}
          {textField("city", "text", false)}
        </div>
        {textField("currentRole", "text", false)}
        <div className="grid gap-4 sm:grid-cols-2">
          {selectField("partnerType", PARTNER_TYPES, "partnerTypeOptions")}
          {selectField(
            "expectedClients",
            EXPECTED_CLIENTS,
            "expectedClientsOptions",
          )}
        </div>
        <div>
          <label htmlFor="audience" className={labelClass}>
            {t("form.audience")} *
          </label>
          <textarea
            id="audience"
            rows={3}
            placeholder={t("form.audiencePlaceholder")}
            {...register("audience")}
            aria-invalid={!!errors.audience}
            className={textareaClass}
          />
          {errors.audience && (
            <p className={errClass}>{errors.audience.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="channels" className={labelClass}>
            {t("form.channels")}
          </label>
          <textarea
            id="channels"
            rows={2}
            placeholder={t("form.channelsPlaceholder")}
            {...register("channels")}
            className={textareaClass}
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>
            {t("form.message")}
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder={t("form.messagePlaceholder")}
            {...register("message")}
            className={textareaClass}
          />
        </div>
        <button
          type="submit"
          disabled={submissionDisabled || isSubmitting}
          data-mcp-toolname="partner-submit"
          data-mcp-tooldescription="Submit aiNOW partner program application"
          className="ainow-btn-primary h-12 w-full text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? t("form.submitting") : t("form.submit")}
        </button>
        {submissionDisabled && (
          <p
            role="status"
            data-owner-reference="true"
            className="text-center text-xs text-slate-500 dark:text-slate-400"
          >
            Owner-reference only — partner applications are disabled; no data will be sent.
          </p>
        )}
      </form>
    </div>
  );
};
