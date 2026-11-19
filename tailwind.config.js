/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040d1a',
          900: '#071527',
          850: '#0a1d35',
          800: '#0f2744',
          700: '#193963',
          600: '#234f8a',
        },
        gold: {
          50: '#fdfbf0',
          100: '#fbf5d5',
          200: '#f5e7a3',
          300: '#edd468',
          400: '#e2bd34',
          500: '#c59a15',
          600: '#a77c10',
          700: '#845e10',
          800: '#6d4c14',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

