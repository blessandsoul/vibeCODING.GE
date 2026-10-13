import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'AI Influencer, Virtual Social-Media Persona | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesAiInfluencer',
  badges: ['Instagram', 'TikTok', 'YouTube'],
  theme: 'amber-orange',
});
