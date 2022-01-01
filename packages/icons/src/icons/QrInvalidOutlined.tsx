import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const QrInvalidOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M725.332992 881.777664c-23.564288 0-42.665984-19.10272-42.665984-42.667008 0-23.563264 19.101696-42.665984 42.665984-42.665984 23.564288 0 42.667008 19.10272 42.667008 42.665984 0 23.564288-19.10272 42.667008-42.667008 42.667008z m128-199.110656h56.889344l-56.889344 56.88832v-43.0848l6.90176 2.859008-6.90176-6.90176v-9.760768z m-284.443648-33.325056l56.88832 56.889344v203.99104c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-203.99104zM768 540.444672v142.222336h85.332992v-142.22336c31.419392 0 56.889344 25.470976 56.889344 56.889344v142.22336h-90.2144L711.11168 630.657024v-33.325056h-33.324032l-56.69888-56.69888a57.65632 57.65632 0 0 1 4.68992-0.18944H768z m-654.222336-346.2144l56.889344 56.889344v175.547392h175.546368l56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832V194.231296z m312.889344-80.452608c31.418368 0 56.88832 25.469952 56.88832 56.889344v232.435712l-56.88832-56.889344V170.667008H251.119616L194.23232 113.77664h232.435712z m170.665984 56.889344v256h256v-256h-256z m0-56.889344h256c31.419392 0 56.889344 25.469952 56.889344 56.889344v256c0 31.418368-25.469952 56.88832-56.889344 56.88832h-256c-31.418368 0-56.88832-25.469952-56.88832-56.88832v-256c0-31.419392 25.469952-56.889344 56.88832-56.889344zM170.667008 597.332992v256h256v-256h-256z m0-56.88832h256c31.418368 0 56.88832 25.469952 56.88832 56.88832v256c0 31.419392-25.469952 56.889344-56.88832 56.889344h-256c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-256c0-31.418368 25.469952-56.88832 56.889344-56.88832z" />
  </svg>
);

const QrInvalidOutlined = createIcon(
  QrInvalidOutlinedSvgComponent,
  'QrInvalidOutlined',
);

export default QrInvalidOutlined;
