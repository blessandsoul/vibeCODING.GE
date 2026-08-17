'use client';

import Script from 'next/script';

const AINOW_MARKETING_BOT_ID = '5044f2f0-ab9b-417f-83cc-cc5c633bb0d5';

export function AistaffWidget(): React.ReactElement {
  return (
    <Script
      src="https://aistaff.ge/widget.js?v=20260816-1"
      data-bot-id={AINOW_MARKETING_BOT_ID}
      strategy="afterInteractive"
    />
  );
}
