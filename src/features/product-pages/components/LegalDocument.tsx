import type { ReactNode } from 'react';

export interface LegalDocumentSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalDocumentProps {
  operatorLabel: string;
  operator: string;
  domainLabel: string;
  domain: string;
  effectiveLabel: string;
  effectiveDate: string;
  updatedLabel: string;
  updatedDate: string;
  contentsLabel: string;
  sections: readonly LegalDocumentSection[];
}

export function LegalDocument({
  operatorLabel,
  operator,
  domainLabel,
  domain,
  effectiveLabel,
  effectiveDate,
  updatedLabel,
  updatedDate,
  contentsLabel,
  sections,
}: LegalDocumentProps): React.ReactElement {
  return (
    <div className="product-page-legal">
      <dl className="product-page-legal__meta">
        <div>
          <dt>{operatorLabel}</dt>
          <dd>{operator}</dd>
        </div>
        <div>
          <dt>{domainLabel}</dt>
          <dd>{domain}</dd>
        </div>
        <div>
          <dt>{effectiveLabel}</dt>
          <dd>
            <time dateTime={effectiveDate}>{effectiveDate}</time>
          </dd>
        </div>
        <div>
          <dt>{updatedLabel}</dt>
          <dd>
            <time dateTime={updatedDate}>{updatedDate}</time>
          </dd>
        </div>
      </dl>

      <div className="product-page-legal__layout">
        <nav className="product-page-legal__toc" aria-label={contentsLabel}>
          <p>{contentsLabel}</p>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="product-page-reading-shell">
          {sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              <div className="product-page-legal__body">{section.body}</div>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
