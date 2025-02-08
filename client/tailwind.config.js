/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ptSans: ['PT Sans', 'sans-serif'],
        newAmsterdam: ['New Amsterdam', 'sans-serif'],
        montserrat: ['Montserrat', 'serif'],
      },
      colors: {
        'bg': '#FAFAFF',
        'dark': '#1A1A21',
        'text': '#14364F',
        'main': '#175676',
        'second': '#4BA3C3',
        'third': '#D62839',
      },
    },
    screens: {
      '2xl': {'max': '1600px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1000px'},
      'md': {'max': '850px'},
      'sm': {'max': '650px'},
    }
  },
  plugins: [],
}