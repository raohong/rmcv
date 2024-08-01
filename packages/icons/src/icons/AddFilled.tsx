import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const AddFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M711.339008 540.444672h-170.89536v170.894336c0 15.643648-12.742656 28.443648-28.443648 28.443648s-28.444672-12.8-28.444672-28.443648v-170.89536H312.660992c-15.643648 0-28.443648-12.742656-28.443648-28.443648s12.8-28.444672 28.443648-28.444672h170.89536V312.660992c0-15.643648 12.742656-28.443648 28.443648-28.443648s28.444672 12.8 28.444672 28.443648v170.89536h170.894336c15.643648 0 28.443648 12.742656 28.443648 28.443648s-12.8 28.444672-28.443648 28.444672M512 56.889344c-251.334656 0-455.110656 203.776-455.110656 455.110656 0 251.334656 203.776 455.110656 455.110656 455.110656 251.334656 0 455.110656-203.776 455.110656-455.110656 0-251.334656-203.776-455.110656-455.110656-455.110656' />
  </svg>
);

const AddFilled = createIcon(AddFilledSvgComponent, 'AddFilled');

export default AddFilled;
