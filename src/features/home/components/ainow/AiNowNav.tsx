"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { AiNowLogo } from "@/components/common/AiNowLogo";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { useThemeTransition } from "@/components/common/useThemeTransition";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";
import {
  AnimatedWindowsIcon,
  AnimatedDebuggerIcon,
  AnimatedGitBranchIcon,
  AnimatedServerIcon,
  AnimatedWorkflowIcon,
  AnimatedSparklesIcon,
  AnimatedTargetIcon,
  AnimatedMicrophoneIcon,
  AnimatedBookIcon,
  AnimatedFileIcon,
  AnimatedTerminalIcon,
  AnimatedUsersIcon,
  AnimatedGlobeIcon,
  AnimatedSmartphoneIcon,
  AnimatedScaleIcon,
  AnimatedCarIcon,
  AnimatedArrowRightIcon,
} from "./AiNowAnimatedIcons";

const emptySubscribe = () => () => {};

const FAMILY_NAV_LABELS = {
  ka: {
    products: "პროდუქტები",
    customerCommunication: "კლიენტებთან კომუნიკაცია",
    marketingContent: "მარკეტინგი და კონტენტი",
    internalOperations: "შიდა პროცესები",
    webApps: "საიტები და აპები",
    specializedSolutions: "სხვა მიმართულებები",
  },
  en: {
    products: "Products",
    customerCommunication: "Customer communication",
    marketingContent: "Marketing and content",
    internalOperations: "Internal operations",
    webApps: "Websites and apps",
    specializedSolutions: "Coordination and specialist solutions",
  },
  ru: {
    products: "Продукты",
    customerCommunication: "Общение с клиентами",
    marketingContent: "Маркетинг и контент",
    internalOperations: "Внутренние процессы",
    webApps: "Сайты и приложения",
    specializedSolutions: "Координация и специальные решения",
  },
  de: {
    products: "Produkte",
    customerCommunication: "Kundenkommunikation",
    marketingContent: "Marketing und Content",
    internalOperations: "Interne Abläufe",
    webApps: "Websites und Apps",
    specializedSolutions: "Koordination und Speziallösungen",
  },
  tr: {
    products: "Ürünler",
    customerCommunication: "Müşteri iletişimi",
    marketingContent: "Pazarlama ve içerik",
    internalOperations: "İç operasyonlar",
    webApps: "Web siteleri ve uygulamalar",
    specializedSolutions: "Koordinasyon ve özel çözümler",
  },
  fa: {
    products: "محصولات",
    customerCommunication: "ارتباط با مشتری",
    marketingContent: "بازاریابی و محتوا",
    internalOperations: "عملیات داخلی",
    webApps: "وب‌سایت‌ها و اپ‌ها",
    specializedSolutions: "هماهنگی و راهکارهای تخصصی",
  },
  zh: {
    products: "产品",
    customerCommunication: "客户沟通",
    marketingContent: "营销与内容",
    internalOperations: "内部运营",
    webApps: "网站与应用",
    specializedSolutions: "协调与专业方案",
  },
} as const;

type FamilyNavLocale = keyof typeof FAMILY_NAV_LABELS;

function getFamilyNavLabels(locale: string) {
  const resolved = (Object.prototype.hasOwnProperty.call(FAMILY_NAV_LABELS, locale) ? locale : "en") as FamilyNavLocale;
  return FAMILY_NAV_LABELS[resolved];
}

type ProductGroupId = "customerCommunication" | "marketingContent" | "internalOperations" | "webApps" | "specializedSolutions";

type ProductNavItem = {
  id: string;
  title: string;
  icon: typeof AnimatedWindowsIcon;
  accentColor: string;
  dotColor: string;
  href: string;
};

