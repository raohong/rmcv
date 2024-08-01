import { render } from '@testing-library/react';
import { Circle } from '..';

it('render correctly', () => {
  const tree = render(<Circle />);

  expect(tree.asFragment()).toMatchSnapshot();
});
