/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 -10px 500px -20px rgba(0, 0, 0, 0.5)',
      },
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
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-ubuntu-mono)'],
    },
  },
  plugins: [],
}
