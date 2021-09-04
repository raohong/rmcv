import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import Popup from '..';

const testId = 'popup';

test('render correctly', () => {
  const tree = render(<Popup />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with visible', () => {
  render(<Popup visible data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', false);
});
