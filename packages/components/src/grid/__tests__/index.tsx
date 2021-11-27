import React from 'react';
import { render, screen } from '@testing-library/react';
import { GridItem, Grid } from '..';

const testId = 'grid';

test('render correctly', () => {
  const tree = render(
    <Grid>
      <GridItem />
      <GridItem />
    </Grid>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with column', () => {
  const column = 3;

  render(<Grid data-testid={testId} column={column} />);
  expect(screen.getByTestId(testId)).toHaveStyle({
    gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`,
  });
});

test('render with gutter', () => {
  const gutter = 16;

  render(<Grid data-testid={testId} gutter={gutter} />);
  expect(screen.getByTestId(testId)).toHaveStyle({
    gap: `${gutter}px`,
    gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
  });
});
