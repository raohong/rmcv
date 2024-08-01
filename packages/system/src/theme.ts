import { useTheme } from '@emotion/react';
import type { TokenProps } from '@rmc-vant/design-token';
import { defaultToken } from '@rmc-vant/design-token';

export const createTheme = () => ({
  ...defaultToken,
});

export const defaultTheme = createTheme();

export interface Theme extends TokenProps {}

export const isEmptyTheme = (theme: Theme) =>
  !theme || Object.keys(theme).length === 0;

export const useComponentTheme = () => {
  const ctxTheme = useTheme();

  return !isEmptyTheme(ctxTheme) ? ctxTheme : defaultTheme;
};
