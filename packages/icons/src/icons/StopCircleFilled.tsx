import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const StopCircleFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m-113.231872-597.58592c-15.709184 0-28.444672 12.734464-28.444672 28.443648v227.555328c0 15.710208 12.735488 28.444672 28.444672 28.444672h227.555328c15.710208 0 28.444672-12.734464 28.444672-28.444672V397.968384c0-15.709184-12.734464-28.444672-28.444672-28.444672H398.768128z' />
  </svg>
);

const StopCircleFilled = createIcon(
  StopCircleFilledSvgComponent,
  'StopCircleFilled',
);

export default StopCircleFilled;
