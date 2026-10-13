import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'Business Automation, AI-Powered Process Automation | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesAutomation',
  badges: ['Workflows', 'AI Agents', 'Integrations'],
  theme: 'emerald-blue',
});
