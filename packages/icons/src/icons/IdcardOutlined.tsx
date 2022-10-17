import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const IdcardOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992zM711.110656 625.777664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H312.889344c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.444672-28.444672h398.221312zM910.22336 227.555328H113.77664v56.889344H910.22336v-56.889344z" />
  </svg>
);

const IdcardOutlined = createIcon(IdcardOutlinedSvgComponent, 'IdcardOutlined');

export default IdcardOutlined;
