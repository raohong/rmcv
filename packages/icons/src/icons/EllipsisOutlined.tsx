import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const EllipsisOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M184.889344 426.667008c39.273472 0 71.110656 31.837184 71.110656 71.110656s-31.837184 71.11168-71.110656 71.11168c-39.274496 0-71.11168-31.838208-71.11168-71.11168 0-39.273472 31.837184-71.110656 71.11168-71.110656z m327.110656 0c39.273472 0 71.110656 31.837184 71.110656 71.110656s-31.83616 71.11168-71.110656 71.11168c-39.273472 0-71.110656-31.838208-71.110656-71.11168 0-39.273472 31.83616-71.110656 71.110656-71.110656z m327.110656 0c39.274496 0 71.11168 31.837184 71.11168 71.110656s-31.837184 71.11168-71.11168 71.11168c-39.273472 0-71.110656-31.838208-71.110656-71.11168 0-39.273472 31.837184-71.110656 71.110656-71.110656z" />
  </svg>
);

const EllipsisOutlined = createIcon(
  EllipsisOutlinedSvgComponent,
  'EllipsisOutlined',
);

export default EllipsisOutlined;
