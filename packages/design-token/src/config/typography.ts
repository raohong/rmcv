import type { TLength } from './utils';

type FontSizes = {
  xs: TLength;
  sm: TLength;
  md: TLength;
  lg: TLength;
};

type LineHeights = {
  base: TLength;
  xs: TLength;
  sm: TLength;
  md: TLength;
  lg: TLength;
};

type FontFamilies = {
  base: string;
  price: string;
  badge: string;
};

export type TypographyProps = {
  fontFamilies: FontFamilies;
  lineHeights: LineHeights;
  fontSize: FontSizes;
  fontWeightBold: number;
};

export const typography: TypographyProps = {
  fontFamilies: {
    base: 'Open Sans, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Segoe UI, Arial, Roboto, PingFang SC, miui, Hiragino Sans GB, Microsoft Yahei, sans-serif',
    price: 'Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif',
    badge: '-apple-system-font, Helvetica Neue, Arial, sans-serif',
  },
  lineHeights: {
    xs: '16px',
    sm: '18px',
    md: '20px',
    lg: '22px',
    base: 20 / 14,
  },
  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
  },
  fontWeightBold: 500,
};
