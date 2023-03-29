const colors = require('tailwindcss/colors')

// [
// 'slate',
//   'gray', 'zinc', 'neutral',
//   'stone', 'red', 'orange',
//   'amber', 'yellow', 'lime',
//   'green', 'emerald', 'teal',
//   'cyan', 'sky', 'blue',
//   'indigo', 'violet', 'purple',
//   'fuchsia', 'pink', 'rose',
// ]

// 'pink': ,
const pink = {
  ...colors.pink,
  '200': 'rgba(204,102,153,.2)',
  '300': 'rgba(204,102,153,.4)',
  '400': 'rgba(204,102,153,.55)',
  '500': 'rgba(204,102,153,.75)',
  '600': 'rgba(204,102,153,.85)',
  '700': 'rgba(204,102,153,1)', // '#cc6699'
  '800': 'rgba(184,82,133,1)',
}
pink.DEFAULT = pink['700']

const stone = {
  ...colors.stone,
  '400': 'rgb(169,169,155)', // 'lightgray': '#a9a99b',
  '500': 'rgba(132,132,120,1)', // 'gray': '#848478',
}
stone.light = stone['400']
stone.DEFAULT = stone['500']

const natural = {
  ...colors.natural,
  '300': 'rgba(096,103,103,.4)',
  '400': 'rgba(096,103,103,.6)',
  '500': 'rgba(096,103,103,.8)',
  '600': 'rgba(096,103,103,1)', // 'darkgray': '#606767',
}
natural.dark = natural['600']

const red = {
  ...colors.red,
  '100': 'rgba(255,000,000,.15)',
  '200': 'rgba(255,000,000,.25)',
  '300': 'rgba(255,000,000,.4)',
  '400': 'rgba(255,000,000,.6)',
  '500': 'rgba(255,000,000,.8)',
  '600': 'rgba(255,000,000,1)', // 'red': '#ff0000',
}
red.DEFAULT = red['600']

const orange = {
  ...colors.orange,
  '100': 'rgba(255,102,000,.15)', // kp-orange-15p
  '500': 'rgba(255,102,000,.8)',
  '600': 'rgba(255,102,000,1)', // 'orange': '#ff6600',
  '900': 'rgba(128,051,000,1)', // kb-darkorange
}
orange.DEFAULT = orange['600']


const amber = {
  ...colors.amber,
  '900': '#803300', // amber
}

const yellow = {
  ...colors.yellow,
  '100': 'rgba(225,190,000,.2)', // kp-yellow-20p
  '400': 'rgba(225,190,000,.85)', // kp-yellow-85p
  '500': 'rgba(225,190,000,1)', // kp-yellow '#e1be00'
  '800': 'rgba(120,100,060,1)', // kp-gold
}
yellow.DEFAULT = yellow['500']

const lime = {
  ...colors.lime,
  '300': 'rgba(203,255,050,1)', // kp-lightgreen
  '500': 'rgba(010,180,060,.8)', // --kp-green-80p
  '600': 'rgba(010,180,060,1)', // kp-green
}
lime.light = lime['300']
lime.DEFAULT = lime['600']

const green = {
  ...colors.green,
  '100': 'rgba(010,180,060,.15)', // --kp-green-15p
}

const sky = {
  ...colors.sky,
  '100': 'rgba(030,120,200,.15)', // kp-blue-15p
  '500': 'rgba(030,120,200,.8)', // kp-blue-80p
  '600': 'rgba(030,120,200,1)', // kp-blue '#1e78c8'
  '900': 'rgba(010,040,066,1)', // kp-darkblue
}
sky.DEFAULT = sky['600']
sky.dark = sky['900']

const fuchsia = {
  ...colors.fuchsia,
  '100': 'rgba(200,100,200,.15)', // kp-purple-15p
  '500': 'rgba(200,100,200,.8)', // kp-purple-80p
  '600': 'rgba(200,100,200,1)', // kp-purple
  '900': 'rgba(100,050,100,1)', // kp-darkpurple
}
fuchsia.DEFAULT = fuchsia['600']
fuchsia.dark = fuchsia['900']

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      ...colors, // Add default colors.
      // Define straight up colors that have no variations like black and white.
      'black': '#0a0000', // kp-black: rgba(010,000,000,1)
      'white': '#fffafa', // kp-white: rgba(255,250,250,1)
      'brown': '#2f2926',
      // Add in color variations.
      amber,
      pink,
      stone,
      natural,
      red,
      orange,
      yellow,
      lime,
      green,
      sky,
      fuchsia,
      // 'gold': '#78643c',
      // 'lightgreen': '#cbff32',
      // 'green': '#0ab43c',
      // 'indigo': '#0a2842',
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
    'text-sky',
    'text-orange',
    'text-lime',
    'text-fuchsia',
    'text-yellow',
    'text-red',
    'text-pink',
    'bg-sky',
    'bg-orange',
    'bg-lime',
    'bg-fuchsia',
    'bg-yellow',
    'bg-red',
    'bg-pink',
  ],
}
