import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const CalendarOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M170.667008 227.555328v625.777664h682.665984v-625.77664H170.667008z m540.443648-113.77664c15.710208 0 28.444672 12.734464 28.444672 28.443648v28.444672h113.777664c31.419392 0 56.889344 25.469952 56.889344 56.88832v625.777664c0 31.419392-25.469952 56.889344-56.889344 56.889344H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-625.77664c0-31.419392 25.469952-56.889344 56.889344-56.889344h113.77664v-28.444672c0-15.709184 12.735488-28.444672 28.445696-28.444672 15.70816 0 28.443648 12.735488 28.443648 28.444672v28.444672h341.334016v-28.444672c0-15.709184 12.734464-28.444672 28.443648-28.444672z m-85.776384 374.81984H403.468288V603.51488c-0.569344 48.355328-8.534016 88.17664-23.894016 119.465984l22.756352 20.48c19.910656-36.40832 30.150656-83.910656 30.72-142.222336v-85.332992H595.75296v189.44c0 6.257664-3.414016 9.67168-10.24 9.67168-10.809344 0-22.187008-0.569344-34.418688-1.42336l7.68 28.444672h35.556352c20.48 0 31.003648-8.81664 31.003648-26.16832V488.598528z m-51.76832 137.67168H452.108288v75.377664h121.45664v-75.377664z m-28.444672 24.747008v25.030656H480.55296v-25.030656h64.56832z m-16.212992-129.138688h-28.729344v18.204672h-48.070656v24.46336h48.070656v21.04832h-55.750656v25.6H584.0896v-25.6h-55.18336v-21.049344h46.649344v-24.462336h-46.64832v-18.204672z m324.424704-180.545536H170.667008v56.889344h682.665984v-56.889344z m-512-113.77664h-56.88832V256c0 15.709184 12.734464 28.444672 28.444672 28.444672 15.70816 0 28.443648-12.735488 28.443648-28.444672v-28.444672z m398.22336 0h-56.889344V256c0 15.709184 12.734464 28.444672 28.443648 28.444672 15.710208 0 28.444672-12.735488 28.444672-28.444672v-28.444672z' />
  </svg>
);

const CalendarOutlined = createIcon(
  CalendarOutlinedSvgComponent,
  'CalendarOutlined',
);

export default CalendarOutlined;
