// fork antd

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:compat/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'babel',
    'jest',
    '@typescript-eslint',
    'react-hooks',
    'unicorn',
    'markdown',
  ],
  settings: {
    polyfills: ['Promise'],
  },
  // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-unused-expressions': 2,
        'no-unused-expressions': 'off',
        'no-undef': 0,
        'import/no-unresolved': 'off',
        'no-unused-vars': 0,
        'no-redeclare': 0,
      },
    },
    {
      files: ['packages/components/src/*/demos/*'],
      rules: {
        'no-console': 0,
        'react/no-array-index-key': 0,
      },
    },
    {
      files: ['packages/components/src/*/index.md'],
      processor: 'markdown/markdown',
    },
  ],

  rules: {
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
    'arrow-body-style': 0,
    'no-use-before-define': 0,
    'no-restricted-properties': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
  },
};
