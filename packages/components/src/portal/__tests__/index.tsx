import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import Portal from '..';

const testId = 'portal';

test('render correctly', () => {
  const tree = render(
    <Portal>
      <span />
    </Portal>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with container', () => {
  render(
    <Portal>
      <span data-testid={testId} />
    </Portal>,
  );

  expect(screen.getByTestId(testId).parentElement).toBe(document.body);
});

test('render with ref', () => {
  const ref = createRef();

  render(
    <Portal ref={ref}>
      <span data-testid={testId} />
    </Portal>,
  );

  expect(ref.current).toBe(document.body);
});

test('render with ref and disablePortal', () => {
  const ref = createRef();

  render(
    <Portal ref={ref} teleport={() => document.body} disablePortal>
      <span data-testid={testId} />
    </Portal>,
  );

  expect(screen.getByTestId(testId)).toEqual(ref.current);
});
