module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {},
    extend: {
      rotate: {
        10: '10deg',
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'sans-serif'],
      },
    },
  },
  container: {
    center: true,
    padding: '1rem',
  },
  plugins: [],
}
