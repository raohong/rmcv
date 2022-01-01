import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const PlusSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M550.4 550.4v332.8c0 21.20704-17.19296 38.4-38.4 38.4s-38.4-17.19296-38.4-38.4v-332.8h-332.8c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h332.8v-332.8c0-21.20704 17.19296-38.4 38.4-38.4s38.4 17.19296 38.4 38.4v332.8h332.8c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z" />
  </svg>
);

const Plus = createIcon(PlusSvgComponent, 'Plus');

export default Plus;
