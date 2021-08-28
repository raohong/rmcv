import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const QrOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M768 540.444672v142.221312h85.332992V540.444672c31.419392 0 56.889344 25.469952 56.889344 56.88832v142.22336H711.110656v-142.22336H625.77664v312.889344c-31.418368 0-56.88832-25.469952-56.88832-56.889344V541.468672a1.024 1.024 0 0 1 1.024-1.024H768z m-42.667008 256c23.564288 0 42.667008 19.10272 42.667008 42.665984 0 23.564288-19.10272 42.667008-42.667008 42.667008s-42.665984-19.10272-42.665984-42.667008c0-23.563264 19.101696-42.665984 42.665984-42.665984z m142.22336 0c23.563264 0 42.665984 19.10272 42.665984 42.665984 0 23.564288-19.10272 42.667008-42.667008 42.667008s-42.665984-19.10272-42.665984-42.667008c0-23.563264 19.101696-42.665984 42.665984-42.665984zM170.667008 170.667008v256h256v-256h-256z m256 369.77664c31.418368 0 56.88832 25.470976 56.88832 56.889344v256c0 31.419392-25.469952 56.889344-56.88832 56.889344h-256c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-256c0-31.418368 25.469952-56.88832 56.889344-56.88832h256z m0 56.889344h-256v256h256v-256z m0-483.555328c31.418368 0 56.88832 25.469952 56.88832 56.889344v256c0 31.418368-25.469952 56.88832-56.88832 56.88832h-256c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-256c0-31.419392 25.469952-56.889344 56.889344-56.889344h256z m426.665984 0c31.419392 0 56.889344 25.469952 56.889344 56.889344v256c0 31.418368-25.469952 56.88832-56.889344 56.88832h-256c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-256c0-31.419392 25.469952-56.889344 56.88832-56.889344h256z m0 56.889344h-256v256h256v-256z" />
  </svg>
);

const QrOutlined = createIcon(QrOutlinedSvgComponent, 'QrOutlined');

export default QrOutlined;
