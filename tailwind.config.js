/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.html',
    './src/partials/**/*.{html,hbc}',
    './src/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'secondary-white': "#F6F7F8",
        'ocean': '#41BADC',
        'water': "#435EBE"
      },
      borderRadius: {
        'standart': "7px"
      }
    },


  },
  plugins: [],
}

