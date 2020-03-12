module.exports = {
  prefix: 'mr-',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      'white-40': 'rgba(255, 255, 255, .4)',
      'white-50': 'rgba(255, 255, 255, .5)',
      'white-25': 'rgba(255, 255, 255, .25)',
      'white-15': 'rgba(255, 255, 255, .15)',
      'white-10': 'rgba(255, 255, 255, .1)',
      'white-04': 'rgba(255, 255, 255, .04)',
      'off-white': '#FAF7F2',
      black: '#222',
      'black-5': 'rgba(0, 0, 0, .05)',
      'black-10': 'rgba(0, 0, 0, .1)',
      'black-15': 'rgba(0, 0, 0, .15)',
      'black-40': 'rgba(0, 0, 0, .4)',
      'black-50': 'rgba(0, 0, 0, .5)',
      'black-75': 'rgba(0, 0, 0, .75)',
      grey: '#737373',
      'grey-light': '#BDB8AE',
      'grey-light-more': '#D8D8D8',
      'grey-lighter': '#F2EFE9',
      'grey-lighter-10': 'rgba(242, 239, 233, .1)',
      'grey-lighter-50': 'rgba(242, 239, 233, .5)',
      'grey-leaflet': '#666',
      green: '#47725F',
      'green-light': '#7EBC89',
      'green-light-60': 'rgba(126, 188, 137, .6)',
      'green-light-30': 'rgba(126, 188, 137, .3)',
      'green-lighter': '#91F3A2',
      'green-dark': '#315E4A',
      'green-dark-75': 'rgba(74, 118, 98, .75)',
      blue: '#172E51',
      'blue-75': 'rgba(23, 46, 81, .75)',
      'blue-light': '#496B94',
      'blue-light-25': 'rgba(73, 107, 148, 0.25)',
      'blue-dark': '#182841',
      'blue-leaflet': '#2E85CB',
      'blue-dark-50': 'rgba(24, 40, 65, .5)',
      'blue-dark-75': 'rgba(24, 40, 65, .75)',
      'blue-dark-90': 'rgba(24, 40, 65, .9)',
      'blue-darker': '#0e192a',
      'blue-firefly': '#081425',
      'blue-firefly-75': 'rgba(8, 20, 37, .75)',
      'blue-cloudburst': '#1D304D',
      'blue-rhino': '#2A415C',
      yellow: '#FFFD86',
      'yellow-75': 'rgba(255, 253, 134, .75)',
      'dark-yellow': '#F1E15B',
      mango: '#F7BB59',
      'mango-60': 'rgba(247,187,89, .6)',
      'mango-30': 'rgba(247,187,89, .3)',
      turquoise: '#17FFF3',
      pink: '#E87CE0',
      'pink-light': '#FFB2F0',
      rosebud: '#FFA8A8',
      'pink-light-10': 'rgba(255,178,240,0.1)',
      'pink-light-50': 'rgba(255,178,240,0.5)',
      twitter: '#1DA1F2',
      orange: '#f7bb59',
      red: '#CA484C',
      'red-light': '#FF5E63',
      purple: '#959DFF',
      teal: '#6FB3B8',
      rose: '#F89294',
      'picton-blue': '#50B7E5',
      'lavender-rose': '#FF98F7',
      'matisse-blue': '#6FB3B8',
      'blue-viking': '#65D2DA',
      'matisse-blue-50': 'rgba(26,104,139, 0.5)',
      'yellow-sand': '#CCB186',
      'wild-strawberry': '#FF349C',

      // Username colors
      'indigo-300': 'hsl(272, 49%, 53%)', //'#8B40CD',
      'indigo-500': 'hsl(272, 59%, 53%)', //'#8B40CD',
      'indigo-700': 'hsl(272, 79%, 53%)', //'#8B40CD',
      'ocean-300': 'hsl(219, 70%, 77%)', //'#517ED3',
      'ocean-500': 'hsl(219, 60%, 57%)', //'#517ED3',
      'ocean-700': 'hsl(219, 80%, 57%)', //'#517ED3',
      'forest-300': 'hsl(105, 41%, 33%)', //'#3E7D29',
      'forest-500': 'hsl(105, 51%, 33%)', //'#3E7D29',
      'forest-700': 'hsl(105, 61%, 43%)', //'#3E7D29',
      'cranberry-300': 'hsl(336, 62%, 61%)', //'#E3558E',
      'cranberry-500': 'hsl(336, 72%, 61%)', //'#E3558E',
      'cranberry-700': 'hsl(336, 92%, 61%)', //'#E3558E',
      'aqua-300': 'hsl(185, 47%, 47%)', //'#34B2BE',
      'aqua-500': 'hsl(185, 57%, 47%)', //'#34B2BE',
      'aqua-700': 'hsl(185, 77%, 47%)', //'#34B2BE',
      'tangerine-300': 'hsl(40, 97%, 64%)', //'#FBAE17',
      'tangerine-500': 'hsl(40, 97%, 54%)', //'#FBAE17',
      'banana-500': 'hsl(51, 100%, 63%)', //'#FFE441'
      'banana-700': 'hsl(51, 90%, 53%)', //'#FFE441'
      'mint-300': 'hsl(131, 58%, 71%)', //'#7DEF91',
      'mint-500': 'hsl(131, 78%, 71%)', //'#7DEF91',
      'cotton-candy-500': 'hsl(312, 100%, 85%)', //'#FFB2F0'
      'cotton-candy-700': 'hsl(312, 90%, 80%)', //'#FFB2F0'
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      retina: [
        { 'min-device-pixel-ratio': 2 },
        { 'min-resolution': '192dpi' },
        { 'min-resolution': '2dppx' },
      ],
    },

    fontFamily: {
      sans: [
        'Roboto',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      mono: [
        'IBM Plex Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },

    fontSize: {
      xxs: '.625rem', // 10px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', //18px
      lg: '1.25rem', // 20px
      xl: '1.375rem', // 22px
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px
      '4xl': '2rem', // 32px
      '5xl': '2.5rem', // 40px
      '6xl': '3.75rem', // 60px
    },

    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },

    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2,
    },

    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em',
    },

    textColor: theme => theme('colors'),

    backgroundColor: theme => theme('colors'),

    placeholderColor: theme => theme('colors'),

    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },

    borderColor: theme => global.Object.assign(
      { default: theme('colors.grey-light') },
      theme('colors')
    ),

    borderRadius: {
      none: '0',
      sm: '2px',
      default: '.25rem',
      lg: '.5rem',
      full: '9999px',
    },

    width: {
      auto: 'auto',
      px: '1px',
      '9px': '9px',
      '10px': '10px',
      '15px': '15px',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '30': '7.5rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '64': '16rem',
      '88': '22rem',
      '96': '24rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '9/10': '90%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      sm: '30rem',
      md: '40rem',
      full: '100%',
      screen: '100vw',
    },

    height: {
      auto: 'auto',
      px: '1px',
      '3px': '3px',
      '5px': '5px',
      '15px': '15px',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '30': '7.5rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '64': '16rem',
      '100': '25rem',
      '112': '28rem',
      hero: '43.75rem',
      full: '100%',
      half: '50%',
      '2/5': '40%',
      screen50: '50vh',
      screen: '100vh',
      content: 'calc(100vh - 102px)',
      challenges: 'calc(100vh - 244px)',
    },

    minWidth: {
      '0': '0',
      '4': '1rem',
      '5': '1.25rem',
      '6': '2rem',
      '8': '2.5rem',
      '12': '4.5rem',
      '24': '6rem',
      '28': '7rem',
      '30': '7.5rem',
      '36': '9rem',
      '48': '12rem',
      '60': '15rem',
      '72': '18rem',
      '88': '22rem',
      '102': '24rem',
      auto: 'auto',
      full: '100%',
      '1/2': '50vw',
      button: '7.8125rem',
    },

    minHeight: {
      '0': '0',
      '5': '1.25rem',
      '8': '2rem',
      xs: '20rem',
      full: '100%',
      screen: '100vh',
      '48': '12rem',
      '100': '25rem',
      '120': '30rem',
      'screen-50': '50vh',
      'content-no-filters': 'calc(100vh - 103px)',
    },

    maxWidth: {
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '88': '22rem',
      '96': '24rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      '6xl': '120rem',
      full: '100%',
      '48': '12rem',
      '1/3': '33%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '9/10': '90%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      'screen60': '60vw',
      'screen80': '80vw',
      'screen90': '90vw',
    },

    maxHeight: {
      full: '100%',
      screen: '100vh',
      '48': '12rem',
      '100': '25rem',
      '112': '28rem',
      '115': '28.75rem',
      screen40: '40vh',
      screen75: '75vh',
      screen80: '80vh',
      '1/3': '33%',
    },

    padding: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2-shy': '0.4rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
    },

    margin: {
      auto: 'auto',
      px: '1px',
      '2px': '2px',
      '3px': '3px',
      '4px': '4px',
      'n2px': '-2px',
      '0': '0',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '31': '7.75rem',
      '32': '8rem',
      '41': '10.25rem',
      '48': '12rem',
      '-px': '-1px',
      '-0': '-0',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
      '-7': '-1.75rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-16': '-4rem',
      '-20': '-5rem',
      '-23': '-5.75rem',
      '-24': '-6rem',
      '-28': '-7rem',
      '-32': '-8rem',
      '-40': '-10rem',
    },

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.2)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 1px 3px 0 rgba(0,0,0,0.3)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      none: 'none',
    },

    zIndex: {
      auto: 'auto',
      '0': 0,
      '5': 5,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '90': 90,
      '200': 200,
      '250': 250,
    },

    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1',
    },

    fill: theme => global.Object.assign(
      { current: 'currentColor' },
      theme('colors')
    ),

    stroke: {
      current: 'currentColor',
    },

    linearGradients: theme => ({
      colors: {
        'green-blue': [theme('colors.green'), theme('colors.blue')],
        'green-dark-blue': [theme('colors.green-dark'), theme('colors.blue')],
        'blue-dark-green-dark': [theme('colors.blue-dark'), theme('colors.green-dark')],
        'blue-darker-blue-dark': [theme('colors.blue-darker'), theme('colors.blue-dark')],
        'blue-cloudburst-blue-rhino': [theme('colors.blue-cloudburst'), theme('colors.blue-rhino')],
        'green-dark-75-blue-75': [theme('colors.green-dark-75'), theme('colors.blue-75')],
      },
    }),

    rotate: {
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
    },

    translate: {
      '1/4': '25%',
      '1/2': '50%',
      full: '100%',
      '-1/2': '-50%',
      '-full': '-100%',
    },

    origins: {
      t: '50% 0%',
      r: '100% 50%',
      c: '50% 50%',
      b: '50% 100%',
      l: '0% 50%',
    },
  },

  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: [],
    stroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
    fontStyle: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive', 'hover', 'focus'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
    linearGradients: ['responsive'],
    rotate: ['responsive'],
    translate: ['responsive'],
    origins: ['responsive'],
  },

  corePlugins: {
    container: false,
  },

  plugins: [
    require('tailwindcss-visuallyhidden')({
      variants: ['responsive', 'hover'],
    }),
    require('tailwindcss-owl'),
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
      },
      variants: ['responsive'],
    }),
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        slow: 'all 2s ease',
        'normal-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'slow-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
      variants: ['responsive', 'hover'],
    }),
    require('tailwindcss-gradients')(),
    require('tailwindcss-transforms')(),
  ],
}
