/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      offwhite: '#E2D9D2',
      white: '#FFFFFF',
      black: '#131312',
      orange: {
        DEFAULT: '#FFB876',
        light: '#FFC38B',
      },
      pink: '#FF7AD2',
      blue: '#6FBAFF',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontSize: {
      // PX TO REM
      44: '2.75rem',
      36: '2.25rem',
      28: '1.75rem',
      24: '1.5rem',
      20: '1.25rem',
      18: '1.125rem',
      16: '1rem',
    },
  },
  plugins: [],
}
