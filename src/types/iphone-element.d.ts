import type {} from 'react';

// Typing for the <iphone-16-max> custom element from @sneas/telephone
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iphone-16-max': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { mode?: string };
    }
  }
}
