import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'AI Mascot Characters for Your Brand | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesAiCharacters',
  badges: ['Mascot', 'Talking Object', '3D'],
  theme: 'amber-orange',
});
