/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {},
      backgroundImage: {
        Fundo: "url('/Fundo.png')",
        gradient:
          "linear-gradient(89.86deg, #9572FC 10%, #43E7AD 80%,#E1D55D 80%)",
        gameGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 67.08%)",
      },
    },
  },
  plugins: [],
};
