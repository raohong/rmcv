import { render, screen } from '@testing-library/react';
import { Skeleton, skeletonClassNames } from '..';
import { getTestThemes } from '../../_test-utils';

const testId = 'skeleton';

it('render correctly', () => {
  const tree = render(<Skeleton>content</Skeleton>);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with loading', () => {
  const com = render(<Skeleton data-testid={testId}>content</Skeleton>);

  expect(screen.getByTestId(testId)).not.toHaveTextContent('content');

  com.rerender(
    <Skeleton loading={false} data-testid={testId}>
      content
    </Skeleton>,
  );
  expect(screen.getByTestId(testId)).toHaveTextContent('content');
});

it('render with avatar', () => {
  render(<Skeleton data-testid={testId} avatar />);

  expect(
    screen.getByTestId(testId).querySelector(`.${skeletonClassNames.avatar}`),
  ).toBeInTheDocument();
});

it('render with avatarSize', () => {
  render(<Skeleton data-testid={testId} avatar avatarSize='2rem' />);

  expect(
    screen.getByTestId(testId).querySelector(`.${skeletonClassNames.avatar}`),
  ).toHaveStyleRule('width', '2rem');
});

it('render with round', () => {
  render(<Skeleton data-testid={testId} round />);

  expect(screen.getByTestId(testId)).toHaveClass(skeletonClassNames.round);
  expect(
    screen.getByTestId(testId).querySelector(`.${skeletonClassNames.title}`),
  ).toHaveStyleRule('border-radius', `${getTestThemes().radii.max}px`);
});

it('render with titleWidth', () => {
  render(<Skeleton data-testid={testId} titleWidth='50%' />);

  expect(
    screen.getByTestId(testId).querySelector(`.${skeletonClassNames.title}`),
  ).toHaveStyleRule('width', '50%');
});

it('render with row', () => {
  render(<Skeleton data-testid={testId} row={4} />);

  const rows = screen
    .getByTestId(testId)
    .querySelectorAll(`.${skeletonClassNames.paragraph}`);

  expect(rows.length).toBe(4);
});

it('render with rowWidth', () => {
  render(<Skeleton data-testid={testId} row={2} rowWidth={['10%', '20%']} />);

  const rows = screen
    .getByTestId(testId)
    .querySelectorAll(`.${skeletonClassNames.paragraph}`);

  expect(rows[0]).toHaveStyleRule('width', '10%');
  expect(rows[1]).toHaveStyleRule('width', '20%');
});
