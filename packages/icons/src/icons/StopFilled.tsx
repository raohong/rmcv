import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const StopFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M348.16 307.2h327.68c22.621184 0 40.96 18.338816 40.96 40.96v327.68c0 22.621184-18.338816 40.96-40.96 40.96H348.16c-22.621184 0-40.96-18.338816-40.96-40.96V348.16c0-22.621184 18.338816-40.96 40.96-40.96z' />
  </svg>
);

const StopFilled = createIcon(StopFilledSvgComponent, 'StopFilled');

export default StopFilled;
