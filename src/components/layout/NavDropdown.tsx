'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface DropdownItem {
  href: string;
  label: string;
  icon: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  isActive: boolean;
}

export const NavDropdown = ({ label, items, isActive }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  }, []);

  // Outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group/link relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span
          className={cn(
            'relative transition-colors duration-200',
            isActive
              ? 'text-foreground'
              : 'text-muted-foreground group-hover/link:text-foreground'
          )}
        >
          {label}
        </span>
        <Ico
          name="solar:alt-arrow-down-bold-duotone"
          className={cn(
            'h-3.5 w-3.5 transition duration-200',
            isActive
              ? 'text-foreground'
              : 'text-muted-foreground group-hover/link:text-foreground',
            isOpen && 'rotate-180'
          )}
        />
        <span
          className={cn(
            'absolute bottom-1 left-4 right-4 h-px bg-linear-to-r from-primary/0 via-primary to-primary/0 transition-opacity duration-300',
            isActive
              ? 'opacity-100'
              : 'opacity-0 group-hover/link:opacity-60'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-1 min-w-52 rounded-lg border border-border/50 bg-popover p-1.5 shadow-lg"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted/50 text-xs">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
