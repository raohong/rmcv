import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../Slider';
import { getPrefixCls } from '../../_utils';

const testId = 'slider';

test('render correctly', () => {
  const tree = render(<Slider />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with barHeight', () => {
  const com = render(<Slider barHeight={12} data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyle({
    height: '12px',
  });

  com.rerender(<Slider barHeight={12} data-testid={testId} vertical />);
  expect(screen.getByTestId(testId)).toHaveStyle({
    width: '12px',
  });
});

test('render with buttonSize', () => {
  render(<Slider buttonSize={20} data-testid={testId} />);

  const content = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('slider-thumb-content')}`);

  expect(content).toHaveStyle({
    height: '20px',
    width: '20px',
  });
});

test('render with button', () => {
  render(
    <Slider
      defaultValue={20}
      button={(v) => <span>{v}</span>}
      data-testid={testId}
    />,
  );

  expect(screen.getByText('20')).toBeInTheDocument();
});

test('render with leftButton', () => {
  render(
    <Slider
      defaultValue={[10, 20]}
      leftButton={(v) => <span>{v}</span>}
      data-testid={testId}
      range
    />,
  );

  expect(screen.getByText('10')).toBeInTheDocument();
});

test('render with readonly', () => {
  render(<Slider data-testid={testId} readonly />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('slider-readonly'));
});

test('render with disabled', () => {
  render(<Slider data-testid={testId} disabled />);

  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('slider-disabled'));
});
