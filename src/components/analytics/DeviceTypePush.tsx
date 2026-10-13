'use client';

import { useEffect } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { isLandingCloneClientPreview } from '@/lib/landing-clone-preview';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function DeviceTypePush() {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  useEffect(() => {
    if (typeof window === 'undefined' || isLandingCloneClientPreview()) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'device_view',
      device_type: isMobile ? 'mobile' : 'desktop',
    });
  }, [isMobile]);

  return null;
}
