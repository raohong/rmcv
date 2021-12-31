import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const ServiceFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M227.555328 455.110656c31.419392 0 56.889344 25.470976 56.889344 56.889344v227.555328c0 31.419392-25.469952 56.889344-56.889344 56.889344h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V455.110656h113.777664z m682.667008 0v284.444672c0 31.419392-25.469952 56.889344-56.889344 56.889344h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V512c0-31.418368 25.469952-56.889344 56.889344-56.889344h113.77664zM881.77664 654.22336c15.710208 0 28.444672 12.735488 28.444672 28.444672v104.46336c-0.841728 116.01408-55.412736 180.272128-157.559808 180.272128H540.68224c-15.70816 0-28.443648-12.734464-28.443648-28.444672 0-15.70816 12.734464-28.443648 28.443648-28.443648h211.981312c68.537344 0 100.042752-37.098496 100.66944-123.589632l0.001024-104.25856c0-15.70816 12.735488-28.443648 28.444672-28.443648zM512 56.889344c219.931648 0 398.222336 178.289664 398.222336 398.221312h-56.889344c0-188.512256-152.819712-341.332992-341.332992-341.332992-188.51328 0-341.332992 152.820736-341.332992 341.332992H113.77664c0-219.931648 178.290688-398.221312 398.222336-398.221312z" />
  </svg>
);

const ServiceFilled = createIcon(ServiceFilledSvgComponent, 'ServiceFilled');

export default ServiceFilled;
