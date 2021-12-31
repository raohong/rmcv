import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const NewOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M227.555328 56.889344v590.221312c0 49.241088 49.376256 92.444672 113.777664 92.444672h341.334016c64.401408 0 113.77664-43.203584 113.77664-92.444672V56.889344H227.556352zM170.667008 0h682.665984v647.110656c0 82.475008-76.409856 149.334016-170.665984 149.334016H341.332992c-94.256128 0-170.665984-66.859008-170.665984-149.334016V0z m148.609024 483.555328h-34.83136V312.889344h29.326336l61.25568 99.229696h0.800768v-99.229696h34.83136v170.665984h-29.026304l-61.555712-100.175872h-0.800768v100.175872z m212.191232-35.008512v35.008512h-98.989056V312.889344h98.99008v35.008512h-62.257152v33.943552h58.55232v31.93344h-58.55232v34.771968h62.256128z m110.600192-71.554048l-24.322048 106.56256h-34.63168l-37.7344-170.665984h37.935104l19.51744 115.314688h0.800768l24.122368-115.314688h29.425664l24.122368 115.314688h0.800768l19.51744-115.314688h37.93408l-37.7344 170.665984h-34.63168l-24.321024-106.56256h-0.800768z" />
  </svg>
);

const NewOutlined = createIcon(NewOutlinedSvgComponent, 'NewOutlined');

export default NewOutlined;
