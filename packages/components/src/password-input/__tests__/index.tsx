import { render, screen } from '@testing-library/react';
import { PasswordInput, passwordInputClassNames } from '..';

const testId = 'password-input';

it('render correctly', () => {
  const tree = render(<PasswordInput />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with length', () => {
  render(<PasswordInput data-testid={testId} length={6} />);

  expect(
    screen.getByTestId(testId).querySelectorAll(`.${passwordInputClassNames.item}`)
      .length,
  ).toBe(6);
});

it('render with value', () => {
  render(<PasswordInput data-testid={testId} value='123' />);

  expect(
    screen.getByTestId(testId).querySelector(`.${passwordInputClassNames.input}`),
  ).toHaveValue('123');
});

it('render with gutter', () => {
  render(<PasswordInput data-testid={testId} gutter={10} />);

  expect(
    screen.getByTestId(testId).querySelector(`.${passwordInputClassNames.inner}`),
  ).toHaveStyle({
    gap: '10px',
  });
});

it('render with mask', () => {
  render(<PasswordInput data-testid={testId} value='12' />);

  expect(
    screen.getByTestId(testId).querySelectorAll(`.${passwordInputClassNames.mask}`)
      .length,
  ).toBe(2);
});

it('render with focused', () => {
  render(<PasswordInput data-testid={testId} focused />);

  expect(
    screen.getByTestId(testId).querySelector(`.${passwordInputClassNames.cursor}`),
  ).toBeInTheDocument();
});
