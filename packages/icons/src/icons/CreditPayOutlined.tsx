import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const CreditPayOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM597.037056 683.098112h170.667008c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.700992-12.74368-28.444672-28.444672-28.444672H597.037056c-15.700992 0-28.443648 12.74368-28.443648 28.444672 0 15.700992 12.742656 28.444672 28.443648 28.444672' />
  </svg>
);

const CreditPayOutlined = createIcon(
  CreditPayOutlinedSvgComponent,
  'CreditPayOutlined',
);

export default CreditPayOutlined;
