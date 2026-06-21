/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  // Plugins estrictamente necesarios para el Core en Main
  plugins: ['prettier-plugin-sort-imports', 'prettier-plugin-astro'],

  // Configuración específica para prettier-plugin-sort-imports
  importOrder: ['^react$', '^astro', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
