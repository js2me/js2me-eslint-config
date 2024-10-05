module.exports = {
  plugins: [
    "sonarjs",
    'prettier',
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended-legacy',
    'plugin:unicorn/recommended'
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
    '**/__generated__/**',
    '__generated__.*'
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  settings: {
    'import/extensions': ['.ts'], // THIS GIVES A MAJOR PERFORMANCE BOOST
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js'],
    },
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.js', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
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
    'unicorn/no-null': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-export-from': 'off',
    "unicorn/prevent-abbreviations": [
      "error",
      {
        "allowList": {
          "getInitialProps": true,
          "props": true,
          "lib": true,
          "libs": true,
          "env": true,
          "Libs": true,
          "Envs": true,
          "acc": true,
          "params": true,
          "Params": true,
          "Props": true,
          "Prop": true,
          "prop": true,
          "Ref": true,
          "ref": true,
          "Doc": true,
          "doc": true,
          "Docs": true,
          "docs": true,
          "Lib": true,
          "args": true,
          "Args": true
        }
      }
    ],
    
    'sonarjs/function-return-type': 'off',
    'sonarjs/different-types-comparison': 'off',
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/no-redeclare': 'off',
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/prefer-single-boolean-return': 'off',
    'sonarjs/no-misused-promises': 'off',
    'sonarjs/mouse-events-a11y': 'off',
    'sonarjs/no-selector-parameter': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        singleQuote: true,
      },
    ],
    'import/no-unresolved': ['error'],
    'no-duplicate-imports': 'error',
    'no-trailing-spaces': 'error',
    '@typescript-eslint/no-unnecessary-template-expression': 'error',
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
