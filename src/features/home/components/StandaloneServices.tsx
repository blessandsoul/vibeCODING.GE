"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/common/FadeIn";
import { Ico } from "@/components/common/Ico";
import { cn } from "@/lib/utils";

const services = [
  {
    key: "aiVideo",
    icon: "solar:videocamera-bold-duotone",
    iconColor: "text-blue-500",
    recurring: true,
    tags: [
      {
        icon: "solar:videocamera-bold-duotone",
        textKey: "aiVideoTag1",
        color: "text-[#525252]",
      },
      {
        icon: "solar:magic-stick-3-bold-duotone",
        textKey: "aiVideoTag2",
        color: "text-[#525252]",
      },
      {
        icon: "solar:refresh-circle-bold-duotone",
        textKey: "aiVideoTag3",
        color: "text-[#525252]",
      },
      {
        icon: "solar:file-text-bold-duotone",
        textKey: "aiVideoTag4",
        color: "text-[#525252]",
      },
    ],
  },
  {
    key: "excelDaily",
    icon: "solar:file-text-bold-duotone",
    iconColor: "text-emerald-500",
    recurring: true,
    tags: [
      {
        icon: "solar:calendar-bold-duotone",
        textKey: "excelDailyTag1",
        color: "text-[#525252]",
      },
      {
        icon: "solar:inbox-bold-duotone",
        textKey: "excelDailyTag2",
        color: "text-[#525252]",
      },
      {
        icon: "solar:transfer-horizontal-bold-duotone",
        textKey: "excelDailyTag3",
        color: "text-[#525252]",
      },
      {
        icon: "solar:settings-bold-duotone",
        textKey: "excelDailyTag4",
        color: "text-[#525252]",
      },
      {
        icon: "solar:check-circle-bold-duotone",
        textKey: "excelDailyTag5",
        color: "text-[#525252]",
      },
      {
        icon: "solar:eye-bold-duotone",
        textKey: "excelDailyTag6",
        color: "text-[#525252]",
      },
    ],
  },
  {
    key: "aiAvatar",
    icon: "solar:user-circle-bold-duotone",
    iconColor: "text-purple-500",
    recurring: false,
    tags: [
      {
        icon: "solar:magic-stick-3-bold-duotone",
        textKey: "aiAvatarTag1",
        color: "text-[#525252]",
      },
      {
        icon: "solar:infinity-bold-duotone",
        textKey: "aiAvatarTag2",
        color: "text-[#525252]",
      },
    ],
  },
] as const;

export const StandaloneServices = () => {
  const t = useTranslations("pricing");

  return (
    <FadeIn delay={0.28}>
      <div className="mx-auto mt-8 max-w-3xl">
        {/* Section header */}
        <div className="mb-3 flex items-center gap-2 px-1">
          <Ico
            name="solar:magic-stick-3-bold-duotone"
            className="h-4 w-4 text-[#7c3aed]"
          />
          <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-[#525252]">
            {t("standaloneTitle")}
          </p>
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-2">
          {services.map(({ key, icon, iconColor, recurring, tags }) => (
            <div
              key={key}
              className="flex flex-col items-start gap-3 rounded-xl border border-[#e5e5e5] bg-white px-5 py-4 transition duration-200 hover:border-[#7c3aed] hover:shadow-[0_18px_40px_rgba(124,58,237,0.12)] sm:flex-row sm:items-center sm:gap-4"
            >
              {/* Icon */}
              <Ico name={icon} className={cn("h-5 w-5 shrink-0", iconColor)} />

              {/* Name + tags */}
              <div className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-sm font-bold text-neutral-900">
                  {t(`${key}Name`)}
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {tags.map(({ icon, textKey, color }) => (
                    <span
                      key={textKey}
                      className={cn("flex items-center gap-1 text-xs", color)}
                    >
                      <Ico name={icon} className="h-3 w-3 shrink-0" />
                      {t(textKey)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="shrink-0 text-left sm:text-right">
                <span className="stat-number text-xl font-bold tabular-nums text-neutral-900">
                  {t(`${key}Price`)}₾
                </span>
                {recurring && (
                  <span className="ml-0.5 text-xs text-[#525252]">
                    {t("monthly")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};
