import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

// Metadata routes are build-time and cannot read the Host header or the locale, so the
// manifest copy lives in src/config/site.ts (English) rather than in the i18n messages.
// It used to be hardcoded to "aiNOW", which meant every split landing advertised the
// parent agency's name as its PWA title.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.manifest.name,
    short_name: SITE.manifest.short,
    description: SITE.manifest.description,
    start_url: "/",
    display: "standalone",
    background_color: SITE.manifest.background,
    theme_color: SITE.manifest.theme,
    icons: [
      { src: "/icon.png", type: "image/png", sizes: "192x192" },
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
