import { InlineLeadCta } from '../components/InlineLeadCta';
import { ProductPageSection } from '../components/ProductPageSection';
import { ProductPageShell } from '../components/ProductPageShell';
import { SecondaryPageHero } from '../components/SecondaryPageHero';
import { PricingComparison } from './PricingComparison';
import { PricingOfferExplorer } from './PricingOfferExplorer';
import type { PricingPageCopy, PricingPageData } from './types';

import './pricing.css';

export function assertPricingPageData(data: PricingPageData): void {
  if (data.offers.length === 0) {
    throw new Error('A public pricing page requires at least one offer.');
  }

  for (const offer of data.offers) {
    if (offer.mode !== data.mode) {
      throw new Error(`Offer "${offer.id}" does not match pricing mode "${data.mode}".`);
    }
    if (data.mode === 'pilot' && 'price' in offer && offer.price !== undefined) {
      throw new Error('Pilot offers cannot publish a price.');
    }
    if (offer.included.length === 0) {
      throw new Error(`Offer "${offer.id}" needs at least one included outcome.`);
    }
  }
}

interface PricingPageProps {
  copy: PricingPageCopy;
  data: PricingPageData;
}

export function PricingPage({
  copy,
  data,
}: PricingPageProps): React.ReactElement {
  assertPricingPageData(data);

  return (
    <ProductPageShell
      className="pricing-page"
      endcap={null}
    >
      <SecondaryPageHero
        breadcrumbLabel={copy.breadcrumb}
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
        facts={data.context}
      />

      <div data-pricing-mode={data.mode}>
        <ProductPageSection
          id="offers"
          eyebrow={copy.offersEyebrow}
          title={copy.offersTitle}
          intro={copy.offersIntro}
        >
          <PricingOfferExplorer offers={data.offers} copy={copy} />
        </ProductPageSection>

        {data.offers.length > 1 ? (
          <ProductPageSection
            id="comparison"
            eyebrow={copy.comparisonEyebrow}
            title={copy.comparisonTitle}
            reading
          >
            <PricingComparison offers={data.offers} copy={copy} />
          </ProductPageSection>
        ) : null}

        <ProductPageSection
          id="setup"
          eyebrow={copy.timelineEyebrow}
          title={copy.timelineTitle}
        >
          <ol className="pricing-timeline">
            {data.timeline.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <strong>{step.timing}</strong>
              </li>
            ))}
          </ol>
        </ProductPageSection>

        <ProductPageSection
          id="pricing-faq"
          eyebrow={copy.faqEyebrow}
          title={copy.faqTitle}
          reading
        >
          <div className="pricing-faq">
            {data.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </ProductPageSection>

        <InlineLeadCta
          eyebrow={copy.ctaEyebrow}
          title={copy.ctaTitle}
          description={copy.ctaDescription}
          actionLabel={copy.ctaLabel}
        />
      </div>
    </ProductPageShell>
  );
}
