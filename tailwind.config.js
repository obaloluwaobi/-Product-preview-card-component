/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
      fontFamily:{
        Montserrat:["'Montserrat'", "sans-serif"],
        Franuces:["'Franuces'","serif"]
      },
    extend: {
      
      

      colors:{

        Darkcyan: "hsl(158, 36%, 37%)",
        Cream:" hsl(30, 38%, 92%)",
        Verydarkblue:" hsl(212, 21%, 14%)",
        Darkgrayishblue: "hsl(228, 12%, 48%)",

      },
   

      letterSpacing:{
        tightest:'-0.30em',
      }

    },
  },
  plugins: [],
}

