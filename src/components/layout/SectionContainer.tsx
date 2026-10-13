import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <section className={cn("container mx-auto px-4 md:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
};
