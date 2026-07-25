// @ts-check
/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 150, // Ancho de línea masivo para evitar saltos automáticos
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: true,
  singleAttributePerLine: false, // Evita que se coloque un atributo por línea

  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
