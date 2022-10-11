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
    // todo replace css module @value with variables and delete this
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['value'] }],
    'at-rule-no-unknown': [true, { ignoreAtRules: ['value'] }],
    'function-no-unknown': [true, { ignoreFunctions: ['global'] }],
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
  },
};
