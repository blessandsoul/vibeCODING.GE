'use client';

import type { ReactElement } from 'react';
import { Popover as PopoverPrimitive } from 'radix-ui';
import { Ico } from '@/components/common/Ico';
import { cn } from '@/lib/utils';

interface ChatPricingInfoProps {
  label: string;
  text: string;
  className?: string;
}

export function ChatPricingInfo({
  label,
  text,
  className,
}: ChatPricingInfoProps): ReactElement {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label={label}
          className={cn(
            'inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full text-[#525252]',
            'transition-[color,background-color,transform] duration-200 ease-out hover:bg-[#7c3aed]/8 hover:text-[#7c3aed]',
            'active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/45 focus-visible:ring-offset-2',
            className,
          )}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#d8d8dc] bg-white">
            <Ico name="solar:info-circle-linear" className="h-3 w-3" />
          </span>
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          forceMount
          side="top"
          sideOffset={8}
          collisionPadding={12}
          className={cn(
            'z-[80] w-[min(19rem,calc(100vw-1.5rem))] rounded-xl border border-white/10 bg-neutral-900 px-4 py-3',
            'text-pretty text-xs font-medium leading-relaxed text-white shadow-2xl outline-none',
            'pointer-events-none invisible translate-y-1.5 scale-[0.985] opacity-0',
            'transition-[opacity,transform,visibility] duration-200 ease-out',
            'data-[state=open]:pointer-events-auto data-[state=open]:visible data-[state=open]:translate-y-0 data-[state=open]:scale-100 data-[state=open]:opacity-100',
            'motion-reduce:transform-none motion-reduce:transition-none',
          )}
        >
          {text}
          <PopoverPrimitive.Arrow className="fill-neutral-900" />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
