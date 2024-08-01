import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Rate, rateClassNames } from '..';

const testId = 'rate';

it('render correctly', () => {
  const tree = render(<Rate />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with defaultValue', () => {
  render(<Rate defaultValue={2} data-testid={testId} />);

  expect(
    screen.getByTestId(testId).querySelectorAll(`.${rateClassNames.fullIcon}`)
      .length,
  ).toBe(2);
});

it('render with onChange', async () => {
  const onChange = jest.fn();

  render(<Rate onChange={onChange} data-testid={testId} />);

  const second = screen
    .getByTestId(testId)
    .querySelector(`.${rateClassNames.item}:nth-child(2)`)!;

  await userEvent.click(second);

  expect(onChange).toHaveBeenCalledWith(2);
});

it('render with value', async () => {
  const App = () => {
    const [value, setValue] = useState(0);

    return <Rate value={value} onChange={setValue} data-testid={testId} />;
  };
  render(<App />);

  const second = screen
    .getByTestId(testId)
    .querySelector(`.${rateClassNames.item}:nth-child(2)`)!;

  await userEvent.click(second);

  expect(second.querySelector(`.${rateClassNames.mask}`)).not.toBeNull();
});

it('render with allowHalf', () => {
  render(<Rate defaultValue={1.5} data-testid={testId} allowHalf />);

  const target = screen
    .getByTestId(testId)
    .querySelector(`.${rateClassNames.item}:nth-child(2) .${rateClassNames.mask}`);

  expect(target).toHaveStyle({ 'clip-path': 'inset(0 50% 0 0)' });
});

it('render with readonly', async () => {
  const onChange = jest.fn();
  render(<Rate onChange={onChange} data-testid={testId} readonly />);

  const second = screen
    .getByTestId(testId)
    .querySelector(`.${rateClassNames.item}:nth-child(2)`)!;

  await userEvent.click(second);
  expect(onChange).not.toHaveBeenCalled();
  expect(screen.getByTestId(testId)).toHaveClass(rateClassNames.readonly);
});

it('render with disabled', async () => {
  const onChange = jest.fn();
  render(<Rate onChange={onChange} data-testid={testId} disabled />);

  const second = screen
    .getByTestId(testId)
    .querySelector(`.${rateClassNames.item}:nth-child(2)`)!;

  await userEvent.click(second);
  expect(onChange).not.toHaveBeenCalled();
  expect(screen.getByTestId(testId)).toHaveClass(rateClassNames.disabled);
});

it('render decimal value', () => {
  render(<Rate data-testid={testId} defaultValue={1.2} readonly allowHalf />);

  const target = screen
    .getByTestId(testId)
    .querySelector(`.${rateClassNames.item}:nth-child(2) .${rateClassNames.mask}`);

  expect(target).toHaveStyle({ 'clip-path': 'inset(0 80% 0 0)' });
});
