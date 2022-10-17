import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const SendGiftOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M817.575936 154.712064H206.201856l-28.399616 56.798208h-63.502336l41.099264-82.198528a56.798208 56.798208 0 0 1 50.80064-31.396864h611.376128a56.798208 56.798208 0 0 1 50.80064 31.396864l41.100288 82.198528h0.002048v624.78336c0 31.369216-25.428992 56.798208-56.799232 56.798208H171.098112c-31.369216 0-56.798208-25.428992-56.798208-56.799232V211.510272h731.675648l-28.399616-56.798208z m35.10272 113.59744l-170.394624-0.001024v340.79232l-170.395648-65.604608-170.395648 65.604608V268.30848h-170.3936v567.984128h681.57952V268.309504z m-227.192832 0H398.292992v258.059264l113.595392-43.73504 113.59744 43.73504V268.309504z" />
  </svg>
);

const SendGiftOutlined = createIcon(
  SendGiftOutlinedSvgComponent,
  'SendGiftOutlined',
);

export default SendGiftOutlined;
