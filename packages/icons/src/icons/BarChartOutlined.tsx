import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const BarChartOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M170.553344 440.662016v426.668032h113.777664V440.662016H170.553344z m0-56.88832h113.777664c31.419392 0 56.889344 25.469952 56.889344 56.88832v426.668032c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.553344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V440.662016c0-31.418368 25.469952-56.88832 56.889344-56.88832z m284.444672-56.889344v540.44672h113.778688v-540.44672H454.998016z m0-56.889344h113.778688c31.418368 0 56.88832 25.469952 56.88832 56.889344v540.44672c0 31.418368-25.469952 56.88832-56.88832 56.88832H454.998016c-31.418368 0-56.88832-25.469952-56.88832-56.889344v-540.44672c0-31.418368 25.469952-56.88832 56.88832-56.88832z m284.445696-113.777664v711.112704h113.777664V156.217344H739.443712z m0-56.889344h113.777664c31.419392 0 56.889344 25.469952 56.889344 56.889344v711.112704c0 31.419392-25.469952 56.889344-56.889344 56.889344H739.443712c-31.419392 0-56.889344-25.469952-56.889344-56.889344V156.217344c0-31.419392 25.469952-56.889344 56.889344-56.889344z" />
  </svg>
);

const BarChartOutlined = createIcon(
  BarChartOutlinedSvgComponent,
  'BarChartOutlined',
);

export default BarChartOutlined;
