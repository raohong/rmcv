import { Tag } from '..';
import { render } from '../../_test-utils';

it('render correctly', () => {
  const tree = render(<Tag />);

  expect(tree.asFragment()).toMatchSnapshot();
});
