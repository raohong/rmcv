import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';
import { useCopy } from 'dumi/theme';
import { styled } from '../styles';

const SIMILAR_DSL = {
  acss: 'css',
  axml: 'xml',
};

const Container = styled('div', {
  position: 'relative',
  whiteSpace: 'pre',
});

const CopyButton = styled('button', {
  backgroundColor: 'inherit',
  outline: 0,
  color: '$gray600',
  border: '1px solid transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  cursor: 'pointer',
  position: 'absolute',
  top: 8,
  right: 8,
  fontSize: 16,
  lineHeight: 1,
  borderRadius: 2,
  svg: {
    fill: 'currentColor',
  },
  variants: {
    status: {
      ready: {},
      copied: {
        borderColor: '#4fc08d',
        color: '#4fc08d',
      },
    },
  },
});

const CopyIcon = () => (
  <svg height="1em" viewBox="0 0 16 16" version="1.1" width="1em">
    <path
      fillRule="evenodd"
      d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
    ></path>
    <path
      fillRule="evenodd"
      d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
    ></path>
  </svg>
);

const SuccessIcon = () => (
  <svg height="1em" viewBox="0 0 16 16" version="1.1" width="1em">
    <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
    ></path>
  </svg>
);

const SourceCode: React.FC<{
  code: string;
  lang: string;
  showCopy?: boolean;
}> = ({ code, lang, showCopy = true }) => {
  const [copyCode, copyStatus] = useCopy();
  const copied = copyStatus === 'copied';

  return (
    <Container>
      <Highlight
        {...defaultProps}
        code={code}
        // @ts-ignore
        language={SIMILAR_DSL[lang] || lang}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <code className={className}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        )}
      </Highlight>
      {showCopy && (
        <CopyButton status={copyStatus} onClick={() => copyCode(code)}>
          {copied ? <SuccessIcon /> : <CopyIcon />}
        </CopyButton>
      )}
    </Container>
  );
};

export default SourceCode;
