/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        col_blue: "#475BE8",
        col_grey: "#FCFCFC",
        col_grey_light: "#808191",
        col_dark: "#11142D",
      },
    },
  },
  plugins: [],
};
