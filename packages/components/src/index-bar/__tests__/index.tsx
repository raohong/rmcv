import { render } from '@testing-library/react';
import { IndexAnchor, IndexBar } from '..';

it('render correctly', () => {
  const tree = render(
    <IndexBar>
      <IndexAnchor index='A' />
      <p>A1</p>
      <IndexAnchor index='B' />
      <p>B1</p>
    </IndexBar>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});
