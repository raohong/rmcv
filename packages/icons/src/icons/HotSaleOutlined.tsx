import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const HotSaleOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M739.555328 0c31.419392 0 56.889344 25.469952 56.889344 56.889344v910.221312c0 31.419392-25.469952 56.889344-56.889344 56.889344H284.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344V56.889344C227.555328 25.469952 253.02528 0 284.444672 0h455.110656z m0 56.889344H284.444672v910.221312h455.110656V56.889344z m-186.28608 645.12v55.636992c-0.683008 9.899008-2.048 19.456-4.093952 28.331008h107.776v33.792h-121.07776c-1.363968 2.048-2.38592 3.753984-3.40992 5.460992 42.632192 12.288 81.854464 26.964992 117.3248 43.691008l-20.1216 31.060992c-38.540288-21.163008-77.76256-37.888-118.007808-50.516992-24.55552 21.161984-64.801792 37.545984-120.735744 49.152l-19.098624-30.379008c56.615936-11.264 94.473216-24.916992 114.254848-41.300992l7.161856-7.168H369.09568v-33.792h77.76256c-20.123648-11.947008-40.587264-21.163008-61.391872-27.990016l16.71168-24.916992c25.238528 8.192 48.431104 18.432 69.576704 30.036992l-15.00672 22.870016H513.024c2.72896-9.216 4.774912-18.774016 5.797888-28.331008v-55.636992h34.44736z m-22.851584-118.784v23.209984h95.496192v32.086016h-95.496192v22.868992h119.370752v22.187008c-5.115904 23.209984-11.936768 46.08-20.463616 68.608l-33.42336-9.558016c6.81984-13.993984 12.618752-30.377984 17.734656-48.809984H372.847616v-32.427008h122.781696v-22.868992h-97.543168v-32.086016h97.543168v-23.209984h34.788352zM430.82752 697.571328c25.57952 6.827008 49.113088 15.702016 70.59968 25.942016l-17.73568 26.964992c-22.509568-11.947008-45.70112-21.504-69.57568-28.331008l16.71168-24.576z m-36.15232-333.254656l29.672448 14.336c-11.937792 26.281984-25.920512 48.809984-41.609216 67.584l-29.331456-21.504c15.688704-16.726016 29.672448-36.864 41.268224-60.416z m221.006848-5.803008c20.463616 25.259008 35.811328 47.104 46.72512 65.876992l-29.671424 20.822016c-11.255808-20.48-26.60352-43.350016-46.043136-68.608l28.98944-18.091008z m-135.400448 15.700992c6.820864 19.115008 12.618752 39.936 18.075648 62.123008l-35.811328 8.532992c-4.092928-24.233984-9.549824-45.396992-15.68768-63.828992l33.42336-6.827008z m70.59968-4.777984c9.5488 20.48 18.075648 42.324992 25.57952 66.217984l-35.47136 8.534016c-6.13888-25.6-13.98272-48.128-23.53152-67.584l33.42336-7.168z m6.820864-242.006016v40.96h69.576704v69.632c0 35.84 2.045952 60.416 6.81984 74.070016 2.048 6.144 3.75296 9.216 5.116928 9.216 1.70496 0 3.40992-5.12 4.774912-14.678016 1.024-9.216 1.70496-19.456 1.70496-30.377984l26.943488 13.312c-1.70496 30.036992-5.456896 49.492992-11.25376 58.368-4.093952 5.801984-8.86784 8.873984-15.007744 8.873984-12.959744-0.340992-23.532544-5.460992-31.7184-15.017984-14.665728-16.384-22.1696-51.2-22.1696-103.766016v-34.816h-34.787328c-0.681984 23.211008-3.40992 44.715008-8.185856 63.830016 13.983744 10.921984 27.285504 22.528 40.245248 35.497984l-20.1216 30.72c-10.914816-11.604992-21.828608-22.185984-32.7424-31.401984-11.254784 23.552-26.943488 43.008-46.72512 58.368l-26.261504-23.552c19.780608-14.678016 34.44736-33.792 44.337152-57.344-9.549824-7.168-19.098624-13.312-28.648448-18.774016l18.757632-27.988992c6.821888 4.096 13.642752 8.192 20.122624 12.288 2.387968-12.971008 3.751936-26.964992 4.43392-41.643008h-34.788352v-34.816h34.788352v-40.96h34.788352z m-116.642816 0.342016v38.912h37.516288v34.816h-37.516288v40.96l34.788352-10.24v34.132992c-11.595776 3.412992-23.192576 6.484992-34.788352 9.556992v46.422016c0 23.209984-10.913792 34.816-32.741376 34.816h-32.7424l-8.184832-34.134016c9.890816 1.366016 19.439616 2.390016 28.307456 2.390016 6.13888 0 9.549824-4.096 9.549824-11.947008v-29.012992c-15.00672 3.072-29.672448 6.144-44.679168 8.873984l-8.525824-33.108992a665.162752 665.162752 0 0 0 53.204992-9.216v-49.492992h-44.338176v-34.816h44.3392v-38.912h35.810304z" />
  </svg>
);

const HotSaleOutlined = createIcon(HotSaleOutlinedSvgComponent, 'HotSaleOutlined');

export default HotSaleOutlined;
