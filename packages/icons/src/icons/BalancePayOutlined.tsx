import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const BalancePayOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M770.332672 113.777664c12.572672 0 24.064 8.419328 27.420672 21.105664l38.4 143.190016h23.09632c28.16 0 50.972672 22.811648 50.972672 50.971648V852.87936c0 28.16-22.812672 50.972672-50.972672 50.972672H164.75136c-28.16 0-50.972672-22.812672-50.972672-50.972672V329.044992c0-25.486336 19.001344-45.62432 43.406336-49.492992l157.297664-157.297664c4.209664-4.209664 9.614336-6.257664 15.132672-6.257664 5.460992 0 10.865664 2.048 15.075328 6.25664 0.171008 0.228352 0.113664 0.512 0.227328 0.684032 0.228352 0.169984 0.569344 0.11264 0.740352 0.283648l81.52064 81.521664 335.75936-89.997312c2.445312-0.626688 4.948992-0.96768 7.395328-0.96768z m83.00032 221.184H170.667008v512h682.665984v-512zM750.251008 177.094656l-376.945664 100.978688h403.968l-27.02336-100.978688z m-420.636672-9.556992l-86.641664 86.528 136.590336-36.523008-49.948672-50.004992z m241.72032 284.478464a28.5696 28.5696 0 0 0-20.137984 8.305664L512 499.575808l-39.196672-39.254016a28.5696 28.5696 0 0 0-20.137984-8.30464c-7.282688 0-14.564352 2.786304-20.082688 8.30464-11.149312 11.15136-11.149312 29.12768 0 40.278016l30.15168 30.208h-21.844992c-15.702016 0-28.444672 12.686336-28.444672 28.443648 0 15.644672 12.742656 28.444672 28.444672 28.444672h42.665984V616.1408h-42.665984c-15.702016 0-28.444672 12.686336-28.444672 28.444672 0 15.644672 12.742656 28.444672 28.444672 28.444672h42.665984v28.443648c0 15.644672 12.74368 28.444672 28.444672 28.444672 15.700992 0 28.444672-12.8 28.444672-28.444672v-28.443648h42.665984c15.702016 0 28.444672-12.8 28.444672-28.444672 0-15.75936-12.742656-28.444672-28.444672-28.444672h-42.665984v-28.444672h42.665984c15.702016 0 28.444672-12.8 28.444672-28.444672 0-15.757312-12.742656-28.443648-28.444672-28.443648h-21.844992l30.208-30.208c11.092992-11.15136 11.092992-29.12768 0-40.278016a28.5696 28.5696 0 0 0-20.139008-8.30464" />
  </svg>
);

const BalancePayOutlined = createIcon(
  BalancePayOutlinedSvgComponent,
  'BalancePayOutlined',
);

export default BalancePayOutlined;
