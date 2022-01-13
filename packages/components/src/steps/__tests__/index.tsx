import React from 'react';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import type { StepsProps } from '../interface';
import Step from '../Step';
import Steps from '../Steps';

const testId = 'steps';

const App: React.FC<StepsProps> = (props) => (
  <Steps data-testid={testId} {...props}>
    <Step data-testid="s1">1</Step>
    <Step data-testid="s2">2</Step>
    <Step data-testid="s3">3</Step>
  </Steps>
);

test('render correctly', () => {
  const tree = render(<App />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with current', () => {
  render(<App current={1} />);

  expect(screen.getByTestId('s1')).toHaveClass(getPrefixCls('step-finish'));
  expect(screen.getByTestId('s2')).toHaveClass(getPrefixCls('step-process'));
});

test('render with onChange', () => {
  const onChange = jest.fn();

  render(<App onChange={onChange} />);

  const list = screen
    .getByTestId(testId)
    .querySelectorAll(`.${getPrefixCls('step')}`);

  list.forEach((item) => {
    expect(item).toHaveClass(getPrefixCls('touchable'));
  });
  screen.getByTestId('s2').click();
  expect(onChange).toBeCalledWith(1);
});

test('render with actionIcon', () => {
  render(<App activeIcon="activeIcon" />);

  expect(
    screen.getByTestId('s1').querySelector(`.${getPrefixCls('step-icon')}`),
  ).toContainHTML('activeIcon');
});

test('render with inactionIcon', () => {
  render(<App inactiveIcon="inactiveIcon" current={1} />);

  expect(
    screen.getByTestId('s1').querySelector(`.${getPrefixCls('step-icon')}`),
  ).toContainHTML('inactiveIcon');
  expect(
    screen.getByTestId('s3').querySelector(`.${getPrefixCls('step-icon')}`),
  ).toContainHTML('inactiveIcon');
});

test('render with inactionIcon and finishICon', () => {
  render(<App inactiveIcon="inactiveIcon" finishIcon="finishIcon" current={1} />);

  expect(
    screen.getByTestId('s1').querySelector(`.${getPrefixCls('step-icon')}`),
  ).toContainHTML('finishIcon');
  expect(
    screen.getByTestId('s3').querySelector(`.${getPrefixCls('step-icon')}`),
  ).toContainHTML('inactiveIcon');
});
