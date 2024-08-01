import { render, screen } from '@testing-library/react';
import { Image, imageClassNames } from '..';

const testId = 'image';
const height = 100;

it('render correctly', () => {
  const tree = render(<Image height={height} />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with fit', () => {
  render(<Image height={height} fit='contain' data-testid={testId} />);

  expect(screen.getByTestId(testId).querySelector('img')).toHaveStyleRule(
    'object-fit',
    'contain',
  );
});

it('render with position', () => {
  render(<Image height={height} position='left' data-testid={testId} />);

  expect(screen.getByTestId(testId).querySelector('img')).toHaveStyleRule(
    'object-position',
    'left',
  );
});

it('render with radius', () => {
  render(<Image height={height} radius={10} data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('border-radius', '10px');
});

it('render with round', () => {
  render(<Image height={height} round data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('border-radius', '50%');
});

it('render with showLoading', () => {
  render(<Image height={height} showLoading={false} round data-testid={testId} />);

  expect(
    screen.getByTestId(testId).querySelector(`.${imageClassNames.placeholder}`),
  ).toBeNull();
});
