/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#04111f",
          darker: "#050505",
          gold: "#d4a54a",
          muted: "#bdbdbd",
        }
      }
    },
  },
  plugins: [],
}
