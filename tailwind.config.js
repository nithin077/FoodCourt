/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],

  theme: {
    screens : {
      sm : "350px",
      md : "768px",
      lg :"1024px",
      xl : "1280px",
      "2xl" : "1536px"
    },
    // colors : {
    //   brown: "#53423e",
    //   lightBrown: "#645550",
    //   darkBrown: "#2c2523",
    //   black: "#1e1917",
    //   white: "#f1e1d9",
    //   cyan: "#15d1e9",
    //   lightCyan: "#88e5f0",
    //   darkCyan: "#009fb3",
    //   orange: "#fb9718",
    //   lightOrange: "#fac27b",
    //   darkOrange: "#d28422",
    //   grey: "#626965",
    //   lightGrey: "#978580",
    //   darkGrey: "#3f4441",
    //   snow : "#FFFAFA",
    //   whiteSmoke : "#F5F5F5",
    //   silver : "#C0C0C0"
    // },
    extend: {},
  },
  plugins: [],
}

