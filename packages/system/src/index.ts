import type { Theme as UITheme } from './theme';

export { default as createEmotionCache } from '@emotion/cache';
export {
  CacheProvider,
  Global,
  ThemeProvider,
  css,
  keyframes,
  useTheme,
} from '@emotion/react';
export type { StyledComponent } from '@emotion/styled';
export * from './classNames';
export * from './composeClassNames';
export * from './styled';
export * from './theme';
export type {
  SystemStyleInterpolation,
  SystemStyleObject,
  SystemStyledComponentProps,
  SystemSxInterpolation,
} from './type';

declare module '@emotion/react' {
  export interface Theme extends UITheme {}
}
