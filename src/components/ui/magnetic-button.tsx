'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

type MagneticButtonVariant = 'primary' | 'secondary' | 'warm' | 'emerald';

type MagneticButtonProps = {
  children: ReactNode;
  variant?: MagneticButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
};

const VARIANT_STYLES = {
  primary: {
    idle: 'from-purple-500/80 via-violet-500/80 to-fuchsia-500/80',
    hover: 'from-purple-400 via-violet-400 to-fuchsia-400',
    glow: 'oklch(0.58 0.22 300)',
    text: 'text-foreground',
  },
  secondary: {
    idle: 'from-teal-500/80 via-cyan-500/80 to-sky-500/80',
    hover: 'from-teal-400 via-cyan-400 to-sky-400',
    glow: 'oklch(0.55 0.16 195)',
    text: 'text-foreground',
  },
  warm: {
    idle: 'from-amber-500/80 via-orange-500/80 to-yellow-500/80',
    hover: 'from-amber-400 via-orange-400 to-yellow-400',
    glow: 'oklch(0.75 0.15 65)',
    text: 'text-foreground',
  },
  emerald: {
    idle: 'from-emerald-500/80 via-teal-500/80 to-green-500/80',
    hover: 'from-emerald-400 via-teal-400 to-green-400',
    glow: 'oklch(0.70 0.17 160)',
    text: 'text-foreground',
  },
} as const;

export const MagneticButton = ({
  children,
  variant = 'warm',
  href,
  className,
  onClick,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const styles = VARIANT_STYLES[variant];

  const handleMouseMove = (e: MouseEvent) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const Tag = href ? 'a' : 'button';
  const linkProps = href ? { href } : {};

  return (
    <Tag
      {...linkProps}
      ref={buttonRef as never}
      type={href ? undefined : 'button'}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'magnetic-btn group relative inline-flex items-center overflow-hidden rounded-2xl text-sm font-semibold sm:text-base',
        'transition-all duration-500 ease-out',
        'hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20',
        'active:scale-[0.97]',
        className
      )}
      style={{
        '--mx': `${mousePos.x}%`,
        '--my': `${mousePos.y}%`,
        '--glow-color': styles.glow,
      } as React.CSSProperties}
    >
      {/* Animated gradient border */}
      <span
        className={cn(
          'absolute inset-0 rounded-2xl bg-gradient-to-r p-[1.5px] transition-opacity duration-500',
          styles.idle,
          isHovered && styles.hover
        )}
        aria-hidden
      >
        <span className="absolute inset-[1.5px] rounded-[calc(1rem-1.5px)] bg-card" />
      </span>

      {/* Cursor-following radial glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle 80px at var(--mx) var(--my), var(--glow-color), transparent)`,
          opacity: isHovered ? 0.15 : 0,
        }}
        aria-hidden
      />

      {/* Inner surface with subtle gradient */}
      <span
        className={cn(
          'relative z-10 flex items-center gap-0 px-6 py-2.5 sm:px-8 sm:py-3',
          'transition-all duration-300',
          styles.text
        )}
      >
        {children}
      </span>
    </Tag>
  );
};
