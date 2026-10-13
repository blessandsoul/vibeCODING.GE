import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'Bot Development, Telegram, WhatsApp, AI Chatbot | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesBots',
  badges: ['Telegram', 'WhatsApp', 'AI Chatbot'],
});
