const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      purple: colors.purple,
      green: colors.green,
      blue: colors.blue,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: { keyframes: {

      wiggle: {

        '0%, 100%': { transform: 'rotate(-5deg)' },

        '50%': { transform: 'rotate(5deg)' },

      }
     },
     animation: {

      wiggle: 'wiggle 1.2s ease-in-out infinite',
     }},

  },
  variants: {
    extend: {invert: ['dark'],},
  },
  plugins: [],
}
