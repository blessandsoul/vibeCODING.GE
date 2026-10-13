import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { isLandingClonePreview, previewNoIndexHeaders } from "./lib/landing-clone-preview";
import { isPartnerKitAccessToken } from "./lib/partner-kit-access";

const intlMiddleware = createMiddleware(routing);
const locales = new Set<string>(routing.locales);

function previewHeaders(response: NextResponse): NextResponse {
  if (isLandingClonePreview()) {
    for (const [name, value] of Object.entries(previewNoIndexHeaders())) response.headers.set(name, value);
  }
  return response;
}

function isPartnerKitPath(pathname: string): boolean {
  const segments = pathname.split("/").filter(Boolean);
  return (
    (segments.length === 2 && segments[0] === "partners" && segments[1] === "kit") ||
    (segments.length === 3 && locales.has(segments[0]) && segments[1] === "partners" && segments[2] === "kit")
  );
}

function preservePartnerKitNotFound(request: NextRequest, response: NextResponse): NextResponse {
  if (!isPartnerKitPath(request.nextUrl.pathname)) return response;

  // Keep canonical redirects intact; the redirected request is checked again at its final URL.
  if (response.status >= 300 && response.status < 400) return response;

  const tokenValues = request.nextUrl.searchParams.getAll("token");
  const token = tokenValues.length === 1 ? tokenValues[0] : tokenValues;
  if (isPartnerKitAccessToken(token)) return response;
  if (response.status === 404) return response;

  const notFound = request.nextUrl.clone();
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const locale = locales.has(segments[0]) ? segments[0] : routing.defaultLocale;
  notFound.pathname = `/${locale}/__partner_kit_not_found__`;
  notFound.search = "";
  const headers = new Headers(response.headers);
  headers.delete("x-middleware-next");
  headers.delete("x-middleware-rewrite");
  headers.set("x-middleware-rewrite", notFound.toString());
  return new NextResponse(response.body, { status: 404, headers });
}

/** Public locale routing only; source admin/auth/legacy maps are not public adapters. */
export default function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const isLoopbackPreview = request.nextUrl.hostname === "localhost" || request.nextUrl.hostname === "127.0.0.1";
  if (isLoopbackPreview && (pathname === "/ka" || pathname.startsWith("/ka/"))) {
    const headers = new Headers(request.headers);
    headers.set("X-NEXT-INTL-LOCALE", routing.defaultLocale);
    return previewHeaders(preservePartnerKitNotFound(request, NextResponse.next({ request: { headers } })));
  }
  return previewHeaders(preservePartnerKitNotFound(request, intlMiddleware(request)));
}

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
