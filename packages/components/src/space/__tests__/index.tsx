import { render, screen } from '@testing-library/react';
import { Space } from '..';

const testId = 'space';

it('render correctly', () => {
  const tree = render(<Space />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with size', () => {
  render(<Space data-testid={testId} size={16} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('gap', '16px');
});
