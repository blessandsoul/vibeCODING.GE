"use client";

import { usePathname } from "next/navigation";
import { isPrivateRoute } from "@/lib/private-routes";
import { AistaffWidget } from "./AistaffWidget";
import { FacebookPixel } from "@/components/analytics/FacebookPixel";
import { AnalyticsConsent } from "@/components/analytics/AnalyticsConsent";
import { DeviceTypePush } from "@/components/analytics/DeviceTypePush";
import { AistaffLeadBridge } from "@/components/analytics/AistaffLeadBridge";
import { WebMcpProvider } from "@/components/agent/WebMcpProvider";

/** Do not initialize third-party marketing scripts on client documents. */
export function PublicIntegrations() {
  const pathname = usePathname();
  if (isPrivateRoute(pathname)) return null;
  return <>
    <AistaffWidget />
    <WebMcpProvider />
    <FacebookPixel />
    <AnalyticsConsent />
    <DeviceTypePush />
    <AistaffLeadBridge />
  </>;
}
