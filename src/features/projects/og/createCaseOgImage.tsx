// OG image for anonymized case-study pages. Mirrors the service OG factory
// (features/services/og/createServiceOgImage) but sources text from the case data
// (getProject) and tints the artwork with the case category accent.

import { ImageResponse } from "next/og";
import { getProject } from "@/features/projects/data/projects";
import { categoryVisual } from "@/features/projects/lib/categories";
import { getCaseProvenanceCopy } from "@/features/projects/lib/case-provenance";
import { APP_NAME } from "@/lib/constants/app.constants";
import { ogFonts } from "@/features/blog/lib/georgian-font";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png" as const;

type Lang = "ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh";
const OG_COPY_LOCALES = new Set(["ka", "en", "ru"]);

function hexToRgba(hex: string, a: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export async function CaseOgImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const effectiveLocale = OG_COPY_LOCALES.has(locale) ? locale : "en";
  const lang = effectiveLocale as Lang;
  const project = getProject(slug);
  const provenanceCopy = getCaseProvenanceCopy(effectiveLocale, APP_NAME);

  const title = project?.title?.[lang] ?? project?.title?.en ?? project?.name ?? "aiNOW case study";
  const categoryLabel = project?.categoryLabel?.[lang] ?? project?.categoryLabel?.en ?? "Case study";
  const eyebrow = project?.provenance === "ainow-family-workflow"
    ? `${provenanceCopy.familyBadge} · ${categoryLabel}`
    : categoryLabel;
  const accent = categoryVisual(project?.category).accent;
  const firstMetric = project?.metrics?.[0];
  const metricValue = firstMetric ? firstMetric.after[lang] ?? firstMetric.after.en ?? "" : "";
  const metricAfter = firstMetric
    ? project?.provenance === "ainow-family-workflow"
      ? `${provenanceCopy.familyResults}: ${metricValue}`
      : metricValue
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08080d",
          backgroundImage: "linear-gradient(135deg, #0a0a14 0%, #0f0820 50%, #051218 100%)",
          padding: "72px",
          position: "relative",
          fontFamily: '"Noto Sans Georgian", sans-serif',
        }}
      >
        <div style={{ position: "absolute", top: "-15%", right: "-10%", width: "700px", height: "700px", borderRadius: "50%", background: `radial-gradient(circle, ${hexToRgba(accent, 0.38)} 0%, rgba(0,0,0,0) 65%)`, filter: "blur(40px)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-5%", width: "600px", height: "600px", borderRadius: "50%", background: `radial-gradient(circle, ${hexToRgba(accent, 0.22)} 0%, rgba(0,0,0,0) 65%)`, filter: "blur(40px)", display: "flex" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 18px", border: `1px solid ${hexToRgba(accent, 0.4)}`, borderRadius: "999px", background: hexToRgba(accent, 0.08) }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: accent, display: "flex" }} />
            <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", fontWeight: 600, letterSpacing: "0.08em" }}>{project?.provenance === "ainow-family-workflow" ? provenanceCopy.familyBadge : "aiNOW project"}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 18px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", background: "rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", fontWeight: 600, letterSpacing: "0.08em" }}>aiNOW.ge</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", zIndex: 10, maxWidth: "1010px" }}>
          <span style={{ fontSize: "22px", color: accent, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "20px" }}>
            {eyebrow}
          </span>
          <h1 style={{ fontSize: "66px", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, color: "#ffffff" }}>
            {title}
          </h1>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px" }}>
          {metricAfter ? (
            <span style={{ fontSize: "24px", color: "#ffffff", fontWeight: 700 }}>{metricAfter}</span>
          ) : (
            <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>AI Agency in Georgia · aiNOW</span>
          )}
          <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>ainow.ge</span>
        </div>
      </div>
    ),
    { ...ogSize, fonts: ogFonts },
  );
}
