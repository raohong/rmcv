import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import CellGroup from '../CellGroup';
import Cell from '../Cell';

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

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('cell-group')}`),
  ).toHaveClass(getPrefixCls('cell-group-border'));
});

test('render with inset', () => {
  render(<CellGroup data-testid={testId} inset />);

  const group = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('cell-group')}`)!;

  expect(group).not.toHaveClass(getPrefixCls('cell-group-border'));
  expect(group).toHaveClass(getPrefixCls('cell-group-inset'));
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
    .querySelectorAll(`.${getPrefixCls('cell-size-large')}`);

  expect(list.length).toBe(2);
});
