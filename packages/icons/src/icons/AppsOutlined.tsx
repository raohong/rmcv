import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const AppsOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M725.332992 170.667008c-70.69184 0-128 57.307136-128 128 0 70.69184 57.30816 128 128 128 70.692864 0 128-57.30816 128-128 0-70.692864-57.307136-128-128-128z m0-56.889344c102.111232 0 184.889344 82.778112 184.889344 184.889344 0 102.111232-82.778112 184.88832-184.889344 184.88832-102.111232 0-184.88832-82.777088-184.88832-184.88832S623.22176 113.77664 725.332992 113.77664z m-554.665984 56.889344v256h256v-256h-256z m0-56.889344h256c31.418368 0 56.88832 25.469952 56.88832 56.889344v256c0 31.418368-25.469952 56.88832-56.88832 56.88832h-256c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-256c0-31.419392 25.469952-56.889344 56.889344-56.889344z m0 483.555328v256h256v-256h-256z m0-56.88832h256c31.418368 0 56.88832 25.469952 56.88832 56.88832v256c0 31.419392-25.469952 56.889344-56.88832 56.889344h-256c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-256c0-31.418368 25.469952-56.88832 56.889344-56.88832z m426.665984 56.88832v256h256v-256h-256z m0-56.88832h256c31.419392 0 56.889344 25.469952 56.889344 56.88832v256c0 31.419392-25.469952 56.889344-56.889344 56.889344h-256c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-256c0-31.418368 25.469952-56.88832 56.88832-56.88832z" />
  </svg>
);

const AppsOutlined = createIcon(AppsOutlinedSvgComponent, 'AppsOutlined');

export default AppsOutlined;
