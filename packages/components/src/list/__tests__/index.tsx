import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { List, ListLoadingStatus, listClassNames } from '..';

const testId = 'list';

it('render correctly', () => {
  const tree = render(<List />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with loadingStatus', () => {
  render(<List loadingStatus={ListLoadingStatus.LOADING} data-testid={testId} />);

  expect(
    screen.getByTestId(testId).querySelector(`.${listClassNames.loadingIcon}`),
  ).toBeInTheDocument();
});

it('render with renderLoading', () => {
  render(
    <List
      loadingStatus={ListLoadingStatus.LOADING}
      renderLoading={() => <span data-testid='loading' />}
    />,
  );

  expect(screen.getByTestId('loading')).toBeInTheDocument();
});

it('render with renderError', () => {
  render(
    <List
      loadingStatus={ListLoadingStatus.ERROR}
      renderError={() => <span data-testid='error' />}
    />,
  );

  expect(screen.getByTestId('error')).toBeInTheDocument();
});

it('render with renderFinished', () => {
  render(
    <List
      loadingStatus={ListLoadingStatus.FINISHED}
      renderFinished={() => <span data-testid='finished' />}
    />,
  );

  expect(screen.getByTestId('finished')).toBeInTheDocument();
});
