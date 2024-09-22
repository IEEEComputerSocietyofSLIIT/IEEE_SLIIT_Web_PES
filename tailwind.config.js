/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00629B",
        secondary: "#002855",
      },
      backgroundImage: {
        "gradient-to-transparent":
          "linear-gradient(to right, #742581, transparent)",
      },
    },
  },
  plugins: [],
};
