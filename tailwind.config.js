/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fireFlow: {
          "0%": { backgroundPosition: "50% 80%" },
          "100%": { backgroundPosition: "50% 20%" },
        },
        fireFlowSlow: {
          "0%": { backgroundPosition: "50% 90%" },
          "100%": { backgroundPosition: "50% 30%" },
        },
      },
      animation: {
        fireFlow: "fireFlow 4s ease-in-out infinite",
        fireFlowSlow: "fireFlowSlow 6s ease-in-out infinite",
      },
      backgroundSize: {
        "200": "200% 200%",
      },
    },
  },
  plugins: [],
};