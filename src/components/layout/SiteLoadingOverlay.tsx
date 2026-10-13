"use client";

import React, { useEffect, useState } from "react";
import { SiteSkeletonScreen } from "@/features/home/components/ainow/SiteSkeletonScreen";

export function SiteLoadingOverlay() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Smoothly dissolve skeleton after page mounts
    const timer = setTimeout(() => {
      setMounted(true);
    }, 150);

    const cleanupTimer = setTimeout(() => {
      setVisible(false);
    }, 850);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      data-testid="site-loading-overlay"
      aria-hidden={mounted}
      className={`fixed inset-0 z-[9999] w-full h-full overflow-y-auto overflow-x-hidden bg-[#fcfcfb] dark:bg-[#0a0b0e] transition-opacity duration-700 ease-out ${
        mounted ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <SiteSkeletonScreen />
    </div>
  );
}
