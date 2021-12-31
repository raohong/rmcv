import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const InfoFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m28.444672 341.332992h-99.555328v56.88832h42.665984v256h-56.88832V768h170.665984v-56.889344h-56.88832V398.22336zM512 256c-23.564288 0-42.667008 19.10272-42.667008 42.667008s19.10272 42.665984 42.667008 42.665984 42.667008-19.101696 42.667008-42.665984C554.667008 275.10272 535.564288 256 512 256z" />
  </svg>
);

const InfoFilled = createIcon(InfoFilledSvgComponent, 'InfoFilled');

export default InfoFilled;
