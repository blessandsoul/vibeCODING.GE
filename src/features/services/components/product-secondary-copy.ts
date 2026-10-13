import ka from '../data/vibecoding-secondary-ka.json';
import en from '../data/vibecoding-secondary-en.json';
import ru from '../data/vibecoding-secondary-ru.json';
import { createServiceTemplateCopy } from './service-template-copy';

export const PRODUCT_SECONDARY_LOCALES = ['ka', 'en', 'ru'] as const;
export type ProductSecondaryKind = 'integrations' | 'security';
const PRODUCT_NAME = 'vibeCODING';

const PLANNED_INTEGRATION_COPY: Record<string, Partial<Record<'ka' | 'en' | 'ru', string>>> = {
  'tiktok-api-review': {
    ka: "TikTok Login-ის, Content Posting-ისა და webhook-ების დაკავშირების შემოწმება და განხორციელება დაგეგმილია; მზა TikTok-კონექტორი ჯერჯერობით ხელმისაწვდომი არ არის.",
    ru: "Проверка и настройка интеграций TikTok Login, Content Posting и webhook запланированы; готовый коннектор TikTok сейчас недоступен.",
  },
};
type ControlEntry = { title: string; description: string; owner: string; evidence: string };
type SecurityControls = {
  eyebrow: string;
  title: string;
  intro: string;
  sourceAccess: ControlEntry;
  actions: ControlEntry;
  approval: ControlEntry;
  retention: ControlEntry;
  deletion: ControlEntry;
  escalation: ControlEntry;
};
type SecondaryMessages = {
  integrations: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    ledger: { title: string; intro: string };
    status: Record<string, string>;
    platforms: Record<string, string>;
    connections: Record<string, string>;
    flows: Record<string, string>;
    cta: { label: string };
  };
  security: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    labels: Record<string, string>;
    flow: Record<string, string>;
    controls: SecurityControls;
    limitations: { eyebrow: string; title: string; item1: string; item2: string; item3: string };
    cta: { label: string };
  };
};

const content = { ka, en, ru } as unknown as Record<'ka' | 'en' | 'ru', SecondaryMessages>;

type IntegrationRecord = {
  id: string;
  name: string;
  icon: string;
  category: string;
  connection: string;
  status: 'available' | 'customSetup' | 'planned';
  dataFlow: string;
  machineDescription?: string;
  requirements?: readonly string[];
  officialSources?: readonly string[];
};

const records: readonly IntegrationRecord[] = [
  {
    "id": "public-app",
    "name": "Public application",
    "icon": "solar:global-bold-duotone",
    "category": "development",
    "connection": "direct",
    "status": "available",
    "dataFlow": "sourceReview"
  },
  {
    "id": "source-repository",
    "name": "Source repository",
    "icon": "solar:code-square-bold-duotone",
    "category": "development",
    "connection": "custom",
    "status": "customSetup",
    "dataFlow": "sourceReview"
  },
  {
    "id": "api",
    "name": "API",
    "icon": "solar:server-square-cloud-bold-duotone",
    "category": "development",
    "connection": "custom",
    "status": "customSetup",
    "dataFlow": "sourceReview"
  },
  {
    "id": "database",
    "name": "Database",
    "icon": "solar:database-bold-duotone",
    "category": "development",
    "connection": "custom",
    "status": "customSetup",
    "dataFlow": "sourceReview"
  },
  {
    "id": "tiktok-api-review",
    "name": "TikTok developer APIs",
    "icon": "solar:videocamera-record-bold-duotone",
    "category": "development",
    "connection": "planned",
    "status": "planned",
    "dataFlow": "sourceReview",
    "machineDescription": "Reviewing and implementing TikTok Login, Content Posting and webhook integrations is on the aiNOW roadmap. A ready TikTok connector is not currently available.",
    "requirements": [
      "TikTok application review",
      "Approved scopes for the selected API",
      "Eligible account and verified callback or upload domains"
    ],
    "officialSources": [
      "https://developers.tiktok.com/doc/login-kit-overview",
      "https://developers.tiktok.com/doc/content-posting-api-get-started/",
      "https://developers.tiktok.com/doc/webhooks-overview"
    ]
  }
];

export function getProductSecondaryLocale(locale: string): keyof typeof content {
  return locale === 'ka' || locale === 'ru' ? locale : 'en';
}

