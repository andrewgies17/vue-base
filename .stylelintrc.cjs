module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-vue'],
  rules: {
    'declaration-empty-line-before': null,
    'color-hex-length': 'long',
    // Support tailwind:
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'config', 'variants', 'responsive', 'screen'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
    // End tailwind support
  },
};
