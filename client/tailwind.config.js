/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480x",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#744838",
        },
        primary: {
          400: "#f97316",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { height: "0%" },
          "50%": { height: "50%" },
          "100%": { height: "100%" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        show: {
          from: { transform: "translateY(25%)", opacity: 0 },
          to: { transform: "translateY(0%)", opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown .5s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
        show: "show .3s ease-in-out",
      },
    },
  },
  plugins: [],
};
