import type { CSSProperties, ReactElement } from 'react';
import { cn } from '@/lib/utils';
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  LinkedInIcon,
  GitHubIcon,
} from '@/components/icons/BrandIcons';

/* Single source of truth for aiNOW social profiles, reused by both footers.
   Uses the unified brand-icon pack (the real filled brand glyphs, the aiSTAFF
   set), so every site renders the same icons. Keep in sync with the `sameAs`
   arrays in components/seo/StructuredData.tsx. */
type BrandIcon = (props: { className?: string; style?: CSSProperties }) => ReactElement;
type Social = { label: string; href: string; Icon: BrandIcon };

const SOCIALS: Social[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/ainow.ge', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/ainow.ge/', Icon: InstagramIcon },
  { label: 'Telegram', href: 'https://t.me/ainow_ge', Icon: TelegramIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ainowgeorgia', Icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/ainowgeorgia', Icon: GitHubIcon },
];

/* `round` renders each profile as a bordered circular icon button (the aiSTAFF
   footer look). Default stays the plain inline icon row used elsewhere. */
export function SocialLinks({
  className,
  size = 18,
  round = false,
}: {
  className?: string;
  size?: number;
  round?: boolean;
}) {
  const iconStyle: CSSProperties = { width: size, height: size };
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {SOCIALS.map(({ label, href, Icon }) =>
        round ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-11 w-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] text-[#4B5563] transition-[color,background-color,transform] duration-300 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 md:hover:bg-neutral-100 md:hover:text-[#111827]"
            style={{ width: 44, minWidth: 44, flex: '0 0 44px' }}
          >
            <Icon style={iconStyle} />
          </a>
        ) : (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
          >
            <Icon style={iconStyle} />
          </a>
        ),
      )}
    </div>
  );
}
