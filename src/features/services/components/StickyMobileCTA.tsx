'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Ico } from '@/components/common/Ico';

type StickyMobileCTAProps = {
  href?: string;
};

export const StickyMobileCTA = ({ href = '/contact' }: StickyMobileCTAProps) => {
  const t = useTranslations('servicesAuctionMarketing');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let nearFooter = false;

    const onScroll = () => {
      const passedHero = window.scrollY > 480;
      setVisible(passedHero && !nearFooter);
    };

    const target = document.querySelector('[data-final-cta]');
    let observer: IntersectionObserver | null = null;
    if (target) {
      observer = new IntersectionObserver(
        ([entry]) => {
          nearFooter = entry.isIntersecting;
          onScroll();
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
      );
      observer.observe(target);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-cta"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-40 dodo-glass-card border-t-0 px-4 py-3 md:hidden"
        >
          <Link
            href={href}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-blue-400 text-sm font-bold text-white shadow-md shadow-[#2563eb]/10"
          >
            {t('stickyCtaText')} <Ico name="solar:arrow-right-bold-duotone" className="size-[16px]" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
