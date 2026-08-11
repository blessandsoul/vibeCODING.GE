"use client";

import { ThemeProvider } from "next-themes";
import { SITE } from "@/config/site";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  // Light is the product default. A product-scoped key prevents a stale theme
  // from another localhost app from turning this landing dark on first visit.
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey={`${SITE.key}-theme`}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
