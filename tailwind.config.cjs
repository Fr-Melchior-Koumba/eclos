/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B162C",
        secondary: "rgba(255, 255, 255, 0.7)",
        terciary: "#5FC2BA",
        backgroundOne: "rgba(95, 194, 186, 0.19)",
        backgroundPost: "#1C2942"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    }
  },
  plugins: [],
}