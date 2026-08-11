import { Ico } from '@/components/common/Ico';

import { InlineLeadCta } from '../components/InlineLeadCta';
import { ProductPageSection } from '../components/ProductPageSection';
import { ProductPageShell } from '../components/ProductPageShell';
import { SecondaryPageHero } from '../components/SecondaryPageHero';

import './solutions.css';

export interface SolutionWorkflowStep {
  title: string;
  description: string;
}

export interface SolutionDetail {
  slug: string;
  audience: string;
  scenario: string;
  before: readonly string[];
  after: readonly string[];
  workflow: readonly SolutionWorkflowStep[];
  integrations: readonly string[];
  limits: readonly string[];
  evidence: string;
}

export interface SolutionPageCopy {
  breadcrumb: string;
  eyebrow: string;
  beforeEyebrow: string;
  beforeTitle: string;
  afterEyebrow: string;
  afterTitle: string;
  workflowEyebrow: string;
  workflowTitle: string;
  integrationsEyebrow: string;
  integrationsTitle: string;
  limitsEyebrow: string;
  limitsTitle: string;
  evidenceLabel: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

interface SolutionPageProps {
  copy: SolutionPageCopy;
  solution: SolutionDetail;
  title: string;
  lead: string;
}

export function SolutionPage({
  copy,
  solution,
  title,
  lead,
}: SolutionPageProps): React.ReactElement {
  return (
    <ProductPageShell
      className="solution-detail-page"
      endcap={{
        eyebrow: copy.ctaEyebrow,
        title: copy.ctaTitle,
        actionLabel: copy.ctaLabel,
      }}
    >
      <SecondaryPageHero
        breadcrumbLabel={copy.breadcrumb}
        eyebrow={copy.eyebrow}
        title={title}
        lead={lead}
        facts={[
          { label: solution.audience, value: solution.scenario },
          { label: copy.evidenceLabel, value: solution.evidence },
        ]}
      />

      <div className="solution-before-after">
        <SolutionState
          eyebrow={copy.beforeEyebrow}
          title={copy.beforeTitle}
          values={solution.before}
          icon="solar:close-circle-bold-duotone"
          tone="before"
        />
        <Ico
          name="solar:arrow-right-bold-duotone"
          className="solution-before-after__arrow"
          aria-hidden="true"
        />
        <SolutionState
          eyebrow={copy.afterEyebrow}
          title={copy.afterTitle}
          values={solution.after}
          icon="solar:check-circle-bold-duotone"
          tone="after"
        />
      </div>

      <ProductPageSection
        id="workflow"
        eyebrow={copy.workflowEyebrow}
        title={copy.workflowTitle}
      >
        <ol className="solution-workflow">
          {solution.workflow.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </ProductPageSection>

      <ProductPageSection
        id="solution-boundaries"
        eyebrow={copy.integrationsEyebrow}
        title={copy.integrationsTitle}
      >
        <div className="solution-boundaries">
          <div>
            <ul className="solution-chip-list">
              {solution.integrations.map((integration) => (
                <li key={integration}>{integration}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="product-page-eyebrow">{copy.limitsEyebrow}</p>
            <h3>{copy.limitsTitle}</h3>
            <ul className="solution-limit-list">
              {solution.limits.map((limit) => (
                <li key={limit}>{limit}</li>
              ))}
            </ul>
          </div>
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

function SolutionState({
  eyebrow,
  title,
  values,
  icon,
  tone,
}: {
  eyebrow: string;
  title: string;
  values: readonly string[];
  icon: string;
  tone: 'before' | 'after';
}): React.ReactElement {
  return (
    <section className={`solution-state solution-state--${tone}`}>
      <p className="product-page-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <ul>
        {values.map((value) => (
          <li key={value}>
            <Ico name={icon} aria-hidden="true" />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
