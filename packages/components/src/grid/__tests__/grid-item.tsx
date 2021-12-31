import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import GridItem from '../GridItem';

const testId = 'grid-item';

test('render correctly', () => {
  const tree = render(<GridItem />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with icon', () => {
  render(<GridItem data-testid={testId} icon="text-icon" />);

  expect(screen.getByText('text-icon')).toBeInTheDocument();
});

test('render with iconSize', () => {
  render(<GridItem data-testid={testId} iconSize={20} icon="text-icon" />);

  expect(screen.getByText('text-icon')).toHaveStyle({
    width: '20px',
    height: '20px',
  });
});

test('render with text', () => {
  render(<GridItem data-testid={testId} text="text" />);

  expect(screen.getByText('text')).toHaveClass(getPrefixCls('grid-item-text'));
});

test('render with contentClassName', () => {
  render(<GridItem data-testid={testId} contentClassName="test" />);

  expect(screen.getByTestId(testId).querySelector('.test')).not.toBeNull();
});
