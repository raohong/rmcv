import { render } from '@testing-library/react';
import { SafeArea } from '..';

it('render correctly', () => {
  const tree = render(<SafeArea />);

  expect(tree.asFragment()).toMatchSnapshot();
});
