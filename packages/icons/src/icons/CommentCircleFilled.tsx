import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const CommentCircleFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m224 227.555328h-448c-17.673216 0-32 14.32576-32 32v338.983936c0 17.673216 14.326784 32 32 32h27.36128l33.1264 63.8208c8.1408 15.685632 27.457536 21.80096 43.143168 13.66016a32 32 0 0 0 13.66016-13.66016l33.1264-63.8208H736c17.673216 0 32-14.326784 32-32v-338.98496c0-17.672192-14.326784-32-32-32z m-24.889344 56.88832v289.206272h-307.26144l-26.959872 51.943424-26.96192-51.943424h-37.03808V341.332992h398.221312z' />
  </svg>
);

const CommentCircleFilled = createIcon(
  CommentCircleFilledSvgComponent,
  'CommentCircleFilled',
);

export default CommentCircleFilled;
