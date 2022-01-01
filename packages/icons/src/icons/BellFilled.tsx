import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const BellFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M597.332992 881.777664c0 47.128576-38.20544 85.332992-85.332992 85.332992-47.128576 0-85.332992-38.20544-85.332992-85.332992h170.665984z m-85.332992-768c15.709184 0 28.444672 12.735488 28.444672 28.444672l0.001024 29.613056C715.650048 186.290176 853.332992 333.06624 853.332992 512v284.443648h85.334016c15.70816 0 28.443648 12.735488 28.443648 28.445696 0 15.70816-12.734464 28.443648-28.443648 28.443648H85.332992c-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672h85.334016V512c0-178.93376 137.683968-325.710848 312.88832-340.164608v-29.61408c0-15.70816 12.735488-28.443648 28.444672-28.443648z" />
  </svg>
);

const BellFilled = createIcon(BellFilledSvgComponent, 'BellFilled');

export default BellFilled;
