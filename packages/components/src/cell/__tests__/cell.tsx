import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cell, cellClassNames } from '..';

const testId = 'cell';

it('render correctly', () => {
  const tree = render(<Cell />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with title', () => {
  render(<Cell title='title' />);

  expect(screen.getByText('title')).not.toBeNull();
});

it('render with value', () => {
  render(<Cell value='value' />);

  expect(screen.getByText('value')).not.toBeNull();
});

it('render with label', () => {
  render(<Cell label='label' />);

  expect(screen.getByText('label')).not.toBeNull();
});

it('render with icon', () => {
  render(<Cell icon={<span>icon</span>} />);

  expect(screen.getByText('icon')).toBeInTheDocument();
});

it('render with rightIcon', () => {
  render(<Cell rightIcon={<span data-testid='right-icon'>rightIcon</span>} />);

  expect(screen.getByTestId('right-icon')).toBeInTheDocument();
});

it('render with clickable', () => {
  render(<Cell clickable data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('cursor', 'pointer');
});

it('render with isLink', () => {
  const { container } = render(<Cell isLink data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('cursor', 'pointer');
  expect(
    container.querySelector(`.${cellClassNames.rightIcon}`),
  ).toBeInTheDocument();
});

it('render with center', () => {
  render(<Cell center data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('align-items', 'center');
});

it('render with arrowDirection', () => {
  render(<Cell isLink arrowDirection='down' data-testid={testId} />);

  expect(screen.getByLabelText('Arrow-Down')).toBeInTheDocument();
});

it('render with onClick', async () => {
  const handler = jest.fn();

  render(<Cell onClick={handler} data-testid={testId} />);

  await userEvent.click(screen.getByTestId(testId));
  expect(handler).toHaveBeenCalled();
});

it('render with children', () => {
  render(<Cell>child</Cell>);

  expect(screen.getByText('child')).toHaveClass(cellClassNames.value);
});

it('render with size', () => {
  render(<Cell data-testid={testId} size='large' />);

  expect(screen.getByTestId(testId)).toHaveClass(cellClassNames.sizeLarge);
});
