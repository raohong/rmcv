import { useState } from 'react';
import { useInterval } from '@rmc-vant/hooks';
import dynamic from 'next/dynamic';
import { useScopedI18n } from '../../locales';
import Button from './Button';

const CopyToClipboard = dynamic(() => import('react-copy-to-clipboard'));

const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='64 64 896 896'
    focusable='false'
    width='1em'
    height='1em'
    fill='currentColor'
    {...props}
  >
    <path d='M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'></path>
  </svg>
);

const CopySuccessIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='64 64 896 896'
    width='1em'
    height='1em'
    fill='currentColor'
    {...props}
  >
    <path d='M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'></path>
  </svg>
);

const CopyContent = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const t = useScopedI18n('demo');

  const { start } = useInterval(
    () => {
      setCopied(false);
    },
    { interval: 2000 },
  );

  const content = (
    <Button title={copied ? t('copied') : t('copy')}>
      {copied ? <CopySuccessIcon className='text-green-300' /> : <CopyIcon />}
    </Button>
  );

  return (
    <>
      {copied
        ? (
            content
          )
        : (
            <CopyToClipboard
              onCopy={() => {
                setCopied(true);
                start();
              }}
              text={text}
            >
              {content}
            </CopyToClipboard>
          )}
    </>
  );
};

export default CopyContent;