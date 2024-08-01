import React from 'react';
import type { IconComponentProps } from '../interface';
import createIcon from '../utils/createIcon';

const ShopCollectFilledSvgComponent: React.FC<IconComponentProps> = props => (
  <svg
    {...props}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M795.947008 625.6896c62.670848 0 113.588224 51.208192 113.588224 114.097152l-0.058368 2.696192c-0.017408 0.456704-0.04096 0.857088-0.08192 1.527808l0.02048 1.174528c0 11.19232-2.461696 22.526976-6.97344 33.97632l-0.29696 0.800768c-1.707008 4.54656-3.935232 9.314304-9.23648 18.184192l1.34656-1.808384c0.09728-0.135168 0.159744-0.22528 0.20992-0.304128l1.09568-1.8944-0.669696 1.21344 0.078848-0.11776c0.023552-0.0256-0.095232 0.202752-0.533504 1.041408l-0.591872 1.1008c-1.176576 2.167808-2.29888 4.098048-3.078144 5.174272a200.914944 200.914944 0 0 1-6.76864 10.473472c-13.25568 19.223552-31.315968 39.012352-53.075968 59.191296-14.54592 13.489152-29.970432 26.43968-45.6192 38.647808l-3.342336 2.59072c-9.946112 7.653376-26.584064 19.859456-21.825536 16.256a42.963968 42.963968 0 0 1-25.81504 8.621056c-8.99072 0-17.759232-2.761728-25.275392-8.198144l-0.495616-0.362496 0.8192 0.626688c1.077248 0.873472-15.014912-10.933248-23.856128-17.7664-16.347136-12.634112-32.466944-26.083328-47.63136-40.137728-22.432768-20.789248-40.921088-41.188352-54.268928-61.034496-6.093824-9.060352-11.082752-17.968128-14.922752-26.896384l-0.390144-0.956416-0.04096-0.1024c-5.515264-13.180928-8.430592-25.993216-8.430592-38.344704a60.205056 60.205056 0 0 1-0.227328-5.372928c0-62.910464 50.900992-114.097152 113.589248-114.097152 21.951488 0 43.214848 6.504448 61.37344 18.3296 18.13504-11.826176 39.407616-18.3296 61.384704-18.3296z m-5.41696-429.213696c25.57952 0 47.875072 17.408 54.078464 42.222592l35.037184 140.146688c9.428992 19.991552 14.405632 41.930752 14.405632 64.488448 0 83.560448-67.738624 151.299072-151.299072 151.299072-48.551936 0-91.762688-22.868992-119.447552-58.422272-27.684864 35.55328-70.894592 58.422272-119.446528 58.422272s-91.762688-22.868992-119.447552-58.422272c-27.684864 35.55328-70.895616 58.422272-119.446528 58.422272-13.779968 0-27.129856-1.842176-39.816192-5.29408v276.040704h306.581504c15.391744 0 27.870208 12.478464 27.870208 27.871232s-12.478464 27.871232-27.870208 27.871232H211.212288c-23.089152 0-41.805824-18.717696-41.805824-41.806848V560.644096C135.387136 532.89984 113.664 490.653696 113.664 443.333632c0-22.55872 4.97664-44.496896 14.406656-64.488448l35.03616-140.146688c6.204416-24.814592 28.499968-42.222592 54.07744-42.222592h573.346816zM782.568448 84.992c15.392768 0 27.871232 12.478464 27.871232 27.871232s-12.478464 27.871232-27.871232 27.871232H225.147904c-15.392768 0-27.871232-12.478464-27.871232-27.871232S209.75616 84.992 225.147904 84.992h557.41952z' />
  </svg>
);

const ShopCollectFilled = createIcon(
  ShopCollectFilledSvgComponent,
  'ShopCollectFilled',
);

export default ShopCollectFilled;
