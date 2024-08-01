import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Popup, popupClassNames } from '..';

const testId = 'popup';

it('render correctly', () => {
  const tree = render(<Popup />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with open', () => {
  render(<Popup open data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');
});

it(`render with position`, () => {
  render(<Popup data-testid={testId} position='bottom' />);
  expect(screen.getByTestId(testId)).toHaveClass(popupClassNames.positionBottom);
});

it(`render with round`, () => {
  render(<Popup data-testid={testId} round />);
  expect(screen.getByTestId(testId)).toHaveClass(popupClassNames.round);
});

it(`render with lazyRender`, () => {
  render(<Popup data-testid={testId} lazyRender />);

  expect(
    document.body.querySelector(`.${popupClassNames.root}`),
  ).not.toBeInTheDocument();
});

it(`render with closeable`, () => {
  render(<Popup data-testid={testId} closeable />);

  expect(
    document.body.querySelector(`.${popupClassNames.closeIcon}`),
  ).toBeInTheDocument();
});

it(`render with closeIcon`, () => {
  render(<Popup closeIcon={<span data-testid='close-icon' />} closeable />);

  expect(screen.getByTestId('close-icon').parentNode).toBeInTheDocument();
});

it(`render with closeIconPosition`, () => {
  render(<Popup closeIconPosition='top-right' open closeable />);

  expect(document.body.querySelector(`.${popupClassNames.closeIcon}`)).toHaveClass(
    popupClassNames.closeIconTopRight,
  );
});

it(`render with overlay`, () => {
  render(<Popup overlay={false} />);

  expect(
    document.body.querySelector(`.${popupClassNames.overlay}`),
  ).not.toBeInTheDocument();
});

it(`render with overlayClosable`, async () => {
  const Component: React.FC<{ handler: (open: boolean) => void }> = ({
    handler,
  }) => {
    const [open, set] = useState(true);

    return (
      <Popup
        data-testid={testId}
        onClose={() => {
          handler(false);
          set(false);
        }}
        open={open}
        overlayClosable
        overlay
      />
    );
  };

  const handler = jest.fn();
  render(<Component handler={handler} />);

  await userEvent.click(document.body.querySelector(`.${popupClassNames.overlay}`)!);
  expect(handler).toHaveBeenCalled();
});

it(`render with teleport`, () => {
  document.body.innerHTML = `
    <div id="root" data-testid="root"></div>
  `;
  render(
    <Popup
      data-testid={testId}
      teleport={() => document.getElementById('root')!}
      open
    />,
  );

  expect(screen.getByTestId('root')).toContainElement(screen.getByTestId(testId));
});
