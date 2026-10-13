'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Ico } from '@/components/common/Ico';
import { contactFormSchema, type ContactFormData } from '@/features/contact/schemas/contact.schema';
import { trackLead } from '@/lib/facebook-pixel';

export const HeroPhoneForm = () => {
  const t = useTranslations('heroA');
  const tContact = useTranslations('contact');
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        trackLead({ content_name: 'hero-phone' });
        toast.success(tContact('successTitle'), {
          description: tContact('successMessage'),
        });
        reset();
      } else {
        toast.error(tContact('errorMessage'));
      }
    } catch {
      toast.error(tContact('errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <div className="relative flex-1">
          <input
            type="tel"
            placeholder={t('formPlaceholder')}
            autoComplete="tel"
            disabled={isSubmitting}
            {...register('phone')}
            aria-invalid={!!errors.phone}
            className="h-12 w-full rounded-xl border border-border bg-card/70 px-4 text-base text-foreground placeholder:text-muted-foreground/70 backdrop-blur-sm transition duration-200 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 sm:h-14 sm:text-lg"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="gradient-bg flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-base font-bold text-white shadow-md shadow-primary/20 transition duration-200 hover:brightness-110 active:scale-[0.98] disabled:opacity-60 sm:h-14 sm:px-8 sm:text-lg"
        >
          {isSubmitting ? (
            <Ico name="solar:refresh-bold-duotone" className="h-5 w-5 animate-spin" />
          ) : (
            <>
              {t('formButton')}
              <Ico name="solar:arrow-right-bold-duotone" className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {errors.phone && (
        <p role="alert" aria-live="polite" className="mt-2 text-left text-sm text-destructive">
          {errors.phone.message}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm">
        <span className="flex items-center gap-1.5">
          <Ico name="solar:check-circle-bold-duotone" className="h-3.5 w-3.5 text-primary" />
          {t('formTrust1')}
        </span>
        <span className="flex items-center gap-1.5">
          <Ico name="solar:check-circle-bold-duotone" className="h-3.5 w-3.5 text-primary" />
          {t('formTrust2')}
        </span>
        <span className="flex items-center gap-1.5">
          <Ico name="solar:check-circle-bold-duotone" className="h-3.5 w-3.5 text-primary" />
          {t('formTrust3')}
        </span>
      </div>
    </div>
  );
};
