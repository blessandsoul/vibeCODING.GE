import { SITE } from '@/config/site';

import { LegalDocument, type LegalDocumentSection } from './LegalDocument';
import { ProductPageShell } from './ProductPageShell';
import { SecondaryPageHero } from './SecondaryPageHero';

interface LegalPageProps {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  operatorLabel: string;
  domainLabel: string;
  effectiveLabel: string;
  updatedLabel: string;
  contentsLabel: string;
  effectiveDate: string;
  updatedDate: string;
  sections: readonly LegalDocumentSection[];
}

export function LegalPage(props: LegalPageProps): React.ReactElement {
  return (
    <ProductPageShell className="legal-page" endcap={null}>
      <SecondaryPageHero
        breadcrumbLabel={props.breadcrumb}
        eyebrow={props.eyebrow}
        title={props.title}
        lead={props.lead}
      />
      <LegalDocument
        operatorLabel={props.operatorLabel}
        operator="AI NOW LLC / შპს ეი აი ნაუ"
        domainLabel={props.domainLabel}
        domain={SITE.domain}
        effectiveLabel={props.effectiveLabel}
        effectiveDate={props.effectiveDate}
        updatedLabel={props.updatedLabel}
        updatedDate={props.updatedDate}
        contentsLabel={props.contentsLabel}
        sections={props.sections}
      />
    </ProductPageShell>
  );
}
