import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const AimOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 56.889344c251.334656 0 455.110656 203.776 455.110656 455.110656 0 251.334656-203.776 455.110656-455.110656 455.110656-251.334656 0-455.110656-203.776-455.110656-455.110656 0-251.334656 203.776-455.110656 455.110656-455.110656z m28.444672 58.368V256c0 15.700992-12.8 28.444672-28.444672 28.444672-15.644672 0-28.444672-12.74368-28.444672-28.444672V115.257344C286.72 129.251328 129.251328 286.662656 115.2 483.555328H256c15.644672 0 28.444672 12.8 28.444672 28.444672 0 15.700992-12.8 28.444672-28.444672 28.444672H115.2C129.251328 737.337344 286.72 894.804992 483.555328 908.8V768c0-15.644672 12.8-28.444672 28.444672-28.444672 15.644672 0 28.444672 12.8 28.444672 28.444672v140.8C737.28 894.804992 894.748672 737.337344 908.8 540.444672H768c-15.644672 0-28.444672-12.74368-28.444672-28.444672 0-15.644672 12.8-28.444672 28.444672-28.444672h140.8c-14.051328-196.892672-171.52-354.304-368.355328-368.297984zM512 455.133184c31.403008 0 56.889344 25.430016 56.889344 56.889344 0 31.459328-25.48736 56.889344-56.889344 56.889344-31.403008 0-56.889344-25.430016-56.889344-56.889344 0-31.459328 25.48736-56.88832 56.889344-56.88832z" />
  </svg>
);

const AimOutlined = createIcon(AimOutlinedSvgComponent, 'AimOutlined');

export default AimOutlined;
