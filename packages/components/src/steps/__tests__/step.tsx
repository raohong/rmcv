import { render, screen } from '@testing-library/react';
import React from 'react';
import { getPrefixCls } from '../../_utils';
import Step from '../Step';

const testId = 'step';

test('render correctly', () => {
  const tree = render(<Step />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with status', () => {
  render(<Step data-testid={testId} status="finish" />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('step-finish'));
});

test('render with icon', () => {
  render(<Step data-testid={testId} status="finish" icon={<span>icon</span>} />);

  expect(
    screen.getByTestId(testId).querySelector(`.${getPrefixCls('step-icon')}`),
  ).toContainHTML('icon');
});
