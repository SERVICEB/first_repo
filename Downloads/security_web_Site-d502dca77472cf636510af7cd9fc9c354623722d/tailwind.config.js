/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#d9ebff",
          200: "#b2d7ff",
          300: "#7fbaff",
          400: "#4d9dff",
          500: "#1a80ff",
          600: "#0f63d1",
          700: "#0b4ca3",
          800: "#093a7a",
          900: "#072b5c"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '24px 24px, 24px 24px',
      }
    },
  },
  plugins: [],
}