// Product names are brands and intentionally stay the same in every locale.
// Keep each product's Georgian canonical URL; only the verified English and
// Russian versions inherit an aiNOW locale. Other locales use Georgian.
export const PRODUCT_ITEMS = [
  { href: 'https://aichats.ge/ka', label: 'aiCHATS', descriptionKey: 'aichats', Icon: 'solar:chat-round-line-bold-duotone' },
  { href: 'https://aicall.ge', label: 'aiCALL', descriptionKey: 'aicall', Icon: 'solar:phone-bold-duotone' },
  { href: 'https://aiads.ge', label: 'aiADS', descriptionKey: 'aiads', Icon: 'solar:target-bold-duotone' },
  { href: 'https://aicontent.ge', label: 'aiCONTENT', descriptionKey: 'aicontent', Icon: 'solar:pen-new-square-bold-duotone' },
  { href: 'https://aiaudit.ge', label: 'aiAUDIT', descriptionKey: 'aiaudit', Icon: 'solar:magnifer-bold-duotone' },
  { href: 'https://airadar.ge/ka', label: 'aiRADAR', descriptionKey: 'airadar', Icon: 'solar:global-bold-duotone' },
  { href: 'https://aidocs.ge', label: 'aiDOCS', descriptionKey: 'aidocs', Icon: 'solar:file-text-bold-duotone' },
  { href: 'https://aiweb.ge', label: 'aiWEB', descriptionKey: 'aiweb', Icon: 'solar:global-bold-duotone' },
  { href: 'https://aioffice.ge', label: 'aiOFFICE', descriptionKey: 'aioffice', Icon: 'solar:case-bold-duotone' },
  { href: 'https://aiapp.ge', label: 'aiAPP', descriptionKey: 'aiapp', Icon: 'solar:widget-5-bold-duotone' },
  { href: 'https://aistaff.ge/ka', label: 'aiSTAFF', descriptionKey: 'aistaff', Icon: 'solar:user-id-bold-duotone' },
  { href: 'https://aibrain.ge', label: 'aiBRAIN', descriptionKey: 'aibrain', Icon: 'solar:cpu-bolt-bold-duotone' },
  { href: 'https://aijurist.ge', label: 'aiJURIST', descriptionKey: 'aijurist', Icon: 'solar:scale-bold-duotone' },
  { href: 'https://aimusic.ge', label: 'aiMUSIC', descriptionKey: 'aimusic', Icon: 'solar:headphones-round-bold-duotone' },
  { href: 'https://vibecoding.ge', label: 'vibeCODING', descriptionKey: 'vibecoding', Icon: 'solar:code-square-bold-duotone' },
  { href: 'https://aitaxi.ge', label: 'aiTAXI', descriptionKey: 'aitaxi', Icon: 'solar:map-point-bold-duotone' },
] as const;

export function productHref(href: string, locale: string): string {
  const url = new URL(href);
  if (locale === 'en' || locale === 'ru') url.pathname = `/${locale}`;
  return url.href;
}
