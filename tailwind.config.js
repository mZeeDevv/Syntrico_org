/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      display:{
        none: 'none'
      }
    },
  },
  plugins: [],
}