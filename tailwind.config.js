/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pampas: "#F4F0ED",
        dixie: "#E6951F",
        gray: "#7F7D7D",
        hurricane: "#948C8C",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
