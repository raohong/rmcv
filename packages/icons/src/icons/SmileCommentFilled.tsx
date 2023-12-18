import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const SmileCommentFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M369.777664 796.444672l-142.222336 113.77664v-113.77664h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V170.667008c0-31.419392 25.469952-56.889344 56.889344-56.889344h682.665984c31.419392 0 56.889344 25.469952 56.889344 56.889344v568.88832c0 31.419392-25.469952 56.889344-56.889344 56.889344H369.777664zM676.49536 455.110656c-0.106496-15.618048-12.8-28.246016-28.443648-28.246016-15.710208 0-28.444672 12.734464-28.444672 28.444672 0 0.620544 0.02048 1.236992 0.059392 1.84832-1.06496 62.111744-50.450432 111.731712-110.712832 111.731712-60.92288 0-110.73024-50.7136-110.731264-113.778688-0.11264-15.612928-12.804096-28.234752-28.443648-28.234752-15.709184 0-28.444672 12.735488-28.444672 28.444672v0.14336c0.187392 94.094336 75.1616 170.313728 167.61856 170.313728 92.57472 0 167.619584-76.41088 167.619584-170.667008h-0.0768zM369.77664 284.444672c-15.709184 0-28.444672 12.734464-28.444672 28.444672 0 15.70816 12.735488 28.443648 28.444672 28.443648s28.444672-12.734464 28.444672-28.443648c0-15.710208-12.735488-28.444672-28.444672-28.444672z m284.444672 0c-15.709184 0-28.444672 12.734464-28.444672 28.444672 0 15.70816 12.735488 28.443648 28.444672 28.443648s28.444672-12.734464 28.444672-28.443648c0-15.710208-12.735488-28.444672-28.444672-28.444672z" />
  </svg>
);

const SmileCommentFilled = createIcon(
  SmileCommentFilledSvgComponent,
  'SmileCommentFilled',
);

export default SmileCommentFilled;
