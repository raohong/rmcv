import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import ActionSheet, { ActionSheetAction } from '..';
import { getPrefixCls } from '../../_utils';
import { ActionSheetProps } from '../interface';

const testId = 'action-sheet';

const actions: ActionSheetAction[] = [
  { name: '选项一', color: 'red', className: 'color' },
  { name: '选项二', disabled: true, className: 'disabled' },
  { name: '选项三', loading: true, className: 'loading' },
];

test('render correctly', () => {
  const tree = render(<ActionSheet />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with visible', () => {
  render(<ActionSheet data-testid={testId} visible />);

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');
});

test('render with title', () => {
  render(
    <ActionSheet
      data-testid={testId}
      visible
      title={<span data-testid="title" />}
    />,
  );

  expect(screen.getByTestId('title')).toBeInTheDocument();
});

test('render with description', () => {
  render(
    <ActionSheet
      data-testid={testId}
      description={<span data-testid="desc" />}
      visible
    />,
  );

  expect(screen.getByTestId('desc')).toBeInTheDocument();
  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('action-sheet-close-icon')}`),
  ).toBeInTheDocument();
});

test('render with actions', () => {
  render(<ActionSheet data-testid={testId} actions={actions} visible />);

  const container = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('action-sheet-content')}`)!;

  expect(
    container.querySelectorAll(`.${getPrefixCls('action-sheet-item')}`).length,
  ).toBe(actions.length);

  expect(container.querySelector('.color')).toBeInTheDocument();
  expect(container.querySelector('.loading')).toBeInTheDocument();
  expect(container.querySelector('.disabled')).toBeInTheDocument();

  expect(container.querySelector('.color')).toHaveStyle({
    color: 'red',
  });
  expect(container.querySelector('.loading')).toHaveClass(
    getPrefixCls('action-sheet-item-loading'),
  );
  expect(container.querySelector('.disabled')).toHaveClass(
    getPrefixCls('action-sheet-item-disabled'),
  );
});

test('render with onSelect', async () => {
  const onSelect = jest.fn();

  render(
    <ActionSheet
      data-testid={testId}
      onSelect={onSelect}
      visible
      actions={actions}
    />,
  );

  await act(async () => {
    fireEvent.click(screen.getByTestId(testId).querySelector(`.color`)!);
  });

  expect(onSelect).toHaveBeenCalledWith(actions[0], 0);

  await act(async () => {
    fireEvent.click(screen.getByTestId(testId).querySelector(`.loading`)!);
  });

  expect(onSelect).toHaveBeenCalledTimes(1);

  await act(async () => {
    fireEvent.click(screen.getByTestId(testId).querySelector(`.disabled`)!);
  });

  expect(onSelect).toHaveBeenCalledTimes(1);
});

test('render with closeOnClickAction', async () => {
  const fn = jest.fn();

  const App = () => {
    const [visible, set] = useState(true);

    return (
      <ActionSheet
        data-testid={testId}
        actions={actions}
        visible={visible}
        onClose={() => {
          fn();
          set(false);
        }}
        closeOnClickAction
      />
    );
  };

  render(<App />);

  await act(async () => {
    fireEvent.click(screen.getByTestId(testId).querySelector(`.color`)!);
  });

  expect(fn).toHaveBeenCalled();
});

test('render with onCancel', async () => {
  const onCancel = jest.fn();

  render(
    <ActionSheet
      data-testid={testId}
      actions={actions}
      cancelText="cancel"
      onCancel={onCancel}
      visible
    />,
  );

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('action-sheet-cancel')}`),
  ).not.toBeNull();

  await act(async () => {
    fireEvent.click(
      screen
        .getByTestId(testId)
        .querySelector(`.${getPrefixCls('action-sheet-cancel')}`)!,
    );
  });

  expect(onCancel).toHaveBeenCalled();
});

test('render with onBeforeClose', async () => {
  const App = (props: ActionSheetProps) => {
    const [visible, set] = useState(true);

    return (
      <ActionSheet
        data-testid={testId}
        actions={actions}
        visible={visible}
        onClose={() => set(false)}
        closeOnClickAction
        {...props}
      />
    );
  };

  const onBeforeClose = jest.fn(() => false);

  render(<App onBeforeClose={onBeforeClose} />);

  await act(async () => {
    fireEvent.click(screen.getByTestId(testId).querySelector(`.color`)!);
  });

  expect(onBeforeClose).toHaveBeenCalled();

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');
});
