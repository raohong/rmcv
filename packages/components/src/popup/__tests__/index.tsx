import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { getPrefixCls } from '../../_utils';
import Popup from '..';
import { PopupCloseIconPosition, PopupPositon } from '../type';

const testId = 'popup';

test('render correctly', () => {
  const tree = render(<Popup />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with visible', () => {
  const com = render(<Popup visible data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');

  /**
   * 从受控模式转为非受控模式，visible 应该是上次状态
   */
  com.rerender(<Popup data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveAttribute('aria-hidden', 'false');
});

const positions: PopupPositon[] = ['center', 'bottom', 'left', 'right', 'top'];
positions.forEach((pos) => {
  test(`render with position: ${pos}`, () => {
    render(<Popup data-testid={testId} position={pos} />);
    expect(screen.getByTestId(testId)).toHaveClass(
      getPrefixCls(`popup-${pos}`),
    );
  });
});

test(`render with round`, () => {
  render(<Popup data-testid={testId} round />);
  expect(screen.getByTestId(testId)).toHaveClass(getPrefixCls('popup-round'));
});

test(`render with lazyRender`, () => {
  const dom = render(<Popup data-testid={testId} lazyRender />);

  expect(
    dom.container.querySelector(`.${getPrefixCls('popup')}`),
  ).not.toBeInTheDocument();
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

const closeIconPositions: PopupCloseIconPosition[] = [
  'top-right',
  'top-left',
  'bottom-right',
  'bottom-left',
];
closeIconPositions.forEach((pos) => {
  test(`render with closeIconPosition: ${pos}`, () => {
    const dom = render(<Popup closeIconPosition={pos} closeable />);

    expect(
      dom.container.querySelector(
        `.${getPrefixCls(`popup-close-icon--${pos}`)}`,
      ),
    ).toBeInTheDocument();
  });
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
        onVisibleChange={(current) => {
          handler(current);
          set(current);
        }}
        visible={visible}
        overlay
        overlayClosable
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
