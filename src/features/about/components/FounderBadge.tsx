import { cn } from "@/lib/utils";

export type FounderBadgeTone = "amethyst" | "ruby";

interface FounderBadgeProps {
  label: string;
  role: string;
  tone: FounderBadgeTone;
  className?: string;
  compact?: boolean;
}

const toneStyles: Record<FounderBadgeTone, {
  shell: string;
  sheen: string;
  role: string;
  gem: {
    deep: string;
    base: string;
    light: string;
  };
}> = {
  amethyst: {
    shell: "border-[#a89ae6]/55 bg-gradient-to-r from-[rgba(133,122,204,0.17)] via-[rgba(168,154,230,0.1)] to-[rgba(133,122,204,0.17)] text-[#453b78] shadow-[0_4px_18px_rgba(133,122,204,0.18),inset_0_1px_0_rgba(255,255,255,0.72)] transition-[border-color,box-shadow,background-color] hover:border-[#a89ae6]/75 hover:shadow-[0_5px_20px_rgba(133,122,204,0.24),inset_0_1px_0_rgba(255,255,255,0.82)] dark:border-[#a89ae6]/45 dark:from-[rgba(133,122,204,0.25)] dark:via-[rgba(168,154,230,0.14)] dark:to-[rgba(133,122,204,0.25)] dark:text-[#f0edff] dark:shadow-[0_4px_20px_rgba(133,122,204,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] dark:hover:border-[#a89ae6]/65 dark:hover:shadow-[0_5px_22px_rgba(133,122,204,0.28),inset_0_1px_0_rgba(255,255,255,0.28)]",
    sheen: "from-transparent via-white/45 to-transparent dark:via-white/20",
    role: "text-[#5a4a9f] dark:text-[#d5cbff]",
    gem: {
      deep: "#5f559f",
      base: "#857acc",
      light: "#a89ae6",
    },
  },
  ruby: {
    shell: "border-[#fa65ca]/55 bg-gradient-to-r from-[rgba(250,101,202,0.16)] via-[rgba(249,37,74,0.1)] to-[rgba(250,101,202,0.16)] text-[#7f1d3d] shadow-[0_4px_18px_rgba(249,37,74,0.16),inset_0_1px_0_rgba(255,255,255,0.72)] transition-[border-color,box-shadow,background-color] hover:border-[#fa65ca]/75 hover:shadow-[0_5px_20px_rgba(249,37,74,0.23),inset_0_1px_0_rgba(255,255,255,0.82)] dark:border-[#fa65ca]/45 dark:from-[rgba(250,101,202,0.24)] dark:via-[rgba(249,37,74,0.14)] dark:to-[rgba(250,101,202,0.24)] dark:text-[#fff2f7] dark:shadow-[0_4px_20px_rgba(249,37,74,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] dark:hover:border-[#fa65ca]/65 dark:hover:shadow-[0_5px_22px_rgba(249,37,74,0.28),inset_0_1px_0_rgba(255,255,255,0.28)]",
    sheen: "from-transparent via-white/45 to-transparent dark:via-white/20",
    role: "text-[#bb1d58] dark:text-[#ffc2d9]",
    gem: {
      deep: "#f9254a",
      base: "#fa3d7c",
      light: "#fa65ca",
    },
  },
};

export function FounderBadge({ label, role, tone, className, compact = false }: FounderBadgeProps) {
  const styles = toneStyles[tone];

  return (
    <span
      className={cn(
        "group relative inline-flex max-w-full items-center overflow-hidden rounded-full border font-semibold backdrop-blur-sm motion-reduce:transition-none",
        compact ? "gap-0.5 px-1.5 py-0.5 text-[10px] leading-4 tracking-normal" : "gap-1.5 px-3 py-1 text-[11px] tracking-wide",
        styles.shell,
        className,
      )}
      data-founder-badge
      data-tone={tone}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-[240%] group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:opacity-0",
          styles.sheen,
        )}
      />
      <svg aria-hidden="true" viewBox="0 0 20 20" className={cn("relative shrink-0", compact ? "size-3" : "size-3.5")} fill="none">
        <path d="M5.1 3.7h9.8l2.4 3.1-7.3 9.5L2.7 6.8l2.4-3.1Z" fill={styles.gem.deep} />
        <path d="M2.7 6.8h14.6l-7.3 9.5-7.3-9.5Z" fill={styles.gem.base} />
        <path d="m5.1 3.7 4.9 3.1 4.9-3.1-2.1 3.1H7.2L5.1 3.7Z" fill={styles.gem.light} />
        <path d="M5.1 3.7 10 6.8l4.9-3.1M2.7 6.8h14.6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".72" strokeWidth=".9" />
        <path d="m7.1 4.8 2.9 1.8 2.9-1.8" stroke="white" strokeLinecap="round" strokeOpacity=".42" strokeWidth=".65" />
      </svg>
      <span className="relative whitespace-nowrap">{label}</span>
      <span aria-hidden="true" className="relative text-current/45">·</span>
      <span className={cn("relative whitespace-nowrap font-mono text-[10px] tracking-[0.12em]", styles.role)}>{role}</span>
    </span>
  );
}
