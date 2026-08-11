import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';

import { InlineLeadCta } from '../components/InlineLeadCta';
import { ProductPageSection } from '../components/ProductPageSection';
import { ProductPageShell } from '../components/ProductPageShell';
import { SecondaryPageHero } from '../components/SecondaryPageHero';

import './solutions.css';

export interface SolutionSummary {
  slug: string;
  audience: string;
  job: string;
  action: string;
  result: string;
  linkLabel: string;
}

export interface SolutionsIndexCopy {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  listEyebrow: string;
  listTitle: string;
  listIntro: string;
  audienceLabel: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

interface SolutionsIndexPageProps {
  copy: SolutionsIndexCopy;
  solutions: readonly SolutionSummary[];
}

export function SolutionsIndexPage({
  copy,
  solutions,
}: SolutionsIndexPageProps): React.ReactElement {
  return (
    <ProductPageShell
      className="solutions-page"
      endcap={{
        eyebrow: copy.ctaEyebrow,
        title: copy.ctaTitle,
        actionLabel: copy.ctaLabel,
      }}
    >
      <SecondaryPageHero
        breadcrumbLabel={copy.breadcrumb}
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
        facts={[
          { label: copy.audienceLabel, value: String(solutions.length) },
        ]}
      />

      <ProductPageSection
        id="solution-list"
        eyebrow={copy.listEyebrow}
        title={copy.listTitle}
        intro={copy.listIntro}
      >
        <div className="solution-index">
          {solutions.map((solution, index) => (
            <article key={solution.slug} className="solution-index__row">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <small>{solution.audience}</small>
                <h3>{solution.job}</h3>
              </div>
              <p>
                <strong>{solution.action}</strong>
                <span>{solution.result}</span>
              </p>
              <Link href={`/solutions/${solution.slug}`}>
                {solution.linkLabel}
                <Ico name="solar:arrow-right-bold-duotone" aria-hidden="true" />
              </Link>
            </article>
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
