import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const NewArrivalOutlinedSvgComponent: React.FC<IconComponentProps> = (
  props,
) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M739.555328 227.555328C896.65024 227.555328 1024 354.906112 1024 512c0 157.093888-127.34976 284.444672-284.444672 284.444672H0V227.555328h739.555328z m0 56.889344H56.889344v455.110656h682.665984c125.67552 0 227.555328-101.879808 227.555328-227.555328s-101.879808-227.555328-227.555328-227.555328zM298.667008 405.958656l29.012992 10.24a244.71552 244.71552 0 0 1-13.995008 34.134016h34.816v29.696h-63.145984v30.72h57.344v29.353984h-57.344v91.478016c0 20.48-11.264 30.72-33.792 30.72h-17.750016l-7.168-30.038016c5.12 1.366016 9.899008 2.048 14.336 2.048 8.192 0 12.288-3.412992 12.288-10.24v-83.968H192.512v-29.353984h60.756992v-30.72h-66.217984v-29.696H223.232c-4.436992-11.947008-9.556992-23.211008-15.36-33.451008l28.331008-10.580992c5.460992 12.288 10.921984 26.964992 15.700992 44.032h32.427008c5.460992-14.336 10.24-29.014016 14.336-44.374016z m176.809984-57.344l15.702016 28.672c-29.355008 10.24-61.782016 16.384-97.28 18.774016v55.296h105.472v31.060992h-32.768v178.859008h-31.744V482.41664h-40.96v34.475008C392.192 576.966656 378.88 624.75264 353.963008 660.59264l-22.870016-24.576c19.456-28.672 30.038016-68.267008 31.403008-119.124992v-147.456c41.984-0.683008 79.531008-7.851008 112.980992-20.822016z m190.806016 153.6v153.6H634.88v-16.384h-63.147008v16.384h-31.744v-153.6h126.294016z m159.060992 0v153.6h-32.427008v-16.384H727.04v16.384h-31.744v-153.6h130.048z m-612.352 52.907008l29.355008 6.144c-8.192 34.475008-19.456 64.512-34.475008 90.112l-26.624-17.067008c15.019008-24.576 25.6-51.2 31.744-79.188992z m106.836992-2.388992C328.704 574.57664 335.872 594.374656 340.992 612.124672l-27.307008 10.24c-5.460992-21.163008-12.288-41.984-20.48-62.464l26.624-7.168zM634.88 532.934656h-63.147008v76.118016H634.88v-76.118016z m158.036992 0H727.04v76.118016h65.876992v-76.118016z m-13.312-175.444992v119.124992H585.728V357.489664h193.876992z m-32.425984 30.72h-129.024v57.684992h129.024v-57.684992z m-476.502016-46.08c4.096 9.216 8.534016 19.456 12.630016 30.72h63.145984v30.036992H190.464v-30.036992h60.756992c-4.096-8.875008-8.873984-17.408-13.993984-25.259008l33.449984-5.460992z" />
  </svg>
);

const NewArrivalOutlined = createIcon(
  NewArrivalOutlinedSvgComponent,
  'NewArrivalOutlined',
);

export default NewArrivalOutlined;
