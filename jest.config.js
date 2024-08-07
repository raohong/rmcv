/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  snapshotFormat: { escapeString: false, printBasicPrototype: false },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '^rmc-vant': '<rootDir>/packages/components/src',
    '^@rmc-vant/(.+)': '<rootDir>/packages/$1/src',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
};
