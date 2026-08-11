import type { PricingOffer, PricingPageCopy } from './types';

interface PricingComparisonProps {
  offers: readonly PricingOffer[];
  copy: Pick<PricingPageCopy, 'offerLabel' | 'billingLabel' | 'includedLabel'>;
}

export function PricingComparison({
  offers,
  copy,
}: PricingComparisonProps): React.ReactElement | null {
  if (offers.length < 2) return null;

  return (
    <div
      className="pricing-comparison-scroll"
      role="region"
      tabIndex={0}
      aria-label={copy.offerLabel}
    >
      <table className="pricing-comparison">
        <thead>
          <tr>
            <th scope="col">{copy.offerLabel}</th>
            <th scope="col">{copy.billingLabel}</th>
            <th scope="col">{copy.includedLabel}</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <th scope="row">{offer.name}</th>
              <td>{offer.billingLabel}</td>
              <td>{offer.included.join(' · ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
