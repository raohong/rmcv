import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const TodoListFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M739.538944 568.905728c94.26432 0 170.665984 76.345344 170.665984 170.667008 0 94.26432-76.40064 170.667008-170.665984 170.667008s-170.667008-76.402688-170.667008-170.667008c0-94.321664 76.401664-170.667008 170.667008-170.667008z m56.905728-455.12704c31.459328 0 56.88832 25.427968 56.88832 56.88832v372.905984C819.712 524.004352 781.19936 512 739.556352 512 613.888 512 512 613.888 512 739.555328c0 68.323328 30.777344 128.96768 78.507008 170.667008H227.555328c-31.459328 0-56.88832-25.428992-56.88832-56.889344V170.667008c0-31.460352 25.428992-56.889344 56.88832-56.889344z m-56.905728 513.608704c-15.702016 0-28.444672 12.8-28.444672 28.444672v72.875008a56.87808 56.87808 0 0 0 16.668672 40.220672l55.124992 55.181312c11.092992 11.094016 29.126656 11.094016 40.220672 0 11.092992-11.092992 11.092992-29.126656 0-40.219648l-55.126016-55.18336v-72.873984c0-15.644672-12.686336-28.444672-28.443648-28.444672zM426.665984 512h-113.77664c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.444672 28.444672 28.444672h113.77664c15.702016 0 28.444672-12.74368 28.444672-28.444672C455.110656 524.742656 442.368 512 426.667008 512z m113.778688-113.777664H312.889344c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.443648 28.444672 28.443648h227.555328c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672z m113.77664-113.777664H312.890368c-15.702016 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.742656 28.443648 28.444672 28.443648h341.332992c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672z" />
  </svg>
);

const TodoListFilled = createIcon(TodoListFilledSvgComponent, 'TodoListFilled');

export default TodoListFilled;
