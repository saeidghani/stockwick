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
        lg: '1rem',
        xl: '1rem',
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
        fadePrimary2: '#0D276B',
        darkGreen: '#42950F',
        blue: '#45B8F5',
        blueGray: 'rgba(237, 241, 255, 0.5)',
        lightGreen: '#B2DF8A',
        lightPink: '#FB9A99',
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
        '8px': '8px',
        '13px': '13px',
        '22px': '22px',
        '26px': '26px',
        '32px': '32px',
      },
      borderRadius: {
        '6px': '6px',
      },
      opacity: {
        40: '40%',
      },
      spacing: {
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        26: '6.5rem',
        36: '9rem',
        68: '17rem',
        90: '22.5rem',
      },
      maxWidth: {
        100: '25rem',
        120: '30rem',
      },
      screens: {
        xs: '576px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
