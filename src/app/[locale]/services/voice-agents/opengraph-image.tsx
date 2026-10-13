import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'AI Voice Agents, Automated Phone Calls 24/7 | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesVoiceAgents',
  badges: ['Vapi', 'Retell', 'OpenAI Realtime'],
  theme: 'emerald-blue',
});
