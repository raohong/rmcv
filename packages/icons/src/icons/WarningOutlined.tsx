import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const WarningOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM475.029504 263.806976c-0.131072-5.88288 4.069376-10.651648 10.23488-10.651648h59.160576c5.783552 0 10.37312 4.472832 10.233856 10.651648l-8.424448 376.91904c-0.131072 5.88288-5.127168 10.651648-10.52672 10.651648h-41.726976c-5.682176 0-10.38848-4.471808-10.52672-10.651648l-8.424448-376.91904z m39.815168 507.037696c-21.993472 0-39.82336-17.828864-39.82336-39.82336 0-21.992448 17.829888-39.821312 39.82336-39.821312s39.822336 17.828864 39.822336 39.822336-17.828864 39.822336-39.82336 39.822336z" />
  </svg>
);

const WarningOutlined = createIcon(WarningOutlinedSvgComponent, 'WarningOutlined');

export default WarningOutlined;
