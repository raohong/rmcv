import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  expect.extend(matchers);

  globalThis.ResizeObserver = ResizeObserver;
  window.ResizeObserver = ResizeObserver;
});

afterEach(() => {
  cleanup();
});
