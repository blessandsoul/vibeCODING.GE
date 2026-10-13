export const CHAT_PLAN_SLUGS = [
  'starter',
  'business',
  'premium',
  'enterprise',
  'custom',
] as const;

export type ChatPlanSlug = (typeof CHAT_PLAN_SLUGS)[number];

export interface ChatPlan {
  slug: ChatPlanSlug;
  name: 'Starter' | 'Business' | 'Premium' | 'Enterprise' | 'Custom';
  serviceLevel: 'Nemo Lite' | 'Nemo Smart' | 'Nemo Pro' | 'Nemo Ultra' | 'Nemo Custom';
  price: number;
  replies: number;
  accounts: number;
  knowledgeRecords: number;
  monthlyUpdates: number;
  aiCallMinutesPerMonth: number;
  photoOcrPerMonth: number | null;
  voiceMessagesPerMonth: number | null;
  instagramActionsPerMonth: number | null;
  followUpsPerMonth: number | null;
  popular: boolean;
  ragEnabled: boolean;
  customFeatureRequest: boolean;
}

export const CHAT_PLANS: readonly ChatPlan[] = [
  {
    slug: 'starter',
    name: 'Starter',
    serviceLevel: 'Nemo Lite',
    price: 220,
    replies: 3_000,
    accounts: 1,
    knowledgeRecords: 100,
    monthlyUpdates: 0,
    aiCallMinutesPerMonth: 0,
    photoOcrPerMonth: 100,
    voiceMessagesPerMonth: 100,
    instagramActionsPerMonth: 100,
    followUpsPerMonth: 100,
    popular: false,
    ragEnabled: false,
    customFeatureRequest: false,
  },
  {
    slug: 'business',
    name: 'Business',
    serviceLevel: 'Nemo Smart',
    price: 450,
    replies: 8_000,
    accounts: 3,
    knowledgeRecords: 500,
    monthlyUpdates: 1_000,
    aiCallMinutesPerMonth: 0,
    photoOcrPerMonth: 250,
    voiceMessagesPerMonth: 250,
    instagramActionsPerMonth: 250,
    followUpsPerMonth: 250,
    popular: false,
    ragEnabled: true,
    customFeatureRequest: false,
  },
  {
    slug: 'premium',
    name: 'Premium',
    serviceLevel: 'Nemo Pro',
    price: 900,
    replies: 25_000,
    accounts: 5,
    knowledgeRecords: 2_000,
    monthlyUpdates: 4_000,
    aiCallMinutesPerMonth: 0,
    photoOcrPerMonth: 1_500,
    voiceMessagesPerMonth: 1_500,
    instagramActionsPerMonth: 1_500,
    followUpsPerMonth: 1_500,
    popular: false,
    ragEnabled: true,
    customFeatureRequest: false,
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    serviceLevel: 'Nemo Ultra',
    price: 2_500,
    replies: 75_000,
    accounts: 10,
    knowledgeRecords: 5_000,
    monthlyUpdates: 10_000,
    aiCallMinutesPerMonth: 100,
    photoOcrPerMonth: null,
    voiceMessagesPerMonth: null,
    instagramActionsPerMonth: null,
    followUpsPerMonth: null,
    popular: true,
    ragEnabled: true,
    customFeatureRequest: true,
  },
  {
    slug: 'custom',
    name: 'Custom',
    serviceLevel: 'Nemo Custom',
    price: 0,
    replies: 0,
    accounts: 0,
    knowledgeRecords: 5_001,
    monthlyUpdates: 0,
    aiCallMinutesPerMonth: 0,
    photoOcrPerMonth: null,
    voiceMessagesPerMonth: null,
    instagramActionsPerMonth: null,
    followUpsPerMonth: null,
    popular: false,
    ragEnabled: true,
    customFeatureRequest: true,
  },
] as const;

export function formatChatPlanNumber(value: number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
}
