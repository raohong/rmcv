import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const ExchangeOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M845.57312 714.068992H312.547328c-15.709184 0-28.444672 12.735488-28.444672 28.444672s12.735488 28.444672 28.444672 28.444672h529.011712l-87.375872 87.375872c-11.108352 11.108352-11.108352 29.118464 0 40.226816 11.108352 11.108352 29.118464 11.108352 40.226816 0l133.91872-133.91872c13.329408-13.329408 13.329408-34.941952 0-48.27136l-136.193024-136.192c-11.108352-11.109376-29.118464-11.109376-40.226816 0-11.108352 11.107328-11.108352 29.11744 0 40.225792l93.66528 93.66528zM177.743872 258.958336h533.025792c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H181.757952l87.376896 87.376896c11.107328 11.108352 11.107328 29.118464 0 40.226816-11.108352 11.107328-29.118464 11.107328-40.226816 0l-133.91872-133.91872c-13.329408-13.330432-13.329408-34.941952 0-48.27136l136.192-136.193024c11.108352-11.108352 29.118464-11.108352 40.226816 0 11.108352 11.108352 11.108352 29.118464 0 40.226816l-93.664256 93.664256z' />
  </svg>
);

const ExchangeOutlined = createIcon(
  ExchangeOutlinedSvgComponent,
  'ExchangeOutlined',
);

export default ExchangeOutlined;
