import { render, screen } from '@testing-library/react';
import React from 'react';
import Steps from '../Steps';
import { stepClassNames } from '../classNames';
import type { StepsProps } from '../interface';

const testId = 'steps';

const App: React.FC<StepsProps> = props => (
  <Steps
    data-testid={testId}
    items={[
      { 'label': 1, 'data-testid': 's1' },
      { 'label': 2, 'data-testid': 's2' },
      { 'label': 3, 'data-testid': 's3' },
    ]}
    {...props}
  />
);

it('render correctly', () => {
  const tree = render(<App />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with current', () => {
  render(<App current={1} />);

  expect(screen.getByTestId('s1')).toHaveClass(stepClassNames.finish);
  expect(screen.getByTestId('s2')).toHaveClass(stepClassNames.process);
});

it('render with onChange', () => {
  const onChange = jest.fn();

  render(<App onChange={onChange} />);

  const list = screen
    .getByTestId(testId)
    .querySelectorAll(`.${stepClassNames.root}`);

  list.forEach((item) => {
    expect(item).toHaveAttribute('role', 'button');
  });
  screen.getByTestId('s2').click();
  expect(onChange).toHaveBeenCalledWith(1);
});

it('render with actionIcon', () => {
  render(<App activeIcon='activeIcon' />);

  expect(
    screen.getByTestId('s1').querySelector(`.${stepClassNames.icon}`),
  ).toContainHTML('activeIcon');
});

it('render with inactionIcon', () => {
  render(<App inactiveIcon='inactiveIcon' current={1} />);

  expect(
    screen.getByTestId('s1').querySelector(`.${stepClassNames.icon}`),
  ).toContainHTML('inactiveIcon');
  expect(
    screen.getByTestId('s3').querySelector(`.${stepClassNames.icon}`),
  ).toContainHTML('inactiveIcon');
});

it('render with inactionIcon and finishICon', () => {
  render(<App inactiveIcon='inactiveIcon' finishIcon='finishIcon' current={1} />);

  expect(
    screen.getByTestId('s1').querySelector(`.${stepClassNames.icon}`),
  ).toContainHTML('finishIcon');
  expect(
    screen.getByTestId('s3').querySelector(`.${stepClassNames.icon}`),
  ).toContainHTML('inactiveIcon');
});
