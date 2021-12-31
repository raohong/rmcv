import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const CashierOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M113.777664 170.667008v512H910.22336v-512H113.77664z m426.667008 568.88832v113.777664h170.665984c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h170.665984v-113.77664h-369.77664c-31.419392 0-56.889344-25.470976-56.889344-56.889344v-512c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v512c0 31.418368-25.469952 56.88832-56.88832 56.88832H540.444672z m-27.938816-407.058432l39.72096-39.72096c11.108352-11.108352 29.118464-11.108352 40.225792 0 11.108352 11.108352 11.108352 29.118464 0 40.225792l-29.1584 29.159424h19.816448c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-42.665984v28.443648h42.665984c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672v-28.444672h-42.665984c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h42.665984V419.05152h-42.665984c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h20.82816l-29.159424-29.159424c-11.108352-11.107328-11.108352-29.11744 0-40.225792 11.108352-11.108352 29.11744-11.108352 40.225792 0l39.72096 39.72096z" />
  </svg>
);

const CashierOutlined = createIcon(
  CashierOutlinedSvgComponent,
  'CashierOutlined',
);

export default CashierOutlined;
