import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from '..';
import { dialogClassNames } from '../classNames';

const id = 'dialog';

it('render correctly', () => {
  const tree = render(<Dialog />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with title', () => {
  render(<Dialog title={<span data-testid='title' />} />);

  expect(screen.getByTestId('title')).toBeInTheDocument();
});

it('render with width', () => {
  render(<Dialog width={200} data-testid={id} />);

  expect(screen.getByTestId(id)).toHaveStyle({
    width: '200px',
  });
});

it('render with message', () => {
  render(<Dialog message={<div data-testid='message' />} />);

  expect(screen.getByTestId('message')).toBeInTheDocument();
});

it('render with footer', () => {
  render(<Dialog data-testid={id} footer={<div data-testid='footer' />} />);

  expect(screen.getByTestId('footer')).toBeInTheDocument();
});

it('render with theme', () => {
  render(<Dialog theme='round-button' data-testid={id} />);

  expect(screen.getByTestId(id)).toHaveClass(dialogClassNames.themeRoundButton);
});

it('render with showConfirmButton', () => {
  render(<Dialog showConfirmButton={false} data-testid={id} />);

  expect(
    screen.getByTestId(id).querySelector(`.${dialogClassNames.confirmButton}`),
  ).toBeNull();
});

it('render with showCancelButton', () => {
  render(<Dialog showCancelButton data-testid={id} />);

  expect(
    screen.getByTestId(id).querySelector(`.${dialogClassNames.cancelButton}`),
  ).not.toBeNull();
});

it('render with confirmButtonText', () => {
  render(<Dialog confirmButtonText='button-text' data-testid={id} />);

  expect(screen.getByText('button-text')).not.toBeNull();
});

it('render with confirmButtonColor', () => {
  render(<Dialog confirmButtonColor='red' data-testid={id} />);

  expect(
    screen.getByTestId(id).querySelector(`.${dialogClassNames.confirmButton}`),
  ).toHaveStyleRule('background', 'red');
});

it('render with cancelButtonText', () => {
  render(
    <Dialog showCancelButton cancelButtonText='button-text' data-testid={id} />,
  );

  expect(screen.getByText('button-text')).not.toBeNull();
});

it('render with cancelButtonColor', () => {
  render(<Dialog showCancelButton cancelButtonColor='blue' data-testid={id} />);

  expect(
    screen.getByTestId(id).querySelector(`.${dialogClassNames.cancelButton}`),
  ).toHaveStyleRule('background', 'blue');
});

it('render with open', () => {
  render(<Dialog open data-testid={id} />);

  expect(screen.getByTestId(id)).toHaveAttribute('aria-hidden', 'false');
});

it('render with onConfirm', async () => {
  const onConfirm = jest.fn();

  render(<Dialog open onConfirm={onConfirm} data-testid={id} />);

  await userEvent.click(
    screen.getByTestId(id).querySelector(`.${dialogClassNames.confirmButton}`)!,
  );

  expect(onConfirm).toHaveBeenCalled();
});
