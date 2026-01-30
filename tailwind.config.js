/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
      },
      colors: {
        'visionary-gray': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
