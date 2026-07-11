"use client";

import { usePathname } from "@/i18n/navigation";
import { LandingNav } from "@/features/home/components/LandingNav";
import { LandingFooter } from "@/features/home/components/LandingFooter";
import { SmoothScroll } from "@/components/SmoothScroll";

interface LayoutShellProps {
  children: React.ReactNode;
}

export const LayoutShell = ({ children }: LayoutShellProps) => {
  // LandingNav is position:fixed and floats over the content, so an inner page needs top
  // padding to clear it. The homepage pulls its hero flush under the nav via -mt-16 and must
  // stay flush, or a white gap opens above the hero. usePathname() from next-intl returns the
  // locale-stripped path, so "/" matches on every locale.
  //
  // The old "/start" and "/successful-payment" branches came from ainow.ge and named routes
  // that do not exist on a product landing.
  const pathname = usePathname();
  const isFlushHero = pathname === "/";

  return (
    <div className="flex min-h-dvh flex-col">
      <SmoothScroll />
      <LandingNav />
      <main className={isFlushHero ? "flex-1" : "flex-1 pt-24"}>{children}</main>
      <LandingFooter />
    </div>
  );
};
