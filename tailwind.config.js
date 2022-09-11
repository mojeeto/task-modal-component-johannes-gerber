/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        opacityTop: {
          "0%": {
            transform: "translateY(5px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        widthIn: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        opacity: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        }
      },
      animation: {
        fadeUp: "opacityTop 0.5s ease-in both",
        widthToRight: "widthIn 0.5s ease-in both",
        opacity: "opacity 0.5s ease-in both",
      },
    },
  },
  plugins: [],
};
