import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const ArrowDownSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M505.952256 751.028224a42.467328 42.467328 0 0 1-20.503552-11.393024L143.52384 397.709312c-16.662528-16.661504-16.662528-43.676672 0-60.3392 16.661504-16.662528 43.676672-16.662528 60.3392 0L515.74784 649.253888 827.582464 337.41824c16.661504-16.662528 43.676672-16.662528 60.3392 0s16.662528 43.677696 0 60.340224L545.9968 739.683328c-10.861568 10.861568-26.120192 14.6432-40.044544 11.34592z' />
  </svg>
);

const ArrowDown = createIcon(ArrowDownSvgComponent, 'ArrowDown');

export default ArrowDown;
