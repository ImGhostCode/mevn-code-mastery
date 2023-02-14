/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#744838",
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
      },
      animation: {
        slideDown: "slideDown .5s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
