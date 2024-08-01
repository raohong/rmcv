import { render, screen } from '@testing-library/react';
import { Divider, dividerClassNames } from '..';

it('render correctly', () => {
  const tree = render(<Divider />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with dashed', () => {
  render(<Divider dashed data-testid='divider' />);

  expect(screen.getByTestId('divider')).toHaveClass(dividerClassNames.dashed);
});
