"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  // Light-only: the redesigned nav/footer + the white dot-grid canvas are built
  // for light, and the theme toggle was removed, so lock the theme to light.
  // This guarantees the white background always pairs with dark text.
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      {children}
    </ThemeProvider>
  );
};
