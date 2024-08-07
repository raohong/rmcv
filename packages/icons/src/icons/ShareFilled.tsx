import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const ShareFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M591.135744 143.848448c0-23.177216 13.52704-29.034496 30.53056-12.76928L953.89696 449.153024c16.856064 16.160768 16.98304 42.308608 0.316416 58.405888L621.349888 828.832768c-16.687104 16.09728-30.214144 10.155008-30.214144-12.853248V647.947264C103.977984 647.94624 57.344 902.51264 57.344 902.51264s-7.51616-514.000896 533.791744-590.61248V143.849472z' />
  </svg>
);

const ShareFilled = createIcon(ShareFilledSvgComponent, 'ShareFilled');

export default ShareFilled;
