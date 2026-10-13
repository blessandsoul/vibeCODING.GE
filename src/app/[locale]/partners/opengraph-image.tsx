import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { ogFonts } from "@/features/blog/lib/georgian-font";

export const runtime = "nodejs";
export const alt = "aiNOW Partner Program";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partners" });
  const title = t("heroTitle");
  const eyebrow = t("badge");

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
          backgroundImage:
            "linear-gradient(135deg, #0a0a14 0%, #150826 50%, #0a0518 100%)",
          padding: "72px",
          position: "relative",
          fontFamily: '"Noto Sans Georgian", sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-10%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(150,80,255,0.35) 0%, rgba(0,0,0,0) 65%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(224,64,251,0.30) 0%, rgba(0,0,0,0) 65%)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 18px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#e040fb",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              aiNOW.ge
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
            maxWidth: "1000px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            {eyebrow}
          </span>
          <h1
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
              backgroundImage:
                "linear-gradient(120deg, #ffffff 0%, #d8c4ff 50%, #ffc6f5 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            Partner Program · 10-25% commission
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.55)",
              fontWeight: 500,
            }}
          >
            ainow.ge/partners
          </span>
        </div>
      </div>
    ),
    { ...size, fonts: ogFonts },
  );
}
