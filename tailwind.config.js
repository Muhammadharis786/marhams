/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundColor:{
          bluelight:'#f0f4f4',
      },
      fontFamily:{
        geologica:['Geologica','sans-serif'],
        poppins:['Poppins','sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      }
    },
  },
  plugins: [],
}