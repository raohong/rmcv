import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  expect.extend(matchers);
});

afterEach(() => {
  cleanup();
});
