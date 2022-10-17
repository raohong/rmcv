import { render, screen } from '@testing-library/react';
import React from 'react';
import Grid from '../Grid';
import GridItem from '../GridItem';

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
  });
});
