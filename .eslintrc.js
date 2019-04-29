module.exports = {
    parserOptions: {
      ecmaVersion: 7,
      ecmaFeatures: {
        impliedStrict: true,
        jsx: true,
        experimentalObjectRestSpread: true
      },
      sourceType: 'module'
    },
    parser: 'babel-eslint',
    env: {
      node: true,
      es6: true
    },
    extends: [
      'plugin:react/recommended'
    ],
    plugins: [
      'react',
      'react-native'
    ],
    rules: {
      'radix': 0,
      'comma-dangle': 0,

      'react/sort-comp': 0,
      'react/prop-types': 0,
      'react/no-string-refs': 0,
      'react/forbid-prop-types': 0,
      'react/require-default-props': 0,
      'react/no-did-mount-set-state': 0,
      'react/jsx-filename-extension': 0,
      'react/prefer-stateless-function': 0,

      'no-undef': 0,
      'no-console': 0,
      'global-require': 0,
      'linebreak-style': 0,
      'no-return-assign': 0,
      'no-useless-escape':0,
      'no-nested-ternary': 0,
      'no-underscore-dangle': 0,
      'arrow-body-style': 'warn',
      'function-paren-newline': 0,
      'class-methods-use-this': 0,

      
      'import/prefer-default-export': 0
    },
    globals: {
      "__DEV__": [true, true],
      "fetch": false,
      "navigator": false
    }
  }
  