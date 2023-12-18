module.exports = {
  root: true,
  extends: [
    'airbnb',
    'prettier',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    polyfills: ['Promise'],
  },
  plugins: ['react', 'babel', 'jest', '@typescript-eslint', 'unicorn', 'markdown'],
  // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      excludedFiles: ['**/*.md/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        '@typescript-eslint/no-unused-expressions': 2,
        'no-undef': 0,
        'no-redeclare': 0,
        'no-shadow': 0,
        'no-unused-vars': 0,
      },
    },
    {
      files: ['packages/components/src/*/demos/*'],
      rules: {
        'no-console': 0,
        'react/no-array-index-key': 0,
        'no-param-reassign': 0,
      },
    },
    {
      files: ['packages/components/src/**/*.cypress.{tsx,jsx}'],
      rules: {
        'jest/valid-expect': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        'jest/valid-expect-in-promise': 0,
        'no-unused-expressions': 0,
        'compat/compat': 0,
      },
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: ['*/*.md/*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 0,
        'react/jsx-no-undef': 0,
        'no-console': 'off',
        'import/no-unresolved': 'off',
      },
    },
    {
      files: ['./scripts/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],

  rules: {
    'react/function-component-definition': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false },
    ],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/static-property-placement': 0,
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 0,
    'react/button-has-type': 0,
    'react/no-children-prop': 0,
    'react/default-props-match-prop-types': 0,
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks
    'jest/no-test-callback': 0,
    'jest/expect-expect': 0,
    'jest/no-done-callback': 0,
    'jest/valid-title': 0,
    'jest/no-conditional-expect': 0,

    // label-has-for has been deprecated
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,

    'import/extensions': 0,
    'import/no-extra': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'arrow-body-style': 0,
    'no-use-before-define': 0,
    'no-restricted-properties': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'no-restricted-syntax': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-no-useless-fragment': 0,
    'no-nested-ternary': 0,
    'consistent-return': 0,
    'react/no-unstable-nested-components': 0,
  },

  globals: {
    cy: true,
    Cypress: true,
  },
};
