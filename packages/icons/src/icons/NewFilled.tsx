import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const NewFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M853.332992 0v647.110656c0 82.475008-76.409856 149.334016-170.665984 149.334016H341.332992c-94.256128 0-170.665984-66.859008-170.665984-149.334016V0h682.665984zM313.771008 312.889344h-29.32736v170.665984h34.832384v-100.175872h0.800768l61.555712 100.175872h29.026304V312.889344h-34.83136v99.229696h-0.800768l-61.25568-99.229696z m217.696256 0h-98.989056v170.665984h98.99008v-35.008512h-62.257152v-34.771968h58.55232v-31.93344h-58.55232v-33.943552h62.256128v-35.008512z m51.847168 0h-37.93408l37.7344 170.665984h34.63168l24.321024-106.56256h0.800768l24.322048 106.56256h34.63168l37.7344-170.665984h-37.935104l-19.51744 115.314688h-0.800768l-24.122368-115.314688h-29.425664l-24.122368 115.314688h-0.800768l-19.51744-115.314688z" />
  </svg>
);

const NewFilled = createIcon(NewFilledSvgComponent, 'NewFilled');

export default NewFilled;
