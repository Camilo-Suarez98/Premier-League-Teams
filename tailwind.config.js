/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'mg': {'max': '991px'},
      'md': {'max': '767px'},
      'ls': {'max': '650px'},
      'sm': {'max': '457px'},
    },
  },
  plugins: [],
}
