import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const RefundOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M568.889344 113.777664c219.931648 0 398.221312 178.290688 398.221312 398.222336 0 219.931648-178.289664 398.222336-398.221312 398.222336-219.932672 0-398.22336-178.290688-398.22336-398.222336 0-219.931648 178.290688-398.222336 398.22336-398.222336z m0 56.889344c-188.51328 0-341.334016 152.819712-341.334016 341.332992 0 188.51328 152.820736 341.332992 341.334016 341.332992 188.512256 0 341.332992-152.819712 341.332992-341.332992 0-188.51328-152.820736-341.332992-341.332992-341.332992z m124.188672 128c13.604864 7.85408 18.266112 25.250816 10.411008 38.85568l-47.45216 82.190336h62.343168c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H604.60032v56.88832h113.778688c15.709184 0 28.444672 12.735488 28.444672 28.444672s-12.735488 28.444672-28.444672 28.444672H604.60032v113.777664c0 15.709184-12.734464 28.444672-28.443648 28.444672-15.709184 0-28.444672-12.735488-28.444672-28.444672V590.380032h-113.77664c-15.710208 0-28.445696-12.735488-28.445696-28.444672s12.735488-28.444672 28.444672-28.444672h113.77664v-56.88832h-113.77664c-15.709184 0-28.444672-12.735488-28.444672-28.444672s12.735488-28.444672 28.444672-28.444672h40.182784l-47.45216-82.190336c-7.775232-13.468672-3.284992-30.65344 10.006528-38.617088l0.405504-0.238592c13.468672-7.776256 30.65344-3.286016 38.617088 10.005504l0.238592 0.405504 63.875072 110.635008h50.537472l63.876096-110.635008c7.85408-13.604864 25.25184-18.266112 38.85568-10.411008z m-513.421312-39.69536c14.068736 6.991872 19.805184 24.064 12.814336 38.131712-32.897024 66.195456-50.248704 139.277312-50.248704 214.89664 0 55.604224 9.375744 109.887488 27.507712 161.18784 5.234688 14.811136-2.528256 31.062016-17.339392 36.297728-8.810496 3.11296-18.130944 1.62816-25.33888-3.204096a28.391424 28.391424 0 0 1-7.661568-7.018496l-87.465984-115.93728c-9.460736-12.540928-6.9632-30.377984 5.576704-39.83872 12.540928-9.46176 30.37696-6.964224 39.83872 5.576704l10.350592 13.7216A546.88768 546.88768 0 0 1 85.332992 512c0-84.453376 19.408896-166.1952 56.193024-240.214016 6.990848-14.068736 24.064-19.805184 38.130688-12.814336z" />
  </svg>
);

const RefundOutlined = createIcon(RefundOutlinedSvgComponent, 'RefundOutlined');

export default RefundOutlined;
