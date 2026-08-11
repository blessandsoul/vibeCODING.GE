"use client";

import { usePathname } from "@/i18n/navigation";
import { LandingNav } from "@/features/home/components/LandingNav";
import { LandingFooter } from "@/features/home/components/LandingFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { findPublicRoute } from "@/features/product-pages/routes";

interface LayoutShellProps {
  children: React.ReactNode;
}

export const LayoutShell = ({ children }: LayoutShellProps) => {
  // usePathname() is locale-stripped. Registered secondary pages own the same
  // 118px/96px hero clearance as the homepage and must not receive a second
  // generic padding layer. Unknown legacy routes retain the safe header offset.
  const pathname = usePathname();
  const publicRoute = findPublicRoute(pathname);
  const isRegisteredSecondary =
    publicRoute !== undefined && publicRoute.key !== 'home';
  const needsLegacyHeaderClearance =
    pathname !== "/" && !isRegisteredSecondary;

  return (
    <div className="flex min-h-dvh flex-col">
      <SmoothScroll />
      <LandingNav />
      <main
        data-public-route-key={publicRoute?.key}
        data-secondary-route={isRegisteredSecondary || undefined}
        className={needsLegacyHeaderClearance ? "flex-1 pt-24" : "flex-1"}
      >
        {children}
      </main>
      <LandingFooter />
    </div>
  );
};
