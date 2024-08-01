import { render } from '@testing-library/react';
import { Sticky } from '..';

it('render correctly', () => {
  const tree = render(<Sticky />);

  expect(tree.asFragment()).toMatchSnapshot();
});
