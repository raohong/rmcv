import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const MedalOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M457.13408 288.830464a343.783424 343.783424 0 0 1 54.86592-4.385792c14.949376 0 29.673472 0.960512 44.114944 2.824192 4.286464 0.519168 8.544256 1.115136 12.7744 1.788928V113.777664h56.88832v189.621248a318.503936 318.503936 0 0 1 39.936 17.17248l73.841664-110.30016V113.77664H284.444672v96.644096l73.1136 110.368768a328.276992 328.276992 0 0 1 40.66304-17.329152V113.777664h56.889344v175.371264c0.673792-0.10752 1.347584-0.214016 2.0224-0.31744z m256.91136 61.807616c84.46976 62.134272 139.287552 162.235392 139.287552 275.139584 0 188.51328-152.819712 341.332992-341.332992 341.332992-188.51328 0-341.332992-152.819712-341.332992-341.332992 0-112.64512 54.565888-212.54656 138.707968-274.711552L237.018112 241.83808a56.889344 56.889344 0 0 1-9.46176-31.417344v-96.644096c0-31.418368 25.468928-56.88832 56.88832-56.88832h455.110656c31.419392 0 56.889344 25.469952 56.889344 56.88832v96.493568a56.889344 56.889344 0 0 1-9.61536 31.647744l-72.784896 108.71808z m-31.68768 47.331328l-0.169984 0.252928a284.237824 284.237824 0 0 0-17.338368-12.374016c-34.506752-22.028288-74.083328-36.81792-116.588544-42.225664-11.69408-1.37216-23.66464-2.05824-35.91168-2.05824-15.492096 0-30.57664 1.097728-45.252608 3.293184C331.337728 366.3872 227.555328 483.96288 227.555328 625.777664c0 157.094912 127.350784 284.444672 284.444672 284.444672 157.093888 0 284.444672-127.34976 284.444672-284.444672 0-93.198336-44.822528-175.92832-114.086912-227.808256zM512 545.325056l-80.452608 80.452608L512 706.23232l80.452608-80.453632L512 545.325056z m40.226816-40.226816l80.452608 80.452608c22.216704 22.216704 22.216704 58.236928 0 80.453632l-80.452608 80.452608c-22.216704 22.216704-58.236928 22.216704-80.453632 0l-80.452608-80.452608c-22.216704-22.216704-22.216704-58.236928 0-80.453632l80.452608-80.452608c22.216704-22.216704 58.236928-22.216704 80.453632 0z" />
  </svg>
);

const MedalOutlined = createIcon(MedalOutlinedSvgComponent, 'MedalOutlined');

export default MedalOutlined;
