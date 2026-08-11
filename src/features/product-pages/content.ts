import 'server-only';

import { getTranslations } from 'next-intl/server';

import { SITE } from '@/config/site';
import { PRODUCT_PAGES } from '@/config/product-pages';
import { CONTACT_EMAIL } from '@/lib/constants/app.constants';

import type {
  IntegrationCategory,
  IntegrationConnection,
  IntegrationDataFlow,
  ProductPageLocale,
  PricingMode,
} from './types';
import type {
  IntegrationsPageCopy,
  IntegrationRecord,
} from './integrations/IntegrationsPage';
import type {
  PricingFaqItem,
  PricingOffer,
  PricingPageCopy,
  PricingPageData,
} from './pricing/types';
import type {
  SecurityControl,
  SecurityFlowStage,
  SecurityPageCopy,
} from './security/SecurityPage';
import type { LegalDocumentSection } from './components/LegalDocument';

export const PRODUCT_NAME = `${SITE.wordmark.prefix}${SITE.wordmark.mark}`;

function productName(): string {
  return PRODUCT_NAME;
}

function configuredPricingMode(): PricingMode {
  return PRODUCT_PAGES.pricing.mode;
}

async function localizedWorkOutcomes(locale: ProductPageLocale): Promise<readonly string[]> {
  const t = await getTranslations({ locale, namespace: 'product.work' });
  const outcomes: string[] = [];
  for (let index = 1; index <= 6; index += 1) {
    const key = `s${index}Title`;
    if (t.has(key)) outcomes.push(t(key));
  }
  return outcomes.slice(0, 5);
}

export async function getPricingContent(locale: ProductPageLocale): Promise<{
  copy: PricingPageCopy;
  data: PricingPageData;
}> {
  const t = await getTranslations({ locale, namespace: 'productPages.pricing' });
  const product = productName();
  const pricingMode = configuredPricingMode();
  const included = await localizedWorkOutcomes(locale);
  const excluded = [t('offer.excluded1'), t('offer.excluded2'), t('offer.excluded3')];
  const actionHref = '/contact';
  const common = {
    id: 'written-scope',
    name: t('offer.name', { product }),
    summary: t('offer.summary', { product }),
    billingLabel: t('offer.billing'),
    included: included.length > 0 ? included : [t('offer.fallbackIncluded')],
    excluded,
    actionLabel: t('offer.action'),
    actionHref,
  } as const;

  let offer: PricingOffer;
  if (pricingMode === 'pilot') {
    offer = {
      ...common,
      mode: 'pilot',
      eligibility: [
        t('offer.eligibility1'),
        t('offer.eligibility2'),
        t('offer.eligibility3'),
      ],
    };
  } else if (pricingMode === 'project') {
    offer = {
      ...common,
      mode: 'project',
      estimateDrivers: [
        t('offer.driver1'),
        t('offer.driver2'),
        t('offer.driver3'),
      ],
    };
  } else {
    throw new Error(
      `${product} uses pricing mode "${pricingMode}" but has no verified numeric pricing adapter.`,
    );
  }

  const faq: PricingFaqItem[] = Array.from({ length: 5 }, (_, index) => ({
    question: t(`faq.q${index + 1}`, { product }),
    answer: t(`faq.a${index + 1}`, { product }),
  }));

  return {
    copy: {
      breadcrumb: t('breadcrumb'),
      eyebrow: t('eyebrow'),
      title: t('title', { product }),
      lead: t('lead', { product }),
      offersEyebrow: t('offers.eyebrow'),
      offersTitle: t('offers.title'),
      offersIntro: t('offers.intro'),
      includedLabel: t('labels.included'),
      excludedLabel: t('labels.excluded'),
      eligibilityLabel: t('labels.eligibility'),
      driversLabel: t('labels.drivers'),
      allowanceLabel: t('labels.allowance'),
      overageLabel: t('labels.overage'),
      setupLabel: t('labels.setup'),
      comparisonEyebrow: t('comparison.eyebrow'),
      comparisonTitle: t('comparison.title'),
      offerLabel: t('comparison.offer'),
      billingLabel: t('comparison.billing'),
      timelineEyebrow: t('timeline.eyebrow'),
      timelineTitle: t('timeline.title'),
      faqEyebrow: t('faq.eyebrow'),
      faqTitle: t('faq.title'),
      ctaEyebrow: t('cta.eyebrow'),
      ctaTitle: t('cta.title', { product }),
      ctaDescription: t('cta.description'),
      ctaLabel: t('cta.label'),
    },
    data: {
      mode: pricingMode,
      context: [
        { label: t('context.model'), value: t(`context.${pricingMode}`) },
        { label: t('context.price'), value: t('context.priceValue') },
        { label: t('context.start'), value: t('context.startValue') },
        { label: t('context.support'), value: t('context.supportValue') },
      ],
      offers: [offer],
      timeline: Array.from({ length: 4 }, (_, index) => ({
        title: t(`timeline.s${index + 1}Title`),
        description: t(`timeline.s${index + 1}Description`),
        timing: t(`timeline.s${index + 1}Timing`),
      })),
      faq,
    },
  };
}

