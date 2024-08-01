import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const PointGiftOutlinedSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M745.027584 117.228544c33.325056 33.325056 15.314944 105.36448-40.225792 160.90624a240.377856 240.377856 0 0 1-6.5536 6.310912l155.0848-0.001024c31.419392 0 56.889344 25.469952 56.889344 56.88832v113.777664c0 31.105024-24.963072 56.379392-55.948288 56.882176l-0.941056 0.007168v341.332992c0 31.419392-25.469952 56.889344-56.88832 56.889344H227.555328c-31.418368 0-56.88832-25.469952-56.88832-56.889344V512c-31.419392 0-56.889344-25.469952-56.889344-56.889344v-113.77664c0-31.419392 25.469952-56.889344 56.889344-56.889344l192.452608 0.001024a240.376832 240.376832 0 0 1-6.5536-6.310912c-55.54176-55.54176-73.550848-127.581184-40.225792-160.90624 33.324032-33.325056 105.36448-15.314944 160.905216 40.226816 27.215872 27.214848 45.41952 58.391552 52.987904 87.033856l0.45056 1.75104c7.279616-29.119488 25.667584-61.014016 53.43744-88.784896 55.54176-55.54176 127.582208-73.551872 160.90624-40.226816zM483.555328 512l-256 0.001024v341.332992h256V511.997952z m312.889344 0.001024h-256v341.331968l256 0.001024V512zM483.555328 341.331968l-312.88832 0.001024v113.777664h312.88832V341.331968z m369.777664 0.001024H540.443648v113.777664h312.889344v-113.77664zM624.34816 197.6832c-36.214784 36.214784-45.86496 74.81344-40.226816 80.452608 5.639168 5.638144 44.237824-4.011008 80.453632-40.226816 36.215808-36.214784 45.86496-74.81344 40.226816-80.452608-5.639168-5.639168-44.237824 4.011008-80.453632 40.226816zM356.56704 157.45536c-5.638144 5.638144 4.011008 44.2368 40.226816 80.452608 36.215808 36.215808 74.81344 45.86496 80.452608 40.226816 5.639168-5.639168-4.011008-44.2368-40.225792-80.452608-36.215808-36.215808-74.814464-45.86496-80.453632-40.226816z' />
  </svg>
);

const PointGiftOutlined = createIcon(
  PointGiftOutlinedSvgComponent,
  'PointGiftOutlined',
);

export default PointGiftOutlined;
