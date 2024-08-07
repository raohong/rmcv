import dynamic from 'next/dynamic';
import React from 'react';
import { useScopedI18n } from '../../locales';
import type { IDemoData } from '../../scripts/docs';
import Code from './Code';
import Button from './Button';
import { useDemoComponentContext } from './context';

const MobilePreview = dynamic(() => import('./MobilePreview'));

const QRCodeIcon = () => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 512 512'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='80' height='80' x='336' y='336' rx='8' ry='8'></rect>
    <rect width='64' height='64' x='272' y='272' rx='8' ry='8'></rect>
    <rect width='64' height='64' x='416' y='416' rx='8' ry='8'></rect>
    <rect width='48' height='48' x='432' y='272' rx='8' ry='8'></rect>
    <rect width='48' height='48' x='272' y='432' rx='8' ry='8'></rect>
    <rect width='80' height='80' x='336' y='96' rx='8' ry='8'></rect>
    <rect
      width='176'
      height='176'
      x='288'
      y='48'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='32'
      rx='16'
      ry='16'
    >
    </rect>
    <rect width='80' height='80' x='96' y='96' rx='8' ry='8'></rect>
    <rect
      width='176'
      height='176'
      x='48'
      y='48'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='32'
      rx='16'
      ry='16'
    >
    </rect>
    <rect width='80' height='80' x='96' y='336' rx='8' ry='8'></rect>
    <rect
      width='176'
      height='176'
      x='48'
      y='288'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='32'
      rx='16'
      ry='16'
    >
    </rect>
  </svg>
);

const Demo: React.FC<{ data: IDemoData }> = ({ data }) => {
  const { previewCode, code } = data;
  const t = useScopedI18n('demo');
  const internalCode = previewCode ? previewCode || code : code;
  const { demoRoute } = useDemoComponentContext();

  return (
    <Code
      lang='tsx'
      code={internalCode}
      extra={(
        demoRoute && (
          <MobilePreview
            href={demoRoute}
            trigger={(
              <Button title={t('preview')}>
                <QRCodeIcon />
              </Button>
            )}
          />
        )
      )}
      wrapper
    />
  );
};

export default Demo;
