/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#357266',
        'error': '#FFD6D6',
        'success': '#C6F1BB'
      },
      backgroundImage: {
        'userbackground': "url('assets/Design inspiration-amico.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
