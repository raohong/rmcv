import { createStitches } from '@stitches/react';

export const getDefaultTheme = () => ({
  colors: {
    primary: '#4fc08d',
    bg: '#f7f8fa',
    demoNavActiveBg: '#e4e8ee',
    demoNavHoverBg: '#eef0f4',
    demoBg: '$bg',
    menuBg: '#ebfff0',
    accent1: '#1989fa',
    gray700: '#001938',
    gray600: '#323233',
    gray500: '#455a64',
    text: '$gray700',
    text2: 'rgba(69, 90, 100, 0.6)',
  },
  space: {
    header: '64px',
    sidebarMaxScreen: '-620px',
    contentMargin: '220px',
  },
  fontSizes: {
    1: '14px',
    menuHeader: '15px',
  },
  sizes: {
    header: '64px',
    demoNav: '56px',
    demoWidth: '360px',
    sidebarWidth: '220px',
    docMaxWidth: '1680px',
  },
  radii: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    max: '300px',
  },
  shadows: {
    dropdown: '0 4px 12px #ebedf0',
    doc: '0 8px 12px #ebedf0',
  },
  zIndices: {
    normal: 99,
  },
  media: {
    bp1: '(min-width: 1680px)',
  },
});

export type Theme = ReturnType<typeof getDefaultTheme>;

export const { styled, css, createTheme, globalCss, keyframes } =
  createStitches({
    prefix: 'rmcv-theme',
    theme: getDefaultTheme(),
    utils: {
      $flex: () => ({
        display: 'flex',
        alignItems: 'center',
      }),
      $hover: () => ({
        '&:hover': {
          color: '$primary',
        },
      }),
      $active: () => ({
        '&:active': {
          color: '$primary',
        },
      }),
      $flexCenter: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }),
      $reset: () => ({
        margin: 0,
        outline: 'none',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        fontFamily: 'inherit',
        border: 'none',
        backgroundColor: 'transparent',
        appearance: 'none',
      }),
    },
  });

const globalStyles = globalCss({
  body: {
    fontFamily:
      "'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif",
    '*': { boxSizing: 'border-box', margin: 0 },
    'ul,ol,li': { listStyle: 'none' },
    backgroundColor: '$bg',
    fontSize: '$1',
  },
});

globalStyles();
