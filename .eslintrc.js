module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  plugins: ['vue'],
  rules: {
    semi: 'off',
    indent: 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1
    }],
  },
  globals: {
    artifacts: true,
  },
}
