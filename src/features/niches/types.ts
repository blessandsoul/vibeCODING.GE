import type { Article } from '@/features/services/components/SeoArticle';

/**
 * Shared shape for every aiNOW "AI chatbot for <niche>" landing page.
 *
 * `Content` is lifted verbatim from the original clinic landing
 * (app/[locale]/ai-chatbot-klinikebistvis/page.tsx) so the shared template
 * renders identically. One `Content` object per locale; `ka` is mandatory and
 * is the fallback for any locale route.
 */
export type { Article };

export type Locale = 'ka' | 'en' | 'ru';

export type Content = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  ctaDemo: string;
  ctaPilot: string;
  chatName: string;
  chatRole: string;
  chatGreeting: string;
  chatPlaceholder: string;
  chatChips: string[];
  chatNote: string;
  painTitle: string;
  pains: { h: string; p: string }[];
  stepsTitle: string;
  steps: { h: string; p: string }[];
  honestyTitle: string;
  honestyLead: string;
  honesty: { h: string; p: string }[];
  proofStat: string;
  proofStatLabel: string;
  proofNote: string;
  channelsLabel: string;
  pilotTitle: string;
  pilotPoints: string[];
  pilotNote: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  article?: Article;
  linksTitle: string;
  links: { slug: string; label: string }[];
  ctaLead: string;
  ctaButton: string;
};

/**
 * Structured brain for the live hero chat demo. `buildPersonaPrompt` (see
 * features/niches/persona.ts) compiles this into the Georgian system prompt
 * that /api/chat-demo sends to the model. Prices are illustrative demo-business
 * ranges, never a real quote (the bot is instructed to defer exact prices).
 */
export type PersonaSpec = {
  botName: string; // the assistant's name, e.g. "ნინო"
  brand: string; // the demo business name, e.g. "დენტა თბილისი"
  bizType: string; // the business type in Georgian, e.g. "სტომატოლოგიური კლინიკა"
  hours: string; // working hours line, e.g. "ორშაბათი-შაბათი 10:00-20:00, კვირას დასვენება"
  address?: string; // optional address line
  services: string; // services + example price ranges, one free-text block (Georgian)
  booking: string; // the booking-flow instruction (Georgian)
  guardrails: string[]; // niche-specific honesty guards (Georgian), e.g. "დიაგნოზს არასოდეს სვამ."
  // Who the demo visitor IS in this niche (Georgian nominative, e.g. პაციენტი /
  // სტუმარი / მშობელი / მფლობელი). Drives the follow-up chip generator so the
  // suggestions speak in the right voice, not "patient" for every niche.
  customerNoun?: string;
  // One Georgian sentence listing niche-natural next-step topics the follow-up
  // chips may explore (e.g. hotel: transfer, breakfast, early check-in,
  // cancellation). Replaces the old hardcoded clinic list (address/parking...).
  followupDomains?: string;
};

export type NicheEntry = {
  key: string; // persona key: short ascii id, e.g. 'dental' (sent by the client demo)
  slug: string; // URL segment after the locale, e.g. 'ai-chatbot-stomatologiistvis'
  serviceType: string; // ServiceSchema serviceType (English), e.g. 'AI Chatbot for Dental Clinics'
  persona: PersonaSpec;
  // ka is mandatory; en/ru optional. pick() falls back to ka for any other locale.
  content: { ka: Content } & Partial<Record<Locale, Content>>;
};
