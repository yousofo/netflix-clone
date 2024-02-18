/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/2vw': '50vw',
        '1/3vw': 'calc(100vw / 3)',
        '1/4vw': '25vw',
        '1/6vw': 'calc(100vw / 6)',
        '1/6':   'calc(100% / 6)',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '50px':'50px',
      },
      height: {
        '1/2vh': '50vh',
        '1/3vh': 'calc(100vh / 3)',
        '1/4vh': '25vh',
        '1/6vh': 'calc(100vh / 6)',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      fontSize:{
        'xxs':"10px"
      },
      screens: {
        xs:"500px"
      }
    },
  },
  plugins: [],
}

