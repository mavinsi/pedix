/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { fontFamily: {
      windsong: ['WindSong', "cursive"],
      montserrat: ['Montserrat', "sans-serif"]

     }},
  },
  plugins: [    require('tailwindcss'),
  require('autoprefixer')],
}
