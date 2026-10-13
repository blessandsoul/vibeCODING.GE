'use client';

import type React from 'react';

import { addCollection, Icon } from '@iconify/react/offline';

import { cn } from '@/lib/utils';

import { solarIcons } from './solar-icons';

/**
 * Single icon entry point for the site. Registers a bundled Solar subset via
 * the OFFLINE Iconify entry, so `@iconify/react` never calls the Iconify HTTP API
 * (api.iconify.design). Icons render from local data: no network request, no load
 * flash, no CSP error. Matches the aiSTAFF admin's Ico.
 *
 * To add an icon: use its `solar:*` name in a component, then regenerate
 * `solar-icons.ts` (`node scripts/gen-solar-icons.mjs` scans src and slices the
 * used `solar:` names out of `@iconify-json/solar`).
 * Color follows `currentColor`, so the icon inherits its parent text color.
 */
addCollection(solarIcons as unknown as Parameters<typeof addCollection>[0]);

export function Ico({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  return (
    <Icon
      icon={name}
      className={cn('shrink-0', className)}
      style={style}
      aria-hidden
    />
  );
}
