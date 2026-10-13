import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';
import type { PersonalizedVideoContent } from '../types';

interface PersonalizedVideoStoryProps {
  content: PersonalizedVideoContent;
}

const USE_CASE_ICONS = [
  'solar:stars-minimalistic-bold-duotone',
  'solar:heart-bold-duotone',
  'solar:home-smile-bold-duotone',
  'solar:users-group-rounded-bold-duotone',
] as const;

export function PersonalizedVideoStory({ content }: PersonalizedVideoStoryProps) {
  return (
    <>
      <section className="pv-editorial">
        <div className="pv-shell pv-editorial-grid">
          <FadeIn>
            <h2 className="text-balance">{content.answerTitle}</h2>
          </FadeIn>
          <div className="pv-editorial-copy">
            {content.answerParagraphs.map((paragraph, index) => (
              <FadeIn key={paragraph} delay={index * 0.06}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pv-use-cases">
        <div className="pv-shell">
          <FadeIn>
            <div className="pv-section-heading">
              <span>{content.eyebrow}</span>
              <h2>{content.suitableTitle}</h2>
            </div>
          </FadeIn>

          <div className="pv-bento">
            {content.suitableItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className={`pv-use-card pv-use-card-${index + 1}`}>
                  <Ico name={USE_CASE_ICONS[index] ?? USE_CASE_ICONS[0]} className="pv-use-icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                  <span className="pv-card-index" aria-hidden="true">0{index + 1}</span>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="pv-process">
        <div className="pv-shell">
          <FadeIn>
            <h2>{content.stepsTitle}</h2>
          </FadeIn>
          <div className="pv-process-line" aria-hidden="true" />
          <div className="pv-steps">
            {content.steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.08}>
                <article className="pv-step">
                  <span className="pv-step-dot" aria-hidden="true">{index + 1}</span>
                  <h3>{step.title.replace(/^\d+\.\s*/, '')}</h3>
                  <p>{step.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
