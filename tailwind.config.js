/** @type {import('tailwindcss').Config} */

// const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      gridTemplateColumns: {
        // added new 4 column grid as new4
        'rep': 'repeat(2, minmax(0, 750px))'
        },
      animation:{
        'spin-slow': 'spin 5s linear infinite',
      },
    },
    backdropBlur: {
      md: '12px',
    },
    screen:{
      "2xl":{max:"1535px"},
      // => @media(max-width: 1535px)
      "xl":{max:"1279px"},
      // => @media(max-width: 1279px)
      "lg":{max:"1023px"},
      // => @media(max-width: 1023px)
      "md":{max:"767px"},
      // => @media(max-width: 767px)
      "sm":{max:"639px"},
      // => @media(max-width: 639px)
      "xs":{max:"479px"},
      // => @media(max-width: 479px)
    }
  },
  plugins: [],
}
