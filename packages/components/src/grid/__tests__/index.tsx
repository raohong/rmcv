import { render, screen } from '@testing-library/react';
import { Grid } from '..';

const testId = 'grid';

it('render correctly', () => {
  const tree = render(<Grid />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with column', () => {
  const column = 3;

  render(<Grid data-testid={testId} column={column} />);
  expect(screen.getByTestId(testId)).toHaveStyle({
    gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`,
  });
});

it('render with gutter', () => {
  const gutter = 16;

  render(<Grid data-testid={testId} gutter={gutter} />);
  expect(screen.getByTestId(testId)).toHaveStyle({
    gap: `${gutter}px`,
  });
});
