/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "main-bg": "#f8f4ec",
        black: "#201c24",
        dark: "#0e0e0c",
        white: "#FFFFFF",
        "dark-brown": "#4E4B4A",
        "light-brown": "#BCB0A6",
        "light-gray": "#D4D2D0",
        purple: "rgb(123, 31, 162)",
        violet: "rgb(103, 58, 183)",
        pink: "rgb(244, 143, 177)",
      },
      fontSize: {
        display: "180px",
        "heading-2": "128px",
        "heading-3": "64px",
        body1: "32px",
        body2: "24px",
        mod1: "36px",
        mod2: "115px",
        mod3: "20px",
        clamp1: "clamp(35px, 5.7vw ,120px)",
        clamp2: "clamp(36px, 10vw, 180px)",
        clamp3: "clamp(16px, 1.7vw, 30px)",
        clamp4: "clamp(24px, 2.4vw, 64px)",
        clamptitle: "clamp(40px, 14vw, 240px)",
        clampsub: "clamp(8px, 2vw, 24px)",
        clamp5: "clamp(12px, 1vw, 32px)",
        clamp6: "clamp(30px, 5.7vw, 64px)",
        clamp7: "clamp(24px, 2vw, 32px)",
      },
      height: {
        clamp8: "clamp(40px, 15vw, 240px)",
      },

      backgroundClip: {
        text: "text",
      },
      backgroundImage: (theme) => ({
        noise: "url('/src/assets/bg.svg')",
      }),
    },
  },
  plugins: [
    function ({ addBase, config }) {
      addBase({
        "::selection": {
          backgroundColor: config("theme.colors.gray.800"),
          color: config("theme.colors.white"),
        },
        "::-moz-selection": {
          backgroundColor: config("theme.colors.gray.800"),
          color: config("theme.colors.white"),
        },
        "::-webkit-scrollbar": { display: "none" },
        body: { cursor: "none" },
        "*": { fontFamily: "Red Hat Display" },
      });
    },
  ],
};
