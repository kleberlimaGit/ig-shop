/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
        296: "74rem"
      },
      height:{
        128: "32rem",
        296: "74rem"
      },
      fontFamily:{
        "sans":['Roboto', 'sans-serif']
      
    },
    colors:{
      'grayR': {
        100: '#e1e1e6',
        300: '#c4c4cc',
        800: '#202024',
        900: '#121214'
      },
      'greenR':{
        300: '#00b37e',
        500: '#00875f'
      },
      'gold': {
        400:'#d4af37'
      }
    },
    },
  },
  plugins: [],
};
