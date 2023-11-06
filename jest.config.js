module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.husky/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/app/**/*.ts(x)?',
    '!src/app/components/**/stories.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
