module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      colors: {
        primary: '#001560',
        secondary: '#5FE90A',
        accent: '#E90A3D',
        fadePrimary: '#0F2572',
        lightGreen: '#B2DF8A',
        darkGreen: '#42950F',
        lightPink: '#FB9A99',
        blue: '#45B8F5',
        lightBlue: '#A6CEE3',
        lightGray: '#BCBCBC',
        mediumGray: '#E9E9E9',
        midGray: '#8F8F8F',
        darkGray: '#808081',
        black: '#1C1C1C',
        cardBorder: 'rgba(0, 0, 0, 0.1)',
        itemBorder: '#EDEDED',
      },
      fontSize: {
        '22px': '22px',
      },
      borderRadius: {
        '6px': '6px',
      },
      opacity: {
        40: '40%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
