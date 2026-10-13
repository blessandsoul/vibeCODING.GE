import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'AI Consulting, Readiness, Roadmap, Use Cases | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesConsulting',
  badges: ['Readiness', 'Roadmap', 'Use Cases'],
  theme: 'emerald-blue',
});
