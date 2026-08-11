import { Ico } from '@/components/common/Ico';

import { InlineLeadCta } from '../components/InlineLeadCta';
import { ProductPageSection } from '../components/ProductPageSection';
import { ProductPageShell } from '../components/ProductPageShell';
import { SecondaryPageHero } from '../components/SecondaryPageHero';
import type { IntegrationStatus } from '../types';

import './integrations.css';

export interface IntegrationRecord {
  id: string;
  name: string;
  icon: string;
  category: string;
  connectionType: string;
  status: IntegrationStatus;
  dataFlow: string;
}

export interface IntegrationsPageCopy {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  ledgerEyebrow: string;
  ledgerTitle: string;
  ledgerIntro: string;
  platformLabel: string;
  categoryLabel: string;
  connectionLabel: string;
  statusLabel: string;
  dataLabel: string;
  status: Record<IntegrationStatus, string>;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

interface IntegrationsPageProps {
  copy: IntegrationsPageCopy;
  integrations: readonly IntegrationRecord[];
}

export function IntegrationsPage({
  copy,
  integrations,
}: IntegrationsPageProps): React.ReactElement {
  const categories = [...new Set(integrations.map((item) => item.category))];
  const availableCount = integrations.filter(
    (item) => item.status === 'available',
  ).length;

  return (
    <ProductPageShell
      className="integrations-page"
      endcap={null}
    >
      <SecondaryPageHero
        breadcrumbLabel={copy.breadcrumb}
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
        facts={[
          { label: copy.platformLabel, value: String(integrations.length) },
          { label: copy.status.available, value: String(availableCount) },
          { label: copy.categoryLabel, value: String(categories.length) },
        ]}
      />

      <ProductPageSection
        id="integration-ledger"
        eyebrow={copy.ledgerEyebrow}
        title={copy.ledgerTitle}
        intro={copy.ledgerIntro}
      >
        <div className="integration-ledger">
          <div className="integration-ledger__head" aria-hidden="true">
            <span>{copy.platformLabel}</span>
            <span>{copy.connectionLabel}</span>
            <span>{copy.statusLabel}</span>
            <span>{copy.dataLabel}</span>
          </div>
          {categories.map((category) => (
            <section
              key={category}
              className="integration-ledger__group"
              aria-labelledby={`integration-category-${category.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <h3 id={`integration-category-${category.replace(/\s+/g, '-').toLowerCase()}`}>
                {category}
              </h3>
              {integrations
                .filter((item) => item.category === category)
                .map((item) => (
                  <article
                    key={item.id}
                    className="integration-ledger__row"
                    data-integration-status={item.status}
                  >
                    <div className="integration-ledger__platform">
                      <span>
                        <Ico name={item.icon} aria-hidden="true" />
                      </span>
                      <strong>{item.name}</strong>
                    </div>
                    <p className="integration-ledger__cell">
                      <span className="integration-ledger__mobile-label" aria-hidden="true">
                        {copy.connectionLabel}
                      </span>
                      <span>{item.connectionType}</span>
                    </p>
                    <div className="integration-ledger__status-cell">
                      <span className="integration-ledger__mobile-label" aria-hidden="true">
                        {copy.statusLabel}
                      </span>
                      <span className="integration-ledger__status">
                        <i aria-hidden="true" />
                        {copy.status[item.status]}
                      </span>
                    </div>
                    <p className="integration-ledger__cell">
                      <span className="integration-ledger__mobile-label" aria-hidden="true">
                        {copy.dataLabel}
                      </span>
                      <span>{item.dataFlow}</span>
                    </p>
                  </article>
                ))}
            </section>
          ))}
        </div>
      </ProductPageSection>

      <InlineLeadCta
        eyebrow={copy.ctaEyebrow}
        title={copy.ctaTitle}
        description={copy.ctaDescription}
        actionLabel={copy.ctaLabel}
      />
    </ProductPageShell>
  );
}
