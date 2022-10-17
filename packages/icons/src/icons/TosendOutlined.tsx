import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const TosendOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M170.667008 284.444672v568.88832h682.665984V284.444672H170.667008z m-56.889344-56.889344H910.22336v625.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-625.77664zM492.763136 398.22336a13.858816 13.858816 0 0 1 13.790208 12.480512l19.467264 194.68288 121.546752 76.319744a14.208 14.208 0 0 1-11.915264 25.554944l-180.4288-58.190848h-0.08704l0.002048-0.026624-0.027648-0.008192 0.03584-0.077824 23.826432-238.25408a13.858816 13.858816 0 0 1 13.790208-12.480512zM818.173952 113.77664a56.889344 56.889344 0 0 1 50.88256 31.44704l41.1648 82.330624h-63.602688l-28.444672-56.88832H205.826048l-28.444672 56.88832h-63.603712l41.1648-82.3296a56.889344 56.889344 0 0 1 50.88256-31.44704z" />
  </svg>
);

const TosendOutlined = createIcon(TosendOutlinedSvgComponent, 'TosendOutlined');

export default TosendOutlined;
