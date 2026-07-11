"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  contactFormSchema,
  type ContactFormData,
} from "../schemas/contact.schema";
// facebook-pixel was stripped from this lean build; no-op keeps the call sites intact.
const trackLead = (_args?: { content_name?: string }) => {};

export const ContactForm = () => {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        trackLead({ content_name: "contact-phone" });
        toast.success(t("successTitle"), {
          description: t("successMessage"),
        });
        reset();
      } else {
        toast.error(t("errorMessage"));
      }
    } catch {
      toast.error(t("errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">{t("phone")} *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder={t("phonePlaceholder")}
          autoComplete="tel"
          {...register("phone")}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" aria-live="polite" className="text-sm text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        aria-label={t("submit")}
        data-mcp-toolname="contact-submit"
        data-mcp-tooldescription="Submit contact form to send phone number to aiNOW for callback"
        className="w-full bg-linear-to-r from-[#7c3aed] to-[#e040fb] text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
      >
        {isSubmitting ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
};
