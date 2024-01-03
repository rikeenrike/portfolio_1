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
    },
  },
  plugins: [],
}

