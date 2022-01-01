import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const WeappNavFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 682.667008c-94.256128 0-170.667008-76.41088-170.667008-170.667008S417.743872 341.332992 512 341.332992 682.667008 417.743872 682.667008 512 606.256128 682.667008 512 682.667008z m398.222336-56.889344c-62.83776 0-113.777664-50.939904-113.777664-113.777664s50.939904-113.777664 113.77664-113.777664C973.06112 398.222336 1024 449.16224 1024 512s-50.939904 113.777664-113.777664 113.777664z m-796.444672 0C50.939904 625.777664 0 574.83776 0 512s50.939904-113.777664 113.777664-113.777664S227.555328 449.16224 227.555328 512s-50.939904 113.777664-113.77664 113.777664z" />
  </svg>
);

const WeappNavFilled = createIcon(WeappNavFilledSvgComponent, 'WeappNavFilled');

export default WeappNavFilled;
