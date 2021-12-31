import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const PlayCircleFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m171.776-432.851968a28.444672 28.444672 0 0 0 4.441088-4.442112c9.814016-12.26752 7.825408-30.16704-4.442112-39.980032L473.30816 321.462272a28.444672 28.444672 0 0 0-17.768448-6.232064c-15.710208 0-28.444672 12.734464-28.444672 28.443648v336.746496a28.444672 28.444672 0 0 0 6.233088 17.769472c9.814016 12.26752 27.713536 14.256128 39.980032 4.442112L683.776 534.258688z" />
  </svg>
);

const PlayCircleFilled = createIcon(
  PlayCircleFilledSvgComponent,
  'PlayCircleFilled',
);

export default PlayCircleFilled;