const PRODUCT_GROUPS: Array<{ id: ProductGroupId; dotColor: string; items: ProductNavItem[] }> = [
  {
    id: "customerCommunication",
    dotColor: "bg-[#2563eb]",
    items: [
      { id: "aichats", title: "aiCHATS", icon: AnimatedDebuggerIcon, accentColor: "text-[#2563eb]", dotColor: "bg-[#2563eb]", href: "https://aichats.ge" },
      { id: "aicall", title: "aiCALL", icon: AnimatedServerIcon, accentColor: "text-[#f59e0b]", dotColor: "bg-[#f59e0b]", href: "https://aicall.ge" },
    ],
  },
  {
    id: "marketingContent",
    dotColor: "bg-[#ec4899]",
    items: [
      { id: "aicontent", title: "aiCONTENT", icon: AnimatedSparklesIcon, accentColor: "text-[#ec4899]", dotColor: "bg-[#ec4899]", href: "https://aicontent.ge" },
      { id: "aiads", title: "aiADS", icon: AnimatedTargetIcon, accentColor: "text-[#10b981]", dotColor: "bg-[#10b981]", href: "https://aiads.ge" },
      { id: "airadar", title: "aiRADAR", icon: AnimatedTargetIcon, accentColor: "text-[#f97316]", dotColor: "bg-[#f97316]", href: "https://airadar.ge" },
      { id: "aimusic", title: "aiMUSIC", icon: AnimatedMicrophoneIcon, accentColor: "text-[#d946ef]", dotColor: "bg-[#d946ef]", href: "https://aimusic.ge" },
    ],
  },
  {
    id: "internalOperations",
    dotColor: "bg-[#14b8a6]",
    items: [
      { id: "aistaff", title: "aiSTAFF", icon: AnimatedUsersIcon, accentColor: "text-[#2563eb]", dotColor: "bg-[#2563eb]", href: "https://aistaff.ge" },
      { id: "aibrain", title: "aiBRAIN", icon: AnimatedBookIcon, accentColor: "text-[#7c3aed]", dotColor: "bg-[#7c3aed]", href: "https://aibrain.ge" },
      { id: "aioffice", title: "aiOFFICE", icon: AnimatedWorkflowIcon, accentColor: "text-[#14b8a6]", dotColor: "bg-[#14b8a6]", href: "https://aioffice.ge" },
      { id: "aidocs", title: "aiDOCS", icon: AnimatedFileIcon, accentColor: "text-[#3b82f6]", dotColor: "bg-[#3b82f6]", href: "https://aidocs.ge" },
    ],
  },
  {
    id: "webApps",
    dotColor: "bg-[#06b6d4]",
    items: [
      { id: "aiweb", title: "aiWEB", icon: AnimatedGlobeIcon, accentColor: "text-[#06b6d4]", dotColor: "bg-[#06b6d4]", href: "https://aiweb.ge" },
      { id: "aiapp", title: "aiAPP", icon: AnimatedSmartphoneIcon, accentColor: "text-[#4f6bff]", dotColor: "bg-[#4f6bff]", href: "https://aiapp.ge" },
      { id: "vibecoding", title: "vibeCODING", icon: AnimatedTerminalIcon, accentColor: "text-[#ec4899]", dotColor: "bg-[#ec4899]", href: "https://vibecoding.ge" },
    ],
  },
  {
    id: "specializedSolutions",
    dotColor: "bg-[#6366f1]",
    items: [
      { id: "iai", title: "iAI", icon: AnimatedGitBranchIcon, accentColor: "text-[#7c3aed]", dotColor: "bg-[#7c3aed]", href: "https://iai.ge" },
      { id: "aijurist", title: "aiJURIST", icon: AnimatedScaleIcon, accentColor: "text-[#6366f1]", dotColor: "bg-[#6366f1]", href: "https://aijurist.ge" },
      { id: "aiaudit", title: "aiAUDIT", icon: AnimatedBookIcon, accentColor: "text-[#8b5cf6]", dotColor: "bg-[#8b5cf6]", href: "https://aiaudit.ge" },
      { id: "aitaxi", title: "aiTAXI", icon: AnimatedCarIcon, accentColor: "text-[#eab308]", dotColor: "bg-[#eab308]", href: "https://aitaxi.ge" },
    ],
  },
];