const CATEGORY_KEYS: Readonly<Record<IntegrationCategory, string>> = {
  communication: 'communication',
  businessSystems: 'businessSystems',
  contentAndAdvertising: 'contentAndAdvertising',
  development: 'development',
  operations: 'operations',
};

const CONNECTION_KEYS: Readonly<Record<IntegrationConnection, string>> = {
  direct: 'direct',
  api: 'api',
  file: 'file',
  custom: 'custom',
  planned: 'planned',
};

const FLOW_KEYS: Readonly<Record<IntegrationDataFlow, string>> = {
  calls: 'calls',
  callResults: 'callResults',
  appointments: 'appointments',
  customerRecords: 'customerRecords',
  paymentEvents: 'paymentEvents',
  messages: 'messages',
  websiteEvents: 'websiteEvents',
  analyticsMetrics: 'analyticsMetrics',
  domainSettings: 'domainSettings',
  forms: 'forms',
  taskRecords: 'taskRecords',
  documents: 'documents',
  accountingDrafts: 'accountingDrafts',
  applicationRelease: 'applicationRelease',
  notifications: 'notifications',
  sourceReview: 'sourceReview',
  campaignSignals: 'campaignSignals',
  contentPublishing: 'contentPublishing',
  fleetCommands: 'fleetCommands',
  routingData: 'routingData',
  depotSchedule: 'depotSchedule',
  telemetry: 'telemetry',
};

export async function getIntegrationsContent(locale: ProductPageLocale): Promise<{
  copy: IntegrationsPageCopy;
  integrations: readonly IntegrationRecord[];
}> {
  const t = await getTranslations({ locale, namespace: 'productPages.integrations' });
  const product = productName();

  return {
    copy: {
      breadcrumb: t('breadcrumb'),
      eyebrow: t('eyebrow'),
      title: t('title', { product }),
      lead: t('lead', { product }),
      ledgerEyebrow: t('ledger.eyebrow'),
      ledgerTitle: t('ledger.title'),
      ledgerIntro: t('ledger.intro'),
      platformLabel: t('labels.platform'),
      categoryLabel: t('labels.categories'),
      connectionLabel: t('labels.connection'),
      statusLabel: t('labels.status'),
      dataLabel: t('labels.data'),
      status: {
        available: t('status.available'),
        customSetup: t('status.customSetup'),
        planned: t('status.planned'),
      },
      ctaEyebrow: t('cta.eyebrow'),
      ctaTitle: t('cta.title'),
      ctaDescription: t('cta.description'),
      ctaLabel: t('cta.label'),
    },
    integrations: PRODUCT_PAGES.integrations.records.map((record) => {
      const platformKey = `platforms.${record.id}`;
      const platform = t.has(platformKey) ? t(platformKey) : record.name;
      return {
        id: record.id,
        name: platform,
        icon: record.icon,
        category: t(`categories.${CATEGORY_KEYS[record.category]}`),
        connectionType: t(`connections.${CONNECTION_KEYS[record.connection]}`),
        status: record.status,
        dataFlow: t(`flows.${FLOW_KEYS[record.dataFlow]}`, { platform }),
      };
    }),
  };
}

