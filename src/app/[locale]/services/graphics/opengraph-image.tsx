import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'AI Graphics & Video Production, Creative Studio | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesGraphics',
  badges: ['Motion', 'Video', 'Brand'],
  theme: 'amber-orange',
});
