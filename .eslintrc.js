module.exports = {
  extends: ['standard-with-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['react-hooks'],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'multiline-ternary': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'yield-star-spacing': ['error', { before: false, after: true }],
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error'
  }
}
