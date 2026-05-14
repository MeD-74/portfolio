/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f87171',
          DEFAULT: '#dc2626',
          dark: '#991b1b',
        },
        darkBg: '#09090b',
      },
    },
  },
  plugins: [],
};
