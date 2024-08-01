import { render } from '@testing-library/react';
import { PullRefresh } from '..';

it('render correctly', () => {
  const tree = render(<PullRefresh />);

  expect(tree.asFragment()).toMatchSnapshot();
});
