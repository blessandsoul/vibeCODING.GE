import type { ReactElement } from 'react';

export function ChatPricingBrandedText({
  text,
}: {
  text: string;
}): ReactElement {
  const match = /ai/i.exec(text);
  if (!match || match.index === undefined) return <>{text}</>;

  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match[0].length);

  return (
    <>
      {before}
      <span className="gradient-text font-mono font-semibold">ai</span>
      {after}
    </>
  );
}
