module.exports = {
  verbose: true,
  moduleNameMapper: {
    "@tarojs/components": "@tarojs/components/dist-h5/react",
    "^.+\\.(css|scss|less)$": "<rootDir>/test/style-mock.js",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.esm.js?$": "ts-jest",
  },
  rootDir: __dirname,
  // setupFilesAfterEnv: ["<rootDir>/test/setup"],
  setupFiles: ["<rootDir>/test/setup"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!@taro)",
    "^.+\\.(css|sass|scss|less)$",
  ],
};
