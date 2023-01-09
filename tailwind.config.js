module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    colors: {
      darkBlue: '#022C43',
      sherpaBlue: '#022C47',
      prussianBlue: '#4F8A8B',
      darkCerulean: '#115173',
      Gold: '#FFD700',
      white: '#FFFFFF',
      gray: '#8892B0',
      black: '#2B2B28',
      white2: '#EEEEEE',
      black2: '#222831',
      black50: '#4a576b',
      black100: '#12151a'

    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      darkBlue: '#022C43'
    }),
    textColor: (theme) => ({
      ...theme('colors')
    }),
    fontSize: {
      0: '0rem',
      xs: '0.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5rem' // 80px
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      rotate: {
        10: '10deg'
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'sans-serif']
      }
    }
  },
  container: {
    center: true,
    padding: '1rem'
  },
  plugins: []
}
