import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import Col from '../Col';

test('render correctly', () => {
  const tree = render(<Col />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with span', () => {
  render(<Col data-testid="col" span={8} />);

  expect(screen.getByTestId('col')).toHaveClass(getPrefixCls('col-8'));
});

test('render with tag', () => {
  render(<Col data-testid="tag" component="p" />);

  expect(screen.getByTestId('tag').tagName).toBe('P');
});
