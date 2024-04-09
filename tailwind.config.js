/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': ['poppins-regular'],
        'poppins-semibold': ['poppins-semibold'],
      },
      colors: {
        main: '#000000',
        secondary: '#B6A171',
        gray: '#222222',
        'red-error': '#EB5757',
        'green-success': '#27AE60',
        'gray-inactive': '#c7c8c7',
      },
    },
  },
  plugins: [],
};
