module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        '@vue/airbnb',
        '@vue/typescript',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': ['warn', {
            // allowExpressions is set to on because otherwise lazy Vue component imports get very tedious very quickly
            allowExpressions: true,
        }],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        'array-bracket-spacing': ['error', 'never'],

        'ban-ts-comment': 'off',

        camelcase: 'off',
        'class-methods-use-this': 'off',

        'eol-last': 'error',

        'generator-star-spacing': 'off',
        'global-require': 'warn',
        'guard-for-in': 'error',

        'import/extensions': 'off',
        'import/named': 'off',
        'import/no-cycle': 'off',
        'import/no-dynamic-require': 'warn',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],

        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true,
        }],

        'max-len': 'off',

        'no-alert': 'off', // Alert was being used before ESLint
        'no-await-in-loop': 'off',
        'no-continue': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-new': 'off',
        'no-param-reassign': ['warn', {props: false}],
        'no-restricted-syntax': 'off',
        'no-return-assign': ['warn', 'except-parens'],
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        // `no-useless-constructor` throws error for unknown reason.
        'no-useless-constructor': 'off',

        'object-curly-newline': ['error', {
            ImportDeclaration: 'never',
        }],
        'object-curly-spacing': ['error', 'never'],

        'prefer-destructuring': ['error', {
            array: false,
            object: true,
        }],

        semi: ['error', 'always'],
        'sort-imports': 'error',

        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        'vue/no-multiple-template-root': 'off',
        'vue/no-unused-vars': 'error',
        'vue/attributes-order': ['error', {
            alphabetical: true,
        }],
    },
    overrides: [
        {
            files: [
                '*.vue',
            ],
            rules: {
                indent: 'off',
            },
        },
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
        {
            files: [
                '*',
            ],
            rules: {
                'import/order': 'off',
            },
        },
    ],
};
