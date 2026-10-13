const PRIVATE_ROUTE = /^\/(?:(?:ka|en|ru|de|tr|fa|zh)\/)?(?:admin|agreements|invoices|questionnaires|onboarding)(?:\/|$)/;

export function isPrivateRoute(pathname: string | null): boolean {
  return pathname === null || PRIVATE_ROUTE.test(pathname);
}
