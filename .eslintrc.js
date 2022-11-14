module.exports = {
  plugins: ['import', 'react-hooks', 'prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 2,
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '#**/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@**/**',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
    'import/imports-first': 2,
    'import/first': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 0,
    'import/no-named-as-default': 0,
    'no-console': ['error', { allow: ['error'] }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': [2, { 'ts-ignore': 'allow-with-description', minimumDescriptionLength: 10 }],
    '@typescript-eslint/no-explicit-any': 0,
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx', 'jest.config.js'],
      rules: {
        'import/imports-first': 0,
        'import/first': 0,
        'import/order': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
}
