import type {
  AutomationShowcaseCard,
  AutomationShowcaseStep,
} from './AutomationShowcase';
import type { AutomationNodesCopy } from './AutomationNodes';
import type { Article } from './SeoArticle';

export type ServiceTemplateCopy = {
  title: string;
  body: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    subtitle: string;
  };
  showcase: {
    cards: readonly AutomationShowcaseCard[];
    steps: readonly AutomationShowcaseStep[];
    howTitle: string;
  };
  faqTitle: string;
  faq: readonly { q: string; a: string }[];
  cta: { cta: string };
  schema: { title: string; description: string };
  nodes: AutomationNodesCopy;
  article: Article;
};

type ServiceTemplateCopyInput = Omit<ServiceTemplateCopy, 'hero' | 'showcase' | 'schema' | 'nodes' | 'article'> & {
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent?: string;
  showcaseLabel: string;
  showcaseItems: readonly string[];
  showcaseTitles?: readonly string[];
  stepItems: readonly { title: string; description: string }[];
  howTitle: string;
  nodeTitle?: string;
  nodeSubtitle?: string;
  nodeScenarioLabel?: string;
  nodeStatLabels?: readonly [string, string, string];
  nodeStatValues?: readonly [string, string, string];
  article?: Article;
};

const ICONS = ['solar:link-bold-duotone', 'solar:shield-check-bold-duotone', 'solar:route-bold-duotone', 'solar:check-circle-bold-duotone'] as const;

export function createServiceTemplateCopy(input: ServiceTemplateCopyInput): ServiceTemplateCopy {
  return {
    title: input.title,
    body: input.body,
    hero: {
      eyebrow: input.heroEyebrow,
      title: input.heroTitle,
      titleAccent: input.heroTitleAccent,
      subtitle: input.body,
    },
    showcase: {
      cards: input.showcaseItems.map((description, index) => ({
        title: input.showcaseTitles?.[index] ?? `${input.showcaseLabel} ${String(index + 1).padStart(2, '0')}`,
        description,
        icon: ICONS[index % ICONS.length],
      })),
      steps: input.stepItems.map((step, index) => ({
        title: step.title,
        description: step.description,
        num: String(index + 1).padStart(2, '0'),
      })),
      howTitle: input.howTitle,
    },
    faqTitle: input.faqTitle,
    faq: input.faq,
    cta: input.cta,
    schema: { title: input.title, description: input.body },
    nodes: {
      nodesTitle: input.nodeTitle ?? input.howTitle,
      nodesSubtitle: input.nodeSubtitle ?? input.body,
      scenarios: [{
        key: 'review',
        label: input.nodeScenarioLabel ?? input.showcaseLabel,
        icon: 'solar:route-bold-duotone',
        nodes: input.stepItems.map((step, index) => ({
          id: `step-${index}`,
          label: step.title,
          icon: ['solar:document-bold-duotone', 'solar:shield-check-bold-duotone', 'solar:user-check-bold-duotone', 'solar:check-circle-bold-duotone'][index % 4],
          x: 40 + index * 210,
          y: 170,
          type: index === 0 ? 'trigger' : index === input.stepItems.length - 1 ? 'output' : 'process',
        })),
        connections: input.stepItems.slice(1).map((_, index) => ({ from: `step-${index}`, to: `step-${index + 1}` })),
      }],
      stats: (input.nodeStatLabels ?? [`${input.showcaseLabel} 01`, `${input.showcaseLabel} 02`, `${input.showcaseLabel} 03`]).map((label, index) => ({ value: (input.nodeStatValues ?? ['scope', 'review', 'confirm'])[index], label })),
    },
    article: input.article ?? { sections: [{ h: input.title, p: input.body }] },
  };
}
