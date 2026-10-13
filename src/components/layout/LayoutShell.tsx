"use client";

import { usePathname } from "@/i18n/navigation";
import { LandingNav } from "@/features/home/components/LandingNav";
import { LandingFooter } from "@/features/home/components/LandingFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { DevTools } from "@/components/dev/DevTools";
import { SiteLoadingOverlay } from "@/components/layout/SiteLoadingOverlay";
import { AiNowPageChrome } from "@/features/home/components/ainow/AiNowPageChrome";

interface LayoutShellProps {
  children: React.ReactNode;
}

export const LayoutShell = ({ children }: LayoutShellProps) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isInvoice =
    pathname === "/invoices" || pathname.startsWith("/invoices/");
  const isQuestionnaire = pathname.startsWith("/questionnaires/");

  // Admin and invoice pages own their complete page surface.
  if (isAdmin || isInvoice || isQuestionnaire) {
    return <>{children}</>;
  }

  // aiNOW landing surfaces own their complete blueprint navigation and footer.
  // This prevents the legacy shell from wrapping the refreshed blog and pricing pages.
  const isHomepage = pathname === "/";
  const isAiNowLandingSurface =
    isHomepage || pathname === "/pricing" || pathname === "/blog" || pathname.startsWith("/blog/");

  if (isAiNowLandingSurface) {
    return (
      <div className="flex min-h-dvh flex-col">
        <SiteLoadingOverlay />
        <SmoothScroll />
        <main className="flex-1">{children}</main>
        <DevTools />
      </div>
    );
  }

  const isFlushHero =
    pathname === "/start" || pathname === "/successful-payment";
  const hideFooter = pathname === "/successful-payment";
  const isTransactional = pathname.startsWith("/agreements") || pathname.startsWith("/onboarding");

  if (!isTransactional) {
    return (
      <div className="flex min-h-dvh flex-col">
        <SiteLoadingOverlay />
        <SmoothScroll />
        <AiNowPageChrome>
          <main className="ainow-public-page min-w-0 flex-1">{children}</main>
        </AiNowPageChrome>
        <DevTools />
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteLoadingOverlay />
      <SmoothScroll />
      <LandingNav />
      <main className={isFlushHero ? "flex-1" : "flex-1 pt-24"}>{children}</main>
      {!hideFooter && <LandingFooter />}
      <DevTools />
    </div>
  );
};
