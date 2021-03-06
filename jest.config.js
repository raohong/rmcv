/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/'],
};
