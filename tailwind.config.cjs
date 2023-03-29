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
      'pink': {
        500: '#cc6699',
        DEFAULT: '#cc6699',
      },
      'brown': {
        500: '#2f2926',
        DEFAULT: '#2f2926',
      },
      'gray': {
        500: '#848478',
        DEFAULT: '#848478',
      },
      'red': {
        500: '#ff0000',
        DEFAULT: '#ff0000',
      },
      'orange': '#ff6600',
      'amber': '#803300',
      'yellow': '#e1be00',
      'green': '#0ab43c',
      'blue': '#1e78c8',
      'indigo': '#0a2842',
      'purple': '#c864c8',
      'fuschia': '#c864c8',
    },
    extend: {
      colors: {
        'lightgray': '#a9a99b',
        'darkgray': '#606767',
        'gold': '#78643c',
        'lightgreen': '#cbff32',
        'darkpurple': '#643264',
      }
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
