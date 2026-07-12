import { createDemoLoop } from '../home/components/lib/demo-loop.mjs';

export const SCAN_DEMO_VISIBILITY_THRESHOLD = 0.35;
export const SCAN_DEMO_FINAL_HOLD_MS = 2000;

export function createScanDemoLoop(options) {
  return createDemoLoop({
    ...options,
    threshold: SCAN_DEMO_VISIBILITY_THRESHOLD,
    holdMs: SCAN_DEMO_FINAL_HOLD_MS,
  });
}
