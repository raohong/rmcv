import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const WarningFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344zM514.844672 691.2c-21.993472 0-39.82336 17.828864-39.82336 39.822336s17.829888 39.822336 39.82336 39.822336 39.822336-17.828864 39.822336-39.82336c0-21.992448-17.828864-39.821312-39.82336-39.821312z m29.580288-438.044672H485.26336c-6.165504 0-10.365952 4.768768-10.23488 10.651648l8.424448 376.91904c0.13824 6.17984 4.844544 10.651648 10.52672 10.651648h41.728c5.398528 0 10.3936-4.768768 10.52672-10.651648l8.423424-376.91904c0.13824-6.178816-4.450304-10.651648-10.233856-10.651648z" />
  </svg>
);

const WarningFilled = createIcon(WarningFilledSvgComponent, 'WarningFilled');

export default WarningFilled;
