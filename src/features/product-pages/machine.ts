import messages from '@/messages/en.json';
import { SITE } from '@/config/site';
import { PUBLIC_ROUTES } from '@/features/product-pages/routes';
import { CONTACT_EMAIL } from '@/lib/constants/app.constants';
import { localeUrl } from '@/i18n/seo-locales';

import type { ProductPageLocale, PublicRoute } from './types';

export const PRODUCT_BRAND = SITE.wordmark.prefix + SITE.wordmark.mark;
export const MACHINE_REVIEWED_ON = '2026-07-26';
export const MACHINE_CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=3600, s-maxage=86400',
} as const;

const FAQ_LIMIT = 5;
const faqMessages = messages.product.faq as Record<string, string>;

export interface MachineFaqItem {
  question: string;
  answer: string;
}

export interface MachinePublicPage {
  key: PublicRoute['key'];
  path: PublicRoute['path'];
  url: string;
  localizedUrls: Readonly<Record<ProductPageLocale, string>>;
}

function replaceBrandMarkup(value: string): string {
  return value.replace(/<brand>.*?<\/brand>/gu, PRODUCT_BRAND);
}

export const MACHINE_FAQ: readonly MachineFaqItem[] = Array.from(
  { length: FAQ_LIMIT },
  (_, index) => {
    const number = index + 1;
    return {
      question: replaceBrandMarkup(faqMessages[`q${number}`] ?? ''),
      answer: faqMessages[`a${number}`] ?? '',
    };
  },
).filter(({ question, answer }) => question.length > 0 && answer.length > 0);

export const MACHINE_PUBLIC_PAGES: readonly MachinePublicPage[] =
  PUBLIC_ROUTES.map((route) => {
    const path = route.path === '/' ? '' : route.path;
    return {
      key: route.key,
      path: route.path,
      url: localeUrl(SITE.defaultLocale, path),
      localizedUrls: Object.fromEntries(
        Object.keys(route.localePaths).map((locale) => [
          locale,
          localeUrl(locale, path),
        ]),
      ) as Record<ProductPageLocale, string>,
    };
  });

export function machineJsonResponse(payload: unknown): Response {
  return Response.json(payload, {
    headers: MACHINE_CACHE_HEADERS,
  });
}

export function machineTextResponse(body: string): Response {
  return new Response(body, {
    headers: {
      ...MACHINE_CACHE_HEADERS,
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

export const PRODUCT_MACHINE_FACTS = {
  name: PRODUCT_BRAND,
  url: SITE.baseUrl,
  provider: {
    name: 'aiNOW',
    url: 'https://ainow.ge',
    location: 'Tbilisi, Georgia',
  },
  serviceType: SITE.seo.serviceType,
  summary: SITE.seo.summary,
  audience: SITE.seo.audienceName,
  areaServed: SITE.seo.areaServed,
  languages: [...SITE.locales],
  capabilities: [...SITE.seo.features],
  boundary: SITE.seo.boundary,
  limits: [...SITE.seo.limits],
  commitment: SITE.seo.commitment,
  contact: {
    email: CONTACT_EMAIL.toLowerCase(),
  },
  publicPages: MACHINE_PUBLIC_PAGES,
  reviewedOn: MACHINE_REVIEWED_ON,
} as const;
