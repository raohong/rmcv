import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const CompletedOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M796.444672 113.777664c31.418368 0 56.88832 25.469952 56.88832 56.889344v739.555328c0 31.105024-24.963072 56.378368-55.948288 56.881152l-0.940032 0.007168H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.88832V170.667008c0-31.419392 25.469952-56.889344 56.88832-56.889344V910.22336h568.889344V113.77664z m-68.49536 286.36672l1.646592-1.366016c0.93184-0.774144 2.845696-0.688128 3.457024-0.063488l6.110208 6.242304c0.62464 0.637952 0.570368 1.840128-0.644096 3.080192l-1.188864 1.215488c3.56352 4.994048 2.797568 11.922432-1.9456 16.657408L483.92192 677.00224c-4.424704 4.41856-10.45504 6.227968-16.31744 5.512192-3.085312 0.567296-6.52288-0.453632-9.106432-3.093504l-0.909312-0.92672a21.705728 21.705728 0 0 1-2.390016-2.06336L345.58464 566.97856c-2.09408-2.091008-3.448832-4.670464-3.987456-7.369728a3.06688 3.06688 0 0 1-0.228352-1.6896 13.082624 13.082624 0 0 1 2.823168-9.14432l10.244096-12.914688c4.1984-5.29408 12.053504-6.623232 17.605632-2.9184l88.665088 59.180032c4.676608 3.122176 12.726272 2.715648 17.092608-0.827392l234.2912-190.08c4.48512-3.638272 11.132928-3.914752 15.857664-1.07008z m-329.728-286.36672v56.889344H227.556352V113.77664H398.22336z m398.22336 0v56.889344H625.77664V113.77664h170.667008z m-369.777664 0c-15.710208 0-28.444672 12.735488-28.444672 28.444672s12.734464 28.444672 28.444672 28.444672h170.665984c15.710208 0 28.444672-12.735488 28.444672-28.444672s-12.734464-28.444672-28.444672-28.444672H426.667008z m0-56.88832h170.665984c47.128576 0 85.334016 38.20544 85.334016 85.332992 0 47.128576-38.20544 85.332992-85.334016 85.332992H426.667008c-47.128576 0-85.334016-38.20544-85.334016-85.332992 0-47.128576 38.20544-85.332992 85.334016-85.332992z' />
  </svg>
);

const CompletedOutlined = createIcon(
  CompletedOutlinedSvgComponent,
  'CompletedOutlined',
);

export default CompletedOutlined;
