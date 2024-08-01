import { render, screen } from '@testing-library/react';
import { Picker, pickerClassNames } from '..';

const testId = 'picker';

it('render correctly', () => {
  const tree = render(<Picker columns={[['A']]} />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with title', () => {
  render(<Picker title='test-title' data-testid={testId} />);

  expect(screen.getByText('test-title')).toBeInTheDocument();
});

it('render with showToolbar', () => {
  render(<Picker showToolbar={false} data-testid={testId} />);

  expect(
    screen.getByTestId(testId).querySelector(`.${pickerClassNames.toolbar}`),
  ).not.toBeInTheDocument();
});

it('render with confirmButtonText', () => {
  render(<Picker confirmButtonText='ok' data-testid={testId} />);

  expect(screen.getByText('ok')).toBeInTheDocument();
});

it('render with cancelButtonText', () => {
  render(<Picker cancelButtonText='cancel' data-testid={testId} />);

  expect(screen.getByText('cancel')).toBeInTheDocument();
});

it('render with toolbarPosition', () => {
  render(<Picker toolbarPosition='bottom' data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(pickerClassNames.positionBottom);
});
