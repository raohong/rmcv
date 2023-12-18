import { act, fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import ActionSheet, { ActionSheetAction } from '..';
import { actionSheetClassNames } from '../classNames';
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
  render(<ActionSheet data-testid={testId} open />);

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');
});

test('render with title', () => {
  render(
    <ActionSheet data-testid={testId} title={<span data-testid="title" />} open />,
  );

  expect(screen.getByTestId('title')).toBeInTheDocument();
});

test('render with description', () => {
  render(
    <ActionSheet
      data-testid={testId}
      description={<span data-testid="desc" />}
      open
    />,
  );

  expect(screen.getByTestId('desc')).toBeInTheDocument();
  expect(
    screen.getByTestId(testId).querySelector(`.${actionSheetClassNames.closeIcon}`),
  ).toBeInTheDocument();
});

test('render with actions', () => {
  render(<ActionSheet data-testid={testId} actions={actions} open />);

  const container = screen
    .getByTestId(testId)
    .querySelector(`.${actionSheetClassNames.content}`)!;

  expect(container.querySelectorAll(`.${actionSheetClassNames.item}`).length).toBe(
    actions.length,
  );

  expect(container.querySelector('.color')).toBeInTheDocument();
  expect(container.querySelector('.loading')).toBeInTheDocument();
  expect(container.querySelector('.disabled')).toBeInTheDocument();

  expect(container.querySelector('.color')).toHaveStyle({
    color: 'red',
  });
  expect(container.querySelector('.loading')).toHaveClass(
    actionSheetClassNames.itemLoading,
  );
  expect(container.querySelector('.disabled')).toHaveClass(
    actionSheetClassNames.itemDisabled,
  );
});

test('render with onSelect', async () => {
  const onSelect = jest.fn();

  render(
    <ActionSheet data-testid={testId} onSelect={onSelect} actions={actions} open />,
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
    const [open, set] = useState(true);

    return (
      <ActionSheet
        data-testid={testId}
        actions={actions}
        open={open}
        onOpenChange={set}
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
      open
    />,
  );

  expect(screen.getByText('cancel')).toBeInTheDocument();

  await act(async () => {
    fireEvent.click(screen.getByText('cancel'));
  });

  expect(onCancel).toHaveBeenCalled();
});

test('render with onBeforeClose', async () => {
  const App = (props: ActionSheetProps) => {
    const [open, set] = useState(true);

    return (
      <ActionSheet
        data-testid={testId}
        actions={actions}
        open={open}
        onOpenChange={set}
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
