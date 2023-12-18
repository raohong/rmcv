import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const ClockFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m-28.444672 227.555328c-15.709184 0-28.444672 12.734464-28.444672 28.444672v256c0 15.70816 12.735488 28.443648 28.444672 28.443648h256c15.709184 0 28.444672-12.734464 28.444672-28.443648 0-15.710208-12.735488-28.444672-28.444672-28.444672H512V312.889344c0-15.710208-12.735488-28.444672-28.444672-28.444672z" />
  </svg>
);

const ClockFilled = createIcon(ClockFilledSvgComponent, 'ClockFilled');

export default ClockFilled;
