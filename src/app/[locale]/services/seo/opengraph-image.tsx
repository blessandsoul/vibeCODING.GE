import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'SEO Georgia, Rank #1 on Google Tbilisi | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesSeo',
  badges: ['Google', 'Local SEO', 'Content'],
  theme: 'emerald-blue',
});
