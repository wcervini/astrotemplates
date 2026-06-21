import { extraLintConfigs } from './src/config/modules/lint.js';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  // Configuración base recomendada por ESLint y TypeScript
  ...tseslint.configs.recommended,

  // Configuración recomendada para archivos Astro
  ...eslintPluginAstro.configs.recommended,

  // Inyección dinámica de reglas desde otras ramas de Git
  ...extraLintConfigs,

  // Reglas personalizadas globales del núcleo
  {
    files: ['**/*.astro', '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      // Evita conflictos menores entre las etiquetas de Astro y TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // Tratamiento específico para el Frontmatter de los archivos Astro
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
];
