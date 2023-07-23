/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ['roboto'],
      lato: ['lato']
    },
    
    extend: {
      colors: {
      mainblue:'#05b0db',
      secondblue:'#5cb8dd',
      bgligth:'#f0f1f1',
      bgdark:'#1f2830',
      header1: '#1d1e22'
    },
    },
  },
  plugins: [],
}

