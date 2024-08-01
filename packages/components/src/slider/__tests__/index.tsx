import { render, screen } from '@testing-library/react';
import { Slider, sliderClassNames } from '..';

const testId = 'slider';

it('render correctly', () => {
  const tree = render(<Slider />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with barHeight', () => {
  const com = render(<Slider barHeight={12} data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('height', '12px');

  com.rerender(<Slider barHeight={12} data-testid={testId} vertical />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('width', '12px');
});

it('render with buttonSize', () => {
  render(<Slider buttonSize={20} data-testid={testId} />);

  const content = screen
    .getByTestId(testId)
    .querySelector(`.${sliderClassNames.button}`);

  expect(content).toHaveStyleRule('width', '20px');
  expect(content).toHaveStyleRule('height', '20px');
});

it('render with button', () => {
  render(
    <Slider defaultValue={20} button={v => <span>{v}</span>} data-testid={testId} />,
  );

  expect(screen.getByText('20')).toBeInTheDocument();
});

it('render with leftButton', () => {
  render(
    <Slider
      defaultValue={[10, 20]}
      leftButton={v => <span>{v}</span>}
      data-testid={testId}
      range
    />,
  );

  expect(screen.getByText('10')).toBeInTheDocument();
});

it('render with readonly', () => {
  render(<Slider data-testid={testId} readonly />);

  expect(screen.getByTestId(testId)).toHaveClass(sliderClassNames.readonly);
});

it('render with disabled', () => {
  render(<Slider data-testid={testId} disabled />);

  expect(screen.getByTestId(testId)).toHaveClass(sliderClassNames.disabled);
});
