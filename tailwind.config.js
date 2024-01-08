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
        'main-bg':'#FAFAF9',
        'black':'#393A3D',
        'dark' :'#0e0e0c',
        'white':'#FFFFFF',
        'dark-brown':'#4E4B4A',
        'light-brown':'#BCB0A6',  
        'light-gray':'#D4D2D0',
      },
      fontSize: {
        'display':'180px',
        'heading-2':'128px',
        'heading-3':'64px',
        'body1':'32px',
        'body2':'24px',
        'mod1': '36px',
        'mod2': '115px',
        'clamp1': 'clamp(40px, 5.7vw ,120px)',
        'clamp2': 'clamp(36px, 10vw, 180px)',
        'clamp3': 'clamp(16px, 2vw, 32px)',
        'clamp4': 'clamp(24px, 2.4vw, 64px)',
        'clamptitle': 'clamp(52px, 14vw, 180px)',
        'clampsub': 'clamp(12px, 3vw, 24px)',
      },
      
    },
  },
  plugins: [
],

}

