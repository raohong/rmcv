import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const CommentFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M625.777664 739.554304l-66.443264 99.66592a56.889344 56.889344 0 0 1-15.777792 15.777792c-26.14272 17.42848-61.462528 10.36288-78.891008-15.778816l-66.443264-99.664896H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-512c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v512c0 31.418368-25.469952 56.88832-56.88832 56.88832H625.77664zM312.889344 284.443648c-15.710208 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.734464 28.444672 28.444672 28.444672h398.221312c15.710208 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.734464-28.443648-28.444672-28.443648H312.889344z m0 170.665984c-15.710208 0-28.444672 12.735488-28.444672 28.444672S297.179136 512 312.889344 512h398.221312c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672H312.889344z" />
  </svg>
);

const CommentFilled = createIcon(CommentFilledSvgComponent, 'CommentFilled');

export default CommentFilled;
