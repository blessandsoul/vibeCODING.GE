import type { PricingMode } from '../types';

export interface PricingAmount {
  amount: number;
  currency: 'GEL' | 'USD' | 'EUR';
  cadence?: 'oneTime' | 'monthly' | 'annual' | 'usage';
  unit?: string;
}

interface PricingOfferBase {
  id: string;
  name: string;
  summary: string;
  billingLabel: string;
  recommended?: boolean;
  included: readonly string[];
  excluded: readonly string[];
  actionLabel: string;
  actionHref?: string;
}

export type PricingOffer =
  | (PricingOfferBase & {
      mode: 'pilot';
      price?: never;
      eligibility: readonly string[];
    })
  | (PricingOfferBase & {
      mode: 'project';
      price?: PricingAmount;
      estimateDrivers: readonly string[];
    })
  | (PricingOfferBase & {
      mode: 'fixed' | 'retainer' | 'usage' | 'hybrid' | 'liveSubscription';
      price: PricingAmount;
      allowance?: string;
      overageRule?: string;
      setupPrice?: PricingAmount;
    });

export interface PricingContextFact {
  label: string;
  value: string;
}

export interface PricingTimelineStep {
  title: string;
  description: string;
  timing: string;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

export interface PricingPageCopy {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  offersEyebrow: string;
  offersTitle: string;
  offersIntro: string;
  includedLabel: string;
  excludedLabel: string;
  eligibilityLabel: string;
  driversLabel: string;
  allowanceLabel: string;
  overageLabel: string;
  setupLabel: string;
  comparisonEyebrow: string;
  comparisonTitle: string;
  offerLabel: string;
  billingLabel: string;
  timelineEyebrow: string;
  timelineTitle: string;
  faqEyebrow: string;
  faqTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

export interface PricingPageData {
  mode: PricingMode;
  context: readonly PricingContextFact[];
  offers: readonly PricingOffer[];
  timeline: readonly PricingTimelineStep[];
  faq: readonly PricingFaqItem[];
}
