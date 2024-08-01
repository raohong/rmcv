import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const CouponOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M56.889344 440.889344v-14.22336 14.22336z m0 142.221312v14.22336-14.22336z m910.221312 0v14.22336-14.22336z m0-142.221312v-14.22336 14.22336z m0 0v14.221312c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344v227.555328c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V568.889344c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v227.555328H910.22336V227.555328H113.77664v227.555328H56.889344v-14.221312 14.221312c31.418368 0 56.88832 25.470976 56.88832 56.889344s-25.469952 56.889344-56.88832 56.889344v14.221312-14.221312h56.88832v227.555328H910.22336V568.889344h56.88832v14.221312-14.221312c-31.418368 0-56.88832-25.470976-56.88832-56.889344s25.469952-56.889344 56.88832-56.889344v-14.221312z m-597.332992-42.667008H654.22336c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H369.77664c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672z m0 170.667008H654.22336c15.709184 0 28.444672 12.734464 28.444672 28.443648 0 15.710208-12.735488 28.444672-28.444672 28.444672H369.77664c-15.709184 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.735488-28.443648 28.444672-28.443648zM56.889344 398.222336c62.83776 0 113.77664 50.939904 113.77664 113.777664s-50.93888 113.777664-113.77664 113.777664v-56.88832c31.418368 0 56.88832-25.470976 56.88832-56.889344s-25.469952-56.889344-56.88832-56.889344V398.22336z m910.221312 0v56.88832c-31.418368 0-56.88832 25.470976-56.88832 56.889344s25.469952 56.889344 56.88832 56.889344v56.88832c-62.83776 0-113.77664-50.939904-113.77664-113.777664s50.93888-113.777664 113.77664-113.777664z' />
  </svg>
);

const CouponOutlined = createIcon(CouponOutlinedSvgComponent, 'CouponOutlined');

export default CouponOutlined;
