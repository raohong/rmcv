import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const GiftCardFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M597.584896 547.371008c33.709056-7.035904 60.38016-17.668096 74.446848-30.9248 42.267648-39.8336 42.267648-106.3424 0.60416-148.004864-20.072448-20.073472-46.845952-31.17056-75.23328-31.17056-20.476928 0-40.107008 5.77024-56.957952 16.4864v-183.0912h-56.889344V353.23904c-16.6656-10.38336-35.989504-15.96928-56.134656-15.96928-28.387328 0-55.159808 11.098112-75.23328 31.17056-41.662464 41.663488-41.662464 108.173312 0.60416 148.005888 13.986816 13.179904 40.43264 23.76704 73.867264 30.802944l-73.665536 36.83328c-14.050304 7.02464-19.745792 24.111104-12.720128 38.162432 7.02464 14.050304 24.111104 19.745792 38.161408 12.720128l105.120768-52.559872v270.927872h56.889344V582.40512l105.120768 52.559872c14.050304 7.025664 31.136768 1.3312 38.161408-12.720128 7.025664-14.051328 1.3312-31.136768-12.720128-38.162432l-73.421824-36.7104zM113.77664 170.667008H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832z m448.61952 238.000128c9.41056-9.41056 21.706752-14.508032 35.00544-14.508032 13.294592 0 25.598976 5.09952 35.007488 14.508032 19.244032 19.245056 19.244032 48.812032 0.60416 66.378752-9.275392 8.741888-45.272064 18.622464-90.056704 22.8608 3.59424-44.246016 11.69408-81.560576 19.439616-89.239552z m-99.971072 0c7.745536 7.68 15.845376 44.99456 19.44064 89.239552-44.78464-4.238336-80.781312-14.118912-90.057728-22.8608-18.639872-17.56672-18.639872-47.13472 0.60416-66.378752 9.408512-9.408512 21.712896-14.508032 35.007488-14.508032 13.298688 0 25.593856 5.097472 35.00544 14.508032z" />
  </svg>
);

const GiftCardFilled = createIcon(GiftCardFilledSvgComponent, 'GiftCardFilled');

export default GiftCardFilled;
