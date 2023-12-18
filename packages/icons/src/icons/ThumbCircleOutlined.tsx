import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const ThumbCircleOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M592.57856 335.425536l-6.105088 79.698944 71.964672-8.56064c38.227968-4.554752 64.982016 25.2928 55.424 64.602112-0.293888 0.868352-0.951296 3.342336-1.676288 7.258112-0.529408 2.852864-0.98304 5.9648-1.335296 9.346048-0.16384 1.555456-0.045056 2.628608 0.57856 5.023744 0.413696 1.533952 0.413696 1.533952 0.990208 3.593216 2.751488 9.91232 3.7888 17.634304 2.905088 28.756992-0.831488 10.35776-2.632704 17.417216-5.960704 25.904128-0.570368 1.441792-0.570368 1.441792-1.05472 2.660352-1.482752 3.767296-1.959936 5.52448-2.229248 8.64256-0.347136 4.02944-0.19968 5.518336 0.740352 9.94816 1.656832 7.801856 2.195456 12.818432 1.625088 20.805632-0.759808 10.661888-3.013632 18.789376-6.825984 27.021312-0.536576 1.15712-2.635776 5.430272-2.942976 6.140928-0.626688 2.944-0.60928 5.095424-0.377856 6.688768 0.070656 0.38912 0.070656 0.38912 0.512 3.155968 2.59584 28.427264-17.5616 54.76352-45.824 59.350016l-299.742208 48.622592c-24.29952 3.938304-45.427712-14.0288-45.427712-38.740992V538.22976c0-18.947072 14.260224-36.04992 32.907264-39.51616a8982.016 8982.016 0 0 0 36.616192-6.884352l1.374208-0.262144c17.27488-3.291136 29.362176-5.67296 32.969728-6.52288 16.463872-3.88096 34.3552-34.414592 47.968256-82.7904 5.8368-20.740096 10.523648-43.123712 14.14144-65.53088 2.17088-13.444096 3.492864-23.839744 4.163584-30.32576 2.635776-19.497984 18.325504-36.97664 37.403648-42.037248 0.873472-0.38912 1.780736-0.514048 2.683904-0.62464 0.632832-0.125952 1.26976-0.239616 1.908736-0.33792 42.98752-4.046848 75.99104 28.086272 72.625152 72.02816zM350.48448 540.297216V701.30688l33.51552-5.43744V533.993472a9102.736384 9102.736384 0 0 1-33.51552 6.303744z m174.99648-234.41408c-2.215936 1.017856-4.943872 4.018176-5.157888 5.527552-0.6656 6.565888-2.092032 17.77664-4.407296 32.11264-3.857408 23.89504-8.86784 47.812608-15.19104 70.28736-16.877568 59.972608-39.48544 100.021248-74.05568 111.305728l-0.002048 163.832832 219.488256-35.603456c6.027264-0.97792 10.735616-7.129088 10.775552-9.88672-0.356352-1.42336-0.356352-1.42336-0.854016-4.368384-0.82944-5.70368-0.883712-12.199936 0.273408-19.245056 0.607232-3.709952 1.665024-7.04512 3.16416-10.514432 0.80384-1.855488 3.248128-6.83008 3.38944-7.136256 1.737728-3.750912 2.6112-6.903808 2.983936-12.125184 0.238592-3.344384 0.095232-4.67968-0.768-8.75008-1.774592-8.35584-2.310144-13.778944-1.547264-22.6304 0.673792-7.820288 2.17088-13.331456 5.03808-20.611072l1.032192-2.609152c1.89952-4.842496 2.685952-7.924736 3.151872-13.719552 0.4352-5.491712 0.036864-8.464384-1.486848-13.952-0.5376-1.913856-0.5376-1.913856-1.169408-4.257792-1.815552-6.97856-2.485248-12.982272-1.72032-20.222976 0.467968-4.494336 1.08544-8.722432 1.816576-12.668928 1.110016-5.9904 2.289664-10.431488 2.68288-11.324416 2.041856-8.471552-0.620544-11.442176-9.434112-10.391552l-76.726272 9.126912c-25.012224 2.95424-45.078528-16.44544-43.173888-41.631744l6.454272-84.260864c1.29024-16.847872-8.608768-27.225088-24.55552-26.284032zM512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z" />
  </svg>
);

const ThumbCircleOutlined = createIcon(
  ThumbCircleOutlinedSvgComponent,
  'ThumbCircleOutlined',
);

export default ThumbCircleOutlined;
