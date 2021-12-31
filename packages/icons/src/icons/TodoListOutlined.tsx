import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const TodoListOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M227.555328 113.777664h568.889344c31.418368 0 56.88832 25.469952 56.88832 56.889344v256c0 15.70816-12.734464 28.443648-28.443648 28.443648-15.710208 0-28.444672-12.734464-28.444672-28.443648v-256H227.555328v682.665984h199.11168c15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344zM739.555328 910.222336c94.257152 0 170.667008-76.41088 170.667008-170.667008s-76.41088-170.665984-170.667008-170.665984-170.665984 76.409856-170.665984 170.665984c0 94.257152 76.409856 170.667008 170.665984 170.667008z m0 56.88832C613.879808 967.110656 512 865.230848 512 739.555328S613.879808 512 739.555328 512s227.555328 101.879808 227.555328 227.555328-101.879808 227.555328-227.555328 227.555328zM711.110656 655.859712c0-15.709184 12.735488-28.444672 28.444672-28.444672S768 640.150528 768 655.859712v72.8832l55.126016 55.126016c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.108352 11.108352-29.118464 11.108352-40.226816 0l-55.126016-55.126016a56.889344 56.889344 0 0 1-16.662528-40.226816v-72.8832zM312.889344 284.444672h341.332992c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672zM312.889344 398.222336h227.555328c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H312.889344c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672zM312.889344 512h113.77664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.443648 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672S297.179136 512 312.889344 512z" />
  </svg>
);

const TodoListOutlined = createIcon(
  TodoListOutlinedSvgComponent,
  'TodoListOutlined',
);

export default TodoListOutlined;
