import { render, screen } from '@testing-library/react';
import { Overlay } from '..';

it('render correctly', () => {
  const tree = render(<Overlay />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with zIndex', () => {
  render(<Overlay data-testid='test' zIndex={2} />);

  expect(screen.getByTestId('test')).toHaveStyle({
    'z-index': 2,
  });
});

it('render with visible', async () => {
  render(<Overlay data-testid='test' open />);

  expect(screen.getByTestId('test')).toHaveAttribute('aria-hidden', 'false');
});