export async function getSecurityContent(locale: ProductPageLocale): Promise<{
  copy: SecurityPageCopy;
  flow: readonly SecurityFlowStage[];
  controls: readonly SecurityControl[];
  limitations: readonly string[];
  incidentContact: string;
}> {
  const t = await getTranslations({ locale, namespace: 'productPages.security' });
  const product = productName();

  const flow: SecurityFlowStage[] = [
    {
      title: t('flow.s1Title'),
      description: t('flow.s1Description'),
      icon: 'solar:inbox-bold-duotone',
    },
    {
      title: t('flow.s2Title'),
      description: t('flow.s2Description'),
      icon: 'solar:shield-check-bold-duotone',
    },
    {
      title: t('flow.s3Title'),
      description: t('flow.s3Description'),
      icon: 'solar:user-circle-bold-duotone',
    },
    {
      title: t('flow.s4Title'),
      description: t('flow.s4Description'),
      icon: 'solar:checklist-minimalistic-bold-duotone',
    },
  ];

  const controlKeys = [
    'sourceAccess',
    'actions',
    'approval',
    'retention',
    'deletion',
    'escalation',
  ] as const;

  const controls: SecurityControl[] = controlKeys.map((key) => ({
    key,
    title: t(`controls.${key}.title`),
    description: t(`controls.${key}.description`, { product }),
    owner: t(`controls.${key}.owner`),
    evidence: t(`controls.${key}.evidence`),
  }));

  return {
    copy: {
      breadcrumb: t('breadcrumb'),
      eyebrow: t('eyebrow'),
      title: t('title', { product }),
      lead: t('lead', { product }),
      flowEyebrow: t('flow.eyebrow'),
      flowTitle: t('flow.title'),
      flowIntro: t('flow.intro'),
      controlsEyebrow: t('controls.eyebrow'),
      controlsTitle: t('controls.title'),
      controlsIntro: t('controls.intro'),
      controlLabel: t('labels.control'),
      ownerLabel: t('labels.owner'),
      evidenceLabel: t('labels.evidence'),
      limitationEyebrow: t('limitations.eyebrow'),
      limitationTitle: t('limitations.title'),
      incidentLabel: t('labels.incident'),
      ctaEyebrow: t('cta.eyebrow'),
      ctaTitle: t('cta.title'),
      ctaDescription: t('cta.description'),
      ctaLabel: t('cta.label'),
    },
    flow,
    controls,
    limitations: [
      t('limitations.item1'),
      t('limitations.item2'),
      t('limitations.item3'),
    ],
    incidentContact: CONTACT_EMAIL.toLowerCase(),
  };
}

export type ProductLegalKind = 'privacy' | 'terms';

const LEGAL_SECTION_KEYS = {
  privacy: [
    'controller',
    'publicSite',
    'purpose',
    'project',
    'sharing',
    'retention',
    'rights',
    'changes',
  ],
  terms: [
    'operator',
    'website',
    'inquiry',
    'scope',
    'demo',
    'thirdParty',
    'property',
    'liability',
    'changes',
  ],
} as const;

export async function getLegalContent(
  locale: ProductPageLocale,
  kind: ProductLegalKind,
): Promise<{
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  operatorLabel: string;
  domainLabel: string;
  effectiveLabel: string;
  updatedLabel: string;
  contentsLabel: string;
  effectiveDate: string;
  updatedDate: string;
  sections: readonly LegalDocumentSection[];
}> {
  const t = await getTranslations({
    locale,
    namespace: kind === 'privacy' ? 'productPages.privacy' : 'productPages.terms',
  });

  return {
    breadcrumb: t('breadcrumb'),
    eyebrow: t('eyebrow'),
    title: t('title'),
    lead: t('lead', { product: productName(), domain: SITE.domain }),
    operatorLabel: t('operatorLabel'),
    domainLabel: t('domainLabel'),
    effectiveLabel: t('effectiveLabel'),
    updatedLabel: t('updatedLabel'),
    contentsLabel: t('contentsLabel'),
    effectiveDate: t('effectiveDate'),
    updatedDate: t('updatedDate'),
    sections: LEGAL_SECTION_KEYS[kind].map((key) => ({
      id: `${kind}-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`,
      title: t(`sections.${key}Title`),
      body: t(`sections.${key}Body`),
    })),
  };
}
