/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  // Los plugins deben cargarse en este orden preciso para evitar conflictos
  plugins: [
    'prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-sort-json'
  ],

  // Configuración específica para prettier-plugin-sort-imports
  importOrder: [
    '^react$', 
    '^astro',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  // Forzar el parseo correcto de archivos de Astro
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};