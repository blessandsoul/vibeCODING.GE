"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ContactChallenge } from "@/components/common/ContactChallenge";
import { AGENT_PRODUCTS } from "@/lib/public-facts";
import { localizePricingProduct } from "@/features/pricing/pricing-copy";
import { PRICING_PRODUCTS } from "@/features/pricing/pricing-data";
import { trackLead } from "@/lib/facebook-pixel";
import {
  getClosingFormCopy,
  type ClosingFormCopy,
  type ContactPreference,
} from "@/features/contact/content/closing-form-copy";
import {
  appendPricingSelectionToMessage,
  getPricingSelection,
  getPricingSelectionFromSearch,
  type PricingSelection,
} from "@/features/pricing/pricing-selection";
import {
  buildClosingLeadMessage,
  createClosingLeadSubmitter,
  CLOSING_LEAD_MAX_MESSAGE,
  CLOSING_LEAD_PRODUCT,
  sanitizeUtmValue,
  type ClosingLeadInput,
} from "@/features/home/lib/closing-lead-message";
import { AnimatedArrowRightIcon, AnimatedMailIcon } from "./AiNowAnimatedIcons";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

type FieldErrors = Partial<Record<"company" | "phone" | "task", string>>;

function getApprovedProductDisplayLabel(productId: string, locale: string, fallback: string, kaOverride?: string): string {
  if (locale === "ka") return kaOverride ?? fallback;
  const product = PRICING_PRODUCTS.find((item) => item.id === productId);
  return product ? localizePricingProduct(product, locale).label : fallback;
}

function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");
  return trimmed.length >= 6
    && trimmed.length <= 20
    && /^\+?[\d\s()-]+$/.test(trimmed)
    && digits.length >= 9
    && digits.length <= 15;
}

export interface LeadAttribution {
  source?: string;
  sourcePath?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

interface AiNowClosingCtaFormProps {
  onSubmitted: (successMessage: string) => void;
  initialMessage?: string;
  attribution?: LeadAttribution;
  copy?: ClosingFormCopy;
}

function subscribeToLocation(onStoreChange: () => void): () => void {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener("hashchange", onStoreChange);
  return () => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener("hashchange", onStoreChange);
  };
}

function getLocationSearch(): string {
  return window.location.search;
}

function getServerLocationSearch(): string {
  return "";
}

function usePricingSelectionFromLocation(): PricingSelection | null {
  const search = useSyncExternalStore(subscribeToLocation, getLocationSearch, getServerLocationSearch);
  return useMemo(() => getPricingSelectionFromSearch(search), [search]);
}

