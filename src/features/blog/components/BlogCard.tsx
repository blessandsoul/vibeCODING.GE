"use client";

import { AiNowImage as Image } from "@/features/home/components/ainow/AiNowImage";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import type { BlogPost } from "../types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
  /** Retained for tag pages that still pass their list position. */
  index?: number;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  const t = useTranslations("blog");

  return (
    <article
      className={cn("min-w-0", featured && "sm:col-span-2", className)}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "dodo-glass-card group flex h-full min-h-full overflow-hidden text-left",
          "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-blue-300/90 hover:shadow-[0_18px_42px_-16px_rgba(37,99,235,0.3)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfcfb]",
          featured ? "flex-col sm:grid sm:grid-cols-[1.08fr_0.92fr]" : "flex-col",
        )}
      >
        <div className={cn("relative z-10 min-h-[200px] overflow-hidden bg-slate-950", featured ? "sm:min-h-full" : "aspect-[16/10]")}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority={featured}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
            sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            unoptimized={post.coverImage.startsWith("/api/og")}
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
            {post.tags.slice(0, featured ? 3 : 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/25 bg-slate-950/35 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={cn("relative z-10 flex min-w-0 flex-1 flex-col p-5", featured && "sm:p-7")}>
          <p className="eyebrow text-[10px] font-bold uppercase tracking-[0.15em] text-[#2563eb] dark:text-blue-300">
            vibeCODING journal
          </p>
          <h3 className={cn("mt-3 text-balance font-headline font-semibold tracking-[-0.032em] text-slate-950 dark:text-white", featured ? "text-2xl leading-tight sm:text-3xl" : "text-xl leading-snug")}>
            {post.title}
          </h3>
          <p className={cn("mt-3 text-pretty leading-6 text-slate-600 dark:text-slate-300", featured ? "text-base" : "text-sm")}>
            {post.excerpt.length > (featured ? 180 : 122)
              ? `${post.excerpt.slice(0, featured ? 180 : 122)}…`
              : post.excerpt}
          </p>
          <span className="mt-5 inline-flex min-h-10 w-fit items-center gap-2 text-sm font-semibold text-slate-900 transition-colors group-hover:text-[#1d4ed8] dark:text-white dark:group-hover:text-blue-300">
            {t("readMore")}
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
