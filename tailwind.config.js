module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        bor: '#FF6600'
      },
      screens:{
        nice: '985px',
        mobile: '430px',
        smallmobile: '350px'
      },
      maxWidth: (theme, { breakpoints }) => ({
        supersm: '15rem',
        ...breakpoints(theme('screens')),
      }),
      fontSize:{
        f: '0.7rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
