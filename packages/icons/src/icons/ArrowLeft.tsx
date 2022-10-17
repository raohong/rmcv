import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const ArrowLeftSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M303.220736 520.22784c-3.29728-13.923328 0.484352-29.182976 11.344896-40.04352l341.925888-341.925888c16.661504-16.662528 43.676672-16.662528 60.3392 0s16.662528 43.677696 0 60.340224L404.996096 510.43328l311.883776 311.883776c16.662528 16.662528 16.662528 43.677696 0 60.340224s-43.677696 16.662528-60.340224 0L314.614784 540.731392a42.467328 42.467328 0 0 1-11.394048-20.503552z" />
  </svg>
);

const ArrowLeft = createIcon(ArrowLeftSvgComponent, 'ArrowLeft');

export default ArrowLeft;
