import type { Metadata } from "next";

export const PREVIEW_NOINDEX_VALUE = "noindex, nofollow, noarchive";

export function isLandingClonePreview(): boolean {
  return !(
    process.env.NEXT_PUBLIC_LANDING_CLONE_PREVIEW === "0" &&
    process.env.LANDING_CLONE_PREVIEW === "0"
  );
}

type MetadataRobots = Extract<NonNullable<Metadata["robots"]>, object>;

export function previewRobots(authored: MetadataRobots): MetadataRobots {
  if (!isLandingClonePreview()) return authored;
  return {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: { index: false, follow: false, noarchive: true },
  };
}

export function isLandingCloneClientPreview(): boolean {
  return process.env.NEXT_PUBLIC_LANDING_CLONE_PREVIEW !== "0";
}

export function previewNoIndexHeaders(): Record<string, string> {
  return {
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": PREVIEW_NOINDEX_VALUE,
  };
}
