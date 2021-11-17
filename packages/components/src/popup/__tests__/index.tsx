import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import Popup from '..';

const testId = 'popup';

test('render correctly', () => {
  const tree = render(<Popup />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with visible', () => {
  render(<Popup visible data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');
});

test(`render with position`, () => {
  render(<Popup data-testid={testId} position="bottom" />);
  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls(`popup-bottom`));
});

test(`render with round`, () => {
  render(<Popup data-testid={testId} round />);
  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('popup-round'));
});

test(`render with lazyRender`, () => {
  const dom = render(<Popup data-testid={testId} lazyRender={false} />);

  expect(
    dom.container.querySelector(`.${getPrefixCls('popup')}`),
  ).toBeInTheDocument();
});

test(`render with closeable`, () => {
  const dom = render(<Popup data-testid={testId} closeable />);

  expect(
    dom.container.querySelector(`.${getPrefixCls('popup-close-icon')}`),
  ).toBeInTheDocument();
});

test(`render with closeIcon`, () => {
  const dom = render(
    <Popup closeIcon={<span className="close-icon" />} closeable />,
  );

  expect(dom.container.querySelector('.close-icon')).toBeInTheDocument();
});

test(`render with closeIconPosition`, () => {
  const dom = render(<Popup closeIconPosition="top-right" closeable />);

  expect(
    dom.container.querySelector(
      `.${getPrefixCls(`popup-close-icon--top-right`)}`,
    ),
  ).toBeInTheDocument();
});

test(`render with overlay`, () => {
  const dom = render(<Popup overlay={false} />);

  expect(
    dom.container.querySelector(`.${getPrefixCls('popup-overlay')}`),
  ).not.toBeInTheDocument();
});

test(`render with overlayClassName`, () => {
  const dom = render(<Popup overlayClassName="custom-overlay" overlay />);

  expect(dom.container.querySelector(`.custom-overlay`)).toBeInTheDocument();
});

test(`render with overlayStyle`, () => {
  const dom = render(
    <Popup
      overlayStyle={{
        color: 'red',
      }}
      overlay
    />,
  );

  expect(
    dom.container.querySelector(`.${getPrefixCls('overlay')}`),
  ).toHaveStyle({
    color: 'red',
  });
});

test(`render with overlayClosable`, () => {
  const Component: React.FC<{ handler: (visible: boolean) => void }> = ({
    handler,
  }) => {
    const [visible, set] = useState(true);

    return (
      <Popup
        data-testid={testId}
        onClose={() => {
          handler(false);
          set(false);
        }}
        visible={visible}
        overlayClosable
        overlay
      />
    );
  };

  const handler = jest.fn();
  const dom = render(<Component handler={handler} />);

  userEvent.click(dom.container.querySelector(`.${getPrefixCls('overlay')}`)!);
  expect(handler).toBeCalled();
  expect(screen.getByTestId(testId)).not.toBeVisible();
});

test(`render with getContainer`, () => {
  document.body.innerHTML = `
    <div id="root" data-testid="root"></div>
  `;
  render(
    <Popup
      data-testid={testId}
      visible
      getContainer={() => document.getElementById('root')!}
    />,
  );

  expect(screen.getByTestId('root')).toContainElement(
    screen.getByTestId(testId),
  );
});
