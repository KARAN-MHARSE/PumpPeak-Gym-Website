/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NeueMachina: ["NeueMachina"],
        Poppins: ["Poppins"],
      },
      colors: {
        karanGrey: "#OFOFOF",
        karanYellow: "#FFBE17",
        karanGrey: "#222222",
        karanLightGrey: "#BBBBBB",
        karanWhite: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
