import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const CardFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M568.604672 654.676992c0 15.702016 12.742656 28.444672 28.444672 28.444672h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.444672 0-15.700992-12.742656-28.443648-28.444672-28.443648H597.049344c-15.702016 0-28.444672 12.742656-28.444672 28.443648z m-511.715328-313.344h910.221312v455.11168c0 31.459328-25.428992 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V341.332992z m910.221312-113.77664v56.88832H56.889344v-56.889344c0-31.401984 25.485312-56.88832 56.88832-56.88832H910.22336c31.459328 0 56.88832 25.486336 56.88832 56.88832z" />
  </svg>
);

const CardFilled = createIcon(CardFilledSvgComponent, 'CardFilled');

export default CardFilled;
