/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.tsx"],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'Lato': ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

