/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#357266',
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
