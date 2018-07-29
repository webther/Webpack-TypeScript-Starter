module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx))',
    '<rootDir>/(**/*.spec.(js|jsx|ts|tsx))'
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/.cache/"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}