import { render, screen } from '@testing-library/react';
import { NavBar, navBarClassNames } from '..';

const testId = 'nav-bar';

it('render correctly', () => {
  const tree = render(<NavBar />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with title', () => {
  render(<NavBar title='title' />);

  expect(screen.getByText('title')).toBeInTheDocument();
});

it('render with leftArrow', () => {
  render(<NavBar title='title' data-testid={testId} leftArrow />);

  expect(screen.getByRole('img')).toHaveClass(navBarClassNames.arrowIcon);
});

it('render with leftText', () => {
  render(<NavBar leftText='left-text' />);

  expect(screen.getByText('left-text')).toBeInTheDocument();
});

it('render with rightText', () => {
  render(<NavBar rightText='right-text' />);

  expect(screen.getByText('right-text')).toBeInTheDocument();
});

it('render with left', () => {
  render(<NavBar left={<span data-testid='left' />} />);

  expect(screen.getByTestId('left')).toBeInTheDocument();
});

it('render with right', () => {
  render(<NavBar right={<span data-testid='right' />} />);

  expect(screen.getByTestId('right')).toBeInTheDocument();
});

it('render with zIndex', () => {
  render(<NavBar zIndex={2} data-testid={testId} fixed />);

  expect(screen.getByTestId(testId)).toHaveStyleRule('z-index', '2');
});
