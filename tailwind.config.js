/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'electric-blue': '#007bff', // Example electric blue color (you can adjust the hex code)
          'black': '#000000',
          'grey': '#808080',
          'white': '#ffffff',
          // You can also define shades of grey if needed
          'gray-light': '#d3d3d3',
          'gray-dark': '#4a4a4a',
        },
      },
    },
    plugins: [],
  }