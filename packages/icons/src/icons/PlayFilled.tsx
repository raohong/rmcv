import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const PlayFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M785.79712 539.923456L387.54816 858.523648c-12.26752 9.814016-30.16704 7.824384-39.981056-4.442112a28.444672 28.444672 0 0 1-6.233088-17.769472V199.110656c0-15.70816 12.735488-28.443648 28.444672-28.443648a28.444672 28.444672 0 0 1 17.769472 6.233088L785.79712 495.500288c12.266496 9.814016 14.255104 27.713536 4.442112 39.981056a28.444672 28.444672 0 0 1-4.442112 4.442112z" />
  </svg>
);

const PlayFilled = createIcon(PlayFilledSvgComponent, 'PlayFilled');

export default PlayFilled;
