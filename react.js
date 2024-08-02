module.exports = {
  extends: [
    require.resolve("./index.js"),
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: [],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'ignore' },
    ],
  },
}
