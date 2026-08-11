'use client';

import { useId, useState, type KeyboardEvent } from 'react';

import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';

import type { PricingOffer, PricingPageCopy } from './types';

interface PricingOfferExplorerProps {
  offers: readonly PricingOffer[];
  copy: Pick<
    PricingPageCopy,
    | 'includedLabel'
    | 'excludedLabel'
    | 'eligibilityLabel'
    | 'driversLabel'
    | 'allowanceLabel'
    | 'overageLabel'
    | 'setupLabel'
  >;
}

function formatPrice(price: NonNullable<PricingOffer['price']>): string {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: price.currency,
    maximumFractionDigits: Number.isInteger(price.amount) ? 0 : 2,
  }).format(price.amount);
}

export function PricingOfferExplorer({
  offers,
  copy,
}: PricingOfferExplorerProps): React.ReactElement {
  const instanceId = useId();
  const defaultOffer = offers.find((offer) => offer.recommended) ?? offers[0];
  const [selectedId, setSelectedId] = useState(defaultOffer?.id ?? '');
  const selected = offers.find((offer) => offer.id === selectedId) ?? defaultOffer;

  if (!selected) {
    return <div className="pricing-empty" role="status" />;
  }

  const panelId = `${instanceId}-pricing-panel`;
  const selectTab = (index: number): void => {
    const offer = offers[index];
    if (!offer) return;
    setSelectedId(offer.id);
    window.requestAnimationFrame(() => {
      document.getElementById(`${instanceId}-${offer.id}-tab`)?.focus();
    });
  };
  const handleTabKey = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ): void => {
    let nextIndex: number | null = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % offers.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + offers.length) % offers.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = offers.length - 1;
    }
    if (nextIndex === null) return;
    event.preventDefault();
    selectTab(nextIndex);
  };

  return (
    <div className="pricing-explorer">
      <div
        className="pricing-explorer__rail"
        role="tablist"
        aria-label={copy.includedLabel}
      >
        {offers.map((offer, index) => {
          const selectedOffer = offer.id === selected.id;
          return (
            <button
              key={offer.id}
              id={`${instanceId}-${offer.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selectedOffer}
              aria-controls={panelId}
              tabIndex={selectedOffer ? 0 : -1}
              className="pricing-explorer__tab"
              onClick={() => setSelectedId(offer.id)}
              onKeyDown={(event) => handleTabKey(event, index)}
            >
              <span>{offer.name}</span>
              <small>{offer.billingLabel}</small>
              {offer.recommended ? (
                <Ico name="solar:star-bold" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>

      <article
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${instanceId}-${selected.id}-tab`}
        className="pricing-explorer__panel"
      >
        <header className="pricing-explorer__panel-header">
          <div>
            <p>{selected.billingLabel}</p>
            <h3>{selected.name}</h3>
            <span>{selected.summary}</span>
          </div>
          {'price' in selected && selected.price ? (
            <div className="pricing-explorer__price">
              <strong>{formatPrice(selected.price)}</strong>
              {selected.price.unit ? <small>{selected.price.unit}</small> : null}
            </div>
          ) : null}
        </header>

        <div className="pricing-explorer__detail-grid">
          <OfferList
            label={copy.includedLabel}
            values={selected.included}
            icon="solar:check-circle-bold-duotone"
            tone="positive"
          />
          <OfferList
            label={copy.excludedLabel}
            values={selected.excluded}
            icon="solar:close-circle-bold-duotone"
            tone="neutral"
          />
        </div>

        {selected.mode === 'pilot' ? (
          <OfferList
            label={copy.eligibilityLabel}
            values={selected.eligibility}
            icon="solar:checklist-minimalistic-bold-duotone"
            tone="brand"
          />
        ) : null}

        {selected.mode === 'project' ? (
          <OfferList
            label={copy.driversLabel}
            values={selected.estimateDrivers}
            icon="solar:settings-bold-duotone"
            tone="brand"
          />
        ) : null}

        {'allowance' in selected && selected.allowance ? (
          <DetailLine label={copy.allowanceLabel} value={selected.allowance} />
        ) : null}
        {'overageRule' in selected && selected.overageRule ? (
          <DetailLine label={copy.overageLabel} value={selected.overageRule} />
        ) : null}
        {'setupPrice' in selected && selected.setupPrice ? (
          <DetailLine
            label={copy.setupLabel}
            value={formatPrice(selected.setupPrice)}
          />
        ) : null}

        <Link
          href={selected.actionHref ?? '/contact'}
          className="product-page-button product-page-button--primary pricing-explorer__action"
        >
          {selected.actionLabel}
          <Ico name="solar:arrow-right-bold-duotone" aria-hidden="true" />
        </Link>
      </article>
    </div>
  );
}

function OfferList({
  label,
  values,
  icon,
  tone,
}: {
  label: string;
  values: readonly string[];
  icon: string;
  tone: 'positive' | 'neutral' | 'brand';
}): React.ReactElement {
  return (
    <div className={`pricing-offer-list pricing-offer-list--${tone}`}>
      <h4>{label}</h4>
      <ul>
        {values.map((value) => (
          <li key={value}>
            <Ico name={icon} aria-hidden="true" />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailLine({
  label,
  value,
}: {
  label: string;
  value: string;
}): React.ReactElement {
  return (
    <div className="pricing-detail-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
