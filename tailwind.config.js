/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <-- ✅ Add this line
  theme: {
    extend: {
      fontFamily: {
        museo: ["MuseoSlabRegular", "sans-serif"],
        rockness: ["Rockness", "sans-serif"],
      },
    },
  },
  plugins: [],
};
