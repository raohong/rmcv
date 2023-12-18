import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const ExpandFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M796.444672 426.667008c0 15.700992-12.74368 28.443648-28.444672 28.443648-15.700992 0-28.444672-12.742656-28.444672-28.443648v-102.001664L609.108992 455.110656c-11.092992 11.094016-29.126656 11.094016-40.219648 0-11.094016-11.092992-11.094016-29.126656 0-40.219648l130.445312-130.44736h-102.00064c-15.702016 0-28.444672-12.742656-28.444672-28.443648s12.742656-28.444672 28.443648-28.444672H768c15.700992 0 28.444672 12.74368 28.444672 28.444672v170.667008zM455.110656 609.108992l-130.445312 130.44736h102.00064c15.702016 0 28.444672 12.742656 28.444672 28.443648S442.368 796.444672 426.667008 796.444672H256c-15.700992 0-28.444672-12.74368-28.444672-28.444672V597.332992c0-15.700992 12.74368-28.443648 28.444672-28.443648 15.700992 0 28.444672 12.742656 28.444672 28.443648v102.001664l130.446336-130.445312c11.092992-11.094016 29.126656-11.094016 40.219648 0 11.094016 11.092992 11.094016 29.126656 0 40.219648z m398.22336-495.331328H170.665984c-31.460352 0-56.889344 25.428992-56.889344 56.889344v682.665984c0 31.460352 25.428992 56.889344 56.889344 56.889344h682.665984c31.460352 0 56.889344-25.428992 56.889344-56.889344V170.667008c0-31.460352-25.428992-56.889344-56.889344-56.889344z" />
  </svg>
);

const ExpandFilled = createIcon(ExpandFilledSvgComponent, 'ExpandFilled');

export default ExpandFilled;
