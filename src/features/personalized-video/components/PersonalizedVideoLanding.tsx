import type { PersonalizedVideoContent } from '../types';
import { PersonalizedVideoHero } from './PersonalizedVideoHero';
import { PersonalizedVideoStory } from './PersonalizedVideoStory';
import { PersonalizedVideoDetails } from './PersonalizedVideoDetails';
import './personalized-video.css';
import './personalized-video.css';

interface PersonalizedVideoLandingProps {
  content: PersonalizedVideoContent;
  contactHref: string;
  localizedPath: (path: string) => string;
}

export function PersonalizedVideoLanding({
  content,
  contactHref,
  localizedPath,
}: PersonalizedVideoLandingProps) {
  return (
    <main className="pv-page landing-page">
      <PersonalizedVideoHero content={content} contactHref={contactHref} />
      <PersonalizedVideoStory content={content} />
      <PersonalizedVideoDetails
        content={content}
        contactHref={contactHref}
        localizedPath={localizedPath}
      />
    </main>
  );
}
