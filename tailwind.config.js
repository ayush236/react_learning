/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height:{
        '500':'500px',
        '400':'400px',
        '389':'389px',
        '1000':'1000px',
        '700':'700px',
        '600':'600px'
        
      },
      width:{
        '240':'240px',
        '245':'245px',
        '250':'240px',
        '260':'260px',
        '331':'331px',
        '500':'500px'
      },
      left:{
        '150':'150px',
        '140':'140px'
      }
    },
    fontFamily:{
      abc:['Cardo', 'serif'],
      popin:['Poppins', 'sans-serif'],
      raleway:['Raleway', 'sans-serif'],
    }
  },
  plugins: [],
}

