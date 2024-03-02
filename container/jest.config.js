// eslint-disable-next-line no-undef
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
    }
}