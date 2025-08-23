import typography from '@tailwindcss/typography'

// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl'],
  plugins: [typography],
}
