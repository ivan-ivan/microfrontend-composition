// eslint-disable-next-line no-undef
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
    }
}