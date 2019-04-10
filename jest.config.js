module.exports = {
    testEnvironment: "node",
    restoreMocks: true,
    clearMocks: true,
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
};
