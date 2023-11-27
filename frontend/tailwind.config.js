/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rebound: {
          "0% ": {
            transform: "translateY(-4rem)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "100% ": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        rebound: "rebound 1s ease-in-out",
      },
    },
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFFF00",
          secondary: "#27187b",
          "primary-focus": "#FF0000",
          color: "#000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
