/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',  // Look for HTML files in the templates folder
    './properties/**/*.html',  // If you have HTML files in the properties folder
    './properties/**/*.{js,jsx,ts,tsx,vue}',  // Any JavaScript/TypeScript files in properties
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
