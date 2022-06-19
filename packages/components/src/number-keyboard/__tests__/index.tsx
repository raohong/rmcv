import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberKeyboard from '../NumberKeyboard';
import { getPrefixCls } from '../../_utils';

const testId = 'number-keyboard';

const setupExternalButton = () => {
  const extraButton = document.createElement('button');

  extraButton.setAttribute('data-testid', 'away');
  document.body.appendChild(extraButton);
};

afterEach(() => {
  document.body.querySelector(`[data-testid="away"]`)?.remove();
});

test('render correctly', () => {
  const tree = render(<NumberKeyboard />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with title', () => {
  render(<NumberKeyboard title="title" />);

  expect(screen.getByText('title')).toBeInTheDocument();
});

test('render with closeButtonText', () => {
  render(<NumberKeyboard closeButtonText="Confirm" data-testid={testId} />);

  expect(screen.getByText('Confirm')).toBeInTheDocument();
  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('number-keyboard-header')}`),
  ).toBeInTheDocument();
});

test('render with deleteButtonText', () => {
  render(<NumberKeyboard deleteButtonText="Delete" />);

  expect(screen.getByText('Delete')).toBeInTheDocument();
});

test('render with extraKey', () => {
  const com = render(<NumberKeyboard data-testid={testId} />);

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('number-keyboard-collapse-icon')}`),
  ).toBeInTheDocument();

  com.rerender(<NumberKeyboard data-testid={testId} extraKey="X" />);

  expect(screen.getByText('X')).toBeInTheDocument();
  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('number-keyboard-collapse-icon')}`),
  ).not.toBeInTheDocument();
});

describe('render with custom theme', () => {
  test('has expected layout', () => {
    render(<NumberKeyboard theme="custom" data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(
      getPrefixCls('number-keyboard-theme-custom'),
    );

    expect(
      screen
        .getByTestId(testId)
        .querySelector(`.${getPrefixCls('number-keyboard-sidebar')}`),
    ).toBeInTheDocument();
  });

  test('render with  extraKey', () => {
    const com = render(
      <NumberKeyboard theme="custom" extraKey="." data-testid={testId} />,
    );
    expect(screen.getByText('.')).toBeInTheDocument();
    expect(screen.getByText('0')).toHaveClass(
      getPrefixCls('number-keyboard-key-wider'),
    );

    com.rerender(
      <NumberKeyboard theme="custom" extraKey={['00', '.']} data-testid={testId} />,
    );

    expect(screen.getByText('00')).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();
    expect(screen.getByText('0')).not.toHaveClass(
      getPrefixCls('number-keyboard-key-wider'),
    );
  });

  test('close button not rendering in header', () => {
    render(
      <NumberKeyboard theme="custom" closeButtonText="Close" data-testid={testId} />,
    );

    expect(
      screen
        .getByTestId(testId)
        .querySelector(`.${getPrefixCls('number-keyboard-header')}`),
    ).not.toBeInTheDocument();

    expect(
      screen
        .getByTestId(testId)
        .querySelector(`.${getPrefixCls('number-keyboard-sidebar')}`),
    ).toContainElement(
      screen
        .getByTestId(testId)
        .querySelector(`.${getPrefixCls('number-keyboard-custom-close-button')}`),
    );
  });
});

test('render with blurOnClose', () => {
  const fn = jest.fn();

  render(
    <NumberKeyboard
      closeButtonText="Close"
      data-testid={testId}
      onBlur={fn}
      blurOnClose
    ></NumberKeyboard>,
  );

  userEvent.click(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('number-keyboard-close-button')}`)!,
  );

  expect(fn).toBeCalled();
});

test('internal control visible state with children', () => {
  setupExternalButton();

  render(
    <NumberKeyboard data-testid={testId}>
      <button data-testid="open"></button>
    </NumberKeyboard>,
  );

  userEvent.click(screen.getByTestId('open'));

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');
  userEvent.click(screen.getByTestId('away'));
  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'true');
});

test('clicking outside button should close when hideOnClickOutside = true', () => {
  setupExternalButton();

  const com = render(<NumberKeyboard data-testid={testId} defaultVisible />);

  userEvent.click(screen.getByTestId('away'));
  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'true');
});

test('controlled value', () => {
  const App = () => {
    const [value, setValue] = useState<string>();

    return (
      <>
        <NumberKeyboard
          data-testid={testId}
          value={value}
          onChange={setValue}
          defaultVisible
        />
        <span data-testid="content">{value}</span>
      </>
    );
  };

  render(<App />);

  userEvent.click(screen.getByText('1'));
  userEvent.click(screen.getByText('2'));
  expect(screen.getByTestId('content')).toHaveTextContent('12');

  userEvent.click(
    screen
      .getByTestId(testId)
      .querySelector(`.${getPrefixCls('number-keyboard-delete-button')}`)!,
  );
  expect(screen.getByTestId('content')).toHaveTextContent('1');
});
