/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

    },
    fontSize: {
      '9xl': '18vw',
    },
  },
  plugins: [],
  // Color styles that are used dynamically and not hardcoded in the theme.
  safelist: [
    'text-blue-600',
    'text-orange-500',
    'text-green-500',
    'text-fuchsia-500',
    'text-yellow-500',
    'text-red-500',
    'text-pink-600',
    'bg-blue-600',
    'bg-orange-500',
    'bg-green-500',
    'bg-fuchsia-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-pink-600',
  ],
}
