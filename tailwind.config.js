module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      colors: {
        primaryColor: '#001560',
        secondaryColor: '#5FE90A',
        accentColor: '#FBAA9E',
        fadePrimaryColor: '#182D70',
        cardBorderColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
