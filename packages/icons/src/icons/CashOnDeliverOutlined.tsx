import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const CashOnDeliverOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M170.667008 284.444672v568.88832h682.665984V284.444672H170.667008z m675.951616-56.889344l-28.444672-56.88832H205.826048l-28.444672 56.88832h-63.603712l41.1648-82.3296a56.889344 56.889344 0 0 1 50.88256-31.44704h612.348928a56.889344 56.889344 0 0 1 50.88256 31.44704l41.1648 82.3296v625.777664c0 31.419392-25.468928 56.889344-56.88832 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-625.77664h732.84096zM512.505856 453.891072l39.72096-39.72096c11.108352-11.108352 29.118464-11.108352 40.225792 0 11.108352 11.108352 11.108352 29.118464 0 40.225792l-29.1584 29.159424h19.816448c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672h42.665984c15.710208 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.734464 28.444672-28.444672 28.444672h-42.665984v28.444672c0 15.709184-12.735488 28.444672-28.444672 28.444672s-28.444672-12.735488-28.444672-28.444672V625.77664h-42.665984c-15.710208 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.734464-28.443648 28.444672-28.443648h42.665984v-28.444672h-42.665984c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h20.82816l-29.159424-29.159424c-11.108352-11.107328-11.108352-29.11744 0-40.225792 11.108352-11.108352 29.11744-11.108352 40.225792 0l39.72096 39.72096z" />
  </svg>
);

const CashOnDeliverOutlined = createIcon(
  CashOnDeliverOutlinedSvgComponent,
  'CashOnDeliverOutlined',
);

export default CashOnDeliverOutlined;
