/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spring-green': {
          '50': '#edfff9',
          '100': '#d5fff3',
          '200': '#aeffe7',
          '300': '#70ffd6',
          '400': '#2bfdbe',
          '500': '#00ffb3',
          '600': '#00c082',
          '700': '#009669',
          '800': '#067555',
          '900': '#076048',
          '950': '#003727',
        },    
      }
    },
  },
  plugins: [],
}

