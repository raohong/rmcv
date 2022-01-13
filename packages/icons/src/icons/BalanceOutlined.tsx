import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const BalanceOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M790.25664 851.398656c-31.686656 37.376-77.88032 58.82368-126.862336 58.82368H393.91232c-48.982016 0-95.232-21.44768-126.86336-58.82368-31.686656-37.376-45.225984-86.528-37.203968-134.825984l23.66464-142.166016c22.528-135.053312 138.24-233.07264 275.115008-233.07264 136.932352 0 252.644352 98.019328 275.115008 233.07264l23.665664 142.166016c8.078336 48.297984-5.460992 97.449984-37.148672 134.825984z m-296.04864-566.953984c-56.548352 0-105.700352-41.302016-116.964352-98.19136-1.081344-5.632 1.308672-9.499648 2.787328-11.37664 1.593344-1.93536 4.380672-4.209664 8.59136-4.209664h280.006656c4.265984 0 6.996992 2.275328 8.646656 4.20864 1.478656 1.878016 3.868672 5.746688 2.787328 11.378688-11.264 56.88832-60.416 98.190336-116.963328 98.190336h-68.892672zM883.55328 707.18464l-23.66464-142.164992C840.48896 448.683008 762.20928 355.44064 658.956288 311.808c38.571008-25.657344 67.299328-65.934336 76.913664-114.574336 8.419328-43.179008-24.006656-83.456-67.241984-83.456H388.621312c-43.179008 0-75.662336 40.276992-67.185664 83.456 9.614336 48.64 38.342656 88.916992 76.857344 114.574336-103.140352 43.633664-181.476352 136.875008-200.875008 253.212672L173.75232 707.18464c-22.641664 136.020992 82.204672 259.924992 220.16 259.924992h269.481984c137.899008 0 242.802688-123.904 220.16-259.924992zM599.758848 654.2336c15.700992 0 28.444672-12.742656 28.444672-28.444672 0-15.700992-12.74368-28.444672-28.444672-28.444672h-21.844992l30.150656-30.150656c11.150336-11.150336 11.150336-29.126656 0-40.220672-11.092992-11.150336-29.070336-11.150336-40.220672 0L528.648192 566.1696l-39.196672-39.196672c-11.15136-11.150336-29.12768-11.150336-40.220672 0-11.150336 11.094016-11.150336 29.07136 0 40.220672l30.150656 30.150656h-21.844992c-15.700992 0-28.444672 12.74368-28.444672 28.444672 0 15.702016 12.74368 28.444672 28.444672 28.444672h42.667008v28.444672h-42.667008c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.443648 28.444672 28.443648h42.667008v28.444672c0 15.700992 12.742656 28.444672 28.444672 28.444672 15.700992 0 28.443648-12.74368 28.443648-28.444672v-28.444672h42.667008c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672h-42.667008V654.2336h42.667008z" />
  </svg>
);

const BalanceOutlined = createIcon(BalanceOutlinedSvgComponent, 'BalanceOutlined');

export default BalanceOutlined;
