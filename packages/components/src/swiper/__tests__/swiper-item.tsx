import { render } from '@testing-library/react';
import SwiperItem from '../SwiperItem';

it('render correctly', () => {
  const tree = render(<SwiperItem />);

  expect(tree.asFragment()).toMatchSnapshot();
});
