/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        app: "#121214",
      },
      fontFamily: {
        app: "Roboto",
      },
    },
  },
  plugins: [],
};
