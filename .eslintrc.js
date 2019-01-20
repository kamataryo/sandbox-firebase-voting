module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    'array-callback-return': ['error'],
    'quote-props': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    eqeqeq: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'valid-jsdoc': ['off'],
    'key-spacing': ['off'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-dupe-args': ['error'],
    'no-console': ['warn'],
    'no-const-assign': ['error'],
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    'no-unused-vars': ['error'],
    'no-undefined': ['error'],
    'no-var': ['error'],
    'no-multiple-empty-lines': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': [
      'off',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          MethodDefinition: true,
        },
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'space-before-blocks': [
      'error',
      { functions: 'always', keywords: 'always', classes: 'always' },
    ],
    'space-unary-ops': ['error'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'sort-imports': ['off'],
    'react/no-array-index-key': ['off'],
    'react/jsx-no-bind': [
      'warn',
      {
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowBind: false,
      },
    ],
    'react/boolean-prop-naming': ['off'],
    'react/no-children-prop': ['error'],
    'react/no-danger': ['error'],
    'react/no-danger-with-children': ['error'],
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-direct-mutation-state': ['error'],
    'react/no-find-dom-node': ['error'],
    'react/no-is-mounted': ['error'],
    'react/no-multi-comp': ['off'],
    'react/no-string-refs': ['error'],
    'react/no-unescaped-entities': ['error'],
    'react/no-unknown-property': ['error'],
    'react/no-unused-prop-types': ['error'],
    'react/no-unused-state': ['error'],
    'react/prefer-es6-class': ['error'],
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/react-in-jsx-scope': ['error'],
    'react/require-default-props': ['error'],
    'react/require-optimization': ['warn'],
    'react/require-render-return': ['error'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/sort-comp': ['error'],
    'react/sort-prop-types': ['off'],
    'react/style-prop-object': ['error'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', { when: 'always' }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-first-prop-new-line': ['off'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': ['error'],
    'react/jsx-max-props-per-line': ['off'],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-no-literals': ['error'],
    'react/jsx-no-target-blank': ['error'],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-sort-props': [
      'off',
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
      },
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
  },
}
