import { Ico } from '@/components/common/Ico';

import './product-capabilities.css';

export type ProductCapability = {
  icon: string;
  title: string;
  description: string;
  result: string;
};

export function ProductCapabilities({
  eyebrow,
  title,
  intro,
  outcomeLabel,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  outcomeLabel: string;
  items: readonly ProductCapability[];
}): React.ReactElement {
  return (
    <section id="products" className="product-capabilities">
      <div data-family-shell="true" className="product-capabilities__shell">
        <header className="product-capabilities__header">
          <p><InlineBrandText text={eyebrow} /></p>
          <div>
            <h2><InlineBrandText text={title} /></h2>
            <span><InlineBrandText text={intro} /></span>
          </div>
        </header>

        <div className="product-capabilities__list">
          {items.map((item, index) => (
            <article
              key={`${index}-${item.title}`}
              className="product-capabilities__item"
              data-feature-section="true"
              data-feature-id={`capability-${index + 1}`}
            >
              <span className="product-capabilities__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="product-capabilities__name">
                <span className="product-capabilities__icon" aria-hidden="true">
                  <Ico name={item.icon} className="size-5" />
                </span>
                <h3><InlineBrandText text={item.title} /></h3>
              </div>
              <div className="product-capabilities__explanation">
                <p><InlineBrandText text={item.description} /></p>
                <p className="product-capabilities__outcome">
                  <Ico name="solar:check-circle-bold-duotone" className="size-4" />
                  <span>
                    <strong><InlineBrandText text={outcomeLabel} />:</strong>{' '}
                    <InlineBrandText text={item.result} />
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InlineBrandText({ text }: { text: string }): React.ReactElement {
  const parts = text.split(/(iAI|ai[A-Z][A-Z0-9]+)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part === 'iAI') {
          return (
            <span key={`${part}-${index}`} className="product-capabilities__inline-mark" aria-label="iAI">
              <span className="product-capabilities__inline-i">i</span>
              <span className="product-capabilities__inline-ai">AI</span>
            </span>
          );
        }
        if (/^ai[A-Z][A-Z0-9]+$/.test(part)) {
          const suffix = part.slice(2);
          return (
            <span key={`${part}-${index}`} className="product-capabilities__inline-mark">
              <span className="product-capabilities__inline-ai">ai</span>
              <span
                className="product-capabilities__inline-suffix"
                data-parent={suffix === 'NOW' ? 'true' : 'false'}
              >
                {suffix}
              </span>
            </span>
          );
        }
        return <span key={`${index}-${part}`}>{part}</span>;
      })}
    </>
  );
}
