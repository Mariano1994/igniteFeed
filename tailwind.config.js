/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        app: "#121214",
        "black-200": "#202024",
      },
      fontFamily: {
        app: "Roboto",
      },
      colors: {},
    },
  },
  plugins: [],
};
