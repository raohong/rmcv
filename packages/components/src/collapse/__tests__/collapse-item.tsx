import { render } from '@testing-library/react';
import CollapseItem from '../CollapseItem';

it('render correctly', () => {
  const tree = render(<CollapseItem />);

  expect(tree.asFragment()).toMatchSnapshot();
});
