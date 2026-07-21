import { Ico } from '@/components/common/Ico';
import { SITE } from '@/config/site';
import { Link } from '@/i18n/navigation';

import { extractHeadings } from '../lib/blog';
import { getBlogCopy } from '../lib/copy';

import type { BlogPost, BlogPostMeta } from '../types';

import './blog.css';

function formatDate(date: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === 'ka' ? 'ka-GE' : locale === 'ru' ? 'ru-RU' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`));
}

export function BlogArticle({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPostMeta[];
}) {
  const copy = getBlogCopy(post.locale);
  const headings = extractHeadings(post.content);

  return (
    <article className="product-article" data-blog-article="true">
      <header className="article-header" data-family-shell="true">
        <Link href="/blog" className="article-back">
          <Ico name="solar:arrow-left-linear" aria-hidden="true" />
          {copy.back}
        </Link>
        <div className="article-tags">
          {post.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.excerpt}</p>
        <div className="article-byline">
          <span>{post.author.name}</span>
          {post.author.role ? <span>{post.author.role}</span> : null}
          <time dateTime={post.updated}>{copy.updated} {formatDate(post.updated, post.locale)}</time>
          <span>{copy.minRead}: {post.readTime}</span>
        </div>
      </header>

      <div className="article-cover" data-family-shell="true" aria-hidden="true">
        <div className="article-cover-grid" />
        <div className="wordmark-3d article-cover-mark">
          <span className="wm-prefix">{SITE.wordmark.prefix}</span>
          <span className="wm-mark">{SITE.wordmark.mark}</span>
          <span className="wm-accent" />
        </div>
        <Ico name="solar:document-text-bold-duotone" />
      </div>

      <div className="article-layout" data-family-shell="true">
        <div className="article-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
        {headings.length > 1 ? (
          <aside className="article-toc" aria-label={copy.contents}>
            <p>{copy.contents}</p>
            <ol>
              {headings.map((heading) => (
                <li key={heading.id}><a href={`#${heading.id}`}>{heading.title}</a></li>
              ))}
            </ol>
          </aside>
        ) : null}
      </div>

      {post.sources.length > 0 ? (
        <section className="article-sources" data-family-shell="true" aria-labelledby="article-sources-heading">
          <h2 id="article-sources-heading">{copy.sources}</h2>
          <ol>
            {post.sources.map((source) => (
              <li key={source}><a href={source} target="_blank" rel="noopener noreferrer">{source}</a></li>
            ))}
          </ol>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="article-related" data-family-shell="true" aria-labelledby="article-related-heading">
          <h2 id="article-related-heading">{copy.related}</h2>
          <div className="article-related-grid">
            {related.map((item) => (
              <Link href={`/blog/${item.slug}`} key={item.slug}>
                <span>{item.cluster}</span>
                <h3>{item.title}</h3>
                <Ico name="solar:arrow-right-linear" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
