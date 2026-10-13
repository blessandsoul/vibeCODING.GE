import { createServiceOgImage, ogSize, ogContentType } from '@/features/services/og/createServiceOgImage';

export const runtime = 'nodejs';
export const alt = 'LLM SEO / GEO, Get Cited by ChatGPT, Claude, Gemini | aiNOW';
export const size = ogSize;
export const contentType = ogContentType;

export default createServiceOgImage({
  namespace: 'servicesLlmSeo',
  badges: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
});
