module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    'node_modules',
  ],
  collectCoverage: true,
  moduleNameMapper: {
    '@/theme/(.*)': '<rootDir>/src/theme/$1',
    '@/infra/(.*)': '<rootDir>/src/infra/$1',
    '@/components/(.*)': '<rootDir>/src/components/$1',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '/node_modules/',
    'jest.config.js',
    'test-report.xml',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
  ],
};
