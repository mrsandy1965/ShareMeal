module.exports = {
  testEnvironment: 'node',
  testTimeout: 30000,
  collectCoverageFrom: [
    'routes/**/*.js',
    'middleware/**/*.js'
  ],
  coverageDirectory: 'coverage',
  verbose: true
};