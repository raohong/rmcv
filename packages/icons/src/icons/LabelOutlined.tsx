import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const LabelOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M796.444672 875.063296V113.77664H227.555328v761.285632L512 732.839936l284.444672 142.22336zM227.555328 56.889344h568.889344c31.418368 0 56.88832 25.469952 56.88832 56.88832v761.285632c0 31.418368-25.469952 56.88832-56.88832 56.88832a56.889344 56.889344 0 0 1-25.44128-6.00576L512 796.444672 252.996608 925.945856c-28.101632 14.051328-62.273536 2.660352-76.32384-25.44128a56.889344 56.889344 0 0 1-6.00576-25.44128V113.77664c0-31.418368 25.469952-56.88832 56.88832-56.88832z m142.22336 227.555328h284.443648c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H369.77664c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672z m0 170.665984h284.443648c15.709184 0 28.444672 12.735488 28.444672 28.444672S669.93152 512 654.222336 512H369.77664c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672z" />
  </svg>
);

const LabelOutlined = createIcon(LabelOutlinedSvgComponent, 'LabelOutlined');

export default LabelOutlined;
