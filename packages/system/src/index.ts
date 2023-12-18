import type { Theme as UITheme } from './theme';

export type {
  SystemStyleObject,
  SystemStyleInterpolation,
  SystemStyledComponentProps,
  SystemSxInterpolation,
} from './type';

export * from './theme';

export * from './styled';

export * from './composeClassNames';

export * from './classNames';

declare module '@emotion/react' {
  export interface Theme extends UITheme {}
}

export { keyframes, Global, ThemeProvider, useTheme, css } from '@emotion/react';

export type { StyledComponent } from '@emotion/styled';
