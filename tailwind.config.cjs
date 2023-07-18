const _ = require('lodash/fp')
const defaultTheme = require('tailwindcss/defaultTheme')
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
  '100': 'rgba(204,102,153,.2)',
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
  '700': 'rgba(076,83,83,1)',
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
  '500': 'rgba(225,190,000,.85)', // kp-yellow '#e1be00'
  '600': 'rgba(225,190,000,1)', // kp-yellow '#e1be00'
  '800': 'rgba(120,100,060,1)', // kp-gold
}
yellow.DEFAULT = yellow['600']

const lime = {
  ...colors.lime,
  '100': 'rgba(010,180,060,.15)', // --kp-green-15p
  '300': 'rgba(203,255,050,1)', // kp-lightgreen
  '500': 'rgba(010,180,060,.8)', // --kp-green-80p
  '600': 'rgba(010,180,060,1)', // kp-green
}
lime.light = lime['300']
lime.DEFAULT = lime['600']

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

const colorIds = ['sky', 'orange', 'lime', 'fuchsia', 'yellow', 'red', 'pink']
const safeList = _.flatten(
  ['text', 'hover:text', 'bg', 'hover:bg', 'border'].map((prefix) => colorIds.map((id) => `${prefix}-${id}`)).concat(
    ['100', '500'].map((suffix) => colorIds.map((id) => `bg-${id}-${suffix}`))
  )
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    borderWidth: {
      ...defaultTheme.borderWidth,
      '9': '3em',
    },
    colors: {
      ...colors, // Add default colors.
      // Define straight up colors that have no variations like black and white.
      'black': '#080000', // kp-black: rgba(008,000,000,1)
      'white': '#fffbfb', // kp-white: rgba(255,251,251,1)
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
      sky,
      fuchsia,
      // 'gold': '#78643c',
      // 'lightgreen': '#cbff32',
      // 'green': '#0ab43c',
      // 'indigo': '#0a2842',
    },
    extend: {
      colors: {
        'lightgray': '#a9a99b',
        'darkgray': '#606767',
        'gold': '#78643c',
        'lightgreen': '#cbff32',
        'darkpurple': '#643264',
      },
      screens: {
        '3xl': '1700px',
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      '9xl': '18vw',
    },
  },
  plugins: [],
  // Color styles that are used dynamically and not hardcoded in the theme.
  safelist: [
    'backgroundColor',
    ...safeList,
  ],
}
