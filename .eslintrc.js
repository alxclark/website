module.exports = {
  extends: [
    'plugin:shopify/typescript',
    'plugin:shopify/react',
    'plugin:shopify/prettier',
    'plugin:shopify/webpack',
    'plugin:shopify/jest',
  ],
  rules: {
    // next.js link passes down the href to anchors
    'jsx-a11y/anchor-is-valid': 'off',
    // No i18n for now
    'shopify/jsx-no-hardcoded-content': 'off',
    // I like divs
    'shopify/jsx-prefer-fragment-wrappers': 'off',
    // Next.js includes React globally
    'react/react-in-jsx-scope': 'off',
    'lines-around-comment': 'off',
    // Let's us write todo comments
    'no-warning-comments': 'off',
    // let's us write unused function parameters that starts with an underscore
    'no-unused-vars': [2, {args: 'after-used', argsIgnorePattern: '^_'}],
    // These rules have too many false positives and will be remove
    // in future versions of the config
    'jsx-a11y/control-has-associated-label': 'off',
    'react/display-name': 'off',
    // There have been lots of discussions about turning this off because it's
    // too strict
    'shopify/jsx-no-complex-expressions': 'off',

    // These rules do not really make sense for TypeScript, we'll remove them
    // in the future
    'consistent-return': 'off',
    'import/named': 'off',

    // Doesn't require a eslint-enable comment for every eslint-disable comment
    'eslint-comments/disable-enable-pair': 'off',

    // This is an iffy rule we will probably just remove
    'no-prototype-builtins': 'off',

    // We don’t need nesting and ID, just one of them.
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],

    // testId pattern is deprecated
    'react/forbid-component-props': ['error', {forbid: ['testID']}],
    'react/forbid-dom-props': ['error', {forbid: ['testID']}],
    'import/no-extraneous-dependencies': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
  ignorePatterns: [
    'node_modules',
    '**/node_modules/*',
    '**/__generated__/*',
    'build',
    'coverage',
    'yarn.lock',
    'yarn-error.log',
    '*.yml',
    '*.json',
    '*.md',
    '*.mp4',
    '*.html',
    '*.graphql.d.ts',
  ],
  env: {
    node: true,
  },
};
