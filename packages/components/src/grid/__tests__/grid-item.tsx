import { render, screen } from '@testing-library/react';
import GridItem from '../GridItem';
import { gridClassNames } from '../classNames';
import type { GridComponentState } from '../interface';

const testId = 'grid-item';

const state = {
  clickable: false,
  gutter: 0,
  column: 1,

  direction: 'horizontal',
  center: false,
  square: false,
  border: false,
  iconSize: 20,
} satisfies GridComponentState;

const states = {
  slotClassNames: gridClassNames,
  componentState: state,
};

it('render correctly', () => {
  const tree = render(<GridItem {...states} />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with icon', () => {
  render(<GridItem data-testid={testId} icon='text-icon' {...states} />);

  expect(screen.getByText('text-icon')).toBeInTheDocument();
});

it('render with iconSize', () => {
  render(
    <GridItem
      data-testid={testId}
      icon='text-icon'
      {...states}
      componentState={{
        ...states.componentState,
        iconSize: 24,
      }}
    />,
  );

  expect(screen.getByText('text-icon')).toHaveStyleRule('font-size', '24px');
});

it('render with label', () => {
  render(<GridItem data-testid={testId} label='text' {...states} />);

  expect(screen.getByText('text')).toHaveClass(gridClassNames.itemText);
});

it('render with contentClassName', () => {
  render(<GridItem data-testid={testId} contentClassName='test' {...states} />);

  expect(screen.getByTestId(testId).querySelector('.test')).not.toBeNull();
});
