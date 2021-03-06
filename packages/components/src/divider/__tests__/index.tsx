import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import Divider from '..';

test('render correctly', () => {
  const tree = render(<Divider />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with dashed', () => {
  render(<Divider dashed data-testid="divider" />);

  expect(screen.getByTestId('divider')).toHaveClass(getPrefixCls('divider-dashed'));
});

test('render with hairline', () => {
  render(<Divider hairline data-testid="divider" />);

  expect(screen.getByTestId('divider')).toHaveClass(
    getPrefixCls('divider-hairline'),
  );
});

test('render with className', () => {
  render(<Divider data-testid="divider" className="test" />);

  expect(screen.getByTestId('divider')).toHaveClass('test');
});
