import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const YouzanShieldFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M593.242112 69.001216l316.9792 96.079872v408.7296c0 68.79232 0 250.4192-369.773568 393.299968C170.7008 824.229888 170.667008 642.603008 170.667008 573.811712v-408.7296l323.487744-97.51552c2.802688-0.843776 5.516288-1.8944 8.177664-2.981888 34.922496-14.2336 65.214464-5.24288 76.878848-0.577536 4.573184 1.828864 9.234432 3.54304 14.030848 4.994048zM341.332992 514.941952v193.738752c3.3792 6.89152 10.652672 10.84416 19.065856 9.438208l49.354752-8.22272v-216.63744c-22.331392 4.4544-54.697984 10.625024-54.697984 10.625024-5.888 1.129472-11.022336 5.51424-13.7216 11.058176zM431.104 706.340864l237.340672-39.53664c17.466368-2.904064 29.947904-19.972096 28.319744-38.152192 0 0-1.6384-6.4768-0.17408-15.639552 1.465344-9.161728 8.68864-14.198784 10.018816-33.398784 1.038336-14.855168-3.7376-16.85504-2.402304-32.73728 1.335296-15.875072 7.857152-18.433024 9.467904-39.062528 1.610752-20.640768-5.999616-25.694208-4.534272-39.933952 1.45408-14.2336 4.130816-22.329344 4.130816-22.329344 5.67296-24.25344-9.198592-41.535488-33.2032-38.607872l-79.094784 9.674752c-11.886592 1.446912-20.77184-7.35232-19.851264-19.678208l6.639616-89.064448c2.486272-33.381376-21.48352-56.281088-53.530624-51.15904l4.13696-0.662528c-12.089344 1.936384-23.061504 13.657088-24.706048 26.149888 0 0-18.482176 187.05408-82.557952 206.468096v217.669632z" />
  </svg>
);

const YouzanShieldFilled = createIcon(
  YouzanShieldFilledSvgComponent,
  'YouzanShieldFilled',
);

export default YouzanShieldFilled;
