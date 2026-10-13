"use client";

import { useLocale, useTranslations } from "next-intl";
import { FadeIn } from "@/components/common/FadeIn";
import { projects } from "@/features/projects/data/projects";
import { ProjectCard } from "./ProjectCard";
import { getCaseProvenanceCopy } from "../lib/case-provenance";

export const ProjectsPageContent = () => {
    const t = useTranslations("projects");
    const provenanceCopy = getCaseProvenanceCopy(useLocale());

    const publicProjects = projects.filter((p) => p.kind !== "anonymous");
    const ndaCases = projects.filter((p) => p.kind === "anonymous");

    return (
        <div className="space-y-20 text-slate-900 dark:text-slate-100">
            {/* Header */}
            <FadeIn>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="font-headline text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl dark:text-white">
                        {t("title")}
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                            {provenanceCopy.collectionDescription}
                    </p>
                </div>
            </FadeIn>

            {/* Public Projects Section */}
            {publicProjects.length > 0 && (
                <div className="space-y-8">
                    <FadeIn>
                        <div className="border-b border-black/[0.08] pb-4 dark:border-white/10">
                            <h2 className="font-headline text-2xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">
                                {t("publicTitle")}
                            </h2>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                {t("publicSubtitle")}
                            </p>
                        </div>
                    </FadeIn>
                    <div className="grid gap-8 md:grid-cols-2">
                        {publicProjects.map((project, index) => (
                            <FadeIn key={project.slug} delay={0.1 + index * 0.15}>
                                <ProjectCard project={project} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            )}

            {/* NDA Cases Section */}
            {ndaCases.length > 0 && (
                <div className="space-y-8">
                    <FadeIn>
                        <div className="border-b border-black/[0.08] pb-4 dark:border-white/10">
                            <h2 className="font-headline text-2xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">
                                {provenanceCopy.familyHeading}
                            </h2>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                {provenanceCopy.familySubtitle}
                            </p>
                        </div>
                    </FadeIn>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {ndaCases.map((project, index) => (
                            <FadeIn key={project.slug} delay={0.05 + (index % 3) * 0.08}>
                                <ProjectCard project={project} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
