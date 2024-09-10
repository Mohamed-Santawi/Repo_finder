import globals from 'globals';
import js from '@eslint/js';

export default [
    {
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                sourceType: 'module', // Enable ES6 module syntax
            },
        }
    },
    js.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'warn',
            'semi': ['error', 'always'],
            'space-before-function-paren': ['error', 'always'],
            'space-in-parens': ['error', 'always'],
            'space-before-blocks': ['error', 'always'],
            'block-spacing': ['error', 'always'],
            'quotes': ['error', 'single'],
            'indent': ['error', 4],
            'complexity': ['warn', { 'max': 10 }], // Adjust the max value as needed
            'max-lines': ['warn', { 'max': 300, 'skipBlankLines': true, 'skipComments': true }],
            'linebreak-style':['error','windows']
        }
    }
];