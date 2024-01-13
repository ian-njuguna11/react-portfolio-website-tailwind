/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#5A9B75',
        Secondary:'#193324',
        tertiary:'#848191',
        light:'#BDBDBD',
        dark: '#5A9B75',
      }
    },
  },
  plugins: [],
}

