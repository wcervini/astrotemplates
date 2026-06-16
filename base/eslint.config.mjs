import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import tailwind from 'eslint-plugin-tailwindcss';

export default tseslint.config(
  // Configuración base recomendada por ESLint y TypeScript
  ...tseslint.configs.recommended,

  // Configuración recomendada para archivos Astro
  ...eslintPluginAstro.configs.recommended,

  // Configuración para validar clases de Tailwind CSS
  ...tailwind.configs['flat/recommended'],

  // Reglas personalizadas y anulaciones
  {
    files: ['**/*.astro', '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      // Evita conflictos menores entre las etiquetas de Astro y TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],

      // Reglas específicas para optimizar el uso de Tailwind CSS
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
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
  }
);
