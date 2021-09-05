module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          light: "#185783",
          DEFAULT: "#113e5d",
          dark: "#0a2437",
        },
        sub: {
          light: "#e6d8ea",
          DEFAULT: "#f1e0f6",
          dark: "#a79daa",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    // require("@tailwindcss/forms"),
  ],
};
