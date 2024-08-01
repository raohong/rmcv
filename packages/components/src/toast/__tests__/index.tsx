import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast, toastClassNames } from '..';

const testId = 'test';

it('render correctly', () => {
  const tree = render(<Toast message='content' open></Toast>);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with open', () => {
  const com = render(<Toast data-testid={testId} />);

  expect(screen.queryByTestId(testId)).not.toBeInTheDocument();

  com.rerender(<Toast open data-testid={testId} />);

  expect(screen.queryByTestId(testId)).toBeInTheDocument();
});

it('render with position', () => {
  render(<Toast position='top' data-testid={testId} open />);

  expect(screen.getByTestId(testId)).toHaveClass(toastClassNames.positionTop);
});

it('render with message', () => {
  render(<Toast message='content' open />);

  expect(screen.getByText('content')).toBeInTheDocument();
});

it('render with type', () => {
  render(<Toast type='success' message='content' open />);

  expect(screen.getByLabelText('Success')).toBeInTheDocument();
});

it('render with icon', () => {
  render(<Toast icon='icon' data-testid={testId} open />);

  expect(screen.getByTestId(testId)).toHaveTextContent('icon');
});

it('render with closeOnClick', async () => {
  const onClose = jest.fn();
  render(<Toast closeOnClick onClose={onClose} data-testid={testId} open />);

  await userEvent.click(screen.getByTestId(testId));

  expect(onClose).toHaveBeenCalled();
});
