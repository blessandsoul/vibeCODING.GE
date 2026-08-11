import { serializeJsonLd } from '../seo';

export function ProductPageJsonLd({ graph }: { graph: object }): React.ReactElement {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}
