import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const GoldCoinFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m-57.2928-540.443648H369.77664c-15.709184 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.735488 28.444672 28.444672 28.444672h113.777664v85.334016h-113.77664c-15.710208 0-28.445696 12.734464-28.445696 28.443648 0 15.710208 12.735488 28.444672 28.444672 28.444672h113.777664v113.777664C483.555328 755.264512 496.29184 768 512 768s28.444672-12.735488 28.444672-28.444672v-113.77664h113.77664c15.710208 0 28.445696-12.735488 28.445696-28.445696 0-15.70816-12.735488-28.443648-28.444672-28.443648H540.444672v-85.334016h113.77664c15.710208 0 28.445696-12.734464 28.445696-28.444672 0-15.70816-12.735488-28.443648-28.444672-28.443648h-82.90816l81.883136-81.883136c11.108352-11.108352 11.108352-29.11744 0-40.225792-11.108352-11.108352-29.118464-11.108352-40.226816 0l-99.959808 99.959808-99.959808-99.959808c-11.108352-11.108352-29.118464-11.108352-40.226816 0-11.108352 11.108352-11.108352 29.11744 0 40.225792l81.883136 81.883136z" />
  </svg>
);

const GoldCoinFilled = createIcon(GoldCoinFilledSvgComponent, 'GoldCoinFilled');

export default GoldCoinFilled;
