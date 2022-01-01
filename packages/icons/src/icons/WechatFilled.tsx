import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const WechatFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M693.98016 383.3344c144.723968 0 273.5872 104.680448 273.5872 233.212928 0 71.698432-47.241216 135.281664-110.824448 183.67488l-1.931264 1.461248 24.286208 80.20992-88.346624-48.19968-9.21088 2.258944c-29.184 7.129088-58.524672 13.806592-87.560192 13.806592-153.273344 0-273.958912-104.556544-273.958912-233.211904 0-128.4096 120.685568-233.212928 273.958912-233.212928zM379.502592 142.336c158.354432 0 297.129984 96.152576 325.133312 225.550336-10.160128-1.113088-20.44416-1.85344-30.976-1.85344-153.02656 0-273.959936 113.948672-273.959936 254.345216 0 23.35744 3.59424 45.851648 9.91232 67.355648-9.91232 0.7424-19.948544 1.235968-30.109696 1.235968-39.067648 0-70.67136-7.676928-109.293568-15.357952l-3.585024-0.708608-112.631808 56.356864 32.21504-96.646144C105.667584 576.256 57.344 503.8336 57.344 415.5904 57.344 262.711296 202.43968 142.336 379.502592 142.336z m229.60128 365.576192c-20.197376 0-36.552704 16.313344-36.552704 36.458496 0 20.145152 16.355328 36.45952 36.552704 36.45952 20.196352 0 36.552704-16.314368 36.552704-36.45952 0-20.145152-16.356352-36.458496-36.552704-36.458496z m177.31072-0.246784c-20.196352 0-36.552704 16.313344-36.552704 36.458496 0 20.145152 16.356352 36.458496 36.552704 36.458496 20.197376 0 36.552704-16.313344 36.552704-36.458496 0-20.145152-16.355328-36.458496-36.552704-36.458496z m-515.206144-232.09984c-24.162304 0-43.74016 19.526656-43.74016 43.626496s19.577856 43.626496 43.74016 43.626496c24.285184 0 43.86304-19.65056 43.74016-43.626496 0-24.09984-19.57888-43.62752-43.74016-43.62752z m225.015808 0c-24.162304 0-43.74016 19.526656-43.74016 43.626496s19.577856 43.626496 43.74016 43.626496c24.16128 0 43.86304-19.65056 43.74016-43.626496 0-24.09984-19.57888-43.62752-43.74016-43.62752z" />
  </svg>
);

const WechatFilled = createIcon(WechatFilledSvgComponent, 'WechatFilled');

export default WechatFilled;
