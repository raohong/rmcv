import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const DesktopOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M796.444672 568.889344V113.77664H227.555328v455.11168h568.889344z m-398.22336 113.77664h227.556352v-56.88832H398.22336v56.889344z m341.334016 56.889344H284.444672V910.22336h455.110656V739.555328z m56.889344-682.665984c31.459328 0 56.88832 25.485312 56.88832 56.88832v455.11168c0 31.459328-25.428992 56.88832-56.88832 56.88832H682.667008v56.889344h56.88832c31.459328 0 56.889344 25.486336 56.889344 56.88832V910.22336c0 31.459328-25.430016 56.88832-56.889344 56.88832H284.444672c-31.459328 0-56.889344-25.428992-56.889344-56.88832V739.555328c0-31.401984 25.430016-56.88832 56.889344-56.88832h56.88832V625.77664h-113.77664c-31.460352 0-56.889344-25.428992-56.889344-56.88832V113.77664c0-31.403008 25.428992-56.88832 56.88832-56.88832h568.889344zM597.332992 853.36064c-15.70816 0-28.443648-12.734464-28.443648-28.444672 0-15.70816 12.734464-28.443648 28.443648-28.443648h56.889344c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672h-56.889344z" />
  </svg>
);

const DesktopOutlined = createIcon(
  DesktopOutlinedSvgComponent,
  'DesktopOutlined',
);

export default DesktopOutlined;
