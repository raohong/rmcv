import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const EnvelopOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M113.777664 227.555328v568.889344H910.22336V227.555328H113.77664z m0-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832z m-46.186496 79.121408l35.484672-44.466176 392.153088 312.945664c10.39872 8.298496 25.15968 8.281088 35.53792-0.043008l390.10304-312.859648 35.593216 44.38016-390.104064 312.859648c-31.13472 24.97024-75.419648 25.023488-106.614784 0.129024L67.591168 249.788416z' />
  </svg>
);

const EnvelopOutlined = createIcon(EnvelopOutlinedSvgComponent, 'EnvelopOutlined');

export default EnvelopOutlined;
