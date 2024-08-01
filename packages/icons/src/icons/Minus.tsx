import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const MinusSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M550.4 550.4h-409.6c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h742.4c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z' />
  </svg>
);

const Minus = createIcon(MinusSvgComponent, 'Minus');

export default Minus;
