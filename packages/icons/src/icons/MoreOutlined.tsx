import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const MoreOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M512 903.110656c216.004608 0 391.110656-175.106048 391.110656-391.110656S728.004608 120.889344 512 120.889344 120.889344 295.995392 120.889344 512 295.995392 903.110656 512 903.110656z m0 64C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM512 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM284.444672 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0ZM739.555328 512m-56.889344 0a56.889344 56.889344 0 1 0 113.778688 0 56.889344 56.889344 0 1 0-113.778688 0Z' />
  </svg>
);

const MoreOutlined = createIcon(MoreOutlinedSvgComponent, 'MoreOutlined');

export default MoreOutlined;
