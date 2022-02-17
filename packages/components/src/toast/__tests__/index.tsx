import { act, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Toast from '..';

beforeEach(() => {
  act(() => {
    Toast.clear(true);
    Toast.__reset();
  });
});

test('set default option', () => {
  Toast.setDefaultOptions({
    className: 'default',
  });

  act(() => {
    Toast('message');
  });

  expect(screen.getByText('message').parentElement).toHaveClass('default');
});

test('hide toast', async () => {
  act(() => {
    Toast('message');
  });

  act(() => {
    Toast.clear();
  });

  expect(screen.queryByText('message')).not.toBeInTheDocument();
});

test('allow multiply', async () => {
  Toast.allowMultiple();

  act(() => {
    Toast('message');
  });

  act(() => {
    Toast('message');
  });

  expect(screen.queryAllByText('message').length).toBe(2);
});

test('set option with type', () => {
  Toast.setDefaultOptions({
    className: 'success-class',
    type: 'success',
  });

  Toast.setDefaultOptions({
    className: 'loading-class',
    type: 'loading',
  });

  Toast.allowMultiple();

  act(() => {
    Toast.success('success-message');
  });

  act(() => {
    Toast.loading('loading-message');
  });

  expect(screen.getByText('loading-message').parentElement).toHaveClass(
    'loading-class',
  );
  expect(screen.getByText('loading-message').parentElement).not.toHaveClass(
    'success-class',
  );

  expect(screen.getByText('success-message').parentElement).toHaveClass(
    'success-class',
  );
  expect(screen.getByText('success-message').parentElement).not.toHaveClass(
    'loading-class',
  );
});
