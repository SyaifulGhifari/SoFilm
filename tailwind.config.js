/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ijo: 'rgba(0, 173, 181, 0.90)',
        ijohover: 'rgba(6, 188, 201)',
        ijoactive: 'rgba(9, 208, 222)',
        item: 'rgba(0, 0, 0, 0.65)',
      },
      spacing: {
        poster: '35rem',
      },
    },
  },
  plugins: [],
};
