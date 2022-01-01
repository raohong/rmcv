import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';
import '../style/index.less';

const ClosedEyeOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M87.30624 353.523712c-27.410432-29.32736 16.077824-73.879552 43.552768-44.488704 59.551744 63.721472 142.072832 113.575936 223.08352 141.656064 204.224512 70.776832 400.790528-0.528384 558.675968-141.656064 29.75232-26.591232 73.49248 17.729536 43.543552 44.488704-20.455424 18.286592-41.660416 35.634176-63.526912 51.862528 18.354176 36.078592 36.702208 72.139776 55.06048 108.20096 18.302976 35.960832-34.85696 67.776512-53.19168 31.752192-19.87584-39.112704-39.785472-78.168064-59.669504-117.248l6.391808 12.561408c-36.477952 23.023616-74.47552 42.845184-113.639424 58.73664l44.539904 116.063232c14.52032 37.830656-45.069312 54.04672-59.38688 16.726016l-43.1616-112.452608c-42.187776 12.474368-85.46816 20.233216-129.431552 22.436864v-0.01024c0.04608 0.764928 0.070656 1.544192 0.070656 2.338816v132.120576c0 40.574976-61.58848 40.574976-61.58848 0V544.49152c0-0.999424 0.036864-1.974272 0.109568-2.924544-41.269248-2.881536-82.967552-10.881024-124.76416-24.659968-0.966656-0.318464-1.932288-0.638976-2.898944-0.96256L304.054272 638.48448c-14.322688 37.326848-73.897984 21.0944-59.38688-16.728064l47.20128-123.000832a36.702208 36.702208 0 0 1 2.130944-4.59776c-36.096-15.524864-71.550976-34.241536-104.86784-56.026112-24.14592 31.972352-48.285696 63.9488-72.43264 95.904768-10.22976 13.568-26.24512 20.799488-42.12736 11.29472-13.093888-7.839744-21.331968-29.431808-11.04896-43.03872l75.836416-100.409344c-18.518016-15.033344-35.97824-31.161344-52.051968-48.359424z" />
  </svg>
);

const ClosedEyeOutlined = createIcon(
  ClosedEyeOutlinedSvgComponent,
  'ClosedEyeOutlined',
);

export default ClosedEyeOutlined;
