/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import { Highlight } from 'prism-react-renderer';
import React, { memo } from 'react';
import CopyContent from './CopyContent';

const Code: React.FC<{
  lang: string;
  code: string;
  wrapper?: boolean;
  extra?: React.ReactNode;
}> = ({ lang, code, wrapper, extra }) => {
  const toolbar = (
    <div className='absolute right-1 top-2 flex'>
      {extra }
      <CopyContent text={code} />
    </div>
  );

  return (

    <Highlight theme={{ plain: {}, styles: [] }} code={code} language={lang}>
      {({ className, style, tokens, getTokenProps }) => {
        const content = tokens.map((line, index) => (
          <React.Fragment key={index}>
            {line
              .filter(token => !token.empty)
              .map((token, tokenIndex) => (
                <span key={tokenIndex} {...getTokenProps({ token })} />
              ))}
            {index !== tokens.length - 1 && '\n'}
          </React.Fragment>
        ));

        if (wrapper) {
          return (
            <pre className={clsx(className, 'relative')} style={style}>
              {toolbar}
              <code className='not-prose'>{content}</code>
            </pre>
          );
        }

        return (
          <>
            {toolbar}
            <code className={clsx(className, 'not-prose')} style={style}>
              {content}
            </code>
          </>
        );
      }}

    </Highlight>
  );
};

export default memo(Code);
