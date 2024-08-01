import { render, screen } from '@testing-library/react';
import { ShareSheet } from '..';

const testId = 'share-sheet';

it('render correctly', () => {
  const tree = render(<ShareSheet />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with title', () => {
  render(<ShareSheet title={<span data-testid='title' />} open />);

  expect(screen.getByTestId('title')).toBeInTheDocument();
});

it('render with description', () => {
  render(<ShareSheet description={<span data-testid='desc' />} open />);

  expect(screen.getByTestId('desc')).toBeInTheDocument();
});

it('render with cancelText', () => {
  render(<ShareSheet cancelText='cancel' open />);

  expect(screen.getByText('cancel')).toBeInTheDocument();
});

it('render with text icon', () => {
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
      open
    />,
  );

  expect(
    screen.getByTestId(testId).querySelector('.text-class'),
  ).toBeInTheDocument();
});

it('render with bultin icon', () => {
  render(
    <ShareSheet
      data-testid={testId}
      options={[
        {
          name: 'Wechat',
          icon: 'wechat',
        },
      ]}
      open
    />,
  );

  expect(screen.getByTestId(testId).innerHTML).toContain('img');
});
