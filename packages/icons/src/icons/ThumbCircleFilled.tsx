import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const ThumbCircleFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m80.57856 278.536192c3.366912-43.941888-29.636608-76.075008-72.625152-72.02816-0.638976 0.098304-1.275904 0.211968-1.908736 0.33792-0.903168 0.110592-1.810432 0.23552-2.68288 0.62464-19.079168 5.059584-34.768896 22.53824-37.404672 42.037248-0.67072 6.486016-1.992704 16.881664-4.163584 30.32576-3.617792 22.407168-8.30464 44.78976-14.14144 65.529856-13.61408 48.376832-31.504384 78.910464-47.968256 82.791424-3.607552 0.84992-15.694848 3.231744-32.969728 6.52288l-1.374208 0.262144a8982.016 8982.016 0 0 1-36.616192 6.884352c-18.64704 3.46624-32.907264 20.569088-32.907264 39.51616v167.113728c0 24.711168 21.127168 42.679296 45.427712 38.740992l299.742208-48.622592c28.2624-4.585472 48.41984-30.922752 45.824-59.350016-0.441344-2.766848-0.441344-2.766848-0.512-3.155968-0.231424-1.593344-0.248832-3.744768 0.377856-6.688768 0.3072-0.710656 2.4064-4.983808 2.942976-6.140928 3.812352-8.23296 6.066176-16.359424 6.825984-27.021312 0.570368-7.9872 0.03072-13.0048-1.625088-20.805632-0.940032-4.429824-1.087488-5.91872-0.740352-9.947136 0.269312-3.119104 0.74752-4.876288 2.230272-8.643584l1.053696-2.660352c3.328-8.486912 5.13024-15.546368 5.960704-25.904128 0.882688-11.122688-0.1536-18.844672-2.905088-28.756992-0.576512-2.05824-0.576512-2.05824-0.990208-3.593216-0.623616-2.395136-0.743424-3.468288-0.57856-5.023744 0.352256-3.381248 0.805888-6.493184 1.335296-9.346048 0.724992-3.915776 1.3824-6.38976 1.676288-7.258112 9.558016-39.310336-17.196032-69.156864-55.424-64.602112l-71.964672 8.56064zM384 533.993472v161.876992l-33.516544 5.43744V540.297216a9102.736384 9102.736384 0 0 0 33.51552-6.303744z m141.479936-228.11136c15.947776-0.94208 25.847808 9.43616 24.556544 26.284032l-6.454272 84.260864c-1.90464 25.186304 18.161664 44.58496 43.173888 41.631744l76.726272-9.126912c8.813568-1.050624 11.475968 1.92 9.435136 10.391552-0.39424 0.892928-1.573888 5.334016-2.683904 11.324416a161.604608 161.604608 0 0 0-1.816576 12.668928c-0.764928 7.23968-0.095232 13.244416 1.72032 20.222976 0.631808 2.34496 0.631808 2.34496 1.169408 4.257792 1.523712 5.487616 1.922048 8.460288 1.486848 13.952-0.46592 5.79584-1.252352 8.87808-3.151872 13.719552l-1.032192 2.609152c-2.8672 7.28064-4.364288 12.790784-5.03808 20.611072-0.76288 8.851456-0.227328 14.27456 1.54624 22.6304 0.864256 4.0704 1.007616 5.40672 0.769024 8.75008-0.371712 5.2224-1.246208 8.374272-2.983936 12.125184-0.141312 0.3072-2.5856 5.280768-3.38944 7.13728-1.499136 3.468288-2.556928 6.803456-3.16416 10.513408-1.15712 7.04512-1.102848 13.541376-0.273408 19.245056 0.497664 2.944 0.497664 2.944 0.854016 4.368384-0.04096 2.757632-4.748288 8.9088-10.775552 9.88672l-219.488256 35.603456 0.001024-163.832832c34.57024-11.28448 57.18016-51.33312 74.05568-111.305728 6.325248-22.474752 11.334656-46.39232 15.192064-70.28736 2.31424-14.336 3.740672-25.546752 4.407296-32.11264 0.21504-1.509376 2.941952-4.509696 5.157888-5.528576z' />
  </svg>
);

const ThumbCircleFilled = createIcon(
  ThumbCircleFilledSvgComponent,
  'ThumbCircleFilled',
);

export default ThumbCircleFilled;
