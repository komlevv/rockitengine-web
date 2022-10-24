module.exports = {
  plugins: ['stylelint-prettier'],
  linebreaks: 'unix',
  ignoreFiles: ['**/*.js'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  rules: {
    'prettier/prettier': true,
    'comment-empty-line-before': null,
    'value-keyword-case': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'global', 'local', 'external'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', ':import'],
      },
    ],
    'function-no-unknown': [true, { ignoreFunctions: ['global'] }],
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected selector class to be camelCase',
      },
    ],
    'scss/dollar-variable-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected variable to be camelCase',
      },
    ],
  },
};
