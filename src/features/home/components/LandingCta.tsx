'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Reveal } from '@/components/common/Reveal';
import { MagneticButton } from '@/components/common/MagneticButton';
import { contactFormSchema, type ContactFormData } from '@/features/contact/schemas/contact.schema';
// facebook-pixel was stripped from this lean build; no-op keeps the call sites intact.
const trackLead = () => undefined;
import './landing-cta.css';

/* =========================================================================
   LandingCta, "#cta" contact form.
   Ported verbatim from ainow_handoff/index.html. Token swaps: text-muted →
   #525252, border-border → #e5e5e5, bg-accent2/30 → bg-[#e040fb]/30,
   bg-glow/25 → bg-[#ff6b00]/25. Behaviors ported from the source scripts:
   fade-up reveal, magnet (button pulls toward cursor) and click-spark
   (particles burst from click), all scoped to this section's root.
   Phone-only lead form (we call back within 24h); copy via home.cta i18n.
   ========================================================================= */

export function LandingCta() {
  const rootRef = useRef<HTMLElement>(null);
  const t = useTranslations('contact');
  const tc = useTranslations('product.cta');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // Submit to the same endpoint the old contact form used (/api/contact →
  // Telegram notification). Phone-only lead, we call back within 24h.
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: data.phone }),
      });
      if (res.ok) {
        trackLead();
        toast.success(t('successTitle'), { description: t('successMessage') });
        reset();
      } else {
        toast.error(t('errorMessage'));
      }
    } catch {
      toast.error(t('errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: Array<() => void> = [];

    // --- Scroll-triggered fade-up ---
    const items = root.querySelectorAll<HTMLElement>('.fade-up');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // --- Magnet, buttons pull toward cursor (source-exact) ---
    root.querySelectorAll<HTMLElement>('.magnet').forEach((el) => {
      const strength = el.classList.contains('magnet-strong') ? 0.32 : 0.2;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      };
      const onLeave = () => { el.style.transform = ''; };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });

    // --- Click Spark, particles explode from click point (source-exact) ---
    root.querySelectorAll<HTMLElement>('.click-spark').forEach((el) => {
      const onClick = (e: MouseEvent) => {
        const x = e.clientX, y = e.clientY;
        for (let i = 0; i < 12; i++) {
          const s = document.createElement('div');
          s.className = 'spark';
          s.style.left = x + 'px';
          s.style.top = y + 'px';
          const angle = (Math.PI * 2 * i) / 12 + Math.random() * 0.3;
          const dist = 42 + Math.random() * 40;
          const ex = Math.cos(angle) * dist;
          const ey = Math.sin(angle) * dist;
          s.style.setProperty('--spark-end', `translate(${ex}px, ${ey}px)`);
          document.body.appendChild(s);
          setTimeout(() => s.remove(), 740);
        }
      };
      el.addEventListener('click', onClick);
      cleanups.push(() => el.removeEventListener('click', onClick));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section ref={rootRef} id="cta" className="px-4 py-20 md:px-6 md:py-32">
      <div data-family-shell="true" className="max-w-[1216px] mx-auto relative overflow-hidden rounded-3xl [clip-path:inset(0_round_1.5rem)] border border-[#e5e5e5] bg-gradient-to-br from-white via-neutral-50 to-white p-8 md:p-20">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-(--brand)/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-(--brand-soft)/25 rounded-full blur-3xl"></div>
        <div className="relative text-center">
          <Reveal>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto text-neutral-900">
              <span className="gradient-text">{tc('heading')}</span>
            </h2>
            <p className="mt-6 text-lg text-[#525252] max-w-xl mx-auto">{tc('subtitle')}</p>
          </Reveal>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 max-w-md mx-auto text-left rounded-2xl border border-[#e5e5e5] bg-white p-6 md:p-8 space-y-4">
            <div>
              <label htmlFor="cta-phone" className="block text-xs font-mono uppercase tracking-[0.2em] text-[#525252] mb-2">{tc('phoneLabel')}</label>
              <input
                id="cta-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+995 5XX XX XX XX"
                disabled={isSubmitting}
                {...register('phone')}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'cta-phone-error' : undefined}
                className="w-full px-4 py-3 rounded-xl border border-[#e5e5e5] bg-white text-neutral-900 focus:border-neutral-900 focus:outline-none transition disabled:opacity-60"
              />
              {errors.phone && (
                <p id="cta-phone-error" role="alert" aria-live="polite" className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <MagneticButton className="block w-full">
              <button type="submit" disabled={isSubmitting} className="click-spark w-full px-6 py-4 rounded-xl bg-neutral-900 text-white font-medium [transition:background-color_.18s_ease,transform_.18s_cubic-bezier(.2,.8,.2,1)] will-change-transform hover:bg-neutral-800 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed motion-reduce:transition-none motion-reduce:active:scale-100">{isSubmitting ? t('submitting') : tc('phoneSubmit')}</button>
            </MagneticButton>
            <p className="text-center text-xs text-[#525252]">{tc('phoneNote')}</p>
          </form>
          <p className="mt-8 text-sm text-[#525252]">{tc('orWrite')} <a href="mailto:CONTACT@aiNOW.GE" className="inline-flex min-h-11 min-w-11 max-w-full items-center justify-center break-all rounded-lg px-2 text-center underline transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-ink)] focus-visible:ring-offset-2">CONTACT@aiNOW.GE</a></p>
        </div>
      </div>
    </section>
  );
}
