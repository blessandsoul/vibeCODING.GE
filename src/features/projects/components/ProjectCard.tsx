"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import type { ClassifiedProject } from "../types/project.types";
import { getCaseProvenanceCopy } from "../lib/case-provenance";
import { cn } from "@/lib/utils";
import { Ico } from "@/components/common/Ico";
import { categoryVisual } from "../lib/categories";

// Compass kept as fallback icon for unknown project slugs

const projectIcons: Record<string, string> = {
  glow: "solar:magic-stick-3-bold-duotone",
  tulip: "solar:leaf-bold-duotone",
  techbrain: "solar:camera-bold-duotone",
  aicontent: "solar:gallery-bold-duotone",
  aiads: "solar:chart-2-bold-duotone",
  aistaff: "solar:chat-round-dots-bold-duotone",
  iai: "solar:widget-5-bold-duotone",
  aitaxi: "solar:map-point-bold-duotone",
};

interface ProjectCardProps {
  project: ClassifiedProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const locale = useLocale();
  const isAnonymous = project.kind === "anonymous";
  const isFamilyWorkflow = project.provenance === "ainow-family-workflow";
  const provenanceCopy = getCaseProvenanceCopy(locale);
  const cat = categoryVisual(project.category);
  const iconName = isAnonymous
    ? cat.icon
    : (projectIcons[project.slug] ?? "solar:compass-bold-duotone");
  const displayTitle =
    project.title?.[locale as "ka" | "en" | "ru"] ?? project.title?.en ?? project.name;
  const categoryLabel =
    project.categoryLabel?.[locale as "ka" | "en" | "ru"] ?? project.categoryLabel?.en;
  const description = project.description[locale as "ka" | "en" | "ru"] ?? project.description.en ?? project.description.ru;
  const displayedDescription = isFamilyWorkflow
    ? `${provenanceCopy.familyDescriptionPrefix} ${description}`
    : description;
  const cardContent = (
    <article
      className={cn(
      "dodo-glass-card overflow-hidden h-full flex flex-col justify-between",
      "transition duration-300 hover:-translate-y-0.5 hover:shadow-xl",
      )}
    >
      {/* Preview area: screenshot (public) or category icon on accent tint (anonymous) */}
      <div
        className={cn(
          "relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden shrink-0",
          !isAnonymous && "bg-blue-500/[0.06] dark:bg-blue-400/[0.08]",
        )}
        style={
          isAnonymous
            ? { background: `linear-gradient(135deg, ${cat.accent}14, ${cat.accent}05 55%, transparent)` }
            : undefined
        }
      >
        {project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : isAnonymous ? (
          <>
            <Ico
              name={iconName}
              className="h-14 w-14 transition-transform duration-300 group-hover:scale-110"
              style={{ color: cat.accent }}
            />
            {categoryLabel && (
              <span
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: cat.accent }}
              >
                {categoryLabel}
              </span>
            )}
          </>
        ) : (
          <>
            <Ico
              name={iconName}
              className="h-12 w-12 text-blue-600/40 transition-colors duration-300 group-hover:text-blue-600/75 dark:text-blue-300/45 dark:group-hover:text-blue-300/80"
            />
            <span className="text-sm font-medium text-slate-500/70 dark:text-slate-400/70">
              {project.url?.replace("https://", "")}
            </span>
          </>
        )}
      </div>

          <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-headline line-clamp-2 text-lg font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">
              {displayTitle}
            </h3>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-xs font-medium shrink-0",
                isAnonymous
                  ? "bg-amber-500/10 text-amber-700 dark:text-amber-300"
                  : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
              )}
            >
              {isFamilyWorkflow ? provenanceCopy.familyBadge : provenanceCopy.publicBadge}
            </span>
          </div>

          <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
            {displayedDescription}
          </p>
        </div>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="dodo-glass-inset rounded-md px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
              <span className="dodo-glass-inset rounded-md px-2 py-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (isAnonymous) {
    return (
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="group block h-full"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <a
      href={project.url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      {cardContent}
    </a>
  );
};
