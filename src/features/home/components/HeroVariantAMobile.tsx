'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export const HeroStickyMobileCta = () => {
  const t = useTranslations('heroA');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 380);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="hero-sticky-cta"
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          exit={{ y: '110%' }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-card/90 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
        >
          <Link
            href="/contact"
            className="gradient-bg flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-md shadow-primary/20"
          >
            {t('stickyMobileCta')} <Ico name="solar:arrow-right-bold-duotone" className="size-4" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const HeroVariantAMobile = HeroStickyMobileCta;
