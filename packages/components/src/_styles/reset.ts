import { SystemStyleInterpolation, SystemStyleObject } from '@rmc-vant/system';

const commonCSS: SystemStyleObject = {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  textDecoration: 'none',
  WebkitTapHighlightColor: 'transparent',
  WebkitFontSmooth: 'antialiased',
  position: 'relative',
  touchAction: 'none',
  listStyle: 'none',
  appearance: 'none',
};

export const baseStyleReset: SystemStyleInterpolation = ({ theme }) => ({
  ...commonCSS,
  fontFamily: theme.typography.fontFamilies.base,
});

export const buttonStyleReset: SystemStyleInterpolation = ({ theme }) => ({
  ...commonCSS,
  backgroundColor: 'inherit',
  border: 0,
  fontFamily: theme.typography.fontFamilies.base,
});
