import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SiteSkeletonScreen() {
  return (
    <div className="relative w-full min-h-screen bg-[#fcfcfb] dark:bg-[#0a0b0e] text-slate-900 dark:text-slate-100 overflow-hidden select-none pointer-events-none">
      {/* Outer Top & Bottom Diamond Corner Nodes */}
      <div className="absolute top-4 left-4 size-1.5 rotate-45 border border-black/20 dark:border-white/40 bg-white dark:bg-[#0a0b0e]" />
      <div className="absolute top-4 right-4 size-1.5 rotate-45 border border-black/20 dark:border-white/40 bg-white dark:bg-[#0a0b0e]" />

      {/* 1. Header Navigation Skeleton */}
      <header className="sticky top-0 z-50 w-full border-b border-black/[0.08] dark:border-white/10 bg-[#fcfcfb]/90 dark:bg-[#0a0b0e]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Brand Logo & Product Badge */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-7 w-24 rounded-lg" />
            <Skeleton className="hidden sm:inline-block h-5 w-20 rounded-full" />
          </div>

          {/* Center: Desktop Nav Pills */}
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-20 rounded-md" />
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-4 w-16 rounded-md" />
            <Skeleton className="h-4 w-20 rounded-md" />
          </div>

          {/* Right: Lang, Theme & Primary CTA */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-12 rounded-lg" />
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-9 w-28 sm:w-36 rounded-lg" />
          </div>
        </div>
      </header>

      {/* 2. Top Banner Announcement Skeleton */}
      <div className="w-full border-b border-black/[0.06] dark:border-white/5 py-2.5 px-4 bg-slate-50/50 dark:bg-[#0e1015]/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Skeleton className="h-6 w-72 sm:w-96 rounded-full" />
        </div>
      </div>

      {/* 3. Hero Section Skeleton */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Kicker badge */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-56 rounded-full" />
            </div>

            {/* Massive 2-line Headline */}
            <div className="space-y-3">
              <Skeleton className="h-12 sm:h-14 w-full rounded-xl" />
              <Skeleton className="h-12 sm:h-14 w-4/5 rounded-xl" />
            </div>

            {/* Subtitle Lines */}
            <div className="space-y-2.5 pt-1 max-w-xl">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-11/12 rounded-md" />
              <Skeleton className="h-4 w-3/4 rounded-md" />
            </div>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Skeleton className="h-12 w-44 rounded-xl" />
              <Skeleton className="h-12 w-48 rounded-xl" />
            </div>

            {/* Micro-proof Metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-black/[0.06] dark:border-white/10">
              <Skeleton className="h-4 w-28 rounded-md" />
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-4 w-36 rounded-md" />
            </div>
          </div>

          {/* Right Hero Column: MacOS Window / Studio Skeleton */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-black/[0.08] dark:border-white/15 bg-white/70 dark:bg-[#111318]/80 backdrop-blur-md p-4 sm:p-6 shadow-xl space-y-4">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
                <Skeleton className="h-5 w-32 rounded-md" />
                <Skeleton className="h-5 w-16 rounded-md" />
              </div>

              {/* Window Terminal / Code Stream Lines */}
              <div className="space-y-3 py-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-8 rounded-md" />
                  <Skeleton className="h-4 w-3/4 rounded-md" />
                </div>
                <div className="flex items-center gap-2 pl-4">
                  <Skeleton className="h-4 w-6 rounded-md" />
                  <Skeleton className="h-4 w-1/2 rounded-md" />
                </div>
                <div className="flex items-center gap-2 pl-4">
                  <Skeleton className="h-4 w-6 rounded-md" />
                  <Skeleton className="h-4 w-2/3 rounded-md" />
                </div>
                <div className="flex items-center gap-2 pl-8">
                  <Skeleton className="h-4 w-6 rounded-md" />
                  <Skeleton className="h-4 w-1/3 rounded-md" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-8 rounded-md" />
                  <Skeleton className="h-4 w-4/5 rounded-md" />
                </div>
              </div>

              {/* Window Bottom Floating Widget */}
              <div className="pt-2 flex items-center justify-between border-t border-black/[0.06] dark:border-white/10">
                <Skeleton className="h-7 w-28 rounded-lg" />
                <Skeleton className="h-7 w-24 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Section Divider Skeleton */}
        <div className="my-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-black/[0.08] dark:bg-white/10" />
          <div className="size-2 rotate-45 border border-black/20 dark:border-white/40 bg-white dark:bg-[#0a0b0e]" />
          <div className="h-px flex-1 bg-black/[0.08] dark:bg-white/10" />
        </div>

        {/* 5. 2x2 Bento Category Grid Skeleton */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <Skeleton className="h-8 w-64 rounded-lg" />
              <Skeleton className="h-4 w-80 rounded-md" />
            </div>
            <Skeleton className="h-4 w-44 rounded-md" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white/70 dark:bg-[#111318]/70 p-6 space-y-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Skeleton className="size-11 rounded-xl" />
                    <div className="space-y-1.5">
                      <Skeleton className="h-5 w-40 rounded-md" />
                      <Skeleton className="h-3.5 w-52 rounded-md" />
                    </div>
                  </div>
                  <Skeleton className="h-5 w-16 rounded-md" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <Skeleton className="h-12 rounded-xl" />
                  <Skeleton className="h-12 rounded-xl" />
                  <Skeleton className="h-12 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
