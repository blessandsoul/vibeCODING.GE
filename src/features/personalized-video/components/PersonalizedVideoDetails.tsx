import Link from 'next/link';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';
import type { PersonalizedVideoContent } from '../types';

interface PersonalizedVideoDetailsProps {
  content: PersonalizedVideoContent;
  contactHref: string;
  localizedPath: (path: string) => string;
}

export function PersonalizedVideoDetails({
  content,
  contactHref,
  localizedPath,
}: PersonalizedVideoDetailsProps) {
  return (
    <>
      <section className="pv-package">
        <div className="pv-shell">
          <FadeIn>
            <div className="pv-package-panel">
              <div className="pv-package-copy">
                <span className="pv-package-label">aiNOW studio</span>
                <h2 className="text-balance">{content.includedTitle}</h2>
                <ul>
                  {content.includedItems.map((item) => (
                    <li key={item}>
                      <Ico name="solar:check-circle-bold-duotone" className="size-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="pv-price-panel">
                <span>{content.priceLabel}</span>
                <strong>{content.price}</strong>
                <p>{content.pricingBody}</p>
                <Link href={contactHref} className="pv-button pv-button-light">
                  {content.primaryCta}
                  <Ico name="solar:arrow-right-up-bold-duotone" className="size-4" />
                </Link>
              </aside>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pv-comparison">
        <div className="pv-shell pv-narrow">
          <FadeIn>
            <h2>{content.compareTitle}</h2>
          </FadeIn>
          <div className="pv-table-wrap">
            <table>
              <thead>
                <tr>
                  {content.compareHeaders.map((header) => <th key={header}>{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {content.compareRows.map((row, rowIndex) => (
                  <tr key={row[0]} className={rowIndex === content.compareRows.length - 1 ? 'pv-highlight-row' : undefined}>
                    {row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pv-questions">
        <div className="pv-shell pv-questions-grid">
          <div className="pv-limits">
            <FadeIn>
              <h2>{content.limitsTitle}</h2>
            </FadeIn>
            <ul>
              {content.limits.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="pv-rights-note">{content.rightsNote}</p>
          </div>

          <div className="pv-faq">
            <FadeIn>
              <h2>{content.faqTitle}</h2>
            </FadeIn>
            <div>
              {content.faq.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary>
                    <span>{item.q}</span>
                    <Ico name="solar:add-circle-bold-duotone" className="size-6" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pv-final">
        <div className="pv-shell">
          <div className="pv-final-panel">
            <div>
              <span>{content.relatedTitle}</span>
              <h2>{content.finalTitle}</h2>
              <p>{content.finalBody}</p>
            </div>
            <div className="pv-final-actions">
              <Link href={contactHref} className="pv-button pv-button-primary">
                {content.finalCta}
                <Ico name="solar:arrow-right-up-bold-duotone" className="size-4" />
              </Link>
              <nav aria-label={content.relatedTitle}>
                {content.related.map((item) => (
                  <Link key={item.href} href={localizedPath(item.href)}>{item.label}</Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
