module.exports = {
    content: [
      './pages/**/*.{html,js}',
      './*.{html,js}'
    ],
    theme: {
      extend: {
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          'fade-out': {
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
          },
        },
        animation: {
          'fade-in': 'fade-in 1s ease-in-out',
          'fade-out': 'fade-out 1s ease-in-out',
        },
      },

    },
    safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
    content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
    plugins: [
      require('taos/plugin')
    ],
  }
  