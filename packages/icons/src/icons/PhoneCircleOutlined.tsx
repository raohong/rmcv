import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const PhoneCircleOutlinedSvgComponent: React.FC<IconComponentProps> = (
  props,
) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656zM434.828288 395.219968c-6.02112-11.40736-14.3872-24.936448-23.446528-37.878784-8.951808-12.78976-18.326528-24.713216-26.944512-33.650688-8.143872-8.445952-12.020736-10.801152-11.614208-10.801152-4.61824 0-21.459968 15.425536-33.491968 31.466496-15.03744 20.052992-26.441728 43.237376-26.441728 60.583936 0 18.250752 12.270592 47.373312 31.744 78.977024 20.845568 33.82784 49.95072 70.610944 81.503232 102.99392l10.69056 10.693632c32.64512 31.811584 69.4272 60.91776 103.256064 81.762304 31.587328 19.469312 60.7232 31.744 78.973952 31.744 17.35168 0 40.542208-11.406336 60.58496-26.43968 16.043008-12.034048 31.468544-28.874752 31.468544-33.49504 0 0.407552-2.3552-3.468288-10.797056-11.609088-8.941568-8.62208-20.865024-17.995776-33.652736-26.947584-12.954624-9.066496-26.48064-17.429504-37.876736-23.44448-13.014016-6.867968-18.501632-8.6016-20.371456-8.63744 0.34816 0.00512 0.279552 0.125952-1.470464 2.6624-2.316288 3.354624-4.27008 7.350272-8.475648 17.083392-1.385472 3.202048-1.385472 3.202048-3.178496 7.18848-0.915456 1.979392-0.915456 1.979392-1.908736 4.031488-2.308096 4.698112-4.352 8.275968-6.995968 11.593728l-11.234304 14.094336-17.542144-4.140032c-10.391552-2.45248-25.37984-10.1376-44.027904-22.838272-18.898944-12.872704-39.202816-29.376512-55.277568-45.04576-15.13984-15.545344-31.643648-35.85024-44.514304-54.74816-12.6976-18.640896-20.383744-33.632256-22.837248-44.024832l-4.143104-17.54624 14.099456-11.235328c3.31776-2.644992 6.89664-4.688896 11.598848-6.998016 2.045952-0.990208 2.045952-0.990208 4.020224-1.902592 3.991552-1.794048 3.991552-1.794048 7.202816-3.183616 9.734144-4.20864 13.723648-6.15936 17.08544-8.47872 2.516992-1.73568 2.640896-1.80736 2.646016-1.46432-0.034816-1.872896-1.7664-7.356416-8.631296-20.365312z m-37.9648 242.870272l-11.2128-11.214848c-34.639872-35.549184-66.335744-75.606016-89.449472-113.114112C271.497216 473.668608 256 436.8896 256 404.939776c0-33.15712 15.906816-65.49504 37.819392-94.716928C317.652992 278.448128 342.160384 256 372.82304 256c18.782208 0 34.697216 9.672704 52.56704 28.203008 11.044864 11.455488 22.089728 25.503744 32.596992 40.51456 10.364928 14.80704 19.968 30.338048 27.153408 43.95008 10.889216 20.634624 15.208448 34.553856 15.208448 46.98112 0 19.661824-10.067968 36.38784-27.234304 48.2304-5.082112 3.505152-9.515008 6.00064-15.956992 9.024512a282.857472 282.857472 0 0 0 3.647488 5.48864c11.037696 16.206848 25.452544 33.942528 37.720064 46.55104 13.13792 12.796928 30.874624 27.213824 47.0784 38.25152 1.91488 1.302528 3.74784 2.51904 5.489664 3.647488 3.023872-6.443008 5.525504-10.883072 9.03168-15.960064 11.84256-17.164288 28.56448-27.234304 48.2304-27.234304 12.422144 0 26.343424 4.323328 46.98112 15.214592 13.59872 7.176192 29.125632 16.77824 43.945984 27.150336 15.01184 10.507264 29.059072 21.553152 40.518656 32.601088 18.526208 17.865728 28.198912 33.78176 28.198912 52.56192 0 30.66368-22.448128 55.171072-54.222848 79.003648-29.206528 21.90848-61.555712 37.820416-94.72 37.820416-31.9488 0-68.747264-15.50336-108.82048-40.20224-37.507072-23.112704-77.56288-54.8096-113.373184-89.70752z" />
  </svg>
);

const PhoneCircleOutlined = createIcon(
  PhoneCircleOutlinedSvgComponent,
  'PhoneCircleOutlined',
);

export default PhoneCircleOutlined;
