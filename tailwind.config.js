/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      fontFamily: {
        'satoshi': ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'main-bg' : '#FAFAF9',
        'black' : '#393A3D',
        'white' : '#FFFFFF',
        'dark-brown' : '#4E4B4A',
        'light-brown' : '#BCB0A6',  
        'light-gray' : '#D4D2D0',
      },
      fontSize: {
        'display': '180px',
        'heading-2': '128px',
        'heading-3': '64px',
        'body-1'  : '32px',
        'body-2'  : '24px', 
      },
    },
  },
  plugins: [],
}

