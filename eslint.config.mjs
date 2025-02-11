import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ),

  {
    ignores: [
      '.next/',
      'out/',
      'node_modules/',
      'public/',
      '**/*.config.js',
      '**/*.config.cjs',
      '**/*.config.mjs',
      '**/*.generated.*',
      '.env*',
    ],
    rules: {
      'prettier/prettier': 'off',
      'react/self-closing-comp': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never', // запрещает фигурные скобки вокруг строковых пропсов
          children: 'ignore',
          propElementValues: 'ignore',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // Игнорирует аргументы, начинающиеся с "_"
          varsIgnorePattern: '^_', // Игнорирует переменные, начинающиеся с "_"
          caughtErrorsIgnorePattern: '^_', // Игнорирует ошибки в `catch` блоках, начинающиеся с "_"
        },
      ],
      'import/order': [
        'error',
        {
          // Определяем порядок групп импортов.
          // Здесь мы учитываем внешние, внутренние, родительские и index-импорты.
          groups: ['external', 'internal', 'parent', 'index'],
          pathGroups: [
            // 1. Импорты React – выводим их первыми среди внешних.
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            // 3. Импорты с алиасом "@/*" – относим к внутренним.
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            // 4. Импорты из родительских директорий ("../*") – относим к группе parent.
            {
              pattern: '../**',
              group: 'parent',
              position: 'after',
            },
            {
              pattern: './**',
              group: 'parent',
              position: 'after',
            },
            // 5. Импорты SCSS-файлов – относим к index и размещаем в конце.
            {
              pattern: '**/*.{css,scss}',
              patternOptions: { matchBase: true },
              group: 'index',
              position: 'after',
            },
          ],
          warnOnUnassignedImports: true,
          // Исключаем реактовские импорты из автоматического распределения по группам,
          // чтобы правило pathGroups для "react" сработало корректно.
          pathGroupsExcludedImportTypes: ['react'],
          // Раздел
          // яем группы пустыми строками
          'newlines-between': 'always',
          // Опционально: сортировка импортов в пределах группы по алфавиту
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];

export default eslintConfig;
