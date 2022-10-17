import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import List, { ListLoadingStatus } from '..';
import { getPrefixCls } from '../../_utils';

const testId = 'list';

test('render correctly', () => {
  const tree = render(<List />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with loadingStatus', () => {
  render(<List loadingStatus={ListLoadingStatus.LOADING} data-testid={testId} />);

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('list-loading-icon')}`),
  ).toBeInTheDocument();
});

test('render with renderLoading', () => {
  render(
    <List
      loadingStatus={ListLoadingStatus.LOADING}
      renderLoading={() => <span data-testid="loading" />}
    />,
  );

  expect(screen.getByTestId('loading')).toBeInTheDocument();
});

test('render with renderError', () => {
  render(
    <List
      loadingStatus={ListLoadingStatus.ERROR}
      renderErrror={() => <span data-testid="error" />}
    />,
  );

  expect(screen.getByTestId('error')).toBeInTheDocument();
});

test('render with renderFinished', () => {
  render(
    <List
      loadingStatus={ListLoadingStatus.FINISHED}
      renderFinished={() => <span data-testid="finished" />}
    />,
  );

  expect(screen.getByTestId('finished')).toBeInTheDocument();
});