const replaceProduct = (text: string, platform = '') =>
  text.replaceAll('{product}', PRODUCT_NAME).replaceAll('{platform}', platform);

const buildSteps = (security: SecondaryMessages['security']) =>
  [1, 2, 3, 4].map((index) => ({
    title: security.flow[`s${index}Title`],
    description: security.flow[`s${index}Description`],
  }));

export function getProductSecondaryTemplateCopy(locale: string, kind: ProductSecondaryKind) {
  const contentLocale = getProductSecondaryLocale(locale);
  const messages = content[contentLocale];
  const security = messages.security;
  const steps = buildSteps(security);
  const controls = ['sourceAccess', 'actions', 'approval', 'retention', 'deletion', 'escalation'] as const;

  if (kind === 'security') {
    const copy = createServiceTemplateCopy({
      title: replaceProduct(security.title),
      body: replaceProduct(security.lead),
      heroEyebrow: security.eyebrow,
      heroTitle: PRODUCT_NAME,
      heroTitleAccent: security.eyebrow,
      showcaseLabel: security.labels.control,
      showcaseTitles: controls.map((key) => security.controls[key].title),
      showcaseItems: controls.map((key) => replaceProduct(security.controls[key].description)),
      stepItems: steps,
      howTitle: security.flow.title,
      nodeTitle: security.flow.title,
      nodeSubtitle: security.flow.intro,
      nodeStatLabels: [security.flow.title, security.controls.title, security.limitations.title],
      nodeStatValues: ['4', '6', '3'],
      faqTitle: security.controls.title,
      faq: controls.map((key) => ({
        q: security.controls[key].title,
        a: replaceProduct(security.controls[key].description),
      })),
      cta: { cta: security.cta.label },
      article: {
        sections: [{
          h: security.limitations.title,
          p: [
            security.limitations.item1,
            security.limitations.item2,
            security.limitations.item3,
          ].join(' '),
        }],
        aeoH: replaceProduct(security.title),
        aeoBody: replaceProduct(security.lead),
      },
    });
    return {
      ...copy,
      seoTitle: replaceProduct(security.seoTitle),
      seoDescription: replaceProduct(security.seoDescription),
    };
  }

  const integration = messages.integrations;
  const recordDetails = records.map((record) => {
    const platform = integration.platforms?.[record.id] ?? record.name;
    const statusLabel = integration.status[record.status];
    const connectionLabel = integration.connections[record.connection];
    const flow = replaceProduct(integration.flows[record.dataFlow], platform);
    const body = record.status === 'planned'
      ? PLANNED_INTEGRATION_COPY[record.id]?.[contentLocale] ?? record.machineDescription ?? `${statusLabel} · ${connectionLabel}. ${flow}`
      : `${statusLabel} · ${connectionLabel}. ${flow}`;
    return { title: platform, body };
  });
  const copy = createServiceTemplateCopy({
    title: replaceProduct(integration.title),
    body: replaceProduct(integration.lead),
    heroEyebrow: integration.eyebrow,
    heroTitle: PRODUCT_NAME,
    heroTitleAccent: integration.eyebrow,
    showcaseLabel: integration.eyebrow,
    showcaseTitles: recordDetails.map((record) => record.title),
    showcaseItems: recordDetails.map((record) => record.body),
    stepItems: steps,
    howTitle: security.flow.title,
    nodeTitle: security.flow.title,
    nodeSubtitle: integration.ledger.intro,
    nodeStatLabels: [integration.status.available, integration.status.customSetup, integration.status.planned],
    nodeStatValues: [
      String(records.filter((record) => record.status === 'available').length),
      String(records.filter((record) => record.status === 'customSetup').length),
      String(records.filter((record) => record.status === 'planned').length),
    ],
    faqTitle: integration.ledger.title,
    faq: recordDetails.map((record) => ({ q: record.title, a: record.body })),
    cta: { cta: integration.cta.label },
    article: {
      sections: [{ h: integration.ledger.title, p: integration.ledger.intro }],
      aeoH: replaceProduct(integration.title),
      aeoBody: replaceProduct(integration.lead),
    },
  });
  return {
    ...copy,
    seoTitle: replaceProduct(integration.seoTitle),
    seoDescription: replaceProduct(integration.seoDescription),
  };
}
