import { GradientText } from '@/components/ui/gradient-text';
import { cn } from '@/lib/utils';

// Canonical aiNOW header wordmark: "ai" (Space Mono) + "NOW" (Bricolage), both
// under the brand gradient. When `collapsed` is true (page scrolled) the "NOW"
// half folds away letter by letter, leaving just "ai"; it unfolds on the way
// back to the top. "ai" never moves. The fold is transform + opacity only
// (origin-left scaleX), so it costs zero layout shift per the OBSIDIAN motion
// rule, and it no-ops under prefers-reduced-motion.

const AI_COLORS = ['oklch(0.58 0.22 300)', 'oklch(0.55 0.16 195)', 'oklch(0.52 0.18 210)', 'oklch(0.58 0.22 300)'];
const NOW_COLORS = ['oklch(0.55 0.16 195)', 'oklch(0.58 0.22 300)', 'oklch(0.52 0.18 210)', 'oklch(0.55 0.16 195)'];
const NOW = ['N', 'O', 'W'] as const;
const STAGGER_MS = 70;

interface BrandWordmarkProps {
  // Fold "NOW" away, leaving "ai" (scroll-collapsed state).
  collapsed?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export const BrandWordmark = ({ collapsed = false, pauseOnHover = false, className }: BrandWordmarkProps) => {
  return (
    <span className={cn('inline-flex items-center text-xl tracking-tight', className)} aria-label="aiNOW" role="img">
      <GradientText
        className="font-(family-name:--font-space-mono) font-normal"
        colors={AI_COLORS}
        animationSpeed={6}
        pauseOnHover={pauseOnHover}
      >
        ai
      </GradientText>
      {NOW.map((char, i) => (
        <span
          key={char}
          aria-hidden="true"
          className={cn(
            'inline-flex origin-left transition-[transform,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
            collapsed ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100',
          )}
          style={{
            transitionDuration: '380ms',
            // Collapse peels right->left (W first); expand unfolds left->right (N first).
            transitionDelay: `${(collapsed ? NOW.length - 1 - i : i) * STAGGER_MS}ms`,
          }}
        >
          <GradientText
            className="font-(family-name:--font-bricolage) font-extrabold"
            colors={NOW_COLORS}
            animationSpeed={8}
            pauseOnHover={pauseOnHover}
          >
            {char}
          </GradientText>
        </span>
      ))}
    </span>
  );
};
