import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';

interface InlineLeadCtaProps {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function InlineLeadCta({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref = '/contact',
  secondaryLabel,
  secondaryHref,
}: InlineLeadCtaProps): React.ReactElement {
  return (
    <aside className="product-page-inline-cta" aria-labelledby="product-page-inline-cta-title">
      <div>
        <p className="product-page-eyebrow">{eyebrow}</p>
        <h2 id="product-page-inline-cta-title">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="product-page-inline-cta__actions">
        <Link
          href={actionHref}
          className="product-page-button product-page-button--primary"
        >
          <Ico name="solar:phone-calling-rounded-bold-duotone" aria-hidden="true" />
          {actionLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link
            href={secondaryHref}
            className="product-page-button product-page-button--secondary"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </aside>
  );
}
