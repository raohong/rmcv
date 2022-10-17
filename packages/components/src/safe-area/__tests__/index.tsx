import { render, screen } from '@testing-library/react';
import React from 'react';
import SafeArea from '..';
import { getPrefixCls } from '../../_utils';

const testId = 'safe-area';

test('render correctly', () => {
  const tree = render(<SafeArea />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with top', () => {
  render(<SafeArea top data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('safe-area-top'));
});

test('render with disabled', () => {
  render(<SafeArea disabled data-testid={testId} />);

  expect(screen.getByTestId(testId)).not.toHaveClass(
    getPrefixCls('safe-area-bottom'),
  );
});
