/* global module */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'react-app/jescst',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'semi': ['error', 'always'], // enforce semicolons
    'react/react-in-jsx-scope': 'off', // No longer required in React 17+
  },
};
