import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const LiveFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M438.449152 301.1072h144.243712L733.24544 150.5536c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.118464 0 40.226816l-110.326784 110.32576h190.18752c31.419392 0 56.889344 25.470976 56.889344 56.889344V813.1072c0 31.418368-25.469952 56.88832-56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832V357.99552c0-31.418368 25.469952-56.88832 56.889344-56.88832h187.328512l-110.32576-110.326784c-11.109376-11.108352-11.109376-29.118464 0-40.226816 11.107328-11.108352 29.11744-11.108352 40.225792 0L438.449152 301.1072z m150.10816 310.444032a28.444672 28.444672 0 0 0 4.443136-4.442112c9.814016-12.26752 7.824384-30.16704-4.442112-39.980032l-115.678208-92.542976a28.444672 28.444672 0 0 0-17.769472-6.233088c-15.70816 0-28.443648 12.735488-28.443648 28.444672v185.084928a28.444672 28.444672 0 0 0 6.233088 17.769472c9.812992 12.26752 27.713536 14.255104 39.980032 4.442112l115.678208-92.542976z" />
  </svg>
);

const LiveFilled = createIcon(LiveFilledSvgComponent, 'LiveFilled');

export default LiveFilled;
