import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const LocationFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 57.401344c94.11584 0 179.32288 37.305344 241.001472 97.62304 61.673472 60.3136 99.81952 143.634432 99.81952 235.669504 0 168.09984-100.16768 354.695168-300.411904 559.812608-0.335872 0.344064-0.67584 0.684032-1.021952 1.019904-11.15648 10.857472-25.657344 16.164864-40.083456 15.96928-14.427136-0.196608-28.778496-5.896192-39.635968-17.052672-200.2944-205.810688-300.488704-392.385536-300.488704-559.74912 0-92.035072 38.146048-175.356928 99.81952-235.669504C332.67712 94.706688 417.88416 57.401344 512 57.401344z m0 226.531328c-31.55968 0-60.132352 12.791808-80.815104 33.47456-20.682752 20.682752-33.47456 49.2544-33.47456 80.81408 0 31.560704 12.791808 60.133376 33.47456 80.816128 20.682752 20.682752 49.2544 33.47456 80.815104 33.47456 31.55968 0 60.132352-12.791808 80.815104-33.47456 20.682752-20.682752 33.47456-49.2544 33.47456-80.815104 0-31.55968-12.791808-60.132352-33.47456-80.815104-20.682752-20.682752-49.2544-33.47456-80.815104-33.47456z" />
  </svg>
);

const LocationFilled = createIcon(LocationFilledSvgComponent, 'LocationFilled');

export default LocationFilled;
