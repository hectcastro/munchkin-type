/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "react-sparkle" {
  import React from "react";

  export interface ReactSparkleProps {
    /**
     * The color of the sparkles. Can be a color, an array of colors,
     * or 'random' (which will randomly pick from all hex colors).
     */
    color?: string | string[];

    /** The number of sparkles to render. A large number could slow
     *  down the page. */
    count?: number;

    /** The minimum and maximum diameter of sparkles, in pixels. */
    minSize?: number;
    maxSize?: number;

    /** The number of pixels the sparkles should extend beyond the
     *  bounds of the parent element.
     */
    overflowPx?: number;

    /** How quickly sparkles disappear; in other words, how quickly
     *  new sparkles are created. Should be between 0 and 1000,
     *  with 0 never fading sparkles out and 1000 immediately
     *  removing sparkles. Most meaningful speeds are between
     *  0 and 150.
     */
    fadeOutSpeed?: number;

    /** Whether we should create an entirely new sparkle when one
     *  fades out. If false, we'll just reset the opacity, keeping
     *  all other attributes of the sparkle the same.
     */
    newSparkleOnFadeOut?: boolean;

    /** Whether sparkles should have a "flickering" effect. */
    flicker?: boolean;

    /** How quickly the "flickering" should happen.
     *  One of: 'slowest', 'slower', 'slow', 'normal', 'fast', 'faster', 'fastest'
     */
    flickerSpeed?:
      | "slowest"
      | "slower"
      | "slow"
      | "normal"
      | "fast"
      | "faster"
      | "fastest";
  }

  export default class ReactSparkle extends React.Component<ReactSparkleProps> {}
}
