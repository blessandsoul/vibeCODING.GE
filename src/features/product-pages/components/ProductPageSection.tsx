import type { ReactNode } from 'react';

interface ProductPageSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  reading?: boolean;
  className?: string;
}

export function ProductPageSection({
  id,
  eyebrow,
  title,
  intro,
  children,
  reading = false,
  className,
}: ProductPageSectionProps): React.ReactElement {
  return (
    <section
      id={id}
      className={[
        'product-page-section',
        reading && 'product-page-section--reading',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="product-page-section__heading">
        {eyebrow ? <p className="product-page-eyebrow">{eyebrow}</p> : null}
        <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      <div className="product-page-section__body">{children}</div>
    </section>
  );
}
