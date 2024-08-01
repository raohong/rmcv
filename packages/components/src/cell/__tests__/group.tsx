import { render, screen } from '@testing-library/react';
import { Cell, CellGroup, cellClassNames, cellGroupClassNames } from '..';

const testId = 'cell-group';

it('render correctly', () => {
  const tree = render(<CellGroup />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with title', () => {
  render(<CellGroup data-testid={testId} title='title' />);

  expect(screen.getByText('title')).not.toBeNull();
});

it('render with border', () => {
  render(<CellGroup data-testid={testId} />);

  expect(screen.getByTestId(testId)).toHaveClass(cellGroupClassNames.root);
});

it('render with inset', () => {
  render(<CellGroup data-testid={testId} inset />);

  expect(screen.getByTestId(testId)).toHaveClass(cellGroupClassNames.inset);
});

it('render with size="large"', () => {
  render(
    <CellGroup data-testid={testId} size='large'>
      <Cell value='1' />
      <Cell value='2' />
    </CellGroup>,
  );

  const list = screen
    .getByTestId(testId)
    .querySelectorAll(`.${cellClassNames.sizeLarge}`);

  expect(list.length).toBe(2);
});
