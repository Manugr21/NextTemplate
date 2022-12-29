/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultConfig")

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#3B81F6",
      white: "#FFFFFF",
      text: {
        default: "#1F2937",
        light: "#6C7281",
      },
      light: {
        default: "#FAFBFC",
        lighter: "#F3F4F6",
      },
    },
    extend: {},
  },
  plugins: [],
}
