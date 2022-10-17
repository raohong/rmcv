import { VolumeOutlined } from '@rmc-vant/icons';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import NoticeBar from '..';
import { getPrefixCls } from '../../_utils';

const testId = 'notice-bar';

test('render correctly', () => {
  const tree = render(<NoticeBar text="text" />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with color', () => {
  render(<NoticeBar color="red" data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyle({
    color: 'red',
  });
});

test('render with background', () => {
  render(<NoticeBar background="blue" data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveStyle({
    background: 'blue',
  });
});

test('render with iconColor and leftColor', () => {
  render(
    <NoticeBar
      leftIcon={<VolumeOutlined data-testid="volume-icon" />}
      iconColor="green"
      data-testid={testId}
    />,
  );

  const icons = screen
    .getByTestId(testId)
    .querySelectorAll(`.${getPrefixCls('notice-bar-icon')}`);

  expect(screen.getByTestId('volume-icon')).toBeInTheDocument();

  icons.forEach((item) => {
    expect(item).toHaveStyle({
      color: 'green',
    });
  });
});

test('render with mode: closeable', () => {
  const onClose = jest.fn();

  render(<NoticeBar mode="closeable" onClose={onClose} data-testid={testId} />);

  expect(screen.getByLabelText('Cross')).toBeInTheDocument();

  fireEvent.click(screen.getByLabelText('Cross'));

  expect(onClose).toHaveBeenCalled();
});

test('render with mode: link', () => {
  render(<NoticeBar mode="link" data-testid={testId} />);

  expect(screen.getByLabelText('Arrow')).toBeInTheDocument();
});
