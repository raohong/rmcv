import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const LikeFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M376.892416 823.40352L129.993728 562.477056c-99.436544-105.086976-97.15712-270.232576 5.144576-372.533248 101.490688-101.489664 266.038272-101.489664 367.52896 0l9.984 9.984 9.996288-9.99424c101.53984-101.540864 266.16832-101.540864 367.70816 0 102.395904 102.393856 104.802304 267.651072 5.433344 372.984832l-341.21728 361.694208a56.88832 56.88832 0 0 1-2.463744 2.4576c-22.91712 21.492736-58.918912 20.33664-80.411648-2.58048l-94.803968-101.086208z" />
  </svg>
);

const LikeFilled = createIcon(LikeFilledSvgComponent, 'LikeFilled');

export default LikeFilled;
