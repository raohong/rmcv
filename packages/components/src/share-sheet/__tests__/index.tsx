import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShareSheetIconName } from '../type';
import ShareSheet from '..';

const testId = 'share-sheet';

test('render correctly', () => {
  const tree = render(<ShareSheet />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with title', () => {
  render(<ShareSheet title={<span data-testid="title" />} visible />);

  expect(screen.getByTestId('title')).toBeInTheDocument();
});

test('render with description', () => {
  render(<ShareSheet description={<span data-testid="desc" />} visible />);

  expect(screen.getByTestId('desc')).toBeInTheDocument();
});

test('render with cancelText', () => {
  render(<ShareSheet cancelText="cancel" visible />);

  expect(screen.getByText('cancel')).toBeInTheDocument();
});

test('render with text icon', () => {
  render(
    <ShareSheet
      data-testid={testId}
      options={[
        {
          name: 'Test Text',
          icon: 'text',
          className: 'text-class',
        },
      ]}
      visible
    />,
  );

  expect(
    screen.getByTestId(testId).querySelector('.text-class'),
  ).toBeInTheDocument();
});

test('render with bultin icon', () => {
  render(
    <ShareSheet
      data-testid={testId}
      options={[
        {
          name: 'Wechat',
          icon: ShareSheetIconName.WECHAT,
        },
      ]}
      visible
    />,
  );

  expect(screen.getByTestId(testId).innerHTML).toContain('img');
});
