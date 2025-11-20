/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Dòng này quan trọng cho chức năng Dark Mode (FR-7.4)
  theme: {
    extend: {},
  },
  plugins: [],
}