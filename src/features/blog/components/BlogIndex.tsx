import { Ico } from '@/components/common/Ico';
import { SITE } from '@/config/site';
import { Link } from '@/i18n/navigation';

import { getBlogCopy } from '../lib/copy';

import type { BlogPostMeta } from '../types';

import './blog.css';

function formatDate(date: string, locale: string): string {
  if (!date) return '';
  return new Intl.DateTimeFormat(locale === 'ka' ? 'ka-GE' : locale === 'ru' ? 'ru-RU' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`));
}

export function BlogIndex({ posts, locale, contentLocale = locale }: { posts: BlogPostMeta[]; locale: string; contentLocale?: string }) {
  const copy = getBlogCopy(locale);
  const usesFallback = posts.length > 0 && contentLocale !== locale;

  return (
    <div className="product-blog" data-blog-index="true">
      <header className="blog-hero" data-family-shell="true">
        <p className="blog-eyebrow">{copy.eyebrow}</p>
        <h1>
          <span className="wordmark-3d blog-product-mark">
            <span className="wm-prefix">{SITE.wordmark.prefix}</span>
            <span className="wm-mark">{SITE.wordmark.mark}</span>
            <span className="wm-accent" aria-hidden="true" />
          </span>{' '}
          {copy.title}
        </h1>
        <p className="blog-hero-copy">{copy.subtitle}</p>
      </header>

      <section className="blog-index-section" data-family-shell="true" aria-labelledby="blog-list-heading">
        <div className="blog-section-heading">
          <h2 id="blog-list-heading">{copy.latest}</h2>
          <span>{posts.length}</span>
        </div>

        {usesFallback ? <p className="blog-language-note">{copy.fallback}</p> : null}

        {posts.length === 0 ? (
          <p className="blog-empty">{copy.empty}</p>
        ) : (
          <div className="blog-card-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} locale={post.locale} className="blog-card">
                <div className="blog-card-topline">
                  <span className="blog-card-cluster">{post.cluster}</span>
                  <Ico name="solar:arrow-right-up-bold-duotone" aria-hidden="true" />
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-meta">
                  <time dateTime={post.date}>{formatDate(post.date, contentLocale)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="blog-card-link">{copy.read}</span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