export function AiNowClosingCtaForm({
  onSubmitted,
  initialMessage = "",
  attribution,
  copy: copyOverride,
}: AiNowClosingCtaFormProps) {
  const locale = useLocale();
  const copy = copyOverride ?? getClosingFormCopy(locale);
  const pricingSelection = usePricingSelectionFromLocation();
  const selectionKey = pricingSelection
    ? `${pricingSelection.product.id}:${pricingSelection.plan?.id ?? "product"}`
    : "no-pricing-selection";
  const lastScrolledSelectionKey = useRef("");

  useEffect(() => {
    if (!pricingSelection || window.location.hash !== "#cta" || lastScrolledSelectionKey.current === selectionKey) return;

    const frame = window.requestAnimationFrame(() => {
      if (window.location.hash !== "#cta" || lastScrolledSelectionKey.current === selectionKey) return;

      const target = document.getElementById("cta");
      if (!target) return;

      lastScrolledSelectionKey.current = selectionKey;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pricingSelection, selectionKey]);

  return (
    <AiNowClosingCtaFormFields
      key={selectionKey}
      onSubmitted={onSubmitted}
      initialPricingSelection={pricingSelection}
      initialMessage={initialMessage}
      attribution={attribution}
      copy={copy}
    />
  );
}

interface AiNowClosingCtaFormFieldsProps extends Omit<AiNowClosingCtaFormProps, "copy" | "initialMessage"> {
  initialPricingSelection: PricingSelection | null;
  initialMessage: string;
  copy: ClosingFormCopy;
}

function AiNowClosingCtaFormFields({
  onSubmitted,
  initialPricingSelection,
  initialMessage,
  attribution,
  copy,
}: AiNowClosingCtaFormFieldsProps) {
  const locale = useLocale();
  const homeCopy = getAiNowHomeCopy(locale);
  const visibleProducts = AGENT_PRODUCTS.filter((item) => item.id === CLOSING_LEAD_PRODUCT);
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState<string>(initialPricingSelection?.agentProduct.id ?? CLOSING_LEAD_PRODUCT);
  const [planId, setPlanId] = useState(initialPricingSelection?.plan?.id ?? "");
  const [task, setTask] = useState(initialMessage);
  const [contactPreference, setContactPreference] = useState<ContactPreference>("whatsapp");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [challengeAttempt, setChallengeAttempt] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const taskTouchedRef = useRef(false);
  const previousInitialMessageRef = useRef(initialMessage);
  const inFlightRef = useRef(false);
  const submitterRef = useRef<ReturnType<typeof createClosingLeadSubmitter> | null>(null);

  useEffect(() => {
    const previousInitialMessage = previousInitialMessageRef.current;
    previousInitialMessageRef.current = initialMessage;
    if (taskTouchedRef.current || !initialMessage || initialMessage === previousInitialMessage) return;

    setTask((current) => {
      if (taskTouchedRef.current) return current;
      return current.trim().length === 0 || current === previousInitialMessage ? initialMessage : current;
    });
  }, [initialMessage]);

  const preferredChannel = copy.contactPreferences.find((item) => item.value === contactPreference) ?? copy.contactPreferences[0];
  const selectedProduct = visibleProducts.find((item) => item.id === product);
  const selectedProductLabel = selectedProduct ? getApprovedProductDisplayLabel(selectedProduct.id, locale, selectedProduct.labelKa, homeCopy.productLabels[selectedProduct.id]) : "";
  const pricingOrigin = Boolean(initialPricingSelection);
  const selectedPricingSelection = pricingOrigin || planId ? getPricingSelection(product, planId) : null;
  const selectedPlan = selectedPricingSelection?.plan ?? null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const campaignValue = (key: string) => sanitizeUtmValue(urlParams.get(key) ?? undefined);
    const cleanPhone = phone.trim();
    const cleanCompany = company.trim();
    const cleanTask = task.trim();
    const message = appendPricingSelectionToMessage(cleanTask, selectedPricingSelection);
    const leadInput: ClosingLeadInput = {
      phone: cleanPhone,
      company: cleanCompany,
      product: selectedProduct?.name ?? CLOSING_LEAD_PRODUCT,
      task: message,
      contactPreference: preferredChannel.label,
      turnstileToken,
      plan: selectedPlan ? { id: selectedPlan.id, name: selectedPlan.name, price: selectedPlan.price, cadence: selectedPlan.cadence } : null,
      attribution: {
        source: attribution?.source ?? `${CLOSING_LEAD_PRODUCT}-homepage-cta`,
        sourcePath: attribution?.sourcePath ?? (pricingOrigin ? "/pricing" : "/"),
        utmSource: attribution?.utmSource ?? campaignValue("utm_source"),
        utmMedium: attribution?.utmMedium ?? campaignValue("utm_medium"),
        utmCampaign: attribution?.utmCampaign ?? campaignValue("utm_campaign"),
        utmContent: attribution?.utmContent ?? campaignValue("utm_content"),
        utmTerm: attribution?.utmTerm ?? campaignValue("utm_term"),
      },
    };
    const nextErrors: FieldErrors = {};

    if (cleanCompany.length < 2) nextErrors.company = copy.companyError;
    if (!isValidPhone(cleanPhone)) {
      nextErrors.phone = `${copy.phoneErrorPrefix} ${preferredChannel.validationAction}`;
    }
    if (cleanTask.length < 8) nextErrors.task = copy.taskError;
    try {
      buildClosingLeadMessage(leadInput);
    } catch {
      nextErrors.task = copy.taskTooLongError;
    }

    setFieldErrors(nextErrors);
    setError("");
    if (Object.keys(nextErrors).length > 0) return;
    if (!turnstileToken) {
      setError(copy.submitError);
      return;
    }

    if (inFlightRef.current) return;
    inFlightRef.current = true;
    setLoading(true);
    try {
      const submitter = submitterRef.current ?? (submitterRef.current = createClosingLeadSubmitter(fetch));
      const receipt = await submitter(leadInput);
      if (!receipt.accepted) {
        setError(copy.submitError);
        return;
      }
      try {
        const leadContentName = attribution?.source === "landing" ? "phone-lead" : "cta-phone";
        trackLead({ content_name: leadContentName });
      } catch {
        // Analytics must never turn an accepted lead into a form error.
      }
      setPhone("");
      setCompany("");
      setTask("");
      setContactPreference("whatsapp");
      setTurnstileToken("");
      setFieldErrors({});
      onSubmitted(preferredChannel.success);
    } catch {
      setError(copy.submitError);
    } finally {
      inFlightRef.current = false;
      setTurnstileToken("");
      setChallengeAttempt((attempt) => attempt + 1);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} data-pricing-origin={pricingOrigin ? "true" : undefined} className="mt-8 mx-auto max-w-lg space-y-3 relative z-10">
      {initialMessage ? (
        <div className="rounded-xl bg-emerald-50 px-3.5 py-3 text-left text-sm leading-relaxed text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100">
          <p className="font-semibold">{copy.briefTitle}</p>
          <p className="mt-1 text-emerald-800 dark:text-emerald-200">{copy.briefBody}</p>
        </div>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="text-left">
          <Label htmlFor="ainow-company" className="mb-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">{copy.companyLabel}</Label>
          <Input
            id="ainow-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder={copy.companyPlaceholder}
            value={company}
            onChange={(event) => {
              setCompany(event.target.value);
              if (event.target.value.trim().length >= 2) setFieldErrors((current) => ({ ...current, company: undefined }));
            }}
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={fieldErrors.company ? "ainow-company-error" : undefined}
            className="h-10 rounded-xl border-black/[0.1] bg-white/70 px-3.5 text-xs text-slate-900 shadow-2xs backdrop-blur-md placeholder:text-slate-400 dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-100 dark:placeholder:text-slate-500"
          />
          {fieldErrors.company && <p id="ainow-company-error" role="alert" className="mt-1.5 text-xs font-medium text-rose-700 dark:text-rose-300">{fieldErrors.company}</p>}
        </div>
        <div className="text-left">
          <Label htmlFor="ainow-phone" className="mb-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">{preferredChannel.phoneLabel}</Label>
          <Input
            id="ainow-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder={copy.phonePlaceholder}
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              if (isValidPhone(event.target.value)) {
                setFieldErrors((current) => ({ ...current, phone: undefined }));
              }
            }}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "ainow-phone-error" : undefined}
            className="h-10 rounded-xl border-black/[0.1] bg-white/70 px-3.5 text-xs text-slate-900 shadow-2xs backdrop-blur-md placeholder:text-slate-400 dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-100 dark:placeholder:text-slate-500"
          />
          {fieldErrors.phone && <p id="ainow-phone-error" role="alert" className="mt-1.5 text-xs font-medium text-rose-700 dark:text-rose-300">{fieldErrors.phone}</p>}
        </div>
      </div>

      <div className="block text-left">
        <Label htmlFor="ainow-contact-preference" className="mb-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">{copy.contactPreferenceLabel}</Label>
        <Select name="contactPreference" value={contactPreference} onValueChange={(value) => setContactPreference(value as ContactPreference)}>
          <SelectTrigger id="ainow-contact-preference" aria-label={copy.contactPreferenceLabel} className="h-10 w-full rounded-xl border-black/[0.1] bg-white/70 px-3.5 text-xs text-slate-900 shadow-2xs backdrop-blur-md dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-100">
            <span className="min-w-0 flex-1 truncate text-left">{preferredChannel.label}</span>
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start" className="rounded-xl border-black/[0.1] bg-white/95 p-1 shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-slate-950/95">
            {copy.contactPreferences.map((item) => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
          </SelectContent>
        </Select>
        <span className="mt-1.5 block text-xs text-slate-500 dark:text-slate-400">{preferredChannel.hint}</span>
      </div>

      <div className="block text-left">
        <Label htmlFor="ainow-product" className="mb-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">{copy.productLabel}</Label>
        <Select
          name="product"
          value={product || undefined}
          onValueChange={(value: string) => {
            setProduct(value);
            setPlanId("");
          }}
        >
        <SelectTrigger id="ainow-product" aria-label={copy.productLabel} className="h-10 w-full rounded-xl border-black/[0.1] bg-white/70 px-3.5 text-xs text-slate-900 shadow-2xs backdrop-blur-md dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-100">
            <span className={`min-w-0 flex-1 truncate text-left ${selectedProduct ? "" : "text-slate-400 dark:text-slate-500"}`}>
              {selectedProduct ? selectedProduct.name + ": " + selectedProductLabel : copy.productPlaceholder}
            </span>
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="start" className="rounded-xl border-black/[0.1] bg-white/95 p-1 shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-slate-950/95">
            {visibleProducts.map((item) => <SelectItem key={item.id} value={item.id}>{item.name}: {getApprovedProductDisplayLabel(item.id, locale, item.labelKa, homeCopy.productLabels[item.id])}</SelectItem>)}
          </SelectContent>
        </Select>
        {selectedPlan && (
          <div className="dodo-glass-inset mt-2 flex items-start justify-between gap-3 px-3 py-2.5 text-left">
            <div className="min-w-0 text-xs text-slate-700 dark:text-slate-200">
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">{copy.selectedPlanLabel}</span>
              <span className="mt-0.5 block truncate font-semibold">{selectedPlan.name}</span>
              <span className="mt-0.5 block text-slate-500 dark:text-slate-400">{selectedPlan.price} {selectedPlan.cadence}</span>
            </div>
            <button
              type="button"
              onClick={() => setPlanId("")}
              className="min-h-10 shrink-0 rounded-lg px-2 text-xs font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:text-blue-300 dark:hover:text-blue-100"
            >
              {copy.removePlan}
            </button>
          </div>
        )}
      </div>

      <div className="block text-left">
        <Label htmlFor="ainow-task" className="mb-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">{copy.taskLabel}</Label>
        <Textarea
          id="ainow-task"
          name="message"
          required
          rows={3}
          maxLength={CLOSING_LEAD_MAX_MESSAGE}
          placeholder={copy.taskPlaceholder}
          value={task}
          onChange={(event) => {
            taskTouchedRef.current = true;
            setTask(event.target.value);
            if (event.target.value.trim().length >= 8) setFieldErrors((current) => ({ ...current, task: undefined }));
          }}
          aria-invalid={Boolean(fieldErrors.task)}
          aria-describedby={fieldErrors.task ? "ainow-task-error" : undefined}
          className="min-h-24 resize-y rounded-xl border-black/[0.1] bg-white/70 px-3.5 py-2.5 text-xs leading-relaxed text-slate-900 shadow-2xs backdrop-blur-md placeholder:text-slate-400 dark:border-white/15 dark:bg-white/[0.05] dark:text-slate-100 dark:placeholder:text-slate-500"
        />
        {fieldErrors.task && <p id="ainow-task-error" role="alert" className="mt-1.5 text-xs font-medium text-rose-700 dark:text-rose-300">{fieldErrors.task}</p>}
      </div>

      <ContactChallenge key={challengeAttempt} onToken={setTurnstileToken} errorText={copy.submitError} />

      {error && <p id="ainow-submit-error" role="alert" className="text-left text-xs font-medium text-rose-700 dark:text-rose-300">{error}</p>}

      <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
        <Button type="submit" disabled={loading || !turnstileToken} className="ainow-btn-primary h-10 w-full px-6 text-xs group disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:text-sm">
          <span>{loading ? copy.submitting : copy.submit}</span>
          <AnimatedArrowRightIcon size={14} className="size-3.5" />
        </Button>
        <Button asChild variant="outline" className="ainow-btn-secondary h-10 w-full px-4 text-xs sm:w-auto sm:text-sm">
          <a href="mailto:contact@ainow.ge">
            <AnimatedMailIcon className="size-3.5 text-slate-500 dark:text-slate-400" />
            <span>{copy.email}</span>
          </a>
        </Button>
      </div>
    </form>
  );
}












