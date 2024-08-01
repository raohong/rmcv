import { render, screen } from '@testing-library/react';
import { Progress, progressClassNames } from '..';

const testId = 'progress';

it('render correctly', () => {
  const tree = render(<Progress />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with percentage', () => {
  const com = render(<Progress data-testid={testId} percentage={20} />);

  expect(screen.getByText('20%')).toBeInTheDocument();

  com.rerender(<Progress data-testid={testId} percentage={120} />);

  expect(screen.queryByText('120%')).toBeInTheDocument();
});

it('render with strokeWidth', () => {
  render(<Progress data-testid={testId} strokeWidth={10} />);

  expect(screen.getByTestId(testId)).toHaveStyle({
    height: '10px',
  });
});

it('render with color', () => {
  const com = render(<Progress data-testid={testId} color='blue' />);

  expect(
    com.container.querySelector(`.${progressClassNames.outer}`),
  ).toHaveStyleRule('background', 'blue');
  expect(
    screen.getByTestId(testId).querySelector(`.${progressClassNames.pivot}`),
  ).toHaveStyleRule('background', 'blue');
});

it('render with trailColor', () => {
  render(<Progress data-testid={testId} trailColor='blue' />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('background', 'blue');
});

it('render with showPivot', () => {
  render(<Progress data-testid={testId} showPivot={false} />);

  expect(
    screen.getByTestId(testId).querySelector(`.${progressClassNames.pivot}`),
  ).toBeNull();
});

it('render with pivotColor', () => {
  render(<Progress data-testid={testId} pivotColor='red' />);

  expect(
    screen.getByTestId(testId).querySelector(`.${progressClassNames.pivot}`),
  ).toHaveStyleRule('background', 'red');
});

it('render with pivotTextColor', () => {
  render(<Progress data-testid={testId} pivotTextColor='pink' />);

  expect(
    screen.getByTestId(testId).querySelector(`.${progressClassNames.pivot}`),
  ).toHaveStyleRule('color', 'pink');
});

it('render with pivotText', () => {
  render(<Progress data-testid={testId} pivotText='text' />);

  expect(screen.getByText('text')).toBeInTheDocument();
});

it('render with format', () => {
  const format = (p: number) => `current:${p}%`;

  render(<Progress data-testid={testId} percentage={20} format={format} />);

  expect(screen.getByText(format(20))).toBeInTheDocument();
});

it('render with inactive', () => {
  render(<Progress data-testid={testId} inactive />);

  expect(screen.getByTestId(testId)).toHaveClass(progressClassNames.inacitve);
});
