/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        sm: '768px',
        md: '880px',
        lg: '1114px',
        xl: '1280px',
      },
      colors: {
        offWhite: '#f1f1e6',
        offBlue: '#def2f0',
        deepBlue: '#417A9F',
        lightBlue: '#B0E0E6',
      },
      backgroundColor: {
        'black-rgba': 'rgba(255, 255, 255, 0.01)',
        'black-norm': 'rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['winter', 'dracula'],
  },
}
