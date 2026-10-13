import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { BlogCard } from "./BlogCard";
import type { BlogPost } from "../types";

interface BlogListProps {
  posts: BlogPost[];
  /** Tag cloud is computed from the full collection, not the current page. */
  topTags?: { tag: string; slug: string }[];
}

export async function BlogList({ posts, topTags = [] }: BlogListProps) {
  const t = await getTranslations("blog");

  return (
    <div>
      {posts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} featured={index === 0} />
          ))}
        </div>
      ) : (
        <div className="dodo-glass-card px-5 py-16 text-center">
          <p className="relative z-10 text-slate-600 dark:text-slate-300">{t("noPostsForTag")}</p>
        </div>
      )}

      {topTags.length > 0 && (
        <section aria-labelledby="blog-topics" className="mt-12">
          <div className="dodo-glass-card p-5 sm:p-6">
            <div className="relative z-10">
              <div className="flex flex-col gap-2 border-b border-slate-200/80 pb-4 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
                <div>
                  <p className="eyebrow text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">aiNOW topics</p>
                  <h2 id="blog-topics" className="mt-1 font-headline text-xl font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">
                    {t("topicsHeading")}
                  </h2>
                </div>
                <Link
                  href={'/blog/tags' as never}
                  className="inline-flex min-h-10 items-center text-sm font-semibold text-[#1d4ed8] transition-colors hover:text-[#1e40af] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  {t("viewAllTags") || "View all tags"}
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {topTags.map(({ tag, slug }) => (
                  <Link
                    key={slug}
                    href={`/blog/tags/${slug}` as never}
                    className="dodo-glass-box min-h-10 px-3.5 py-2 text-sm font-medium text-slate-700 transition-[transform,border-color,box-shadow] duration-200 hover:border-blue-300 hover:text-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 dark:text-slate-200 dark:hover:text-blue-200"
                  >
                    <span className="relative z-10">{tag}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
