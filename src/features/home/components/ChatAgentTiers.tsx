'use client';

import type { ReactElement, ReactNode } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { getChatPricingCopy } from '@/lib/chat-pricing-copy';
import { ChatPlanCarousel } from './ChatPlanCarousel';
import { ChatPricingDetails } from './ChatPricingDetails';

interface ChatAgentTiersProps {
  showCta?: boolean;
}

interface ChatPlatform {
  name: string;
  color: string;
  icon: ReactNode;
}

const CHAT_PLATFORMS: readonly ChatPlatform[] = [
  {
    name: 'Messenger',
    color: '#0084ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.906 1.407 5.5 3.623 7.22V22l3.305-1.815C10.065 20.388 11.017 20.5 12 20.5c5.523 0 10-4.145 10-9.257C22 6.145 17.523 2 12 2zm1.07 12.456-2.543-2.715-4.963 2.715 5.461-5.799 2.605 2.715 4.9-2.715-5.46 5.799z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    color: '#e1306c',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 0c3.26 0 3.668.014 4.948.072 4.354.2 6.782 2.618 6.979 6.98.059 1.28.073 1.689.073 4.948s-.014 3.668-.072 4.948c-.2 4.354-2.618 6.782-6.98 6.979C15.668 23.986 15.259 24 12 24s-3.668-.014-4.948-.072c-4.358-.2-6.78-2.618-6.98-6.98C.014 15.668 0 15.259 0 12s.014-3.667.072-4.947C.272 2.695 2.69.273 7.052.073 8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    color: '#25d366',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12.05 0A11.9 11.9 0 0 0 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.9 11.9 0 0 0 12.05 0zm5.422 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.757-.878-2.909-1.565-4.043-3.55-.305-.524.305-.487.873-1.618.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.57-.01-.989-.01-1.287.298-1.49 1.635-1.116 3.322.161 5.084 2.442 3.371 5.933 4.567 8.315 4.796.766.074 1.463-.092 2.014-.587.623-.559.785-1.466.541-1.608z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    color: '#26a5e4',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M11.944 0A12 12 0 1 0 12 0h-.056zm5.598 7.689c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.021-.095-.112-.236-.305-.188-.106.024-1.793 1.14-5.061 3.345-.908.624-1.73.48-3.167.013-1.178-.383-1.21-.83-.404-1.153 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.94-2.058 5.112-.49z" />
      </svg>
    ),
  },
  {
    name: 'Web Widget',
    color: '#7c3aed',
    icon: <Ico name="solar:global-bold-duotone" className="h-4 w-4" />,
  },
];

export function ChatAgentTiers({
  showCta = false,
}: ChatAgentTiersProps): ReactElement {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const copy = getChatPricingCopy(locale);

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-7 flex flex-col items-center gap-3 text-center">
        <h2 className="font-display text-lg font-bold text-neutral-900">
          {t('chatAgent')}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-[#525252]">{t('chatPlatforms')}:</span>
          {CHAT_PLATFORMS.map((platform) => (
            <span
              key={platform.name}
              title={platform.name}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-white px-3 text-xs font-medium"
              style={{ color: platform.color }}
            >
              {platform.icon}
              <span className="text-neutral-700">{platform.name}</span>
            </span>
          ))}
        </div>
      </div>

      <ChatPlanCarousel copy={copy} showCta={showCta} />

      <p className="mx-auto mt-4 max-w-3xl text-center text-pretty text-xs leading-relaxed text-[#525252]">
        {copy.disclaimer}
      </p>

      {showCta && <ChatPricingDetails />}

    </div>
  );
}
