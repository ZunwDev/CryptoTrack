/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    colors: {
      text: "#180202",
      bg: "#fafafa",
      primary: "#e794ff",
      secondary: "#e6e6e5",
      accent: "#e739e7",
      lime: "#75b725",
      red: "#c43434",
      dark: {
        text: "#FDE7E7",
        bg: "#050505",
        primary: "#9500B3",
        secondary: "#1A1A19",
        accent: "#F020F0",
        lime: "#65a30d",
        red: "#b91c1c",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
