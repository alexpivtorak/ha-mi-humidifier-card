/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.cjs',
    '^lit$': '<rootDir>/node_modules/lit/index.js',
    '^lit/decorators.js$': '<rootDir>/node_modules/lit/decorators.js',
    '^lit-element/lit-element.js$': '<rootDir>/node_modules/lit-element/lit-element.js',
    '^lit-html$': '<rootDir>/node_modules/lit-html/lit-html.js'
  },
  setupFiles: ['<rootDir>/jest.setup.cjs'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        useESM: true
      }
    ]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(lit|@lit|lit-element|lit-html|@lit-labs|custom-card-helpers)/)'
  ],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    '!src/types.d.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  extensionsToTreatAsEsm: ['.ts']
}; 