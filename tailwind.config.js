/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f4fc',
          100: '#eee8f9',
          200: '#ded2f3',
          300: '#c5b0eb',
          400: '#a785df',
          500: '#8954a8',
          600: '#754095',
          700: '#663399',
          800: '#522b7a',
          900: '#432562',
        },
      },
    },
  },
  plugins: [],
}
