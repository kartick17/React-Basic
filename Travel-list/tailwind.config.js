/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        item: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      gridTemplateRows: {
        layout: 'auto auto 1fr auto',
      },
    },
  },
  plugins: [],
}
