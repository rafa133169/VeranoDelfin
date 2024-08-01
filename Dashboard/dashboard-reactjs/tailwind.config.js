/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',

    // Path to Tremor module
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [

    require('tailwindcss/base'),
    require('tailwindcss/components'),
    require('tailwindcss/utilities'),
  ], 
}

