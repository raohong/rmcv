import antfu from '@antfu/eslint-config';

export default antfu(
  {
    ignores: [
      'node_modules',
      '**/node_modules/**',
      'dist',
      '**/dist/**',
      'packages/*/dist',
      'packages/*/dist/**',
      '**/*/*.cypress-test',
      'docs/src/.data/**/*',
      'docs/src/pages/**/*',
    ],
    stylistic: {
      semi: true,
      quotes: 'single',
    },
    react: true,
    lessOpinionated: true,
  },
  {
    files: ['**/*.md/**/**.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 0,
    },
  },
  {
    rules: {
      'style/jsx-quotes': ['error', 'prefer-single'],
      '@typescript-eslint/consistent-type-definitions': 0,
      'ts/ban-ts-comment': 0,
      'react-refresh/only-export-components': 0,
      'no-children-prop': 0,
      'react/no-children-prop': 0,
      'react-dom/no-missing-button-type': 0,
      'ts/no-use-before-define': 0,
      'react/no-clone-element': 0,
      'node/prefer-global/process': 0,
    },
  },
);
