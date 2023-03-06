/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'prettier',
    'plugin:prettier/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        // tab缩进大小,默认为2
        tabWidth: 2,
        // 使用tab缩进，默认false
        useTabs: false,
        // 使用分号, 默认true
        semi: true,
        // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
        singleQuote: true,
        // 行尾逗号,默认none,可选 none|es5|all
        trailingComma: 'all',
        // 对象中的空格 默认true
        bracketSpacing: true,
        // 箭头函数参数括号 默认avoid 可选 avoid| always
        arrowParens: 'always',
        printWidth: 80,
        singleAttributePerLine: false,
        // JSX标签闭合位置 默认false
        jsxBracketSameLine: true,
        bracketSameLine: true,
        vueIndentScriptAndStyle: false,
        endOfLine: 'auto',
      },
    ],
    'prefer-const': ['off'],
    'no-var': [0],
    'object-curly-spacing': [
      1,
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    endOfLine: 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off', // setup()
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'off',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'off',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
