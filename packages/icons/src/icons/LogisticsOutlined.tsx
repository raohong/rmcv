import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const LogisticsOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M646.280192 113.777664c54.235136 0 100.931584 38.28224 111.567872 91.46368l38.596608 192.980992 131.76832 43.922432c23.22944 7.743488 38.897664 29.483008 38.897664 53.96992v300.32896c0 31.419392-25.469952 56.889344-56.88832 56.889344H682.667008v-56.88832h227.555328V496.114688l-163.08736-54.363136-45.070336-225.352704c-5.318656-26.591232-28.66688-45.73184-55.784448-45.73184H170.667008V113.77664h475.613184zM455.110656 512c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H113.777664c-15.709184 0-28.444672-12.735488-28.444672-28.444672S98.06848 512 113.777664 512h341.332992z m0-170.667008c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672H113.777664c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672h341.332992z m-284.914688-170.67008c-15.49312-0.25088-27.973632-12.888064-27.973632-28.440576 0-15.709184 12.734464-28.444672 28.444672-28.444672h475.613184c54.235136 0 100.931584 38.28224 111.567872 91.46368l38.596608 192.980992 131.76832 43.922432c23.22944 7.743488 38.897664 29.483008 38.897664 53.96992v300.32896c0 31.419392-25.469952 56.889344-56.88832 56.889344H682.667008v-56.88832h227.555328V496.114688l-163.08736-54.363136-45.070336-225.352704c-5.318656-26.591232-28.66688-45.73184-55.784448-45.73184H170.667008zM625.777664 881.777664c31.419392 0 56.889344-25.469952 56.889344-56.88832 0-31.419392-25.469952-56.889344-56.889344-56.889344-31.418368 0-56.88832 25.469952-56.88832 56.889344 0 31.418368 25.469952 56.88832 56.88832 56.88832z m0 56.889344C562.939904 938.667008 512 887.72608 512 824.889344s50.939904-113.778688 113.777664-113.778688 113.777664 50.940928 113.777664 113.778688c0 62.83776-50.939904 113.77664-113.77664 113.77664zM227.555328 881.777664c31.419392 0 56.889344-25.469952 56.889344-56.88832 0-31.419392-25.469952-56.889344-56.889344-56.889344-31.418368 0-56.88832 25.469952-56.88832 56.889344 0 31.418368 25.469952 56.88832 56.88832 56.88832z m0 56.889344c-62.83776 0-113.77664-50.939904-113.77664-113.777664s50.93888-113.778688 113.77664-113.778688 113.777664 50.940928 113.777664 113.778688c0 62.83776-50.939904 113.77664-113.77664 113.77664zM284.444672 853.332992v-56.88832h284.444672v56.88832z' />
  </svg>
);

const LogisticsOutlined = createIcon(
  LogisticsOutlinedSvgComponent,
  'LogisticsOutlined',
);

export default LogisticsOutlined;
