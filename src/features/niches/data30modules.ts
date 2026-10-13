/**
 * Explicit ownership map for the inherited thirty niche routes.
 *
 * These routes are borrowed aiCHATS pages on the non-pilot family clients;
 * this file carries routing/ownership facts only. The authored KA/EN/RU
 * content remains in the thirty data modules, while article objects stay
 * target-local and are never imported from the aiCHATS pilot.
 */
export const AI_CHATS_NICHE_REFERENCE = {
  product: 'aiCHATS',
  company: 'aiNOW',
  // The inherited thirty routes exist on the aiNOW source site. aiCHATS is
  // the product owner for demo/contact destinations, not these route URLs.
  sourceSite: 'https://ainow.ge',
  companySite: 'https://ainow.ge',
  productSite: 'https://aichats.ge',
  demoPath: '/solutions/ai-chatbot',
  authoredLocales: ['ka', 'en', 'ru'] as const,
  fallbackLocale: 'ka',
  robots: { index: false, follow: true } as const,
} as const;

export const AI_CHATS_NICHE_KEYS = [
  'aesthetic',
  'autoimport',
  'autoservice',
  'barbershop',
  'beauty',
  'cleaning',
  'dental',
  'derma',
  'driving',
  'event',
  'fitness',
  'homeservices',
  'hotel',
  'interior',
  'language',
  'legal',
  'medical',
  'nutrition',
  'photographer',
  'physio',
  'plasticsurgery',
  'realestate',
  'renovation',
  'restaurant',
  'school',
  'shop',
  'spa',
  'tattoo',
  'tour',
  'vet',
] as const;

export type AiChatsNicheKey = (typeof AI_CHATS_NICHE_KEYS)[number];

export function isAiChatsNicheKey(key: string): key is AiChatsNicheKey {
  return (AI_CHATS_NICHE_KEYS as readonly string[]).includes(key);
}
