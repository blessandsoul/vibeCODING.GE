import { Ico } from '@/components/common/Ico';

import { InlineLeadCta } from '../components/InlineLeadCta';
import { ProductPageSection } from '../components/ProductPageSection';
import { ProductPageShell } from '../components/ProductPageShell';
import { SecondaryPageHero } from '../components/SecondaryPageHero';

import './security.css';

export type SecurityControlKey =
  | 'sourceAccess'
  | 'actions'
  | 'approval'
  | 'retention'
  | 'deletion'
  | 'escalation';

export interface SecurityControl {
  key: SecurityControlKey;
  title: string;
  description: string;
  owner: string;
  evidence: string;
}

export interface SecurityFlowStage {
  title: string;
  description: string;
  icon: string;
}

export interface SecurityPageCopy {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  flowEyebrow: string;
  flowTitle: string;
  flowIntro: string;
  controlsEyebrow: string;
  controlsTitle: string;
  controlsIntro: string;
  controlLabel: string;
  ownerLabel: string;
  evidenceLabel: string;
  limitationEyebrow: string;
  limitationTitle: string;
  incidentLabel: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

interface SecurityPageProps {
  copy: SecurityPageCopy;
  flow: readonly SecurityFlowStage[];
  controls: readonly SecurityControl[];
  limitations: readonly string[];
  incidentContact: string;
}

const REQUIRED_CONTROLS: readonly SecurityControlKey[] = [
  'sourceAccess',
  'actions',
  'approval',
  'retention',
  'deletion',
  'escalation',
];

export function SecurityPage({
  copy,
  flow,
  controls,
  limitations,
  incidentContact,
}: SecurityPageProps): React.ReactElement {
  const configuredKeys = new Set(controls.map((control) => control.key));
  for (const key of REQUIRED_CONTROLS) {
    if (!configuredKeys.has(key)) {
      throw new Error(`Security page is missing the "${key}" control.`);
    }
  }

  return (
    <ProductPageShell
      className="security-page"
      endcap={null}
    >
      <SecondaryPageHero
        breadcrumbLabel={copy.breadcrumb}
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
        facts={[
          { label: copy.controlLabel, value: String(controls.length) },
          { label: copy.incidentLabel, value: incidentContact },
        ]}
      />

      <ProductPageSection
        id="data-flow"
        eyebrow={copy.flowEyebrow}
        title={copy.flowTitle}
        intro={copy.flowIntro}
      >
        <ol className="security-flow">
          {flow.map((stage, index) => (
            <li key={stage.title}>
              <span className="security-flow__icon">
                <Ico name={stage.icon} aria-hidden="true" />
              </span>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </ProductPageSection>

      <ProductPageSection
        id="controls"
        eyebrow={copy.controlsEyebrow}
        title={copy.controlsTitle}
        intro={copy.controlsIntro}
      >
        <div className="security-ledger">
          <div className="security-ledger__head" aria-hidden="true">
            <span>{copy.controlLabel}</span>
            <span>{copy.ownerLabel}</span>
            <span>{copy.evidenceLabel}</span>
          </div>
          {controls.map((control) => (
            <article key={control.key} className="security-ledger__row">
              <div>
                <span className="security-ledger__mobile-label" aria-hidden="true">
                  {copy.controlLabel}
                </span>
                <h3>{control.title}</h3>
                <p>{control.description}</p>
              </div>
              <strong className="security-ledger__value">
                <span className="security-ledger__mobile-label" aria-hidden="true">
                  {copy.ownerLabel}
                </span>
                <span>{control.owner}</span>
              </strong>
              <span className="security-ledger__value">
                <span className="security-ledger__mobile-label" aria-hidden="true">
                  {copy.evidenceLabel}
                </span>
                <span>{control.evidence}</span>
              </span>
            </article>
          ))}
        </div>
      </ProductPageSection>

      <aside className="security-limitations">
        <div>
          <p className="product-page-eyebrow">{copy.limitationEyebrow}</p>
          <h2>{copy.limitationTitle}</h2>
        </div>
        <ul>
          {limitations.map((limitation) => (
            <li key={limitation}>
              <Ico name="solar:shield-check-bold-duotone" aria-hidden="true" />
              <span>{limitation}</span>
            </li>
          ))}
        </ul>
        <p>
          <span>{copy.incidentLabel}</span>
          <strong>{incidentContact}</strong>
        </p>
      </aside>

      <InlineLeadCta
        eyebrow={copy.ctaEyebrow}
        title={copy.ctaTitle}
        description={copy.ctaDescription}
        actionLabel={copy.ctaLabel}
      />
    </ProductPageShell>
  );
}
