/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      // Configure your color palette here
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#0a0000',
      'white': '#fffafa',
      'pink': '#cc6699',
      'brown': '#2f2926',
      'lightgray': '#a9a99b',
      'gray': '#848478',
      'darkgray': '#606767',
      'red': '#ff0000',
      'orange': '#ff6600',
      'amber': '#803300',
      'yellow': '#e1be00',
      'gold': '#78643c',
      'lightgreen': '#cbff32',
      'green': '#0ab43c',
      'blue': '#1e78c8',
      'indigo': '#0a2842',
      'purple': '#c864c8',
      'darkpurple': '#643264',
    },
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
