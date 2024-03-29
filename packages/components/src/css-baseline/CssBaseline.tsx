import { Global, css } from '@rmc-vant/system';
import React from 'react';

const CssBaseline: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body,
          h1,
          h2,
          h3,
          h4,
          p,
          figure,
          blockquote,
          dl,
          dd {
            margin: 0;
          }
          ul[role='list'],
          ol[role='list'] {
            list-style: none;
          }
          html:focus-within {
            scroll-behavior: smooth;
          }
          body {
            min-height: 100vh;
            line-height: 1.5;
            text-rendering: optimizeSpeed;
          }
          a:not([class]) {
            text-decoration-skip-ink: auto;
          }
          img,
          picture {
            display: block;
            max-width: 100%;
          }
          input,
          button,
          textarea,
          select {
            font: inherit;
          }
          @media (prefers-reduced-motion: reduce) {
            html:focus-within {
              scroll-behavior: auto;
            }
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      />
      {children}
    </>
  );
};

export default CssBaseline;
