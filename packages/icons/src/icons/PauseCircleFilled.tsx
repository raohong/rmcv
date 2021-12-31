import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const PauseCircleFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 967.110656C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z m-92.444672-625.77664c-19.636224 0-35.555328 15.91808-35.555328 35.555328v270.221312c0 19.637248 15.919104 35.556352 35.555328 35.556352 19.637248 0 35.555328-15.919104 35.555328-35.556352V376.889344c0-19.637248-15.91808-35.556352-35.555328-35.556352z m184.889344 0c-19.637248 0-35.555328 15.91808-35.555328 35.555328v270.221312c0 19.637248 15.91808 35.556352 35.555328 35.556352 19.636224 0 35.555328-15.919104 35.555328-35.556352V376.889344c0-19.637248-15.919104-35.556352-35.555328-35.556352z" />
  </svg>
);

const PauseCircleFilled = createIcon(
  PauseCircleFilledSvgComponent,
  'PauseCircleFilled',
);

export default PauseCircleFilled;
