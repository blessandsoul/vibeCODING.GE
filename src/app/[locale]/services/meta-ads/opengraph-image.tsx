import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'Meta Ads Management Georgia, Facebook & Instagram Advertising | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesMetaAds',
  badges: ['Facebook', 'Instagram', 'Advantage+'],
  theme: 'purple-cyan',
});
