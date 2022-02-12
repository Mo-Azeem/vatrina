module.exports = {
    purge: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/**/*.js'
    ],
    theme: {
      extend: {
        fontFamily: {
          myfont: ['Inter'],
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins:[],
    corePlugins: {
      fontFamily: true,
    }
    // ...
  }