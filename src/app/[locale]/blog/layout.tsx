import type { ReactNode } from "react";

import { AiNowPageChrome } from "@/features/home/components/ainow/AiNowPageChrome";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <AiNowPageChrome>{children}</AiNowPageChrome>;
}
