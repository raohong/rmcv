import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const CartCircleFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336C292.068352 113.777664 113.777664 292.068352 113.777664 512c0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM284.444672 341.332992h480.948224c15.70816 0 28.443648 12.735488 28.443648 28.444672 0 2.958336-0.4608 5.89824-1.36704 8.71424l-54.92736 170.667008a28.444672 28.444672 0 0 1-27.077632 19.730432H284.444672V341.332992zM341.332992 739.555328m-28.444672 0a28.444672 28.444672 0 1 0 56.889344 0 28.444672 28.444672 0 1 0-56.889344 0ZM682.667008 739.555328m-28.444672 0a28.444672 28.444672 0 1 0 56.889344 0 28.444672 28.444672 0 1 0-56.889344 0ZM256.361472 341.34528c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h28.444672c31.419392 0 56.889344 25.469952 56.889344 56.889344v284.628992h369.536c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H341.695488c-31.419392 0-56.889344-25.469952-56.889344-56.889344V341.34528h-28.444672z" />
  </svg>
);

const CartCircleFilled = createIcon(CartCircleFilledSvgComponent, 'CartCircleFilled');

export default CartCircleFilled;
