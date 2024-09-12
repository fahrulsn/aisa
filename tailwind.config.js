/** @type {import('tailwindcss').Config} */

import animationDelay from "tailwindcss-animation-delay";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lpurple: "#BB87FF",
        lgreen: "#00D684",
        bgdark: "#333333",
      },
      keyframes: {
        bgGradient: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 0%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        zoomIn: {
          "0%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        zoomInBounce: {
          "0%": { transform: "scale(1.5)", opacity: "0" },
          "25%": { transform: "scale(0.8)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-30%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(30%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        bgGradient: "bgGradient 15s linear infinite",
        zoomInBounce: "zoomInBounce 1.2s ease forwards",
        zoomIn: "zoomIn 1s ease forwards",
        slideLeft: "slideLeft 1s ease forwards",
        slideDown: "slideDown 1s ease forwards",
        slideRight: "slideRight 1s ease forwards",
      },
      backgroundPosition: {
        ftbgpos: "-60% 50%",
      },
      backgroundSize: {
        ftbgsize: "135%",
        bgHero: "400% 100%",
      },
    },
  },
  plugins: [animationDelay],
};
