/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          dark: "#04111f",
          darker: "#050505",
          gold: "#d4a54a",
          muted: "#bdbdbd",
        },
        zinc: { // Extending Zinc for UI precision
          950: "#09090b",
          900: "#18181b",
          800: "#27272a",
          700: "#3f3f46",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
          100: "#f4f4f5",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
