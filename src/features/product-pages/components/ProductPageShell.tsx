import type { ReactNode } from 'react';

import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';
import { SITE } from '@/config/site';

import './product-pages.css';

interface ProductPageShellProps {
  children: ReactNode;
  endcap?: {
    eyebrow: string;
    title: string;
    actionLabel: string;
    actionHref?: string;
  } | null;
  className?: string;
}

export function ProductPageShell({
  children,
  endcap,
  className,
}: ProductPageShellProps): React.ReactElement {
  return (
    <div
      data-product-page="true"
      className={['product-page', className].filter(Boolean).join(' ')}
    >
      <div data-family-shell="true" className="product-page__shell">
        {children}
      </div>

      {endcap ? (
        <section className="product-page-endcap" aria-labelledby="product-page-endcap-title">
          <div data-family-shell="true" className="product-page-endcap__inner">
            <div>
              <p className="product-page-endcap__eyebrow">{endcap.eyebrow}</p>
              <h2 id="product-page-endcap-title">{endcap.title}</h2>
            </div>
            <Link
              href={endcap.actionHref ?? '/contact'}
              className="product-page-button product-page-button--primary"
            >
              {endcap.actionLabel}
              <Ico name="solar:arrow-right-up-bold-duotone" aria-hidden="true" />
            </Link>
          </div>
        </section>
      ) : null}

      <span className="sr-only">
        {SITE.wordmark.prefix}
        {SITE.wordmark.mark}
      </span>
    </div>
  );
}
