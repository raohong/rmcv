import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const CheckedFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512.45568 57.344c251.35104 0 455.11168 203.76064 455.11168 455.11168 0 251.35104-203.76064 455.11168-455.11168 455.11168C261.10464 967.56736 57.344 763.80672 57.344 512.45568 57.344 261.10464 261.10464 57.344 512.45568 57.344z m272.444416 288.876544c-5.842944-5.445632-16.21504-5.953536-22.995968-1.074176l-0.315392 0.232448-301.232128 228.097024c-5.515264 4.176896-15.601664 4.72064-21.655552 1.186816l-0.320512-0.193536-113.998848-71.015424c-7.031808-4.380672-16.93696-2.89792-22.390784 3.219456l-0.24576 0.2816-13.169664 15.497216c-5.553152 6.53312-4.62848 15.625216 1.519616 21.586944l0.27136 0.258048 140.93312 131.342336c10.247168 9.550848 26.529792 10.051584 36.615168 0.9728l0.313344-0.28672 323.310592-301.310976c6.679552-6.223872 7.225344-15.606784 1.036288-21.63712l-0.254976-0.241664-7.419904-6.915072z" />
  </svg>
);

const CheckedFilled = createIcon(CheckedFilledSvgComponent, 'CheckedFilled');

export default CheckedFilled;
