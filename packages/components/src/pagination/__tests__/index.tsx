import { render } from '@testing-library/react';
import { Pagination } from '..';

it('render correctly', () => {
  const tree = render(<Pagination total={100} />);

  expect(tree.asFragment()).toMatchSnapshot();
});
