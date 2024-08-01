import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const LockFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M284.444672 455.110656v-113.77664c0-125.67552 101.879808-227.556352 227.555328-227.556352s227.555328 101.879808 227.555328 227.555328v113.777664h71.11168c23.564288 0 42.665984 19.10272 42.665984 42.667008v369.777664c0 23.564288-19.101696 42.667008-42.665984 42.667008H213.332992c-23.564288 0-42.665984-19.10272-42.665984-42.667008v-369.77664c0-23.565312 19.101696-42.668032 42.665984-42.668032h71.11168z m85.332992 0H654.22336v-113.77664c0-78.547968-63.675392-142.22336-142.222336-142.22336-78.546944 0-142.222336 63.675392-142.222336 142.22336v113.77664z' />
  </svg>
);

const LockFilled = createIcon(LockFilledSvgComponent, 'LockFilled');

export default LockFilled;
