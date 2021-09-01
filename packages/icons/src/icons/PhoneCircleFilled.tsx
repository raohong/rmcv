import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../type';
import '../style';

const PhoneCircleFilledSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344zM372.82304 256c-30.662656 0-55.170048 22.448128-79.003648 54.222848C271.906816 339.443712 256 371.781632 256 404.9408c0 31.9488 15.497216 68.728832 40.201216 108.82048 23.113728 37.50912 54.8096 77.565952 89.450496 113.115136l11.211776 11.214848c35.80928 34.89792 75.866112 66.594816 113.374208 89.70752 40.072192 24.69888 76.869632 40.20224 108.82048 40.20224 33.163264 0 65.512448-15.91296 94.72-37.820416C745.550848 706.347008 768 681.84064 768 651.17696c0-18.782208-9.672704-34.697216-28.198912-52.56192-11.45856-11.04896-25.50784-22.094848-40.51968-32.602112-14.819328-10.37312-30.34624-19.974144-43.94496-27.150336-20.637696-10.891264-34.558976-15.214592-46.98112-15.214592-19.66592 0-36.38784 10.070016-48.2304 27.234304-3.506176 5.076992-6.007808 9.517056-9.03168 15.960064a283.293696 283.293696 0 0 1-5.48864-3.647488c-16.2048-11.03872-33.941504-25.454592-47.079424-38.250496-12.26752-12.609536-26.682368-30.345216-37.720064-46.55104a282.857472 282.857472 0 0 1-3.647488-5.48864c6.44096-3.023872 10.87488-5.520384 15.956992-9.024512 17.166336-11.843584 27.234304-28.5696 27.234304-48.232448 0-12.42624-4.319232-26.345472-15.208448-46.98112-7.184384-13.611008-16.78848-29.142016-27.153408-43.949056-10.50624-15.010816-21.552128-29.059072-32.596992-40.51456C407.52128 265.672704 391.605248 256 372.82304 256z m0 56.889344c-0.406528 0 3.470336 2.3552 11.614208 10.801152 8.617984 8.937472 17.99168 20.861952 26.944512 33.650688 9.059328 12.94336 17.425408 26.4704 23.446528 37.878784 6.864896 13.008896 8.59648 18.49344 8.63232 20.364288l-0.003072-0.055296c-0.026624-0.272384-0.275456-0.11264-2.643968 1.521664-3.361792 2.318336-7.35232 4.269056-17.08544 8.47872-3.211264 1.388544-3.211264 1.388544-7.202816 3.182592-1.974272 0.912384-1.974272 0.912384-4.020224 1.902592-4.702208 2.30912-8.281088 4.353024-11.598848 6.998016l-14.10048 11.235328 4.144128 17.54624c2.453504 10.3936 10.139648 25.383936 22.837248 44.024832 12.870656 18.89792 29.374464 39.202816 44.514304 54.74816 16.074752 15.669248 36.378624 32.173056 55.277568 45.04576 18.648064 12.700672 33.636352 20.385792 44.027904 22.838272l17.54112 4.140032 11.235328-14.094336c2.643968-3.31776 4.687872-6.895616 6.995968-11.593728 0.99328-2.052096 0.99328-2.052096 1.908736-4.031488 1.792-3.986432 1.792-3.986432 3.178496-7.18848 4.205568-9.73312 6.15936-13.728768 8.475648-17.083392 1.75104-2.536448 1.819648-2.65728 1.470464-2.6624 1.869824 0.03584 7.35744 1.769472 20.371456 8.63744 11.39712 6.014976 24.922112 14.377984 37.876736 23.44448 12.787712 8.951808 24.711168 18.326528 33.652736 26.947584 8.441856 8.1408 10.797056 12.01664 10.797056 11.610112 0 4.61824-15.425536 21.459968-31.468544 33.494016-20.042752 15.033344-43.23328 26.43968-60.58496 26.43968-18.251776 0-47.386624-12.274688-78.973952-31.744-33.82784-20.845568-70.610944-49.95072-103.256064-81.762304l-10.69056-10.693632c-31.552512-32.382976-60.657664-69.16608-81.503232-102.99392-19.473408-31.603712-31.744-60.726272-31.744-78.977024 0-17.34656 11.404288-40.530944 26.441728-60.583936 12.032-16.04096 28.872704-31.46752 33.491968-31.46752z" />
  </svg>
);

const PhoneCircleFilled = createIcon(
  PhoneCircleFilledSvgComponent,
  'PhoneCircleFilled',
);

export default PhoneCircleFilled;
