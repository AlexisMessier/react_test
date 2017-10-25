// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint', // allows both flowtype and static class properties
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'prettier',
    'plugin:react/recommended',

  ],
  plugins: ['import', 'prettier'],
  settings: {
    'import/extensions': ['.js'],
  },
  rules: {
    indent: ['error', 2],
    'react/no-danger': ['off'],
    'react/display-name': ['off'],
    'react/jsx-key': ['error'],
    semi: ['error', 'never']
  }
};
