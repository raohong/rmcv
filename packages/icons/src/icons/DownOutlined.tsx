import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const DownOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M511.654912 57.344c24.096768 0 43.630592 19.533824 43.630592 43.630592V824.6272l216.389632-216.389632c16.869376-16.868352 44.11392-17.037312 61.18912-0.505856l0.515072 0.505856c16.868352 16.868352 17.037312 44.11392 0.505856 61.18912l-0.505856 0.514048L552.79104 950.528c-22.49216 22.49216-58.81856 22.716416-81.586176 0.67584l-0.68608-0.67584L189.93152 669.939712c-17.03936-17.03936-17.03936-44.663808 0-61.703168 16.868352-16.868352 44.112896-17.037312 61.18912-0.505856l0.514048 0.505856 216.388608 216.388608V100.974592c0-24.096768 19.534848-43.630592 43.63264-43.630592z" />
  </svg>
);

const DownOutlined = createIcon(DownOutlinedSvgComponent, 'DownOutlined');

export default DownOutlined;
