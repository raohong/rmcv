import { render, screen } from '@testing-library/react';
import { Col } from '..';

it('render correctly', () => {
  const tree = render(<Col />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with span', () => {
  render(<Col data-testid='col' span={8} />);

  expect(screen.getByTestId('col')).toHaveStyleRule(
    'width',
    `${((8 / 24) * 100).toFixed(6)}%`,
  );
});

it('render with tag', () => {
  render(<Col data-testid='tag' component='p' />);

  expect(screen.getByTestId('tag').tagName).toBe('P');
});
