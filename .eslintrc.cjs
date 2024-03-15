module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true}
        ],
        'prettier/prettier': [
            'warn',
            {
                arrowParens: 'always',
                bracketSameLine: false,
                bracketSpacing: false,
                embeddedLanguageFormatting: 'auto',
                htmlWhitespaceSensitivity: 'css',
                insertPragma: false,
                jsxSingleQuote: true,
                printWidth: 80,
                proseWrap: 'preserve',
                quoteProps: 'as-needed',
                requirePragma: false,
                semi: false,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'none',
                useTabs: false,
                vueIndentScriptAndStyle: false
            }
        ]
    }
}
