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
        colors: {
          'primary': '#7158E2',
          'secondary': '#F2F2F2',
          'hover': '#533DBB',
          'active': '#402E8F'
        }
      },
    },
    plugins:[],
    corePlugins: {
      fontFamily: true,
    }
    // ...
  }