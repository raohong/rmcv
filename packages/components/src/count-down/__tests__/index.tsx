import { render, screen } from '@testing-library/react';
import { CountDown } from '..';
import { formatCountDownTimeData } from '../util';

const time = 2000;

it('render correctly', () => {
  const tree = render(<CountDown />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with time and autoStart', () => {
  const format = 'ss';

  render(<CountDown time={time} autoStart format={format} />);

  expect(
    screen.getByText(formatCountDownTimeData(time, format)),
  ).toBeInTheDocument();
});

it('render with render children', () => {
  render(
    <CountDown time={time} autoStart format='s'>
      {({ seconds }) => (
        <span data-testid='sec'>
          {' '}
          {seconds}
        </span>
      )}
    </CountDown>,
  );

  expect(screen.getByTestId('sec')).toContainHTML('2');
});
