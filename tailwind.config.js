/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {screens: {
      'lg-max': {'max': '1300px'},'sm-max': {'max': '745px'},    },
  },
  },
  plugins: [],
}
