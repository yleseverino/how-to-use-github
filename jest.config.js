// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
