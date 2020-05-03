module.exports = {
  "roots": [
    "<rootDir>/src",
    "<rootDir>/spec"
  ],
  "testMatch": [
    "**/spec/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}