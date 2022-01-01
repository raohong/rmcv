import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const AddOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M483.555328 483.780608V284.669952c0-15.709184 12.735488-28.444672 28.444672-28.444672h0.146432c15.628288 0.08192 28.23168 12.816384 28.14976 28.443648l-1.033216 199.11168h200.292352c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H538.968064l-1.041408 200.440832c-0.077824 14.997504-12.25728 27.11552-27.255808 27.11552-14.974976 0-27.11552-12.140544-27.11552-27.11552V540.668928H284.444672c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672h199.110656zM512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z" />
  </svg>
);

const AddOutlined = createIcon(AddOutlinedSvgComponent, 'AddOutlined');

export default AddOutlined;
