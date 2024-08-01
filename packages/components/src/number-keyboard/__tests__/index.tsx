import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import NumberKeyboard from '../NumberKeyboard';
import { numberKeyboardClassNames } from '../classNames';

const testId = 'number-keyboard';

const setupExternalButton = () => {
  const extraButton = document.createElement('button');

  extraButton.setAttribute('data-testid', 'away');
  document.body.appendChild(extraButton);
};

afterEach(() => {
  document.body.querySelector(`[data-testid="away"]`)?.remove();
});

it('render correctly', () => {
  const tree = render(<NumberKeyboard />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with title', () => {
  render(<NumberKeyboard title='title' />);

  expect(screen.getByText('title')).toBeInTheDocument();
});

it('render with closeButtonText', () => {
  render(<NumberKeyboard closeButtonText='Confirm' data-testid={testId} />);

  expect(screen.getByText('Confirm')).toBeInTheDocument();
  expect(
    screen.getByTestId(testId).querySelector(`.${numberKeyboardClassNames.header}`),
  ).toBeInTheDocument();
});

it('render with deleteButtonText', () => {
  render(<NumberKeyboard deleteButtonText='Delete' />);

  expect(screen.getByText('Delete')).toBeInTheDocument();
});

it('render with extraKey', () => {
  const com = render(<NumberKeyboard data-testid={testId} />);

  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${numberKeyboardClassNames.collapseIcon}`),
  ).toBeInTheDocument();

  com.rerender(<NumberKeyboard data-testid={testId} extraKey='X' />);

  expect(screen.getByText('X')).toBeInTheDocument();
  expect(
    screen
      .getByTestId(testId)
      .querySelector(`.${numberKeyboardClassNames.collapseIcon}`),
  ).not.toBeInTheDocument();
});

describe('render with custom theme', () => {
  it('has expected layout', () => {
    render(<NumberKeyboard theme='custom' data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(numberKeyboardClassNames.custom);
  });

  it('render with  extraKey', () => {
    render(<NumberKeyboard theme='custom' extraKey='.' data-testid={testId} />);
    expect(screen.getByText('.')).toBeInTheDocument();
    expect(screen.getByText('0')).toHaveStyleRule('grid-column', 'span 2');
  });

  it('close button not rendering in header', () => {
    render(
      <NumberKeyboard theme='custom' closeButtonText='Close' data-testid={testId} />,
    );

    expect(
      screen
        .getByTestId(testId)
        .querySelector(`.${numberKeyboardClassNames.header}`),
    ).toBeNull();

    expect(
      screen
        .getByTestId(testId)
        .querySelector(`.${numberKeyboardClassNames.sidebar}`),
    ).toContainElement(
      screen
        .getByTestId(testId)
        .querySelector(`.${numberKeyboardClassNames.deleteButton}`),
    );
  });
});

it('render with blurOnClose', async () => {
  const fn = jest.fn();

  render(
    <NumberKeyboard
      closeButtonText='Close'
      data-testid={testId}
      onBlur={fn}
      blurOnClose
    >
    </NumberKeyboard>,
  );

  await userEvent.click(
    screen
      .getByTestId(testId)
      .querySelector(`.${numberKeyboardClassNames.closeButton}`)!,
  );

  expect(fn).toHaveBeenCalled();
});

it('internal control visible state with children', async () => {
  setupExternalButton();

  render(
    <NumberKeyboard data-testid={testId}>
      <button data-testid='open'></button>
    </NumberKeyboard>,
  );

  await userEvent.click(screen.getByTestId('open'));

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');
  await userEvent.click(screen.getByTestId('away'));
  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'true');
});

it('clicking outside button should close when hideOnClickOutside = true', async () => {
  setupExternalButton();

  render(<NumberKeyboard data-testid={testId} defaultOpen />);

  await userEvent.click(screen.getByTestId('away'));
  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'true');
});

it('controlled value', async () => {
  const App = () => {
    const [value, setValue] = useState<string>();

    return (
      <>
        <NumberKeyboard
          data-testid={testId}
          value={value}
          onChange={setValue}
          defaultOpen
        />
        <span data-testid='content'>{value}</span>
      </>
    );
  };

  render(<App />);

  await userEvent.click(screen.getByText('1'));
  await userEvent.click(screen.getByText('2'));
  expect(screen.getByTestId('content')).toHaveTextContent('12');

  await userEvent.click(
    screen
      .getByTestId(testId)
      .querySelector(`.${numberKeyboardClassNames.deleteButton}`)!,
  );
  expect(screen.getByTestId('content')).toHaveTextContent('1');
});
