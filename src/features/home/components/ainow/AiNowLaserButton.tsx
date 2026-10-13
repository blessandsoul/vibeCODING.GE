"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AiNowLaserButtonProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export function AiNowLaserButton({
  href,
  onClick,
  children,
  className,
  ariaLabel,
  type = "button",
  target,
  rel,
}: AiNowLaserButtonProps) {
  return (
    <div className={cn("button-wrap", className)}>
      {href ? (
        <Link
          href={href}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          onClick={(event) => onClick?.(event)}
        >
          <span>{children}</span>
        </Link>
      ) : (
        <button type={type} aria-label={ariaLabel} onClick={(event) => onClick?.(event)}>
          <span>{children}</span>
        </button>
      )}
      <div className="button-shadow" aria-hidden="true" />
    </div>
  );
}

export const AiNowGlassButton = AiNowLaserButton;