const NAV_PRODUCT_DESCRIPTIONS: Record<string, Partial<Record<"ka" | "en" | "ru", string>>> = {
  aiaudit: {
    ka: "შეამოწმეთ, სად გამოგადგებათ AI",
    en: "Check where AI may help",
    ru: "Проверьте, где вам поможет AI",
  },
  airadar: {
    ka: "შეთანხმებული წყაროებიდან მნიშვნელოვანი სიგნალები",
    en: "Important signals from agreed sources",
    ru: "Важные сигналы из согласованных источников",
  },
  aistaff: {
    ka: "AI-ში გამოცდილი თანამშრომლების შერჩევა",
    en: "AI-experienced staff recruitment",
    ru: "Подбор сотрудников с опытом работы с AI",
  },
  aitaxi: {
    ka: "ტაქსოპარკის მართვის პილოტი — გაშვებამდე",
    en: "Taxi-fleet management pilot — prelaunch",
    ru: "Пилот управления таксопарком — до запуска",
  },
};

function getNavProductDescription(id: string, locale: string, fallback: string | undefined): string {
  const descriptions = NAV_PRODUCT_DESCRIPTIONS[id];
  if (!descriptions) return fallback ?? "";
  const language = locale === "ka" || locale === "ru" ? locale : "en";
  return descriptions[language] ?? descriptions.en ?? fallback ?? "";
}

const RESOURCE_ITEMS = [
  {
    id: "blog",
    icon: AnimatedBookIcon,
    href: "/blog",
  },
  {
    id: "updates",
    icon: AnimatedTerminalIcon,
    href: "/#announcement-banner",
  },
  {
    id: "industries",
    icon: AnimatedWorkflowIcon,
    href: "/#categories",
  },
];

