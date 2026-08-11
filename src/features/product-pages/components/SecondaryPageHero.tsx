import type { ReactNode } from 'react';

import { SITE } from '@/config/site';
import { Link } from '@/i18n/navigation';

export interface SecondaryPageFact {
  label: string;
  value: string;
}

interface SecondaryPageHeroProps {
  breadcrumbLabel: string;
  title: string;
  lead: string;
  eyebrow?: string;
  facts?: readonly SecondaryPageFact[];
  action?: ReactNode;
  aside?: ReactNode;
}

function ProductWordmark(): React.ReactElement {
  return (
    <span className="wordmark-3d product-page-wordmark" aria-label={`${SITE.wordmark.prefix}${SITE.wordmark.mark}`}>
      <span className="wm-prefix">{SITE.wordmark.prefix}</span>
      <span className="wm-mark">{SITE.wordmark.mark}</span>
      <span className="wm-accent" aria-hidden="true" />
    </span>
  );
}

export function SecondaryPageHero({
  breadcrumbLabel,
  title,
  lead,
  eyebrow,
  facts = [],
  action,
  aside,
}: SecondaryPageHeroProps): React.ReactElement {
  return (
    <header data-product-page-hero="true" className="product-page-hero">
      <div className="product-page-hero__rail">
        <Link href="/" className="product-page-hero__home">
          <ProductWordmark />
        </Link>
        <span className="product-page-hero__rail-line" aria-hidden="true" />
        <span className="product-page-hero__breadcrumb">{breadcrumbLabel}</span>
      </div>

      <div className={aside ? 'product-page-hero__grid' : undefined}>
        <div className="product-page-hero__copy">
          {eyebrow ? <p className="product-page-eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="product-page-hero__lead">{lead}</p>
          {action ? <div className="product-page-hero__action">{action}</div> : null}
        </div>
        {aside ? <div className="product-page-hero__aside">{aside}</div> : null}
      </div>

      {facts.length > 0 ? (
        <dl className="product-page-decision-strip">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </header>
  );
}
