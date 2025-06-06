/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Scratchie Brand Colors
        'carrot': {
          DEFAULT: '#F97115',
          light: '#F8B98A',
          lighter: '#FDEADC',
        },
        'cash': {
          DEFAULT: '#4DB360',
          light: '#A6D9B0',
          lighter: '#E4F4E7',
        },
        'scratchie-yellow': {
          DEFAULT: '#FDFBA9',
          light: '#FEFDD4',
          lighter: '#FFFEF2',
        },
        'scratchie-blue': {
          DEFAULT: '#B6E2FF',
          light: '#DBF1FF',
          lighter: '#F4FBFF',
        },
        'scratchie-black': {
          DEFAULT: '#170E0A',
          light: '#3B312D',
          lighter: '#4D423E',
        }
      },
      fontFamily: {
        'national-compressed': ['National 2 Compressed', 'Arial Black', 'sans-serif'],
        'national-condensed': ['National 2 Condensed', 'Arial Narrow', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}