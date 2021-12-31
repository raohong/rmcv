import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style';

const OrdersOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M796.788736 57.344c31.419392 0 56.889344 25.469952 56.889344 56.889344v796.447744c0 31.419392-25.469952 56.889344-56.889344 56.889344H227.897344c-31.419392 0-56.889344-25.469952-56.889344-56.889344V114.234368C171.008 82.813952 196.477952 57.344 227.897344 57.344h568.891392z m0 56.889344H227.897344v796.447744h568.891392V114.234368zM540.787712 683.124736c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H370.11968c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h170.668032z m113.778688-170.667008c15.70816 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.444672-28.444672 28.444672h-284.44672c-15.70816 0-28.443648-12.735488-28.443648-28.444672 0-15.710208 12.734464-28.444672 28.443648-28.444672h284.44672z m0-170.668032c15.70816 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672h-284.44672c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h284.44672z" />
  </svg>
);

const OrdersOutlined = createIcon(OrdersOutlinedSvgComponent, 'OrdersOutlined');

export default OrdersOutlined;
