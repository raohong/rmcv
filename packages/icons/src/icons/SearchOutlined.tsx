import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const SearchOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M412.45184 670.512128c141.384704 0 256-114.615296 256-256s-114.615296-256-256-256-256 114.615296-256 256 114.615296 256 256 256z m241.847296-57.46688l255.670272 255.670272c11.108352 11.108352 11.108352 29.118464 0 40.226816-11.107328 11.108352-29.11744 11.108352-40.225792 0L614.352896 653.551616c-54.493184 46.072832-124.9536 73.849856-201.901056 73.849856-172.803072 0-312.88832-140.085248-312.88832-312.889344S239.648768 101.623808 412.45184 101.623808c172.804096 0 312.889344 140.084224 312.889344 312.88832 0 75.37152-26.650624 144.519168-71.042048 198.53312z" />
  </svg>
);

const SearchOutlined = createIcon(SearchOutlinedSvgComponent, 'SearchOutlined');

export default SearchOutlined;
