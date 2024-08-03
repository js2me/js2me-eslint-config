module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: [
    'public*',
    'node_modules',
    'dist',
    'build',
    '.vscode',
    '.kube',
    '.idea',
    '.dockerignore',
    '.gitlab-ci.yml',
    'nginx.conf',
    'jsconfig.json',
    '*.json',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js'],
    },
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.js', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  globals: {
    process: true,
  },
  env: {
    es6: true,
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 120,
        singleQuote: true,
      },
    ],
    'import/no-unresolved': ['error'],
    'no-duplicate-imports': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'object-shorthand': 'error',
    'no-empty-interface': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: false, functions: false },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['external'],
          ['builtin'],
          ['internal'],
          ['parent'],
          ['sibling'],
          ['object'],
          ['index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: [
        '*{spec, test, tests, stories}.*',
        '**/__tests__/**',
        '**/__stories__/**',
      ],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
    {
      files: [
        './*.config.js', 
        './*.config.ts', 
        './*.config.cjs', 
        './*.config.json', 
        './*config.json',
        './*config.*.json'
      ],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/default': 'off',
      },
    }
  ],
}
