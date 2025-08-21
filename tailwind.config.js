/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          'sans-serif',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
    screens: {
      'xs': '375px',    // власний breakpoint для малих мобільних
      'sm': '640px',    // дефолтний
      'md': '768px',    // дефолтний
      'md-custom': '800px', // твій кастомний breakpoint
      'lg': '1024px',   // дефолтний
      'xl': '1280px',   // дефолтний
      '2xl': '1536px',  // дефолтний
    },
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'orange': ['#FF6E04', '#FFC876'],
      },
      background: {
        'purple': '#240945',
      },
      borders: { // defaults to these values (optional)
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
    },
  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
};
