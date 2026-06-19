import tailwind from 'eslint-plugin-tailwindcss';

export const extraLintConfigs = [
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off'
    }
  }
];
