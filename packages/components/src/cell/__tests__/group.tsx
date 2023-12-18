import { render, screen } from '@testing-library/react';
import React from 'react';
import { cellGroupClassNames } from 'rmc-vant';
import { cellClassNames } from '..';
import Cell from '../Cell';
import CellGroup from '../CellGroup';

const testId = 'cell-group';

test('render correctly', () => {
  const tree = render(<CellGroup />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with title', () => {
  render(<CellGroup data-testid={testId} title="title" />);

  expect(screen.getByText('title')).not.toBeNull();
});

test('render with border', () => {
  render(<CellGroup data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(cellGroupClassNames.root);
});

test('render with inset', () => {
  render(<CellGroup data-testid={testId} inset />);

  expect(screen.getByTestId(testId)).toHaveClass(cellGroupClassNames.inset);
});

test('render with size="large"', () => {
  render(
    <CellGroup data-testid={testId} size="large">
      <Cell value="1" />
      <Cell value="2" />
    </CellGroup>,
  );

  const list = screen
    .getByTestId(testId)
    .querySelectorAll(`.${cellClassNames.sizeLarge}`);

  expect(list.length).toBe(2);
});
