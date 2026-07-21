import type { ReactNode } from 'react';
import { Ico } from '@/components/common/Ico';

type DemoIntroProps = {
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
};

function BrandSafeText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(aiNOW-ი|aiNOW)/u).map((part, index) =>
        part === 'aiNOW' || part === 'aiNOW-ი' ? (
          <span key={`${part}-${index}`} className="whitespace-nowrap">{part}</span>
        ) : part,
      )}
    </>
  );
}

export function DemoIntro({ icon, eyebrow, title, description, badge }: DemoIntroProps) {
  return (
    <header className="max-w-[760px]">
      <div className="flex flex-wrap items-center gap-3">
        <span className="grid size-11 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--brand)_12%,white)] text-[var(--brand-ink)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--brand)_18%,transparent)]">
          <Ico name={icon} className="size-5" />
        </span>
        <span className="text-[12px] font-bold tracking-wide text-[#667085]">{eyebrow}</span>
        {badge ? (
          <span className="rounded-full bg-neutral-900/[0.06] px-3 py-1 text-[10px] font-bold tracking-wide text-[#4B5563]">
            {badge}
          </span>
        ) : null}
      </div>
      <h2 className="mt-5 text-balance font-display text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#111827] md:text-[36px]">
        <BrandSafeText text={title} />
      </h2>
      <p className="mt-4 max-w-[680px] text-pretty text-[15px] leading-6 text-[#4B5563]">
        {description}
      </p>
    </header>
  );
}

type BusinessResultProps = {
  label: string;
  children: ReactNode;
};

type StableStoryLayer = {
  key: string;
  content: ReactNode;
  className?: string;
};

type StableStoryTextProps = {
  activeKey: string;
  layers: readonly StableStoryLayer[];
  className?: string;
};

export function StableStoryText({
  activeKey,
  layers,
  className = '',
}: StableStoryTextProps) {
  return (
    <span className={`grid min-w-0 ${className}`}>
      {layers.map((layer) => {
        const active = layer.key === activeKey;
        return (
          <span
            key={layer.key}
            aria-hidden={!active}
            className={`col-start-1 row-start-1 min-w-0 ${layer.className ?? ''} ${
              active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {layer.content}
          </span>
        );
      })}
    </span>
  );
}

export function BusinessResult({ label, children }: BusinessResultProps) {
  return (
    <p
      data-business-result="true"
      className="mt-6 flex min-h-[72px] items-start gap-3 rounded-2xl bg-[color-mix(in_srgb,var(--brand)_8%,white)] px-5 py-4 text-pretty text-[14px] font-semibold leading-6 text-[#334155] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--brand)_18%,transparent)]"
    >
      <Ico name="solar:check-circle-bold-duotone" className="mt-0.5 size-5 shrink-0 text-[var(--brand-ink)]" />
      <span>
        <strong className="font-extrabold text-[#111827]">{label}:</strong> {children}
      </span>
    </p>
  );
}
