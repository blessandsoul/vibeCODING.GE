'use client';

import { ScanScorecard } from '@/features/showcase/ScanScorecard';
import { ScanRls } from '@/features/showcase/ScanRls';
import { ScanPaywall } from '@/features/showcase/ScanPaywall';
import { ScanFixRescan } from '@/features/showcase/ScanFixRescan';
import { ScanTenWays } from '@/features/showcase/ScanTenWays';

/* =========================================================================
   LandingShowcase: the vibecoding.ge product slot.

   Five sections, and the order is the argument:

     1. Paste your app. The signature, and the only real backend in this fleet. He sees HIS OWN
        exposed key, redacted, and the redaction is the sale: finding it proves competence, not
        keeping it proves character, and in a security purchase the second is what he is buying.
        It carries the two visual directions until one is chosen.
     2. The same database request before and after row rules. A silent 200 in both directions.
     3. This is how they got past your paywall. Ten seconds, done to a fake app, in front of him.
        The 27% finding made physical.
     4. Finding a browser key is not the repair: revoke, move server-side, and rescan.
     5. Ten ways an AI-built app leaks, every line with its source printed next to it, and one
        widely-quoted market number deliberately absent because it traces to nothing.
   ========================================================================= */

export function LandingShowcase() {
  return (
    <div id="showcase" className="landing-showcase">
      <ScanScorecard />
      <ScanRls />
      <ScanPaywall />
      <ScanFixRescan />
      <ScanTenWays />
    </div>
  );
}