export function AiNowNav() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const familyNav = getFamilyNavLabels(locale);
  const productGroups = PRODUCT_GROUPS.map((group) => ({
    ...group,
    title: familyNav[group.id],
    items: group.items.map((item) => ({ ...item, subtitle: getNavProductDescription(item.id, locale, copy.nav.productDescriptions[item.id]) })),
  }));
  const resourceItems = RESOURCE_ITEMS.map((item) => ({
    ...item,
    ...copy.nav.resourceItems[item.id],
  }));
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const [openMobileProductGroup, setOpenMobileProductGroup] = useState<ProductGroupId | null>("customerCommunication");
  const [hoveredProductItem, setHoveredProductItem] = useState<string | null>(null);
  const [hoveredResourceItem, setHoveredResourceItem] = useState<string | null>(null);
  const { theme, setTheme, resolvedTheme } = useThemeTransition();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isDark = mounted
    ? resolvedTheme
      ? resolvedTheme === "dark"
      : typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true
    : true;

  const toggleTheme = () => {
    const currentlyDark =
      typeof document !== "undefined"
        ? document.documentElement.classList.contains("dark")
        : (resolvedTheme || theme) === "dark";
    const nextTheme = currentlyDark ? "light" : "dark";
    setTheme(nextTheme);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileProductGroup(null);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
      return;
    }

    setOpenMobileProductGroup("customerCommunication");
    setIsMobileMenuOpen(true);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousOverscrollBehavior = root.style.overscrollBehavior;
    root.style.overflow = "clip";
    root.style.overscrollBehavior = "none";

    return () => {
      root.style.overflow = previousOverflow;
      root.style.overscrollBehavior = previousOverscrollBehavior;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      closeMobileMenu();
      mobileMenuTriggerRef.current?.focus({ preventScroll: true });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 flex h-[57px] w-full min-w-0 border-b border-[rgb(218,221,226)] dark:border-white/40 bg-[#fcfcfb]/90 dark:bg-[#0a0b0e]/90 backdrop-blur-md outer-section-node-offset transition-colors duration-200">
      {/* 4 Outer Corner Diamond Nodes bottom */}
      <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] bg-white dark:bg-[#0a0b0e] dark:border-white/80 -bottom-[3.5px] [left:var(--node-horizontal-offset)] diamond-node-glow" />
      <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] bg-white dark:bg-[#0a0b0e] dark:border-white/80 -bottom-[3.5px] [right:var(--node-horizontal-offset)] diamond-node-glow" />

      {/* 1. Outer Left Gutter Span */}
      <span className="relative z-1 w-4 sm:w-6 md:w-12 shrink-0 border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)] dark:text-white/50"
          style={{ width: "10px", height: "100%", right: "-0.5px", transform: "translateX(50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[rgb(218,221,226)] dark:bg-white/50" />
        </div>
      </span>

      {/* 2. Left Intermediate Span */}
      <span className="relative z-1 hidden flex-1 lg:block border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)] dark:text-white/50"
          style={{ width: "10px", height: "100%", right: "-0.5px", transform: "translateX(50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[rgb(218,221,226)] dark:bg-white/50" />
        </div>
      </span>

      {/* 3. Center Content Container */}
      <div className="relative container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px] flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Diamond Nodes at Container Seams */}
        <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] bg-white dark:bg-[#0a0b0e] dark:border-white/80 -bottom-[3.5px] left-[-3.5px] diamond-node-glow hidden lg:block" />
        <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] bg-white dark:bg-[#0a0b0e] dark:border-white/80 -bottom-[3.5px] right-[-3.5px] diamond-node-glow hidden lg:block" />
        {/* Left: Brand Logo & Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="flex items-center">
            <AiNowLogo size="sm" href={locale === "ka" ? "/" : `/${locale}`} />
          </div>

            <nav className="hidden items-center gap-1 xl:flex" aria-label={familyNav.products}>
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setIsProductsOpen(true);
                setIsResourcesOpen(false);
              }}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsProductsOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                  isProductsOpen
                    ? "bg-[#e8eaed] dark:bg-white/15 text-slate-900 dark:text-white"
                    : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                }`}
                aria-expanded={isProductsOpen}
              >
                <span>{familyNav.products}</span>
                {isProductsOpen ? (
                  <ChevronUp className="size-3.5 text-slate-700 dark:text-slate-200" />
                ) : (
                  <ChevronDown className="size-3.5 text-slate-500 dark:text-slate-400" />
                )}
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                  <div className="w-[min(1040px,calc(100vw-2rem))] rounded-lg border border-black/[0.08] bg-white p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#101216]">
                    <div className="grid grid-cols-5">
                      {productGroups.map((group, index) => (
                        <div
                          key={group.id}
                          className={`flex min-w-0 flex-col gap-1 px-2 ${index > 0 ? "border-l border-black/[0.06] dark:border-white/10" : ""}`}
                        >
                          <div className="flex items-center gap-2 px-1 pt-1 pb-1.5 select-none">
                            <span className={`size-1.5 rounded-full ${group.dotColor}`} />
                            <span className="text-[10px] font-bold tracking-wide text-slate-500 dark:text-slate-400">
                              {group.title}
                            </span>
                          </div>
                          {group.items.map((item) => {
                            const Icon = item.icon;
                            const isHovered = hoveredProductItem === item.title;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onMouseEnter={() => setHoveredProductItem(item.title)}
                                onMouseLeave={() => setHoveredProductItem(null)}
                                onClick={() => setIsProductsOpen(false)}
                                className="group flex items-start gap-2.5 rounded-md border border-transparent p-2 transition-[background-color,border-color,transform] duration-150 hover:border-black/10 hover:bg-black/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] dark:hover:border-white/15 dark:hover:bg-white/[0.06]"
                              >
                                <Icon className={`mt-0.5 size-4 shrink-0 ${item.accentColor}`} isHovered={isHovered} />
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1 text-[13px] font-semibold leading-tight text-slate-900 dark:text-slate-100">
                                    <span>{item.title}</span>
                                    <AnimatedArrowRightIcon size={12} className={`size-3 ${item.accentColor} -translate-x-1 opacity-0 transition-[opacity,transform] duration-150 group-hover:translate-x-0 group-hover:opacity-100`} />
                                  </div>
                                  <p className="mt-0.5 text-[11px] font-normal leading-snug text-slate-500 dark:text-slate-400">
                                    {item.subtitle}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setIsResourcesOpen(true);
                setIsProductsOpen(false);
              }}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsResourcesOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                  isResourcesOpen
                    ? "bg-[#e8eaed] dark:bg-white/15 text-slate-900 dark:text-white"
                    : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                }`}
                aria-expanded={isResourcesOpen}
              >
                <span>{copy.nav.resources}</span>
                {isResourcesOpen ? (
                  <ChevronUp className="size-3.5 text-slate-700 dark:text-slate-200" />
                ) : (
                  <ChevronDown className="size-3.5 text-slate-500 dark:text-slate-400" />
                )}
              </button>

              {isResourcesOpen && (
                <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                  <div className="w-[320px] rounded-lg border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#101216] p-2.5 shadow-2xl backdrop-blur-xl">
                    <div className="font-mono text-[10px] tracking-wider uppercase text-slate-400 dark:text-slate-500 font-semibold px-2.5 pt-1.5 pb-1 select-none">
                      {copy.nav.resourcesBlog}
                    </div>
                    <div className="flex flex-col gap-1">
                      {resourceItems.map((item) => {
                        const Icon = item.icon;
                        const isHovered = hoveredResourceItem === item.title;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onMouseEnter={() => setHoveredResourceItem(item.title)}
                            onMouseLeave={() => setHoveredResourceItem(null)}
                            onClick={() => setIsResourcesOpen(false)}
                            className="group flex items-start gap-3 rounded-md p-2 border border-transparent hover:border-blue-200/90 dark:hover:border-blue-800/60 hover:bg-blue-50/60 dark:hover:bg-blue-950/30 transition-all duration-150"
                          >
                            <Icon className="size-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" isHovered={isHovered} />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-900 dark:text-slate-100 leading-tight">
                                <span>{item.title}</span>
                                <AnimatedArrowRightIcon size={12} className="size-3 text-blue-600 dark:text-blue-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                              </div>
                              <p className="text-[11.5px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5 font-normal">
                                {item.subtitle}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {copy.nav.pricing}
            </Link>

            {/* Subtle Divider */}
            <span className="h-3.5 w-[1px] bg-slate-300 dark:bg-white/20 mx-1 select-none" />

            {/* Contact */}
            <Link
              href="/#cta"
              className="rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {copy.nav.contact}
            </Link>
          </nav>
        </div>

        {/* Right: Language and theme toggle */}
        <div className="hidden items-center gap-2.5 xl:flex">
          <LanguageSwitcher variant="compact" />

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex size-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white/70 text-slate-600 shadow-[0_0_0_1px_rgba(255,255,255,0.62)_inset,0_1px_2px_rgba(15,23,42,0.05)] transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out hover:border-black/15 hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.8)_inset,0_4px_14px_rgba(15,23,42,0.08)] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_1px_2px_rgba(0,0,0,0.12)] dark:hover:border-white/20 dark:hover:bg-white/10"
            aria-label={isDark ? copy.nav.themeLight : copy.nav.themeDark}
            title={isDark ? copy.nav.themeLight : copy.nav.themeDark}
          >
            {isDark ? (
              <Sun className="size-4 text-amber-400" />
            ) : (
              <Moon className="size-4 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile language, theme toggle and menu trigger */}
        <div className="flex items-center gap-1.5 xl:hidden">
          <LanguageSwitcher variant="compact" />
          <button
            type="button"
            onClick={toggleTheme}
            className="flex size-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white/70 text-slate-600 shadow-[0_0_0_1px_rgba(255,255,255,0.62)_inset,0_1px_2px_rgba(15,23,42,0.05)] transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
            aria-label={copy.nav.themeToggle}
          >
            {isDark ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4 text-slate-600" />}
          </button>
          <button
            type="button"
            ref={mobileMenuTriggerRef}
            className="flex size-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white/70 text-slate-700 shadow-[0_0_0_1px_rgba(255,255,255,0.62)_inset,0_1px_2px_rgba(15,23,42,0.05)] transition-transform duration-150 ease-out active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? copy.nav.menuClose : copy.nav.menuOpen}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0, scale: isMobileMenuOpen ? 0.95 : 1 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {isMobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* 4. Right Intermediate Span */}
      <span className="relative z-1 hidden flex-1 lg:block border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)] dark:text-white/50"
          style={{ width: "10px", height: "100%", left: "-0.5px", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[rgb(218,221,226)] dark:bg-white/50" />
        </div>
      </span>

      {/* 5. Outer Right Gutter Span */}
      <span className="relative z-1 w-4 sm:w-6 md:w-12 shrink-0 border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)] dark:text-white/50"
          style={{ width: "10px", height: "100%", left: "-0.5px", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[rgb(218,221,226)] dark:bg-white/50" />
        </div>
      </span>

      {/* Portal keeps the mobile sheet outside the header's backdrop-filter stacking context. */}
      {mounted && createPortal(
        <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <>
            {/* Soft Backdrop Blur */}
            <motion.div
              key="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={closeMobileMenu}
              className="fixed inset-0 top-[57px] bg-black/40 dark:bg-black/60 backdrop-blur-xs z-40 xl:hidden"
              aria-hidden="true"
            />

            {/* Sliding Mobile Menu Panel */}
            <motion.div
              key="mobile-nav-panel"
              initial={{ opacity: 0, transform: "translateY(-12px)" }}
              animate={{
                opacity: 1,
                transform: "translateY(0)",
                transition: {
                  duration: 0.24,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              exit={{
                opacity: 0,
                transform: "translateY(-8px)",
                transition: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
              }}
              className="fixed inset-x-0 bottom-0 top-[57px] border-b border-black/[0.08] bg-[#fcfcfb] p-4 pb-8 shadow-2xl overscroll-contain touch-pan-y [-webkit-overflow-scrolling:touch] dark:border-white/10 dark:bg-[#0c0d12] xl:hidden z-[60] overflow-y-auto"
              data-lenis-prevent
            >
              <div className="flex flex-col gap-3 text-sm font-medium">
                {productGroups.map((group, index) => (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.04 + index * 0.035, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="rounded-xl border border-black/[0.06] bg-white/55 p-1 shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-white/[0.035]">
                      <button
                        type="button"
                        onClick={() => setOpenMobileProductGroup((current) => current === group.id ? null : group.id)}
                        className="flex min-h-10 w-full items-center gap-2 rounded-lg px-2 text-left transition-[background-color,transform] duration-150 hover:bg-black/[0.04] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] dark:hover:bg-white/[0.06]"
                        aria-expanded={openMobileProductGroup === group.id}
                      >
                        <span className={`size-1.5 shrink-0 rounded-full ${group.dotColor}`} />
                        <span className="min-w-0 flex-1 text-[11px] font-bold tracking-wide text-slate-700 dark:text-slate-200">
                          {group.title}
                        </span>
                        <ChevronDown className={`size-4 shrink-0 text-slate-500 transition-transform duration-150 dark:text-slate-400 ${openMobileProductGroup === group.id ? "rotate-180" : ""}`} />
                      </button>
                      {/* Accordion height animation is deliberate: collapsing content must retain spatial context. */}
                      <AnimatePresence initial={false}>
                        {openMobileProductGroup === group.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 px-1 pb-1 pt-1">
                              {group.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="flex min-h-11 items-center gap-2.5 rounded-lg px-2 py-1.5 text-slate-800 transition-[background-color,transform] duration-150 hover:bg-black/[0.04] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] dark:text-slate-200 dark:hover:bg-white/[0.06]"
                                  >
                                    <Icon className={`size-4 shrink-0 ${item.accentColor}`} />
                                    <div className="min-w-0">
                                      <div className="text-xs font-semibold">{item.title}</div>
                                      <div className="text-[11px] leading-snug text-slate-500 dark:text-slate-400">{item.subtitle}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-black/[0.06] dark:border-white/10 pt-2 flex flex-col gap-1"
                >
                  <Link
                    href="/pricing"
                    onClick={closeMobileMenu}
                    className="rounded p-2 text-slate-800 dark:text-slate-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                  >
                    {copy.nav.pricing}
                  </Link>
                  <Link
                    href="/blog"
                    onClick={closeMobileMenu}
                    className="rounded p-2 text-slate-800 dark:text-slate-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                  >
                    {copy.nav.resourcesBlog}
                  </Link>
                  <Link
                    href="/#cta"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-1.5 rounded p-2 text-slate-800 dark:text-slate-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                  >
                    <span>{copy.nav.contact}</span>
                  </Link>
                  <Link
                    href="/#cta"
                    onClick={closeMobileMenu}
                    className="ainow-btn-primary mt-2 justify-center py-2"
                  >
                    {copy.nav.consultation}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
