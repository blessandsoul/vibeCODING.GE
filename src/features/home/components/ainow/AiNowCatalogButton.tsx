"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AiNowCatalogButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
}

export function AiNowCatalogButton({
  href = "#categories",
  onClick,
  children,
  className,
  size = "md",
}: AiNowCatalogButtonProps) {
  const content = (
    <>
      <span className="dodo-text">{children}</span>
      <div className="dodo-icon" aria-hidden="true">
        <svg
          className="dodo-svg"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z" />
        </svg>
      </div>
      <div className="dodo-circle-overlay" aria-hidden="true" />
    </>
  );

  return (
    <div className={cn("dodo-wrap", size === "sm" && "dodo-wrap-sm", className)}>
      {href ? (
        <a
          href={href}
          onClick={onClick}
          className={cn("dodo-btn", size === "sm" && "dodo-btn-sm")}
        >
          {content}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cn("dodo-btn", size === "sm" && "dodo-btn-sm")}
        >
          {content}
        </button>
      )}
    </div>
  );
}
