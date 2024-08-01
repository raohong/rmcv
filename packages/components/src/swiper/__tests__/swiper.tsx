import { render } from '@testing-library/react';
import Swiper from '../Swiper';
import SwiperItem from '../SwiperItem';

it('render correctly', () => {
  const tree = render(
    <Swiper>
      <SwiperItem>1</SwiperItem>
      <SwiperItem>2</SwiperItem>
    </Swiper>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});
