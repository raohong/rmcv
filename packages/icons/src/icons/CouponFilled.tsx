import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const CouponFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M56.889344 398.222336V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832V398.22336c-62.83776 0-113.77664 50.939904-113.77664 113.777664s50.93888 113.777664 113.77664 113.777664v170.667008c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V625.77664c62.83776 0 113.77664-50.939904 113.77664-113.777664s-50.93888-113.777664-113.77664-113.777664z m312.88832 0c-15.709184 0-28.444672 12.734464-28.444672 28.444672 0 15.70816 12.735488 28.443648 28.444672 28.443648H654.22336c15.709184 0 28.444672-12.734464 28.444672-28.443648 0-15.710208-12.735488-28.444672-28.444672-28.444672H369.77664z m0 170.667008c-15.709184 0-28.444672 12.734464-28.444672 28.443648 0 15.710208 12.735488 28.444672 28.444672 28.444672H654.22336c15.709184 0 28.444672-12.734464 28.444672-28.444672 0-15.70816-12.735488-28.443648-28.444672-28.443648H369.77664z" />
  </svg>
);

const CouponFilled = createIcon(CouponFilledSvgComponent, 'CouponFilled');

export default CouponFilled;
