"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { AiNowLogo } from "@/components/common/AiNowLogo";
import { AGENT_PRODUCTS, PUBLIC_FACTS } from "@/lib/public-facts";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

export function AiNowFooter() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  return (
    <footer className="relative flex w-full min-w-0 bg-[#090a0f] dark:bg-[#07080b] text-slate-300 border-t border-white/10 overflow-hidden outer-section-node-offset transition-colors duration-200">
      {/* Signature aiNOW 3-Color Top Accent Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ec4899] via-[#2563eb] to-[#10b981] opacity-75 z-20" />

      {/* 4 Outer Corner Diamond Nodes */}
      <div className="absolute z-20 size-1.5 rotate-45 border border-white/30 bg-[#090a0f] dark:bg-[#07080b] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] diamond-node-glow" />
      <div className="absolute z-20 size-1.5 rotate-45 border border-white/30 bg-[#090a0f] dark:bg-[#07080b] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] diamond-node-glow" />

      {/* 1. Outer Left Gutter Span */}
      <span className="relative z-1 w-4 sm:w-6 md:w-12 shrink-0 border-transparent">
        <div
          className="absolute top-0 bottom-0 text-white/10 dark:text-white/15"
          style={{ width: "10px", height: "100%", right: "-0.5px", transform: "translateX(50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col w-[1px]">
            <div style={{ flex: 1, width: "1px", backgroundColor: "currentColor" }} />
          </div>
        </div>
      </span>

      {/* 2. Left Intermediate Span */}
      <span className="relative z-1 hidden flex-1 lg:block border-transparent">
        <div
          className="absolute top-0 bottom-0 text-white/10 dark:text-white/15"
          style={{ width: "10px", height: "100%", right: "-0.5px", transform: "translateX(50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col w-[1px]">
            <div style={{ flex: 1, width: "1px", backgroundColor: "currentColor" }} />
          </div>
        </div>
      </span>

      {/* 3. Center Content Container */}
      <div className="relative container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px] px-4 sm:px-6 lg:px-8 py-16">
        {/* Diamond Corner Nodes */}
        <div className="absolute z-20 size-1.5 rotate-45 border border-white/30 bg-[#090a0f] dark:bg-[#07080b] [top:calc(-1*var(--node-vertical-offset))] left-[-3.5px] diamond-node-glow" />
        <div className="absolute z-20 size-1.5 rotate-45 border border-white/30 bg-[#090a0f] dark:bg-[#07080b] [top:calc(-1*var(--node-vertical-offset))] right-[-3.5px] diamond-node-glow" />

        {/* 4 Navigation Columns + Brand Info */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
              <div className="mb-3">
                <AiNowLogo size="md" href={locale === "ka" ? "/" : `/${locale}`} wordmarkClassName="text-white" />
              </div>
              <p className="text-xs font-semibold text-slate-200 mb-1">
                <a href="https://ainow.ge" className="hover:text-white transition-colors">vibeCODING by aiNOW</a>
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                {copy.footer.description}
              </p>
            </div>

            <Link href="/#cta" className="mt-6 flex w-fit items-center gap-2 text-[11px] font-mono text-emerald-400 transition-colors hover:text-emerald-300">
              <span className="size-2 rounded-full bg-emerald-400" />
              <span>{copy.footer.action}</span>
            </Link>
          </div>

          {/* Col 1: Products */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
              {copy.footer.products}
            </h4>
            <ul className="space-y-2 text-xs">
              {AGENT_PRODUCTS.filter((product) => product.id === "vibecoding").map((product) => (
                <li key={product.id}>
                  <a href={product.url} className="hover:text-white transition-colors">
                    {product.name} ({copy.productLabels[product.id] ?? product.labelKa})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
              {copy.footer.industries}
            </h4>
            <ul className="space-y-2 text-xs">
              {copy.footer.industryLinks.map((industry) => (
                <li key={industry}>
                <Link href="/#industries" className="hover:text-white transition-colors">
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
              {copy.footer.resources}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  {copy.footer.blog}
                </Link>
              </li>
              <li>
                <Link href="/#how-we-work" className="hover:text-white transition-colors">
                  {copy.footer.howWeStart}
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  {copy.footer.faq}
                </Link>
              </li>
              <li>
                <Link href="/#cta" className="hover:text-white transition-colors">
                  {copy.footer.sendTask}
                </Link>
              </li>
              <li>
                <a href={`mailto:${PUBLIC_FACTS.contact.email.toLowerCase()}`} className="hover:text-white transition-colors">
                  {copy.footer.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Security */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
              {copy.footer.legal}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {copy.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {copy.footer.terms}
                </Link>
              </li>
              <li>
                <a href={`mailto:${PUBLIC_FACTS.contact.email.toLowerCase()}`} className="hover:text-white transition-colors">
                  {PUBLIC_FACTS.contact.email.toLowerCase()}
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] text-slate-500">
                  {copy.footer.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            {PUBLIC_FACTS.brand.legalName} © 2026. {copy.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${PUBLIC_FACTS.contact.email.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors">
              {PUBLIC_FACTS.contact.email.toLowerCase()}
            </a>
            <a href="#top" className="hover:text-white transition-colors">
              {copy.footer.backToTop}
            </a>
          </div>
        </div>
      </div>

      {/* 4. Right Intermediate Span */}
      <span className="relative z-1 hidden flex-1 lg:block border-transparent">
        <div
          className="absolute top-0 bottom-0 text-white/10 dark:text-white/15"
          style={{ width: "10px", height: "100%", left: "-0.5px", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col w-[1px]">
            <div style={{ flex: 1, width: "1px", backgroundColor: "currentColor" }} />
          </div>
        </div>
      </span>

      {/* 5. Outer Right Gutter Span */}
      <span className="relative z-1 w-4 sm:w-6 md:w-12 shrink-0 border-transparent">
        <div
          className="absolute top-0 bottom-0 text-white/10 dark:text-white/15"
          style={{ width: "10px", height: "100%", left: "-0.5px", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col w-[1px]">
            <div style={{ flex: 1, width: "1px", backgroundColor: "currentColor" }} />
          </div>
        </div>
      </span>
    </footer>
  );
}
