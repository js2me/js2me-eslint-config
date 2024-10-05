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
    project: 'tsconfig.json',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'], // THIS GIVES A MAJOR PERFORMANCE BOOST
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'ignore' },
    ],

    'sonarjs/sonar-prefer-read-only-props': 'off',
    'sonarjs/jsx-no-useless-fragment': 'off',
    'sonarjs/rules-of-hooks': 'off',
  },
}
