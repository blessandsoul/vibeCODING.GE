'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import {
  leadFormSchema,
  type LeadFormData,
} from '@/features/landing/schemas/lead.schema';
import { createLeadEventId, trackLead } from '@/lib/facebook-pixel';

/* --------------------------------------------------------------------------
   PhoneGateModal
   Shown before a persona chat widget opens. Collects phone → POSTs to
   /api/lead → calls onSuccess(phone) so the parent can open the widget.
   -------------------------------------------------------------------------- */

export interface PhoneGateModalProps {
  open: boolean;
  personaKey: string | null;
  onOpenChange: (open: boolean) => void;
  onSuccess: (phone: string) => void;
}

export const PhoneGateModal = ({
  open,
  personaKey,
  onOpenChange,
  onSuccess,
}: PhoneGateModalProps) => {
  const t = useTranslations('aistaff');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    const leadEventId = createLeadEventId();
    try {
      // Read UTM params at submit time, window is safe inside an event handler.
      const params = new URLSearchParams(window.location.search);

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: data.phone.trim(),
          source: 'aistaff',
          message: `aiStaff QR, persona: ${personaKey ?? 'unknown'}`,
          utmSource: params.get('utm_source') || undefined,
          utmMedium: params.get('utm_medium') || undefined,
          utmCampaign: params.get('utm_campaign') || undefined,
          utmContent: params.get('utm_content') || undefined,
          utmTerm: params.get('utm_term') || undefined,
        }),
      });

      if (!res.ok) throw new Error('lead');

      trackLead({ content_name: 'aistaff-gate' }, leadEventId);
      reset();
      // Parent handles persist + widget open, no toast needed here (widget is the feedback).
      onSuccess(data.phone.trim());
    } catch {
      toast.error(t('leadError'));
      // Keep modal open, do NOT call onSuccess.
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/*
        The aistaff overlay is fixed inset-0 z-120.
        Panel  → z-[140]  (above everything)
        Backdrop → z-[130] (above the overlay, below the panel)
      */}
      <DialogContent
        className="z-[140]"
        overlayClassName="z-[130]"
      >
        <DialogHeader>
          <DialogTitle>{t('leadPrompt')}</DialogTitle>
          <DialogDescription>{t('leadSubtitle')}</DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-2 flex flex-col gap-3"
          aria-label={t('leadPrompt')}
          noValidate
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="aistaff-gate-phone" className="sr-only">
              {t('leadPhonePlaceholder')}
            </label>
            <Input
              id="aistaff-gate-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={t('leadPhonePlaceholder')}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'aistaff-gate-phone-error' : undefined}
              {...register('phone')}
            />
            {errors.phone && (
              <p
                id="aistaff-gate-phone-error"
                role="alert"
                aria-live="polite"
                className="text-sm text-destructive"
              >
                {errors.phone.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-bg font-semibold text-white shadow-lg shadow-primary/25 transition duration-200 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
          >
            {isSubmitting ? t('leadSubmitting') : t('leadSubmit')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
