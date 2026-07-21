import { cn } from '@/lib/utils';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const SectionContainer = ({ children, className, ...props }: SectionContainerProps) => {
  return (
    <section
      {...props}
      data-family-shell="true"
      className={cn('mx-auto w-[calc(100%-48px)] max-w-[1216px]', className)}
    >
      {children}
    </section>
  );
};
