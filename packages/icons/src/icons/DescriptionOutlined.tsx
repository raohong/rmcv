import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const DescriptionOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M625.777664 886.670336V739.555328h147.115008L625.77664 886.67136z m-398.222336 23.552V113.77664h568.889344v568.889344H625.77664c-31.459328 0-56.88832 25.428992-56.88832 56.88832V910.22336H227.555328zM796.444672 56.889344H227.555328c-31.459328 0-56.88832 25.428992-56.88832 56.88832V910.22336c0 31.459328 25.428992 56.88832 56.88832 56.88832h374.67136a56.83712 56.83712 0 0 0 40.219648-16.667648l40.220672-40.220672 113.77664-113.777664 40.221696-40.220672c10.694656-10.638336 16.667648-25.145344 16.667648-40.220672v-602.22464c0-31.460352-25.428992-56.889344-56.88832-56.889344z m-142.22336 170.672128H369.778688c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.443648 28.444672 28.443648H654.22336c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672m0 113.77664H369.77664c-15.700992 0-28.444672 12.74368-28.444672 28.445696 0 15.700992 12.74368 28.443648 28.444672 28.443648H654.22336c15.700992 0 28.444672-12.742656 28.444672-28.443648 0-15.702016-12.74368-28.444672-28.444672-28.444672M540.444672 455.1168H369.77664c-15.700992 0-28.444672 12.742656-28.444672 28.444672 0 15.700992 12.74368 28.444672 28.444672 28.444672h170.667008c15.700992 0 28.444672-12.74368 28.444672-28.444672 0-15.702016-12.74368-28.444672-28.444672-28.444672" />
  </svg>
);

const DescriptionOutlined = createIcon(
  DescriptionOutlinedSvgComponent,
  'DescriptionOutlined',
);

export default DescriptionOutlined;
