/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#888b92",
          "200": "#82848a",
          "300": "#262626",
          "400": "#191d2a",
          "500": "rgba(22, 22, 22, 0)",
        },
        tomato: "#ff5555",
        red: "#ff0000",
      },
      spacing: {},
      fontFamily: {
        "clash-display": "'Clash Display'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "dm-sans": "'DM Sans'",
        "nunito-sans": "'Nunito Sans'",
      },
    },
    fontSize: {
      base: "1rem",
      "13xl": "2rem",
      "8xs-2": "0.263rem",
      "9xl": "1.75rem",
      lg: "1.125rem",
      "29xl": "3rem",
      xl: "1.25rem",
      "xs-8": "0.738rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
