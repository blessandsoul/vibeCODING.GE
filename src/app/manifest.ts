import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "vibeCODING",
    short_name: "vibeCODING",
    description: "Security and production-readiness review for AI-built applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfcfc",
    theme_color: "#ff365f",
    icons: [
      { src: "/icon.svg?v=17-20260811", type: "image/svg+xml", sizes: "any" },
    ],
  };
}
