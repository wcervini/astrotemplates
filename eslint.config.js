// @ts-check
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    ...tailwind.configs.recommended,
    settings: {
      tailwindcss: {
        cssConfigPath: './src/styles/global.css',
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    ignores: ['dist/**', '.astro/**'],
  },
);
