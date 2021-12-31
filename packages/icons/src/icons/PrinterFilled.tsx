import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const PrinterFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M853.332992 796.444672V625.77664H170.667008v170.667008H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.889344V398.22336c0-31.419392 25.469952-56.889344 56.88832-56.889344H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.889344v341.332992c0 31.419392-25.469952 56.889344-56.88832 56.889344h-56.889344zM227.556352 113.77664h568.88832c31.418368 0 56.88832 25.469952 56.88832 56.889344v113.77664H170.667008v-113.77664c0-31.419392 25.469952-56.889344 56.88832-56.889344zM839.109632 512c23.564288 0 42.667008-19.10272 42.667008-42.667008s-19.10272-42.665984-42.667008-42.665984c-23.563264 0-42.665984 19.101696-42.665984 42.665984 0 23.564288 19.10272 42.667008 42.665984 42.667008zM227.555328 682.667008h568.889344v170.665984c0 31.419392-25.469952 56.889344-56.889344 56.889344H284.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344V682.667008z" />
  </svg>
);

const PrinterFilled = createIcon(PrinterFilledSvgComponent, 'PrinterFilled');

export default PrinterFilled;
