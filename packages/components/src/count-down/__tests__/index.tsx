import { render, screen } from '@testing-library/react';
import React from 'react';
import CountDown from '..';
import { formatCountDownTimeData } from '../util';

const time = 2000;

test('render correctly', () => {
  const tree = render(<CountDown />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with time and autoStart', () => {
  const format = 'ss';

  render(<CountDown time={time} autoStart format={format} />);

  expect(
    screen.getByText(formatCountDownTimeData(time, format)),
  ).toBeInTheDocument();
});

test('render with render children', () => {
  render(
    <CountDown time={time} autoStart format="s">
      {({ seconds }) => <span data-testid="sec"> {seconds}</span>}
    </CountDown>,
  );

  expect(screen.getByTestId('sec')).toContainHTML('2');
});
