"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function AiNowDisclosure({ title, children, className = "" }: { title: ReactNode; children: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={className}>
      <button type="button" id={`${id}-trigger`} aria-expanded={open} aria-controls={id} onClick={() => setOpen((value) => !value)} className="flex min-h-12 w-full items-center justify-between gap-3 py-4 text-left text-sm font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-white">
        <span>{title}</span>
        <ChevronDown aria-hidden="true" className={`size-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
      </button>
      <div id={id} aria-labelledby={`${id}-trigger`} aria-hidden={!open} inert={!open} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="min-h-0 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
