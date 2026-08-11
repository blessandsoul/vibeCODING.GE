import { PUBLIC_ROUTES, publishedRoute } from '@/features/product-pages/routes';

/**
 * Compatibility aliases for older shared components.
 *
 * Optional routes are undefined while unpublished. New navigation should
 * iterate PUBLIC_ROUTES directly so a disabled page cannot become an orphaned
 * link through a hand-maintained constant.
 */
export const ROUTES = {
  HOME: publishedRoute('home')?.path ?? '/',
  PRICING: publishedRoute('pricing')?.path,
  CONTACT: publishedRoute('contact')?.path,
  BLOG: publishedRoute('blog')?.path,
  INTEGRATIONS: publishedRoute('integrations')?.path,
  SECURITY: publishedRoute('security')?.path,
  PRIVACY: publishedRoute('privacy')?.path,
  TERMS: publishedRoute('terms')?.path,
  COOKIES: publishedRoute('cookies')?.path,
  SOLUTIONS: publishedRoute('solutions')?.path,
} as const;

export { PUBLIC_ROUTES };
