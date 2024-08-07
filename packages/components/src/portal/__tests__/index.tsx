/* eslint-disable react/no-create-ref */
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import Portal from '../Portal';

const testId = 'portal';

it('render correctly', () => {
  const tree = render(
    <Portal>
      <span />
    </Portal>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with container', () => {
  render(
    <Portal>
      <span data-testid={testId} />
    </Portal>,
  );

  expect(screen.getByTestId(testId).parentElement).toBe(document.body);
});

it('render with ref', () => {
  const ref = createRef();

  render(
    <Portal ref={ref}>
      <span data-testid={testId} />
    </Portal>,
  );

  expect(ref.current).toBe(document.body);
});

it('render with ref and disablePortal', () => {
  const ref = createRef();

  render(
    <Portal ref={ref} disablePortal>
      <span data-testid={testId} />
    </Portal>,
  );

  expect(screen.getByTestId(testId)).toEqual(ref.current);
});
