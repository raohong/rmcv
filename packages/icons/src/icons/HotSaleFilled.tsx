import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const HotSaleFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M739.555328 0c31.419392 0 56.889344 25.469952 56.889344 56.889344v910.221312c0 31.419392-25.469952 56.889344-56.889344 56.889344H284.444672c-31.419392 0-56.889344-25.469952-56.889344-56.889344V56.889344C227.555328 25.469952 253.02528 0 284.444672 0h455.110656z m-186.28608 702.009344h-34.44736v55.636992c-1.024 9.556992-3.069952 19.115008-5.798912 28.331008h-56.274944l15.00672-22.870016c-21.1456-11.604992-44.338176-21.844992-69.576704-30.036992l-16.71168 24.916992c20.804608 6.827008 41.268224 16.043008 61.390848 27.990016h-77.761536v33.792h124.145664l-7.161856 7.168c-19.781632 16.384-57.638912 30.036992-114.254848 41.300992l19.098624 30.379008c55.933952-11.606016 96.1792-27.990016 120.735744-49.152 40.245248 12.628992 79.46752 29.353984 118.006784 50.516992l20.122624-31.060992c-35.470336-16.726016-74.692608-31.403008-117.3248-43.691008 1.024-1.707008 2.045952-3.412992 3.40992-5.460992h121.07776v-33.792h-107.776c2.046976-8.875008 3.410944-18.432 4.092928-28.331008v-55.636992z m-22.851584-118.784h-34.788352v23.209984h-97.543168v32.086016h97.543168v22.868992H372.847616v32.427008h240.78848c-5.115904 18.432-10.913792 34.816-17.73568 48.809984l33.424384 9.558016c8.526848-22.528 15.347712-45.398016 20.463616-68.608v-22.187008H530.417664v-22.868992h95.496192v-32.086016h-95.496192v-23.209984zM430.82752 697.571328l-16.71168 24.576c23.873536 6.827008 47.066112 16.384 69.57568 28.331008l17.73568-26.964992c-21.486592-10.24-45.02016-19.115008-70.59968-25.942016z m-36.15232-333.254656c-11.595776 23.552-25.57952 43.689984-41.268224 60.416l29.331456 21.504c15.68768-18.774016 29.671424-41.302016 41.609216-67.584z m221.006848-5.803008l-28.98944 18.091008c19.439616 25.257984 34.787328 48.128 46.043136 68.608l29.671424-20.822016c-10.913792-18.772992-26.261504-40.617984-46.72512-65.876992z m-135.400448 15.700992l-33.42336 6.827008c6.137856 18.432 11.594752 39.595008 15.68768 63.828992l35.811328-8.532992c-5.456896-22.187008-11.25376-43.008-18.075648-62.123008z m70.59968-4.777984l-33.42336 7.168c9.5488 19.456 17.39264 41.984 23.53152 67.584l35.47136-8.534016c-7.503872-23.892992-16.03072-45.737984-25.57952-66.217984z m6.820864-242.006016h-34.788352v40.96h-34.788352v34.816h34.788352c-0.681984 14.678016-2.045952 28.672-4.43392 41.643008-6.479872-4.096-13.30176-8.192-20.1216-12.288l-18.75968 27.988992c9.550848 5.462016 19.099648 11.606016 28.649472 18.774016-9.890816 23.552-24.55552 42.665984-44.337152 57.344l26.261504 23.552c19.781632-15.36 35.470336-34.816 46.72512-58.368 10.913792 9.216 21.827584 19.796992 32.741376 31.401984l20.122624-30.72c-12.959744-12.969984-26.261504-24.576-40.245248-35.497984 4.774912-19.115008 7.503872-40.619008 8.185856-63.830016h34.788352v34.816c0 52.566016 7.502848 87.382016 22.1696 103.766016 8.184832 9.556992 18.757632 14.676992 31.717376 15.017984 6.139904 0 10.913792-3.072 15.00672-8.873984 5.797888-8.875008 9.549824-28.331008 11.254784-58.368l-26.943488-13.312c0 10.921984-0.681984 21.161984-1.70496 30.377984-1.363968 9.558016-3.069952 14.678016-4.774912 14.678016-1.363968 0-3.069952-3.072-5.115904-9.216-4.774912-13.654016-6.820864-38.230016-6.820864-74.070016v-69.632H557.70112v-40.96z m-116.642816 0.342016H405.248v38.912h-44.338176v34.816h44.3392v49.492992a665.162752 665.162752 0 0 1-53.20704 9.216l8.526848 33.108992c15.00672-2.729984 29.672448-5.801984 44.679168-8.873984v29.012992c0 7.851008-3.40992 11.947008-9.549824 11.947008-8.86784 0-18.41664-1.024-28.307456-2.390016l8.184832 34.134016h32.7424c21.827584 0 32.741376-11.606016 32.741376-34.816v-46.422016c11.595776-3.072 23.192576-6.144 34.788352-9.556992v-34.132992l-34.788352 10.24v-40.96h37.516288v-34.816h-37.516288v-38.912z" />
  </svg>
);

const HotSaleFilled = createIcon(HotSaleFilledSvgComponent, 'HotSaleFilled');

export default HotSaleFilled;
