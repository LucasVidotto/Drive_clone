/*
 * For a detailed explanation regarding each configuration property, visit:
 */

export default {

  clearMocks: true,
  restoreMocks: true,//vai limpar o mocks e inserir os mocks default
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters:[
    "text",
    "lcov"
  ],
  testEnviroment: "node",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  watchPathIgnorePatterns: [
    "node_modules"
  ],
  transformIgnorePatterns :["node_modules"],
  collectCoverageFrom: [
    "src/**.js", "!src/**/index.js"//pega todas as paginas .js e ignora a index
  ]
};
