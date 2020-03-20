/* eslint-disable-next-line */
/// <reference types="next" />
/* eslint-disable-next-line */
/// <reference types="next/types/global" />

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>;

  const src: string;
  export default src;
}
