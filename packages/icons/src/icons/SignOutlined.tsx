import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const SignOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M170.667008 284.444672v568.88832h682.665984V284.444672H170.667008z m-56.889344-56.889344H910.22336v625.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-625.77664z m704.396288-113.77664a56.889344 56.889344 0 0 1 50.88256 31.44704l41.1648 82.3296h-63.602688l-28.444672-56.88832H205.826048l-28.444672 56.88832h-63.603712l41.1648-82.3296a56.889344 56.889344 0 0 1 50.88256-31.44704z m-88.578048 284.99968c0.93184-0.774144 2.845696-0.688128 3.457024-0.063488l6.110208 6.242304c0.62464 0.637952 0.570368 1.840128-0.644096 3.080192l-1.188864 1.215488c3.56352 4.994048 2.797568 11.922432-1.9456 16.657408L483.92192 677.00224c-4.42368 4.417536-10.45504 6.227968-16.315392 5.513216-3.085312 0.567296-6.523904-0.453632-9.10848-3.094528l-0.905216-0.923648a21.705728 21.705728 0 0 1-2.394112-2.066432L345.58464 566.97856c-2.093056-2.091008-3.447808-4.66944-3.986432-7.36768a3.072 3.072 0 0 1-0.229376-1.691648 13.082624 13.082624 0 0 1 2.823168-9.14432l10.244096-12.914688c4.1984-5.29408 12.053504-6.623232 17.605632-2.9184l88.665088 59.180032c4.676608 3.122176 12.726272 2.715648 17.092608-0.827392l234.2912-190.08c4.48512-3.638272 11.132928-3.914752 15.857664-1.07008z" />
  </svg>
);

const SignOutlined = createIcon(SignOutlinedSvgComponent, 'SignOutlined');

export default SignOutlined;
